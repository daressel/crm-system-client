import { Button, Card, Col, Row, Space } from "antd";
import { FC } from "react";

const products = [
  { title: "product1" },
  { title: "product2" },
  { title: "product3" },
  { title: "product4" },
  { title: "product5" },
];

const Dashboard: FC = () => {
  console.log("Dashboard");
  const onClick = () => {
    const audio = new Audio("/sounds/click.mp3");
    audio.play();
  };

  const onMouseEnter = () => {
    const audio = new Audio("/sounds/click.mp3");
    audio.play();
  };
  return (
    <Space.Compact direction="vertical" size="middle" block>
      {products.map((product, index) => (
        <Card onMouseEnter={onMouseEnter} key={index} title={product.title} />
      ))}
      <Button onClick={onClick} type="primary">
        qwe
      </Button>
    </Space.Compact>
  );
};

export default Dashboard;
