import React from "react";
import Card from "./components/Card";

const jsonData = [
  {
    product_name: "hey",
    product_image: "http://image.com",
    description: "production  description",
    quantity: 5,
    unit_Price: 500,
  },
  {
    product_name: "hey",
    product_image: "http://image.com",
    description: "production  description",
    quantity: 5,
    unit_Price: 500,
  },
];

const Dashboard = () => {
  return (
    <>
      <div className="header">
        <div> Products</div>
        <div> Card</div>
      </div>
      <div className="product_list">
        {jsonData.map((cardDetails) => {
          return <Card props={cardDetails} />;
        })}
      </div>
    </>
  );
};

export default Dashboard;
