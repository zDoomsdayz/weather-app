import { Flex, Form } from "antd";
import type { FormInstance, FormProps } from "antd";
import type { FieldType } from "../types/WeatherData";
import { SearchOutlined } from "@ant-design/icons";
import CustomButton from "../custom/CustomButton/CustomButton";
import CustomInput from "../custom/CustomInput/CustomInput";

interface WeatherFormProps {
  onFinish: (values: FieldType) => void;
  form: FormInstance<FieldType>;
}

export const WeatherForm = ({ form, onFinish }: WeatherFormProps) => {
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Flex justify="space-between" gap={24}>
        <Form.Item<FieldType> name="country" style={{ width: "100%" }}>
          <CustomInput title="Country" placeholder="Enter country" />
        </Form.Item>
        <Form.Item>
          <CustomButton styleVariant="square" htmlType="submit">
            <SearchOutlined style={{ fontSize: "34px" }} />
          </CustomButton>
        </Form.Item>
      </Flex>
    </Form>
  );
};
