import { Typography } from "antd";
import classNames from "classnames";
import "./CustomText.css";
import type { TextProps } from "antd/es/typography/Text";

type Size = "small" | "small-medium" | "medium" | "large";

interface CustomTextProps extends TextProps {
  textSize?: Size;
  text?: string;
}

const CustomText: React.FC<CustomTextProps> = ({ textSize = "medium", text, ...props }) => {
  return (
    <Typography.Text className={classNames("text", textSize)} {...props}>
      {text}
    </Typography.Text>
  );
};

export default CustomText;
