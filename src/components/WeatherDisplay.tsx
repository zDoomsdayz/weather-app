import { Flex, Image } from "antd";
import dayjs from "dayjs";
import { SearchHistory } from "./SearchHistory";
import type { FieldType, WeatherData } from "../types/WeatherData";
import sun from "../assets/sun.png";
import CustomCard from "../custom/CustomCard/CustomCard";
import CustomText from "../custom/CustomText/CustomText";

interface WeatherDisplayProps {
  data?: WeatherData;
  weatherList: FieldType[];
  handleSearch: (item: FieldType) => void;
  handleDelete: (index: number) => void;
}

export const WeatherDisplay = ({ data, weatherList, handleSearch, handleDelete }: WeatherDisplayProps) => {
  const currentTemp = data?.main.temp.toFixed(0) || 0;
  const minTemp = data?.main.temp_min.toFixed(0) || 0;
  const maxTemp = data?.main.temp_max.toFixed(0) || 0;
  const country = data?.name || "N/A";
  const countryCode = data?.sys.country || "N/A";
  const timestamp = weatherList[weatherList.length - 1]?.timestamp || dayjs().format("DD-MM-YYYY hh:mma");
  const humidity = data?.main.humidity || 0;
  const weather = data?.weather[0]?.main || "N/A";

  return (
    <CustomCard styleSize="large" style={{ height: "100vh", marginTop: 88 }}>
      <Flex vertical gap={24}>
        <Flex vertical>
          <Flex justify="space-between">
            <Flex vertical align="flex-start">
              <CustomText text="Today's Weather" />
              <CustomText text={`${currentTemp}°`} textSize="large" strong />
              <CustomText text={`H: ${maxTemp}° L: ${minTemp}`} />
            </Flex>
            <Image
              src={sun}
              preview={false}
              width={271}
              style={{
                position: "absolute",
                top: -110,
                right: 0,
                zIndex: 1,
              }}
            />
          </Flex>
          <Flex gap={8} justify="space-between">
            <CustomText text={`${country}, ${countryCode}`} strong />
            <CustomText text={timestamp} />
            <CustomText text={`Humidity: ${humidity}`} />
            <CustomText text={weather} />
          </Flex>
        </Flex>
        <SearchHistory weatherList={weatherList} handleSearch={handleSearch} handleDelete={handleDelete} />
      </Flex>
    </CustomCard>
  );
};
