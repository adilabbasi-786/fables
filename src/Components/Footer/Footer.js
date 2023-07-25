import React from "react";
import fablelogo from "../../images/fables-logo.png";
import Contact from "./Contact";
import Subscribe from "./subscribe";

function Footer() {
  return (
    <>
      <div class="fables-footer-image fables-after-overlay white-color py-4 py-lg-5 bg-rules">
        <div class="container">
          <div class="row">
            <Subscribe />
            <div class="col-12 col-lg-4 mb-4 mb-lg-0">
              <a
                href="#"
                class="fables-second-border-color border-bottom pb-3 d-block mb-3 mt-minus-13"
              >
                <img src={fablelogo} alt="fables template" />
              </a>
              <p class="font-15 fables-third-text-color">
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters.
                <br />t is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout.
              </p>
            </div>
            <Contact />

            <div class="col-12 col-sm-6 col-lg-4">
              <h2 class="font-20 semi-font fables-second-border-color border-bottom pb-3 mb-3">
                EXPLORE OUR SITE
              </h2>
              <ul class="nav fables-footer-links">
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/products">Products</a>
                </li>
                <li>
                  <a href="#teams">Team</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright fables-main-background-color mt-0 border-0 white-color">
        <ul class="nav fables-footer-social-links just-center fables-light-footer-links">
          <li>
            <a href="#" target="_blank">
              <i class="fab fa-google-plus-square"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i class="fab fa-pinterest-square"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i class="fab fa-twitter-square"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
        <p class="mb-0">Copyright © Fables 2018. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
