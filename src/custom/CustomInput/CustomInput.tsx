import { Input, Typography, type InputProps } from "antd";
import "./CustomInput.css";

interface CustomInputProps extends InputProps {
  title?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ title, ...props }) => {
  return (
    <>
      <Typography style={{ position: "absolute", zIndex: 1, left: 22, top: 3, fontSize: 10, color: "#FFFFFF66" }}>{title}</Typography>
      <Input size="large" className={"input"} {...props} />
    </>
  );
};

export default CustomInput;
