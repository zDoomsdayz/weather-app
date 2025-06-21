import { Button, Card, Flex, List, Typography } from "antd";
import type { FieldType } from "../types/WeatherData";

interface SearchHistoryProps {
  weatherList: FieldType[];
  handleSearch: (item: FieldType) => void;
  handleDelete: (index: number) => void;
}

export const SearchHistory = ({ weatherList, handleSearch, handleDelete }: SearchHistoryProps) => {
  return (
    <Card title="Search History" style={{ textAlign: "left" }}>
      <List
        bordered
        dataSource={weatherList}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <Button onClick={() => handleSearch(item)}>Search</Button>,
              <Button danger onClick={() => handleDelete(index)}>
                Delete
              </Button>,
            ]}
          >
            <Flex style={{ justifyContent: "space-between", width: "100%" }}>
              <Typography>{item.country}</Typography>
              <Typography>{item.timestamp}</Typography>
            </Flex>
          </List.Item>
        )}
        locale={{ emptyText: "No Record" }}
      />
    </Card>
  );
};
