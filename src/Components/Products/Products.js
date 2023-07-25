import React, { useEffect, useState } from "react";
import indexpro from "../../images/index-products-overlay.jpg";
import pro1 from "../../images/index-product1.jpg";
import pro2 from "../../images/index-product2.jpg";

function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let req = await fetch(
        "http://localhost:1337/api/products?filters[show_on_Homepage][$eq]=true&pagination[page]=1&pagination[pageSize]=3&populate=*"
      );
      let res = await req.json();
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <>
      <div class="container-fluid my-4 my-md-5">
        <div class="row">
          <div class="col-12 col-lg-2 p-0">
            <div class="text-center fables-main-background-color fables-sqr-rotation fables-second-border-color">
              <div class="text-rotate">
                <h2 class="text-white font-25">
                  Our <br />
                  <span class="white-color font-40 bold-font mt-2 d-block">
                    Products
                  </span>
                </h2>
                <p class="fables-third-text-color mt-4 mb-3 mb-lg-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-10 p-0">
            <div class="fables-index-products fables-after-overlay py-3 py-lg-5 pr-md-4 pl-md-5 bg-rules sm-index-products">
              <div class="container z-index position-relative">
                <div class="row">
                  <div class="col-12 col-lg-10 offset-lg-2">
                    <div
                      class="owl-carousel owl-theme dots-0 carousel-items-3 circle-nav mt-lg-4 mb-lg-5"
                      id="blog-slider"
                    >
                      {data.map((item) => (
                        <div
                          class="card rounded-0 border-light wow fadeIn mb-4 mb-lg-0"
                          data-wow-delay=".4s"
                          style={{ margin: "6px" }}
                        >
                          <div class="row">
                            <div class="fables-product-img col-12">
                              <img
                                class="card-img-top rounded-0 w-100"
                                src={`http://localhost:1337${item?.attributes?.img?.data.attributes.url}`}
                                // src={
                                //   "http://localhost:1337/uploads/product1_9a1cf709eb.jpg"
                                // }
                                alt="dress fashion"
                              />
                              <div class="fables-img-overlay">
                                <ul class="nav fables-product-btns  pr-3 mt-5 vertical-store-btns">
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
                                  class="fables-main-text-color fables-store-product-title fables-second-hover-color"
                                >
                                  {item?.attributes?.title}
                                </a>
                              </h5>
                              <p class="card-text fables-fifth-text-color fables-store-product-details mx-3 store-card-text">
                                {item?.attributes?.desc}
                              </p>
                              <p class="fables-product-price fables-second-text-color my-2 mx-3 semi-font">
                                $ {item?.attributes?.price}
                              </p>
                              <p class="fables-product-info my-2">
                                <a
                                  href="#"
                                  class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-15"
                                >
                                  <i class="fa-solid fa-cart-shopping"></i>
                                  <tab />
                                  <span class="fables-btn-value">
                                    ADD TO CART
                                  </span>
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <a
                      href="/products"
                      class="btn white-color font-18 all-index-products fables-second-hover-color border-0 p-0
                                       position-absolute d-block pt-4 pt-md-0 z-index "
                    >
                      <span class="underline">View all products</span>
                      <i class="fa-solid fa-arrow-right ml-2 font-13"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
