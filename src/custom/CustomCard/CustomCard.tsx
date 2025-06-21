import { Card, type CardProps } from "antd";
import classNames from "classnames";
import "./CustomCard.css";

type StyleSize = "small" | "medium" | "large";

interface CustomCardProps extends CardProps {
  styleSize?: StyleSize;
}

const CustomCard: React.FC<CustomCardProps> = ({ styleSize = "small", ...cardProps }) => {
  return <Card className={classNames("card", styleSize)} {...cardProps} />;
};

export default CustomCard;
