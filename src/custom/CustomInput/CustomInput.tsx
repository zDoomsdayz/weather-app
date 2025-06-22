import { Input, type InputProps } from "antd";
import "./CustomInput.css";
import CustomText from "../CustomText/CustomText";
import { useMediaQuery } from "react-responsive";

interface CustomInputProps extends InputProps {
  title?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ title, ...props }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  return (
    <>
      <CustomText text={title} textSize="small" style={{ position: "absolute", zIndex: 1, left: isMobile ? 11 : 22, top: 3, color: "#FFFFFF66" }} />
      <Input size="large" className={"input"} {...props} />
    </>
  );
};

export default CustomInput;
