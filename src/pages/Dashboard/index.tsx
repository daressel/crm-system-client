import { Card, Col, Row, Space } from "antd";
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
  return (
    <Space.Compact direction="vertical" size="middle" block>
      {products.map((product, index) => (
        <Card key={index} title={product.title} />
      ))}
    </Space.Compact>
  );
};

export default Dashboard;
