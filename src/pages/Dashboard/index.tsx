import { FC } from "react";
import classnames from "classnames/bind";

import styles from "./Dashboard.module.scss";

const cn = classnames.bind(styles);

const products = [
  { title: "product1" },
  { title: "product2" },
  { title: "product3" },
  { title: "product4" },
  { title: "product5" },
];

const Dashboard: FC = () => {
  return (
    <div className={cn("dashboard")}>
      {products.map((product, index) => (
        <div key={index}>
          <span>{product.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
