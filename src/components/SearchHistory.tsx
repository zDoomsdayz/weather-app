import { Flex, Typography } from "antd";
import type { FieldType } from "../types/WeatherData";
import { DeleteFilled, SearchOutlined } from "@ant-design/icons";
import CustomCard from "../custom/CustomCard/CustomCard";
import CustomButton from "../custom/CustomButton/CustomButton";

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
                <Typography style={{ opacity: 0.4 }}>{item.timestamp}</Typography>
              </Flex>
              <Flex gap={8} style={{ opacity: 0.4 }}>
                <CustomButton styleVariant="round" onClick={() => handleSearch(item)} icon={<SearchOutlined />} />
                <CustomButton styleVariant="round" onClick={() => handleDelete(index)} icon={<DeleteFilled />} />
              </Flex>
            </Flex>
          </CustomCard>
        ))}
      </Flex>
    </CustomCard>
  );
};
