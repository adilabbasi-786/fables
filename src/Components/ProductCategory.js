import React, { useEffect, useState } from "react";

function ProductCategory({ getProducts }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let req = await fetch("http://localhost:1337/api/categories");
      let res = await req.json();
      setData(res.data);
      console.log(res.data);
    };
    getData();
  }, []);

  return (
    <>
      <h2 class="font-16 semi-font fables-forth-text-color fables-light-gary-background  p-3 mb-4">
        Product Categories
      </h2>
      {data.map((item) => (
        <ul class="nav fables-forth-text-color fables-forth-before fables-store-left-list">
          <li
            onClick={() => {
              getProducts(item.id);
            }}
          >
            <a href="#">{item?.attributes?.title}</a>
          </li>
        </ul>
      ))}
    </>
  );
}

export default ProductCategory;
