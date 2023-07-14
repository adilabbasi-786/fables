import React from "react";
import Footer from "../Footer/Footer";
import RelatedProduct from "./RelatedProduct";
import pro1 from "../../../src/images/single-product.jpg";
import pro2 from "../../../src/images/product7.jpg";
import pro3 from "../../../src/images/product8.jpg";
import pro4 from "../../../src/images/product9.jpg";

function SingleProducts() {
  return (
    <>
      <div class="fables-header fables-after-overlay">
        <div class="container">
          <h2 class="fables-page-title fables-second-border-color">
            Products Details
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
                Store Single
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="container">
        <div class="row my-4 my-md-5">
          <div class="col-12 col-lg-6">
            <div class="fables-single-slider store-single-slider">
              <div id="sync1" class="owl-carousel owl-theme">
                <div class="item">
                  <img src={pro1} alt="" class="w-100" />
                </div>
              </div>
              <div id="sync2" class="owl-carousel owl-theme">
                <div class="item">
                  <img src={pro2} alt="" class="w-100" />
                </div>
                <div class="item">
                  <img src={pro3} alt="" class="w-100" />
                </div>
                <div class="item">
                  <img src={pro4} alt="" class="w-100" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-12 col-lg-6 mt-3 mt-lg-0">
            <h2 class="fables-main-text-color font-20 semi-font">
              LUIS LEATHER DRIVING MOCCASINS FROM DOUBLE OAK MILLS
            </h2>

            <div class="fables-forth-text-color fables-single-tags mt-3">
              <span class="fables-fifth-text-color fables-icontags"></span>
              <a href="#">dress fashion</a>
              <a href="#">JACKETS</a>
            </div>

            <p class="fables-forth-text-color font-15 my-3">
              Fashion was originally established as a source of exclusive
              designer clothing at affordable prices.
            </p>

            <div class="row mb-5">
              <div class="col-5 col-md-3">
                <span class="fables-fifth-text-color"> COLORS : </span>
              </div>
              <div class="col-7 col-sm-6">
                <ul class="nav">
                  <li>
                    <label class="fable-product-color">
                      <input type="checkbox" />
                      <span
                        class="checkmark"
                        style={{ backgroundColor: "#E54D42" }}
                      ></span>
                    </label>
                  </li>
                  <li>
                    <label class="fable-product-color">
                      <input type="checkbox" />
                      <span
                        class="checkmark"
                        style={{ backgroundColor: "#343434;" }}
                      ></span>
                    </label>
                  </li>
                  <li>
                    <label class="fable-product-color">
                      <input type="checkbox" checked="checked" />
                      <span
                        class="checkmark"
                        style={{ backgroundColor: "#E3C38E" }}
                      ></span>
                    </label>
                  </li>
                  <li>
                    <label class="fable-product-color">
                      <input type="checkbox" />
                      <span
                        class="checkmark"
                        style={{ backgroundColor: "#CDCDCD" }}
                      ></span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row mb-5">
              <div class="col-12 col-sm-7 text-center text-md-left">
                <span class="fables-fifth-text-color">
                  <span class="fables-iconprice"></span> Price :
                </span>
                <span class="fables-second-text-color font-20 font-weight-bold">
                  $98.00
                </span>
              </div>
              <div class="col-9 col-md-4 col-lg-5 mt-3 mt-sm-0 mr-auto ml-auto mr-md-0 ml-md-auto">
                <div class="fables-calc fables-light-background-color fables-btn-rouned">
                  <span class="calc-btn minus fables-forth-text-color float-left calc-width mt-2">
                    -
                  </span>
                  <span class="calc-width">
                    <input
                      type="text"
                      id="input-val"
                      value={1}
                      class="form-control d-inline-block border text-center form-circle-input rounded-circle"
                    />
                  </span>
                  <span class="calc-btn plus fables-forth-text-color float-right calc-width mt-2">
                    +
                  </span>
                </div>
              </div>
            </div>

            <div class="row mb-5">
              <div class="col-6">
                <a
                  href="#"
                  class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 px-4 py-2 semi-font"
                >
                  <span class="fables-iconcart"></span>
                  <span class="fables-btn-value">ADD TO CART</span>
                </a>
              </div>
              <div class="col-6 text-right">
                <a
                  href=""
                  class="btn fables-product-btn text-white fables-forth-background-color rounded-circle fables-second-hover-background-color p-0"
                >
                  <i class="fa-solid fa-code-compare"></i>
                </a>
                <button class="btn text-white fables-product-btn fables-forth-background-color rounded-circle fables-second-hover-background-color p-0">
                  <i class="fa-solid fa-heart"></i>
                </button>
              </div>
            </div>

            <div class="row">
              <div class="col-6 col-sm-4 col-lg-5 col-xl-4 text-left">
                <a
                  href="#"
                  class="btn fables-forth-background-color fables-btn-rouned fables-second-hover-background-color white-color px-2 px-md-4 py-2 font-18"
                >
                  <span class="fables-iconshare"></span>
                  <span class="fables-btn-value">Share on </span>
                </a>
              </div>
              <div class="col-6 col-sm-8 col-lg-7 col-xl-8 text-center mt-0 mt-sm-0 pl-0">
                <ul class="nav fables-single-social mt-2 justify-content-end justify-content-lg-start">
                  <li>
                    <a
                      href="#"
                      target="_blank"
                      class="fables-forth-text-color fables-single-link fables-second-hover-color"
                    >
                      <i class="fab fa-facebook-f fa-fw"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_blank"
                      class="fables-forth-text-color fables-single-link fables-second-hover-color"
                    >
                      <i class="fab fa-twitter fa-fw"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_blank"
                      class="fables-forth-text-color fables-single-link fables-second-hover-color"
                    >
                      <i class="fab fa-instagram fa-fw"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_blank"
                      class="fables-forth-text-color fables-single-link fables-second-hover-color"
                    >
                      <i class="fab fa-linkedin fa-fw"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <nav class="fables-single-nav">
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  class="fables-single-item nav-link fables-forth-text-color fables-second-active fables-second-hover-color fables-forth-after px-3 px-md-5 font-15 semi-font border-0 active rounded-0 py-3"
                  id="nav-desc-tab"
                  data-toggle="tab"
                  href="#nav-desc"
                  role="tab"
                  aria-controls="nav-desc"
                  aria-selected="true"
                >
                  DESCRIPTION
                </a>
                <a
                  class="fables-single-item nav-link fables-forth-text-color fables-second-active fables-second-hover-color fables-forth-after border-0 px-3 px-md-5 font-15 semi-font rounded-0 py-3"
                  id="nav-info-tab"
                  data-toggle="tab"
                  href="#nav-info"
                  role="tab"
                  aria-controls="nav-info"
                  aria-selected="false"
                >
                  ADDITIONAL INFORMATION
                </a>
                <a
                  class="fables-single-item nav-link fables-forth-text-color fables-second-active fables-second-hover-color fables-forth-after border-0 px-3 px-md-5 font-15 semi-font rounded-0 py-3"
                  id="nav-review-tab"
                  data-toggle="tab"
                  href="#nav-review"
                  role="tab"
                  aria-controls="nav-review"
                  aria-selected="false"
                >
                  REVIEWS (0)
                </a>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-desc"
                role="tabpanel"
                aria-labelledby="nav-desc-tab"
              >
                <p class="fables-single-info mt-4 font-15 fables-fifth-text-color">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
              </div>
              <div
                class="tab-pane fade"
                id="nav-info"
                role="tabpanel"
                aria-labelledby="nav-info-tab"
              >
                <p class="fables-single-info mt-4 font-15 fables-fifth-text-color">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
              </div>
              <div
                class="tab-pane fade"
                id="nav-review"
                role="tabpanel"
                aria-labelledby="nav-review-tab"
              >
                <p class="fables-single-info mt-4 font-15 fables-fifth-text-color">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
              </div>
            </div>
          </div>
        </div>
        <RelatedProduct />
      </div>
      <Footer />
    </>
  );
}

export default SingleProducts;