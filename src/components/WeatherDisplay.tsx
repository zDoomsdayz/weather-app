import { Card, Flex, Image, Typography } from "antd";
import dayjs from "dayjs";
import { SearchHistory } from "./SearchHistory";
import type { FieldType, WeatherData } from "../types/WeatherData";
import sun from "../assets/sun.png";

interface WeatherDisplayProps {
  data?: WeatherData;
  weatherList: FieldType[];
  handleSearch: (item: FieldType) => void;
  handleDelete: (index: number) => void;
}

export const WeatherDisplay = ({ data, weatherList, handleSearch, handleDelete }: WeatherDisplayProps) => {
  return (
    <Card>
      <Flex vertical gap={24}>
        <Flex vertical>
          <Flex justify="space-between">
            <Flex vertical align="flex-start">
              <Typography>Today's Weather</Typography>
              <Typography.Title style={{ margin: 0 }}>{data?.main.temp}°</Typography.Title>
              <Typography>
                H: {data?.main.temp_max}° L: {data?.main.temp_min}°
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
            <Typography>
              {data?.name}, {data?.sys.country}
            </Typography>
            <Typography>{weatherList[weatherList.length - 1]?.timestamp || dayjs().format("DD-MM-YYYY hh:mma")}</Typography>
            <Typography>Humidity: {data?.main.humidity}%</Typography>
            <Typography>{data?.weather[0]?.main}</Typography>
          </Flex>
        </Flex>
        <SearchHistory weatherList={weatherList} handleSearch={handleSearch} handleDelete={handleDelete} />
      </Flex>
    </Card>
  );
};
