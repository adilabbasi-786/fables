import React from "react";
import fableslogo from "../../images/fables-logo.png";
import sml1 from "../../images/sml1.jpg";
import { NavLink, Link } from "react-router-dom";

const Header2 = () => {
  return (
    <>
      <div class="fables-navigation fables-main-background-color py-3 py-lg-0">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-10 pr-md-0">
              <nav class="navbar navbar-expand-md btco-hover-menu py-lg-2">
                <a
                  class="navbar-brand fables-logo-brand pl-0"
                  href="index.html"
                >
                  <Link to="/">
                    <img
                      src={fableslogo}
                      alt="Fables Template"
                      class="fables-logo"
                    />
                  </Link>
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#fablesNavDropdown"
                  aria-controls="fablesNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="fables-iconmenu-icon text-white font-16"></span>
                </button>
                <div class="collapse navbar-collapse" id="fablesNavDropdown">
                  <ul class="navbar-nav mx-auto fables-nav">
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="/"
                        id="sub-nav1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Home
                      </a>
                    </li>

                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="/about"
                        id="sub-nav3"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        About
                      </a>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="sub-nav4"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Store
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="sub-nav4">
                        <li>
                          <a class="dropdown-item" href="store_grid_list.html">
                            Product Category{" "}
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="store_single.html">
                            Product Single
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="/blog"
                        id="sub-nav5"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Blog
                      </a>
                    </li>

                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="/contact"
                        id="sub-nav7"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div class="col-5 col-md-2 pr-md-0 icons-header-mobile">
              <div class="fables-header-icons pt-lg-4 text-right">
                <a
                  href="#"
                  class="open-search fables-third-text-color fables-mega-menu-btn px-4  fables-second-hover-color"
                >
                  <i class="fa-solid fa-magnifying-glass fables-iconsearch-icon"></i>
                </a>
                <div class="dropdown d-inline-block">
                  <a
                    href="#_"
                    class="fables-third-text-color dropdown-toggle px-4 fables-second-hover-color fables-mega-menu-btn position-relative"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span class="fables-cart-number fables-second-background-color text-center">
                      3
                    </span>
                  </a>

                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <div class="p-3 cart-block">
                      <p class="fables-second-text-color semi-font mb-4 font-17">
                        (2) Items in my cart
                      </p>
                      <div class="row mx-0 mb-3">
                        <div class="col-4 p-0">
                          <a href="#">
                            <img src={sml1} alt="" class="w-100" />
                          </a>
                        </div>
                        <div class="col-8">
                          <h2>
                            <a
                              href="#"
                              class="fables-main-text-color font-13 d-block fables-main-hover-color"
                            >
                              LUIS LEATHER DRIVING
                            </a>
                          </h2>
                          <p class="fables-second-text-color font-weight-bold">
                            $ 100.00
                          </p>
                          <p class="fables-forth-text-color">QTY : 1</p>
                        </div>
                      </div>
                      <div class="row mx-0 mb-3">
                        <div class="col-4 p-0">
                          <a href="#">
                            <img
                              src="assets/custom/images/sml1.jpg"
                              alt=""
                              class="w-100"
                            />
                          </a>
                        </div>
                        <div class="col-8">
                          <h2>
                            <a
                              href="#"
                              class="fables-main-text-color font-13 d-block fables-main-hover-color"
                            >
                              LUIS LEATHER DRIVING
                            </a>
                          </h2>
                          <p class="fables-second-text-color font-weight-bold">
                            $ 100.00
                          </p>
                          <p class="fables-forth-text-color">QTY : 1</p>
                        </div>
                      </div>
                      <span class="font-16 semi-font fables-main-text-color">
                        TOTAL
                      </span>
                      <span class="font-14 semi-font fables-second-text-color float-right">
                        $200.00
                      </span>
                      <hr />
                      <div class="text-center">
                        <a
                          href="#"
                          class="fables-second-background-color fables-btn-rounded  text-center white-color py-2 px-3 font-14 bg-hover-transparent border fables-second-border-color fables-second-hover-color"
                        >
                          View my cart
                        </a>
                        <a
                          href="#"
                          class="fables-second-text-color border fables-second-border-color fables-btn-rounded text-center white-color p-2 px-4 font-14 fables-second-hover-background-color"
                        >
                          Checkout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header2;
