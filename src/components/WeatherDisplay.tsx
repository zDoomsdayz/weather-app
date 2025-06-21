import { Card, Flex, Typography } from "antd";

import { SearchHistory } from "./SearchHistory";
import type { FieldType, WeatherData } from "../types/WeatherData";

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
              <Typography>{data?.main.temp}°</Typography>
              <Typography>
                H: {data?.main.temp_max}° L: {data?.main.temp_min}°
              </Typography>
            </Flex>
          </Flex>
          <Flex gap={8} justify="space-between">
            <Typography>
              {data?.name}, {data?.sys.country}
            </Typography>
            <Typography>Humidity: {data?.main.humidity}%</Typography>
            <Typography>{data?.weather[0]?.main}</Typography>
          </Flex>
        </Flex>
        <SearchHistory weatherList={weatherList} handleSearch={handleSearch} handleDelete={handleDelete} />
      </Flex>
    </Card>
  );
};
