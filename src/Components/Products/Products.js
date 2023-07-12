import React from "react";
import indexpro from "../../images/index-products-overlay.jpg";
import pro1 from "../../images/index-product1.jpg";
import pro2 from "../../images/index-product2.jpg";

function Products() {
  return (
    <>
      <div
        class="fables-index-products large-mb fables-after-overlay py-4 py-md-5 mt-md-5 bg-rules"
        style={{
          backgroundImage: { indexpro },
        }}
      >
        <div class="container z-index position-relative overflow-hidden">
          <div class="row">
            <div class="col-12 col-md-7 wow fadeInLeft">
              <h2 class="fables-second-text-color font-35 font-weight-bold">
                Our <span class="white-color">Products</span>
              </h2>
              <p class="fables-third-text-color mt-4 mb-md-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using
              </p>
            </div>
            <div class="col-12 col-md-5 col-lg-3 text-right offset-lg-2 my-4 my-md-0 mt-md-5 mt-lg-0 text-center">
              <a
                href="#"
                class="btn fables-second-background-color white-color white-color-hover fables-btn-rounded px-5 py-2"
              >
                View all products
              </a>
            </div>
          </div>
          <div class="owl-carousel owl-theme dots-0 circle-nav carousel-items-4">
            <div
              class="card rounded-0 mb-4 border-light wow fadeIn"
              data-wow-delay=".4s"
            >
              <div class="row">
                <div class="fables-product-img col-12">
                  <img
                    class="card-img-top w-100 rounded-0"
                    src={pro1}
                    alt="dress fashion"
                  />
                  <div class="fables-img-overlay">
                    <ul class="nav fables-product-btns pr-3 mt-5 vertical-store-btns">
                      <li>
                        <a href="" class="fables-product-btn">
                          <i class="fa-sharp fa-regular fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" class="fables-product-btn">
                          <i class="fa-sharp fa-solid fa-down-left-and-up-right-to-center"></i>{" "}
                        </a>
                      </li>
                      <li>
                        <button class="fables-product-btn">
                          <i class="fa-regular fa-heart"></i>
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
                      dress fashion
                    </a>
                  </h5>
                  <p class="card-text fables-fifth-text-color font-15 mx-3">
                    LUIS LEATHER DRIVING MOCCASINS FROM ... DOUBLE
                  </p>
                  <p class="font-weight-bold fables-second-text-color my-2 mb-3 mx-3">
                    $ 98.00
                  </p>
                  <p class="fables-product-info">
                    <a
                      href="#"
                      class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 px-4 py-2"
                    >
                      <span class="fables-iconcart"></span>
                      <span class="fables-btn-value">ADD TO CART</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="card rounded-0 mb-4 border-light wow fadeIn"
              data-wow-delay=".8s"
            >
              <div class="row">
                <div class="fables-product-img col-12">
                  <img
                    class="card-img-top rounded-0 w-100"
                    src={pro2}
                    alt="dress fashion"
                  />
                  <div class="fables-img-overlay">
                    <ul class="nav fables-product-btns pr-3 mt-5 vertical-store-btns">
                      <li>
                        <a href="" class="fables-product-btn">
                          <i class="fa-sharp fa-regular fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" class="fables-product-btn">
                          <i class="fa-sharp fa-solid fa-down-left-and-up-right-to-center"></i>{" "}
                        </a>
                      </li>
                      <li>
                        <button class="fables-product-btn">
                          <i class="fa-regular fa-heart"></i>
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
                      dress fashion
                    </a>
                  </h5>
                  <p class="card-text fables-fifth-text-color font-15 mx-3">
                    LUIS LEATHER DRIVING MOCCASINS FROM ... DOUBLE
                  </p>
                  <p class="font-weight-bold fables-second-text-color my-2 mb-3 mx-3">
                    $ 98.00
                  </p>
                  <p class="fables-product-info">
                    <a
                      href="#"
                      class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 px-4 py-2"
                    >
                      <span class="fables-iconcart"></span>
                      <span class="fables-btn-value">ADD TO CART</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="card rounded-0 mb-4 border-light wow fadeIn"
              data-wow-delay="1.2s"
            >
              <div class="row">
                <div class="fables-product-img col-12">
                  <img
                    class="card-img-top rounded-0 w-100"
                    src={pro1}
                    alt="dress fashion"
                  />
                  <div class="fables-img-overlay">
                    <ul class="nav fables-product-btns pr-3 mt-5 vertical-store-btns">
                      <li>
                        <a href="" class="fables-product-btn">
                          <i class="fa-sharp fa-regular fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" class="fables-product-btn">
                          <i class="fa-sharp fa-solid fa-down-left-and-up-right-to-center"></i>{" "}
                        </a>
                      </li>
                      <li>
                        <button class="fables-product-btn">
                          <i class="fa-regular fa-heart"></i>
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
                      dress fashion
                    </a>
                  </h5>
                  <p class="card-text fables-fifth-text-color font-15 mx-3">
                    LUIS LEATHER DRIVING MOCCASINS FROM ... DOUBLE
                  </p>
                  <p class="font-weight-bold fables-second-text-color my-2 mb-3 mx-3">
                    $ 98.00
                  </p>
                  <p class="fables-product-info">
                    <a
                      href="#"
                      class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 px-4 py-2"
                    >
                      <span class="fables-iconcart"></span>
                      <span class="fables-btn-value">ADD TO CART</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="card rounded-0 mb-4 border-light wow fadeIn"
              data-wow-delay="1.6s"
            ></div>
            <div class="card rounded-0 mb-4 border-light">
              <div class="row">
                <div class="fables-product-img col-12">
                  <img
                    class="card-img-top rounded-0 w-100"
                    src={pro1}
                    alt="dress fashion"
                  />
                  <div class="fables-img-overlay">
                    <ul class="nav fables-product-btns pr-3 mt-5 vertical-store-btns">
                      <li>
                        <a href="" class="fables-product-btn">
                          <i class="fa-sharp fa-regular fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" class="fables-product-btn">
                          <i class="fa-sharp fa-solid fa-down-left-and-up-right-to-center"></i>{" "}
                        </a>
                      </li>
                      <li>
                        <button class="fables-product-btn">
                          <i class="fa-regular fa-heart"></i>
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
                      dress fashion
                    </a>
                  </h5>
                  <p class="card-text fables-fifth-text-color font-15 mx-3">
                    LUIS LEATHER DRIVING MOCCASINS FROM ... DOUBLE
                  </p>
                  <p class="font-weight-bold fables-second-text-color my-2 mx-3">
                    $ 98.00
                  </p>
                  <p class="fables-product-info">
                    <a
                      href="#"
                      class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 px-4 py-2"
                    >
                      <span class="fables-iconcart"></span>
                      <span class="fables-btn-value">ADD TO CART</span>
                    </a>
                  </p>
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
