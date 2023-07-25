import React, { useState } from "react";

function ProductCategory() {
  const [data, setData] = useState([
    {
      id: 1,
      attributes: {
        title: "Mens",
        createdAt: "2023-07-17T08:43:36.705Z",
        updatedAt: "2023-07-17T08:43:39.196Z",
        publishedAt: "2023-07-17T08:43:39.194Z",
      },
    },
    {
      id: 2,
      attributes: {
        title: "Women",
        createdAt: "2023-07-17T08:43:46.911Z",
        updatedAt: "2023-07-17T08:43:47.478Z",
        publishedAt: "2023-07-17T08:43:47.476Z",
      },
    },
    {
      id: 3,
      attributes: {
        title: "Watch",
        createdAt: "2023-07-17T08:43:55.568Z",
        updatedAt: "2023-07-17T08:43:57.456Z",
        publishedAt: "2023-07-17T08:43:57.454Z",
      },
    },
  ]);
  return (
    <>
      <h2 class="font-16 semi-font fables-forth-text-color fables-light-gary-background  p-3 mb-4">
        Product Categories
      </h2>
      {data.map((item) => (
        <ul class="nav fables-forth-text-color fables-forth-before fables-store-left-list">
          <li>
            <a href="#">{item.attributes.title}</a>
          </li>
        </ul>
      ))}
    </>
  );
}

export default ProductCategory;
