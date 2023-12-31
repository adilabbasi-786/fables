import React, { useEffect, useState } from "react";
import pro1 from "../../../src/images/product1.jpg";
import pro2 from "../../../src/images/product2.jpg";
import pro3 from "../../../src/images/product3.jpg";
import pro4 from "../../../src/images/product4.jpg";

function RelatedProduct() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let req = await fetch(
        "http://localhost:1337/api/related-products?populate=*"
      );
      let res = await req.json();
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <>
      <div class="row mb-0 mb-md-5">
        <div class="col-12">
          <h2 class="fables-forth-text-color fables-light-background-color my-3 my-md-5 py-3 text-center font-20 semi-font">
            Related Products
          </h2>
        </div>
        {data.map((item) => (
          <div class="col-12 col-sm-6 col-lg-3 fables-product-block">
            <div class="card rounded-0 mb-4">
              <div class="row">
                <div class="fables-product-img col-12">
                  <img
                    class="card-img-top rounded-0"
                    src={`http://localhost:1337${item.attributes.img.data.attributes.url}`}
                    alt="dress fashion"
                  />
                  <div class="fables-img-overlay">
                    <ul class="nav fables-product-btns">
                      <li>
                        <a href="" class="fables-product-btn">
                          <i class="fa-solid fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" class="fables-product-btn">
                          <i class="fa-solid fa-code-compare"></i>
                        </a>
                      </li>
                      <li>
                        <button class="fables-product-btn">
                          <i class="fa-solid fa-heart"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-body col-12">
                  <h5 class="card-title mx-3">
                    <a
                      href="#"
                      class="fables-main-text-color font-16 semi-font fables-second-hover-color"
                    >
                      {item.attributes.title}
                    </a>
                  </h5>
                  <p class="card-text fables-fifth-text-color font-15 mx-3">
                    {item.attributes.desc}
                  </p>
                  <p class="font-15 font-weight-bold fables-second-text-color my-2 mx-3">
                    $ {item.attributes.price}
                  </p>
                  <p class="fables-product-info">
                    <a
                      href="#"
                      class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 p-2 px-4"
                    >
                      <i class="fa-solid fa-cart-shopping"></i>
                      <span class="fables-btn-value">ADD TO CART</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default RelatedProduct;
