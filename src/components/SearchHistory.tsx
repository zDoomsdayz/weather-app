import { Flex } from "antd";
import type { FieldType } from "../types/WeatherData";
import { DeleteFilled, SearchOutlined } from "@ant-design/icons";
import CustomCard from "../custom/CustomCard/CustomCard";
import CustomButton from "../custom/CustomButton/CustomButton";
import CustomText from "../custom/CustomText/CustomText";

interface SearchHistoryProps {
  weatherList: FieldType[];
  handleSearch: (item: FieldType) => void;
  handleDelete: (index: number) => void;
}

export const SearchHistory = ({ weatherList, handleSearch, handleDelete }: SearchHistoryProps) => {
  return (
    <CustomCard styleSize="medium" style={{ textAlign: "left", height: "100vh" }}>
      <Flex vertical gap={26}>
        <CustomText text="Search History" />
        <Flex vertical gap={18}>
          {weatherList.length === 0 && <CustomText text={`No Record`} style={{ textAlign: "center" }} />}
          {weatherList.map((item, index) => (
            <CustomCard key={index} styleSize="small" style={{ justifyContent: "center" }}>
              <Flex key={index} style={{ alignItems: "center" }} gap={16}>
                <Flex style={{ justifyContent: "space-between", width: "100%" }}>
                  <CustomText text={`${item.country}, ${item.countryCode}`} />
                  <CustomText text={`${item.timestamp}`} style={{ opacity: 0.4 }} />
                </Flex>
                <Flex gap={8} style={{ opacity: 0.4 }}>
                  <CustomButton styleVariant="round" onClick={() => handleSearch(item)} icon={<SearchOutlined />} />
                  <CustomButton styleVariant="round" onClick={() => handleDelete(index)} icon={<DeleteFilled />} />
                </Flex>
              </Flex>
            </CustomCard>
          ))}
        </Flex>
      </Flex>
    </CustomCard>
  );
};
