import { Button, type ButtonProps } from "antd";
import classNames from "classnames";
import "./CustomButton.css";

type StyleVariant = "round" | "square";

interface CustomButttonProps extends ButtonProps {
  styleVariant?: StyleVariant;
}

const CustomButton: React.FC<CustomButttonProps> = ({ styleVariant = "square", ...props }) => {
  return <Button className={classNames("button", styleVariant)} {...props} />;
};

export default CustomButton;
