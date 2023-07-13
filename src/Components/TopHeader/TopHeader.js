import React from "react";

const TopHeader = () => {
  return (
    <>
      <div class="fables-top-header-signin  fables-forth-background-color">
        <div class="container">
          <div class="row" id="top-row">
            <div class="col-12 col-sm-3 col-lg-5">
              <a
                href="/signup"
                class="top-link fables-third-text-color fables-second-hover-color font-13 px-3 d-inline-block border-left-0"
              >
                <i class="fas fa-user-plus"></i> Register{" "}
              </a>
              <a
                href="#search"
                class="fables-third-text-color fables-second-hover-color px-3 d-inline-block border-left-0"
              >
                <span class="fables-iconsearch-icon"></span>
              </a>
            </div>
            <div class="col-12 col-sm-5 col-lg-4 text-left text-lg-right">
              <p class="fables-third-text-color font-13">
                <span class="fables-iconphone"></span> Phone : (888) 6000 6000 -
                (888) 6000 6000
              </p>
            </div>
            <div class="col-12 col-sm-4 col-lg-3 text-left text-lg-right">
              <p class="fables-third-text-color font-13">
                <span class="fables-iconemail"></span> Email: Design@domain.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
