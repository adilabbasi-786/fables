import React, { useEffect, useState } from "react";

import Footer from "../Components/Footer/Footer";
import { FormControl } from "react-bootstrap";
// import Filters from "../Components/Filters";
import ProductCategory from "../Components/ProductCategory";
import TopRatedProduct from "../Components/TopRatedProduct";
import { Link, useNavigate } from "react-router-dom";

function Products(item) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let req = await fetch("http://localhost:1337/api/products?populate=*");
      let res = await req.json();
      setData(res.data);
      console.log(res.data);
    };
    getData();
  }, []);

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
              <div class="input-icon">
                <FormControl
                  style={{ width: 250 }}
                  placeholder="Search a product"
                  className="m-auto"
                />
              </div>
            </div>
            {/* <Filters /> */}

            <ProductCategory />
            <TopRatedProduct />
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
              {data.map((item) => (
                <div
                  class="col-12 col-sm-6 col-lg-4 fables-product-block"
                  key={item.id}
                >
                  <Link to={`/singleProduct/${item.id}`}>
                    <div class="card rounded-0 mb-4">
                      <div class="row">
                        <div class="fables-product-img col-12">
                          <img
                            class="card-img-top rounded-0"
                            src={`http://localhost:1337${item.attributes.img.data[0].attributes.url}`}
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
                              {item.attributes.title}
                            </a>
                          </h5>
                          <p class="store-card-text fables-fifth-text-color font-15 mx-xl-3">
                            {item.attributes.desc}
                          </p>
                          <p class="font-15 font-weight-bold fables-second-text-color my-2 mx-xl-3">
                            $ {item.attributes.price}
                          </p>
                          <p class="fables-product-info">
                            <a
                              href="#"
                              class="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-14 p-2 px-2 px-xl-4"
                            >
                              <i class="fa-solid fa-cart-shopping"></i>

                              <span class="fables-btn-value"> ADD TO CART</span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
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
