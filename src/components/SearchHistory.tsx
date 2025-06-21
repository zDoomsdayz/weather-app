import { Button, Flex, Typography } from "antd";
import type { FieldType } from "../types/WeatherData";
import { DeleteFilled, SearchOutlined } from "@ant-design/icons";
import CustomCard from "../custom/CustomCard/CustomCard";

interface SearchHistoryProps {
  weatherList: FieldType[];
  handleSearch: (item: FieldType) => void;
  handleDelete: (index: number) => void;
}

export const SearchHistory = ({ weatherList, handleSearch, handleDelete }: SearchHistoryProps) => {
  return (
    <CustomCard title={<Typography>Search History</Typography>} style={{ textAlign: "left", height: "100vh" }}>
      <Flex vertical gap={18}>
        {weatherList.length === 0 && <Typography style={{ textAlign: "center" }}>No Record</Typography>}
        {weatherList.map((item, index) => (
          <CustomCard style={{ height: 60, justifyContent: "center" }}>
            <Flex key={index} style={{ paddingTop: 14, alignItems: "center" }} gap={16}>
              <Flex style={{ justifyContent: "space-between", width: "100%" }}>
                <Typography>
                  {item.country}, {item.countryCode}
                </Typography>
                <Typography>{item.timestamp}</Typography>
              </Flex>
              <Flex gap={8}>
                <Button onClick={() => handleSearch(item)} icon={<SearchOutlined />} />
                <Button onClick={() => handleDelete(index)} icon={<DeleteFilled />} />
              </Flex>
            </Flex>
          </CustomCard>
        ))}
      </Flex>
    </CustomCard>
  );
};
