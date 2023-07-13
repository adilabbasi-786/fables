import React from "react";
import sml1 from "../../src/images/sml1.jpg";
import sml2 from "../../src/images/sml2.jpg";
import sml3 from "../../src/images/sml3.jpg";
import sml4 from "../../src/images/sml4.jpg";
import pro1 from "../../src/images/product1.jpg";
import pro2 from "../../src/images/product2.jpg";
import pro3 from "../../src/images/product3.jpg";
import pro4 from "../../src/images/product4.jpg";
import pro5 from "../../src/images/product5.jpg";
import pro6 from "../../src/images/product6.jpg";
import pro7 from "../../src/images/product7.jpg";
import pro8 from "../../src/images/product8.jpg";
import pro9 from "../../src/images/product9.jpg";
import Footer from "../Components/Footer/Footer";

function Products() {
  return (
    <>
      <div class="fables-header fables-after-overlay">
        <div class="container">
          <h2 class="fables-page-title fables-second-border-color">
            Store Grid List
          </h2>
        </div>
      </div>
      <div class="fables-light-gary-background">
        <div class="container">
          <nav aria-label="breadcrumb">
            <ol class="fables-breadcrumb breadcrumb px-0 py-3">
              <li class="breadcrumb-item">
                <a href="/" class="fables-second-text-color">
                  Home
                </a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Store Grid List
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="container">
        <div class="row my-4 my-md-5">
          <div class="col-12 col-md-4 col-lg-3">
            <div class="fables-store-search mb-4">
              <form>
                <div class="input-icon">
                  <i class="fa-brands fa-searchengin fables-input-icon"></i>
                  <input
                    type="text"
                    class="form-control rounded-0 form-control rounded-0 font-14 fables-store-input pl-5 py-2"
                    placeholder="Search Product"
                  />
                </div>
              </form>
            </div>
            <div class="rage-slider">
              <h2 class="font-16 semi-font fables-forth-text-color fables-light-gary-background  p-3 mb-4">
                Filter by price
              </h2>

              <div
                class="range-slider fables-forth-text-color"
                id="facet-price-range-slider"
                data-options='{"output":{"prefix":""},"maxSymbol":"+"}'
              >
                <div
                  className="slider-thumb"
                  style={{
                    left: "44.27%",
                    transform: "translate(-44.27%, 0px)",
                  }}
                ></div>
                <div
                  class="slider-thumb"
                  style={{
                    left: "2.09%",
                    transform: "translate(-2.09%, 0px)",
                  }}
                ></div>
                <input
                  name="range-1"
                  value="0"
                  min="0"
                  max="10000"
                  step="1"
                  type="range"
                />
                <input
                  name="range-2"
                  value="10000"
                  min="0"
                  max="10000"
                  step="1"
                  type="range"
                />
                <div class="track track--full"></div>
                <div
                  className="track track--included"
                  style={{ width: "44.19%", left: "2.09%" }}
                ></div>
                <output
                  style={{
                    left: "2.09%",
                    transform: "translate(-2.09%, px)",
                    zIndex: "1",
                  }}
                />
                <output
                  style={{
                    left: "46.28%",
                    transform: "translate(-46.28%, px)",
                    zIndex: "2",
                  }}
                />
              </div>
              <button
                type="submit"
                class="btn btn-block fables-second-background-color rounded-0 white-color white-color-hover p-2 font-15 mb-4"
              >
                Filter
              </button>
            </div>
            <h2 class="font-16 semi-font fables-forth-text-color fables-light-gary-background  p-3 mb-4">
              Product Categories
            </h2>
            <ul class="nav fables-forth-text-color fables-forth-before fables-store-left-list">
              <li>
                <a href="#">BELTS</a>
              </li>
              <li>
                <a href="#">BLAZERS</a>
              </li>
              <li>
                <a href="#">COATS & JACKETS</a>
              </li>
              <li>
                <a href="#">BAGS & PURSES</a>
              </li>
              <li>
                <a href="#">WALLETS</a>
              </li>
              <li>
                <a href="#">KNITWEAR</a>
              </li>
              <li>
                <a href="#">BLAZERS</a>
              </li>
              <li>
                <a href="#">JACKETS</a>
              </li>
            </ul>

            <h2 class="font-16 semi-font fables-forth-text-color fables-light-gary-background  p-3 my-4">
              Top Rated Products
            </h2>
            <div class="row mb-3">
              <div class="col-4 pr-0">
                <a href="#">
                  <img src={sml1} alt="" class="w-100" />
                </a>
              </div>
              <div class="col-8">
                <a
                  href="#"
                  class="fables-main-text-color font-14 semi-font fables-second-hover-color store-card-text"
                >
                  LUIS LEATHER DRIVING MOCCASINS FROM ...{" "}
                </a>
                <p class="font-weight-bold fables-second-text-color ">
                  $ 98.00
                </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-4 pr-0">
                <a href="#">
                  <img src={sml2} alt="" class="w-100" />
                </a>
              </div>
              <div class="col-8">
                <a
                  href="#"
                  class="fables-main-text-color font-14 semi-font fables-second-hover-color store-card-text"
                >
                  LUIS LEATHER DRIVING MOCCASINS FROM ...{" "}
                </a>
                <p class="font-weight-bold fables-second-text-color ">
                  $ 98.00
                </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-4 pr-0">
                <a href="#">
                  <img src={sml3} alt="" class="w-100" />
                </a>
              </div>
              <div class="col-8">
                <a
                  href="#"
                  class="fables-main-text-color font-14 semi-font fables-second-hover-color store-card-text"
                >
                  LUIS LEATHER DRIVING MOCCASINS FROM ...{" "}
                </a>
                <p class="font-weight-bold fables-second-text-color ">
                  $ 98.00
                </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-4 pr-0">
                <a href="#">
                  <img src={sml4} alt="" class="w-100" />
                </a>
              </div>
              <div class="col-8">
                <a
                  href="#"
                  class="fables-main-text-color font-14 semi-font fables-second-hover-color store-card-text"
                >
                  LUIS LEATHER DRIVING MOCCASINS FROM ...{" "}
                </a>
                <p class="font-weight-bold fables-second-text-color ">
                  $ 98.00
                </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-4 pr-0">
                <a href="#">
                  <img src={sml1} alt="" class="w-100" />
                </a>
              </div>
              <div class="col-8">
                <a
                  href="#"
                  class="fables-main-text-color font-14 semi-font fables-second-hover-color store-card-text"
                >
                  LUIS LEATHER DRIVING MOCCASINS FROM ...{" "}
                </a>
                <p class="font-weight-bold fables-second-text-color ">
                  $ 98.00
                </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-4 pr-0">
                <a href="#">
                  <img src={sml2} alt="" class="w-100" />
                </a>
              </div>
              <div class="col-8">
                <a
                  href="#"
                  class="fables-main-text-color font-14 semi-font fables-second-hover-color store-card-text"
                >
                  LUIS LEATHER DRIVING MOCCASINS FROM ...{" "}
                </a>
                <p class="font-weight-bold fables-second-text-color ">
                  $ 98.00
                </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-4 pr-0">
                <a href="#">
                  <img src={sml3} alt="" class="w-100" />
                </a>
              </div>
              <div class="col-8">
                <a
                  href="#"
                  class="fables-main-text-color font-14 semi-font fables-second-hover-color store-card-text"
                >
                  LUIS LEATHER DRIVING MOCCASINS FROM ...{" "}
                </a>
                <p class="font-weight-bold fables-second-text-color ">
                  $ 98.00
                </p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-4 pr-0">
                <a href="#">
                  <img src={sml4} alt="" class="w-100" />
                </a>
              </div>
              <div class="col-8">
                <a
                  href="#"
                  class="fables-main-text-color font-14 semi-font fables-second-hover-color store-card-text"
                >
                  LUIS LEATHER DRIVING MOCCASINS FROM ...{" "}
                </a>
                <p class="font-weight-bold fables-second-text-color ">
                  $ 98.00
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-8 col-lg-9">
            <div class="row mb-4">
              <div class="col-12 col-lg-4">
                <form>
                  <div class="form-group mb-0">
                    <select class="form-control rounded-0">
                      <option value="" selected>
                        default sorting
                      </option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </form>
              </div>
              <div class="col-4 col-md-6 col-lg-2 offset-lg-6 text-center pl-0 d-none d-lg-block">
                <i class="fa-solid fa-list fa-fw fables-view-btn fables-list-btn fables-third-border-color fables-third-text-color"></i>
                <i class="fa-regular fa-grid active fa-fw fables-view-btn fables-grid-btn fables-third-border-color fables-third-text-color"></i>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-sm-6 col-lg-4 fables-product-block">
                <div class="card rounded-0 mb-4">
                  <div class="row">
                    <div class="fables-product-img col-12">
                      <img
                        class="card-img-top rounded-0"
                        src={pro1}
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
                      <h5 class="card-title mx-xl-3">
                        <a
                          href="#"
                          class="fables-main-text-color fables-store-product-title fables-second-hover-color"
                        >
                          dress fashion
                        </a>
                      </h5>
                      <p class="store-card-text fables-fifth-text-color font-15 mx-xl-3">
                        LUIS LEATHER DRIVING MOCCASINS FROM ... DOUBLE
                      </p>
                      <p class="font-15 font-weight-bold fables-second-text-color my-2 mx-xl-3">
                        $ 98.00
                      </p>
                      <p class="fables-product-info">
                        <a
                          href="#"
                          class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 p-2 px-2 px-xl-4"
                        >
                          <span class="fables-iconcart"></span>
                          <span class="fables-btn-value">ADD TO CART</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-4 fables-product-block">
                <div class="card rounded-0 mb-4">
                  <div class="row">
                    <div class="fables-product-img col-12">
                      <img
                        class="card-img-top rounded-0"
                        src={pro2}
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
                      <h5 class="card-title mx-xl-3">
                        <a
                          href="#"
                          class="fables-main-text-color fables-store-product-title fables-second-hover-color"
                        >
                          dress fashion
                        </a>
                      </h5>
                      <p class="store-card-text fables-fifth-text-color font-15 mx-xl-3">
                        LUIS LEATHER DRIVING MOCCASINS FROM ... DOUBLE
                      </p>
                      <p class="font-15 font-weight-bold fables-second-text-color my-2 mx-xl-3">
                        $ 98.00
                      </p>
                      <p class="fables-product-info">
                        <a
                          href="#"
                          class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 p-2 px-2 px-xl-4"
                        >
                          <span class="fables-iconcart"></span>
                          <span class="fables-btn-value">ADD TO CART</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-4 fables-product-block">
                <div class="card rounded-0 mb-4">
                  <div class="row">
                    <div class="fables-product-img col-12">
                      <img
                        class="card-img-top rounded-0"
                        src={pro3}
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
                      <h5 class="card-title mx-xl-3">
                        <a
                          href="#"
                          class="fables-main-text-color fables-store-product-title fables-second-hover-color"
                        >
                          dress fashion
                        </a>
                      </h5>
                      <p class="store-card-text fables-fifth-text-color font-15 mx-xl-3">
                        LUIS LEATHER DRIVING MOCCASINS FROM ... DOUBLE
                      </p>
                      <p class="font-15 font-weight-bold fables-second-text-color my-2 mx-xl-3">
                        $ 98.00
                      </p>
                      <p class="fables-product-info">
                        <a
                          href="#"
                          class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 p-2 px-2 px-xl-4"
                        >
                          <span class="fables-iconcart"></span>
                          <span class="fables-btn-value">ADD TO CART</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-4 fables-product-block">
                <div class="card rounded-0 mb-4">
                  <div class="row">
                    <div class="fables-product-img col-12">
                      <img
                        class="card-img-top rounded-0"
                        src={pro4}
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
                      <h5 class="card-title mx-xl-3">
                        <a
                          href="#"
                          class="fables-main-text-color fables-store-product-title fables-second-hover-color"
                        >
                          dress fashion
                        </a>
                      </h5>
                      <p class="store-card-text fables-fifth-text-color font-15 mx-xl-3">
                        LUIS LEATHER DRIVING MOCCASINS FROM ... DOUBLE
                      </p>
                      <p class="font-15 font-weight-bold fables-second-text-color my-2 mx-xl-3">
                        $ 98.00
                      </p>
                      <p class="fables-product-info">
                        <a
                          href="#"
                          class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 p-2 px-2 px-xl-4"
                        >
                          <span class="fables-iconcart"></span>
                          <span class="fables-btn-value">ADD TO CART</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-4 fables-product-block">
                <div class="card rounded-0 mb-4">
                  <div class="row">
                    <div class="fables-product-img col-12">
                      <img
                        class="card-img-top rounded-0"
                        src={pro5}
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
                      <h5 class="card-title mx-xl-3">
                        <a
                          href="#"
                          class="fables-main-text-color fables-store-product-title fables-second-hover-color"
                        >
                          dress fashion
                        </a>
                      </h5>
                      <p class="store-card-text fables-fifth-text-color font-15 mx-xl-3">
                        LUIS LEATHER DRIVING MOCCASINS FROM ... DOUBLE
                      </p>
                      <p class="font-15 font-weight-bold fables-second-text-color my-2 mx-xl-3">
                        $ 98.00
                      </p>
                      <p class="fables-product-info">
                        <a
                          href="#"
                          class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 p-2 px-2 px-xl-4"
                        >
                          <span class="fables-iconcart"></span>
                          <span class="fables-btn-value">ADD TO CART</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-4 fables-product-block">
                <div class="card rounded-0 mb-4">
                  <div class="row">
                    <div class="fables-product-img col-12">
                      <img
                        class="card-img-top rounded-0"
                        src={pro6}
                        alt="dress fashion"
                      />
                      <div class="fables-img-overlay">
                        <ul class="nav fables-product-btns">
                          <li>
                            <a href="" class="fables-product-btn">
                              <span class="fables-iconeye"></span>
                            </a>
                          </li>
                          <li>
                            <a href="" class="fables-product-btn">
                              <span class="fables-iconcompare"></span>
                            </a>
                          </li>
                          <li>
                            <button class="fables-product-btn">
                              <span class="fables-iconheart"></span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="card-body col-12">
                      <h5 class="card-title mx-xl-3">
                        <a
                          href="#"
                          class="fables-main-text-color fables-store-product-title fables-second-hover-color"
                        >
                          dress fashion
                        </a>
                      </h5>
                      <p class="store-card-text fables-fifth-text-color font-15 mx-xl-3">
                        LUIS LEATHER DRIVING MOCCASINS FROM ... DOUBLE
                      </p>
                      <p class="font-15 font-weight-bold fables-second-text-color my-2 mx-xl-3">
                        $ 98.00
                      </p>
                      <p class="fables-product-info">
                        <a
                          href="#"
                          class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 p-2 px-2 px-xl-4"
                        >
                          <span class="fables-iconcart"></span>
                          <span class="fables-btn-value">ADD TO CART</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-4 fables-product-block">
                <div class="card rounded-0 mb-4">
                  <div class="row">
                    <div class="fables-product-img col-12">
                      <img
                        class="card-img-top rounded-0"
                        src={pro7}
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
                      <h5 class="card-title mx-xl-3">
                        <a
                          href="#"
                          class="fables-main-text-color fables-store-product-title fables-second-hover-color"
                        >
                          dress fashion
                        </a>
                      </h5>
                      <p class="store-card-text fables-fifth-text-color font-15 mx-xl-3">
                        LUIS LEATHER DRIVING MOCCASINS FROM ... DOUBLE
                      </p>
                      <p class="font-15 font-weight-bold fables-second-text-color my-2 mx-xl-3">
                        $ 98.00
                      </p>
                      <p class="fables-product-info">
                        <a
                          href="#"
                          class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 p-2 px-2 px-xl-4"
                        >
                          <span class="fables-iconcart"></span>
                          <span class="fables-btn-value">ADD TO CART</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-4 fables-product-block">
                <div class="card rounded-0 mb-4">
                  <div class="row">
                    <div class="fables-product-img col-12">
                      <img
                        class="card-img-top rounded-0"
                        src={pro8}
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
                      <h5 class="card-title mx-xl-3">
                        <a
                          href="#"
                          class="fables-main-text-color fables-store-product-title fables-second-hover-color"
                        >
                          dress fashion
                        </a>
                      </h5>
                      <p class="store-card-text fables-fifth-text-color font-15 mx-xl-3">
                        LUIS LEATHER DRIVING MOCCASINS FROM ... DOUBLE
                      </p>
                      <p class="font-15 font-weight-bold fables-second-text-color my-2 mx-xl-3">
                        $ 98.00
                      </p>
                      <p class="fables-product-info">
                        <a
                          href="#"
                          class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 p-2 px-2 px-xl-4"
                        >
                          <span class="fables-iconcart"></span>
                          <span class="fables-btn-value">ADD TO CART</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-4 fables-product-block">
                <div class="card rounded-0 mb-4">
                  <div class="row">
                    <div class="fables-product-img col-12">
                      <img
                        class="card-img-top rounded-0"
                        src={pro9}
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
                      <h5 class="card-title mx-xl-3">
                        <a
                          href="#"
                          class="fables-main-text-color fables-store-product-title fables-second-hover-color"
                        >
                          dress fashion
                        </a>
                      </h5>
                      <p class="store-card-text fables-fifth-text-color font-15 mx-xl-3">
                        LUIS LEATHER DRIVING MOCCASINS FROM ... DOUBLE
                      </p>
                      <p class="font-15 font-weight-bold fables-second-text-color my-2 mx-xl-3">
                        $ 98.00
                      </p>
                      <p class="fables-product-info">
                        <a
                          href="#"
                          class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 p-2 px-2 px-xl-4"
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
            <nav aria-label="Page navigation">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a
                    class="page-link rounded-circle fables-forth-text-color fables-page-link fables-second-hover-background-color"
                    href="#"
                  >
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class="page-link rounded-circle fables-forth-text-color fables-page-link fables-second-hover-background-color"
                    href="#"
                  >
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class="page-link rounded-circle fables-forth-text-color fables-page-link fables-page-link fables-second-hover-background-color"
                    href="#"
                  >
                    3
                  </a>
                </li>
                <li>
                  <span class="fables-pagi-dots fables-forth-text-color">
                    {" "}
                    ....{" "}
                  </span>
                </li>
                <li class="page-item">
                  <a
                    class="page-link rounded-circle fables-forth-text-color fables-page-link fables-second-hover-background-color"
                    href="#"
                  >
                    20
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
