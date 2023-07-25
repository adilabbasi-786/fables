import React, { useEffect, useState } from "react";
import magazine from "../../images/magazine-2559842.jpg";

function Blogs() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let req = await fetch(
        "http://localhost:1337/api/blogs?filters[show_on_Homepage][$eq]=true&pagination[page]=1&pagination[pageSize]=3&populate=*"
      );
      let res = await req.json();
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="font-35 font-weight-bold fables-main-text-color my-4 my-lg-5 text-center">
              Latest Blog
            </h2>
          </div>
          {data.map((item) => (
            <div
              class="col-12 col-md-4 mb-4 mb-md-5 wow fadeIn"
              data-wow-delay=".6s"
            >
              <div class="image-container zoomIn-effect">
                <a href="#">
                  <img
                    src={`http://localhost:1337${item.attributes.img.data.attributes.url}`}
                    alt=""
                  />
                </a>
              </div>

              <div class="above-date py-2 py-lg-3 fables-fifth-text-color float-left w-100 d-md-none d-lg-block">
                <div class="float-left font-13">
                  <i class="fa-solid fa-calendar-days"></i>&nbsp;
                  {item.attributes.date}
                </div>
                <div class="float-right font-13">
                  <i class="fa-solid fa-newspaper"></i>
                  &nbsp; Latest News
                </div>
              </div>
              <h2 class="font-weight-bold font-20 my-2">
                <a
                  href="#"
                  class="fables-main-text-color fables-second-hover-color"
                >
                  {item?.attributes?.title}
                </a>
              </h2>

              <p class="fables-forth-text-color font-14">
                {item?.attributes?.desc}
              </p>
              <a
                href=""
                class="btn fables-main-text-color fables-second-hover-color p-0 mt-2"
              >
                <span class="underline">Read More</span>
                &nbsp;
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blogs;
