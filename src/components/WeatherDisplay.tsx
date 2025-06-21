import { Flex, Image, Typography } from "antd";
import dayjs from "dayjs";
import { SearchHistory } from "./SearchHistory";
import type { FieldType, WeatherData } from "../types/WeatherData";
import sun from "../assets/sun.png";
import CustomCard from "../custom/CustomCard/CustomCard";

interface WeatherDisplayProps {
  data?: WeatherData;
  weatherList: FieldType[];
  handleSearch: (item: FieldType) => void;
  handleDelete: (index: number) => void;
}

export const WeatherDisplay = ({ data, weatherList, handleSearch, handleDelete }: WeatherDisplayProps) => {
  const currentTemp = data?.main.temp || 0;
  const minTemp = data?.main.temp_min || 0;
  const maxTemp = data?.main.temp_max || 0;

  return (
    <CustomCard style={{ height: "100vh", marginTop: 88 }}>
      <Flex vertical gap={24} style={{ paddingTop: 22, paddingLeft: 16, paddingRight: 16 }}>
        <Flex vertical>
          <Flex justify="space-between">
            <Flex vertical align="flex-start">
              <Typography>Today's Weather</Typography>
              <Typography.Title style={{ margin: 0, fontSize: 50 }}>{currentTemp.toFixed(0)}°</Typography.Title>
              <Typography>
                H: {maxTemp.toFixed(0)}° L: {minTemp.toFixed(0)}°
              </Typography>
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
            <Typography.Text strong>
              {data?.name}, {data?.sys.country}
            </Typography.Text>
            <Typography>{weatherList[weatherList.length - 1]?.timestamp || dayjs().format("DD-MM-YYYY hh:mma")}</Typography>
            <Typography>Humidity: {data?.main.humidity}%</Typography>
            <Typography>{data?.weather[0]?.main}</Typography>
          </Flex>
        </Flex>
        <SearchHistory weatherList={weatherList} handleSearch={handleSearch} handleDelete={handleDelete} />
      </Flex>
    </CustomCard>
  );
};
