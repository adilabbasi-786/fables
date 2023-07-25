import React, { useContext, useState } from "react";
import sml1 from "../images/sml1.jpg";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const Cart = useContext(CartContext);
  console.log(Cart);
  const [openCart, showOpenCart] = useState(false);
  return (
    <>
      <div class="dropdown">
        <a
          class="fables-third-text-color dropdown-toggle right px-3 px-md-2 px-lg-4 fables-second-hover-color top-header-link max-line-height position-relative"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="false"
          aria-expanded="true"
          onClick={() => showOpenCart(!openCart)}
          style={{ cursor: "pointer" }}
        >
          <i class="fa-solid fa-cart-shopping "></i>
          <span class="fables-cart-number fables-second-background-color text-center">
            3
          </span>
        </a>

        <div
          class="dropdown-menu"
          aria-labelledby="dropdownMenuButton"
          style={openCart ? { display: "block" } : { display: "none" }}
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
            <span class="font-16 semi-font fables-main-text-color">TOTAL</span>
            <span class="font-14 semi-font fables-second-text-color float-right">
              $200.00
            </span>
            <hr />
            <div class="text-center">
              <a
                href="/singleproduct"
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
    </>
  );
};

export default Cart;
