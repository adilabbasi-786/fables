import React, { useContext, useState } from "react";
import { MdClose } from "react-icons/md";
import AppContext, { Context } from "../Context/CartContext";
import CartItem from "./CartItem";
import { BsCartX } from "react-icons/bs";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const Cart = useContext(AppContext);
  const [openCart, showOpenCart] = useState(false);
  const { cartCount, cartItems, cartSubTotal } = useContext(Context);

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
          <i class="fa-solid fa-cart-shopping " id="cart-icon"></i>
          <span class="fables-cart-number fables-second-background-color text-center">
            <span>{cartCount}</span>
          </span>
        </a>

        <div
          class="dropdown-menu"
          aria-labelledby="dropdownMenuButton"
          style={openCart ? { display: "block" } : { display: "none" }}
        >
          <div class="p-3 cart-block">
            <MdClose
              style={{
                gap: "115px",
                alignItems: "center",
                cursor: "pointer",
                marginLeft: 250,
              }}
              onClick={() => showOpenCart(false)}
            />
            {!cartItems?.length && (
              <div className="empty-cart">
                <i class="fas fa-shopping-cart fa-2x"></i>
                <span>No Products in cart</span>
                <Link to={"/"}>
                  <button
                    className="return-cta"
                    style={{ background: "#9090e6", cursor: "pointer" }}
                  >
                    Return to shop
                  </button>
                </Link>
              </div>
            )}
            <CartItem />
            <hr />
            {!!cartItems?.length && (
              <>
                <span class="font-16 semi-font fables-main-text-color">
                  Sub_TOTAL
                </span>
                <span class="font-14 semi-font fables-second-text-color float-right">
                  ${cartSubTotal}
                </span>
                <hr />
                <div class="text-center">
                  <a
                    href="#"
                    class="fables-second-text-color border fables-second-border-color fables-btn-rounded text-center white-color p-2 px-4 font-14 fables-second-hover-background-color"
                  >
                    Checkout
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
