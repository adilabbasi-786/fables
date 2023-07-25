import React, { useEffect, useState } from "react";
import chooseus from "../../images/choose-us-index.jpg";

const Services = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let req = await fetch("http://localhost:1337/api/services");
      let res = await req.json();
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <>
      <div class="container-fluid my-0 my-lg-5" id="my-services">
        <div class="row">
          <div class="col-12 col-lg-2 p-0">
            <div class="text-center fables-main-background-color fables-sqr-rotation fables-second-border-color fables-sqr-rotation-services">
              <div class="text-rotate">
                <h2 class="text-white font-25">
                  Our <br />
                  <span class="white-color font-40 bold-font mt-2 d-block">
                    Services
                  </span>
                </h2>
                <p class="fables-third-text-color mt-4 mb-3 mb-lg-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-10 p-0">
            <div class="fables-index-services fables-after-overlay py-md-5 px-3 pr-md-4 pl-md-5 bg-rules sm-index-products mt-lg-0 mt-xl-5">
              <div class="container z-index position-relative">
                <div class="row">
                  <div class="col-12 col-lg-10 offset-lg-2">
                    <div class="row">
                      {data.map((item) => (
                        <div
                          class="col-12 col-sm-6 pb-lg-5 mt-4 mt-lg-0 wow fadeInDown"
                          data-wow-delay=".4s"
                        >
                          <div class="row text-center text-md-left">
                            <div class="col-12 col-md-3 col-xl-2 mb-3 mb-md-0"></div>
                            <div class="col-12 col-md-9 pl-md-0">
                              <h2 class="text-white font-19 semi-font mb-2">
                                <i
                                  class={`${item.attributes.icon} fables-second-text-color font-40`}
                                ></i>
                                &nbsp;
                                <span> {item?.attributes?.title}</span>
                              </h2>
                              <div class="font-14 text-white">
                                {item.attributes.desc}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Start why choose us -->  */}
      <div class="container-fluid">
        <div class="row mt-3 mt-md-5">
          <div class="col-12 col-lg-5 offset-lg-1 mb-4 mb-lg-0 overflow-hidden">
            <h2 class="fables-second-text-color font-35 bold-font wow fadeInLeft">
              {" "}
              WHY <span class="fables-main-text-color">CHOOSE US</span>
            </h2>
            <p class="fables-forth-text-color my-3 wow fadeInLeft">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              porttitor purus ac tellus auctor auctor. Nulla tincidunt lobortis
              aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Cras porttitor purus ac tellus auctor auctor. Nulla tincidunt
              lobortis aliquam.
            </p>
            <div class="position-relative mb-3 wow bounceInDown">
              <p class="fables-fifth-text-color">
                <span class="fables-iconDiagonal-arrow"></span>
                Lorem ipsum dolor sit amet adipiscing elit.tur adipiscing elit.
              </p>
            </div>
            <div class="position-relative mb-3 wow bounceInDown">
              <p class="fables-fifth-text-color">
                <span class="fables-iconDiagonal-arrow"></span>
                Lorem ipsum dolor sit amet adipiscing elit.tur adipiscing elit.
              </p>
            </div>
            <div class="position-relative mb-3 wow bounceInDown">
              <p class="fables-fifth-text-color">
                <span class="fables-iconDiagonal-arrow"></span>
                Lorem ipsum dolor sit amet adipiscing elit.tur adipiscing elit.
              </p>
            </div>
            <div class="position-relative mb-3 wow bounceInDown">
              <p class="fables-fifth-text-color">
                <span class="fables-iconDiagonal-arrow"></span>
                Lorem ipsum dolor sit amet adipiscing elit.tur adipiscing elit.
              </p>
            </div>
            <a
              href="#"
              class="btn fables-second-background-color white-color white-color-hover py-2 px-4 my-2 rounded-0 font-18"
            >
              Learn More
            </a>
          </div>
          <div class="col-12 col-lg-5 offset-lg-1 p-0 text-right mb-lg-5">
            <img src={chooseus} alt="" class="w-100" />
            <div class="choose-img-border-after fables-second-border-color position-relative"></div>
          </div>
        </div>
      </div>
      {/* <!-- End why choose us --> */}
    </>
  );
};

export default Services;
