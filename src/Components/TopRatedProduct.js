import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopRatedProduct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let req = await fetch(
        "http://localhost:1337/api/top-rated-products?populate=*"
      );
      let res = await req.json();
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <>
      <h2 class="font-16 semi-font fables-forth-text-color fables-light-gary-background  p-3 my-4">
        Top Rated Products
      </h2>
      {data.map((item) => (
        <Link to={`/singleProduct/${item.id}`}>
          <div class="row mb-3" key={item.id}>
            <div class="col-4 pr-0">
              <a href="#">
                <img
                  src={`http://localhost:1337${item?.attributes?.img?.data?.attributes?.url}`}
                  alt=""
                  class="w-100"
                />
              </a>
            </div>
            <div class="col-8">
              <a
                href="#"
                class="fables-main-text-color font-14 semi-font fables-second-hover-color store-card-text"
              >
                {item?.attributes?.title}
              </a>
              <p class="font-weight-bold fables-second-text-color ">
                RS {item?.attributes?.price}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default TopRatedProduct;
