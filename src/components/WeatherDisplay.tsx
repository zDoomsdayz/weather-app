import { Flex } from "antd";
import dayjs from "dayjs";
import { SearchHistory } from "./SearchHistory";
import type { FieldType, WeatherData } from "../types/WeatherData";
import sun from "../assets/sun.png";
import cloud from "../assets/cloud.png";
import CustomCard from "../custom/CustomCard/CustomCard";
import CustomText from "../custom/CustomText/CustomText";
import { useMediaQuery } from "react-responsive";

interface WeatherDisplayProps {
  data?: WeatherData;
  weatherList: FieldType[];
  handleSearch: (item: FieldType) => void;
  handleDelete: (index: number) => void;
}

const getWeatherImage = (weather: string): string => {
  // if weather belongs to these category return cloud
  const keywords = ["rain", "thunder", "cloud"];
  return keywords.some((keyword) => weather.toLowerCase().includes(keyword)) ? cloud : sun;
};

export const WeatherDisplay = ({ data, weatherList, handleSearch, handleDelete }: WeatherDisplayProps) => {
  const currentTemp = data?.main.temp.toFixed(0) || 0;
  const minTemp = data?.main.temp_min.toFixed(0) || 0;
  const maxTemp = data?.main.temp_max.toFixed(0) || 0;
  const country = data?.name || "N/A";
  const countryCode = data?.sys.country || "N/A";
  const timestamp = weatherList[weatherList.length - 1]?.timestamp || dayjs().format("DD-MM-YYYY hh:mma");
  const humidity = data?.main.humidity || 0;
  const weather = data?.weather[0]?.main || "N/A";

  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  const weatherImage = getWeatherImage(weather);

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <img src={weatherImage} className="weather-image" alt="weather" />
      <CustomCard styleSize="large" style={{ height: "100vh", marginTop: 88, position: "relative" }}>
        <Flex vertical gap={24}>
          <Flex vertical={!isMobile} justify="space-between">
            <Flex justify="space-between">
              <Flex vertical align="flex-start">
                <CustomText text="Today's Weather" />
                <CustomText text={`${currentTemp}°`} textSize="large" strong />
                <CustomText text={`H: ${maxTemp}° L: ${minTemp}`} />
                {isMobile && <CustomText text={`${country}, ${countryCode}`} strong />}
              </Flex>
            </Flex>
            {isMobile ? (
              <Flex vertical gap={8} align="flex-end" justify="flex-end">
                <CustomText text={weather} />
                <CustomText text={`Humidity: ${humidity}`} />
                <CustomText text={timestamp} />
              </Flex>
            ) : (
              <Flex gap={8} justify="space-between">
                <CustomText text={`${country}, ${countryCode}`} strong />
                <CustomText text={timestamp} />
                <CustomText text={`Humidity: ${humidity}`} />
                <CustomText text={weather} />
              </Flex>
            )}
          </Flex>
          <SearchHistory weatherList={weatherList} handleSearch={handleSearch} handleDelete={handleDelete} />
        </Flex>
      </CustomCard>
    </div>
  );
};
