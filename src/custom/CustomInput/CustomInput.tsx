import { Input, type InputProps } from "antd";
import "./CustomInput.css";
import CustomText from "../CustomText/CustomText";

interface CustomInputProps extends InputProps {
  title?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ title, ...props }) => {
  return (
    <>
      <CustomText text={title} textSize="small" style={{ position: "absolute", zIndex: 1, left: 22, top: 3, color: "#FFFFFF66" }} />
      <Input size="large" className={"input"} {...props} />
    </>
  );
};

export default CustomInput;
