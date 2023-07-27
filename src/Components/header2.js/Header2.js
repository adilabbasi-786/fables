import React, { useState } from "react";
import fableslogo from "../../images/fables-logo.png";
import { NavLink, Link } from "react-router-dom";
import Cart from "../Cart";
const Header2 = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div class="fables-navigation fables-main-background-color py-3 py-lg-0">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-10 col-lg-9 pr-md-0">
              <nav class="navbar navbar-expand-md btco-hover-menu py-lg-2">
                <a class="navbar-brand fables-logo-brand pl-0" href="/">
                  <Link to="/">
                    <img
                      src={fableslogo}
                      alt="Fables Template"
                      class="fables-logo"
                    />
                  </Link>
                </a>
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#fablesNavDropdown"
                  data-controls="#fablesNavDropdown"
                  onClick={() => setShow(!show)}
                >
                  <i class="fa-solid fa-bars text-white font-16"></i>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="fablesNavDropdown"
                  style={show ? { display: "block" } : { display: "none" }}
                >
                  <ul class="navbar-nav mx-auto fables-nav">
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="/"
                        id="sub-nav1"
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
                        href="/products"
                        id="sub-nav4"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Products
                      </a>
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
            <div class="col-12 col-md-2 col-lg-3 pr-md-0 icons-header-mobile">
              <div class="fables-header-icons">
                <Cart />
                <a
                  href="#"
                  class="open-search fables-third-text-color right  top-header-link px-3 px-md-2 px-lg-4 fables-second-hover-color border-0 max-line-height"
                >
                  <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                </a>
                <a
                  href="/login"
                  class="fables-third-text-color fables-second-hover-color font-13 top-header-link px-3 px-md-2 px-lg-4 max-line-height"
                >
                  <i class="fa-solid fa-user"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header2;
