import { Card, type CardProps } from "antd";
import "./CustomCard.css";

// @ts-expect-error empty interface
interface CustomCardProps extends CardProps {}

const CustomCard: React.FC<CustomCardProps> = ({ ...cardProps }) => {
  return <Card className="card" {...cardProps} />;
};

export default CustomCard;
