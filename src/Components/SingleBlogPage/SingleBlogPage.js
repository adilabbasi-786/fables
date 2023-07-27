import React, { useEffect, useState } from "react";
import cat1 from "../../images/blog-cat1.jpg";
import cat2 from "../../images/blog-cat2.jpg";
import cat3 from "../../images/blog-cat3.jpg";
import cat4 from "../../images/blog-cat4.jpg";
import cat5 from "../../images/blog-cat5.jpg";
import cat6 from "../../images/blog-cat6.jpg";
import main from "../../images/pexels-photo-288477.jpg";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
const SingleBlogPage = (item) => {
  const { id } = useParams();
  const [data, setDAta] = useState({});
  useEffect(() => {
    const getData = async () => {
      let req = await fetch(`http://localhost:1337/api/blogs/${id}?populate=*`);
      let res = await req.json();
      setDAta(res.data);
    };
    getData();
  }, []);
  return (
    <>
      <div class="fables-header fables-after-overlay bg-rules">
        <div class="container">
          <h2 class="fables-page-title fables-second-border-color">
            Blog Details 1
          </h2>
        </div>
      </div>
      <div class="fables-light-background-color">
        <div class="container">
          <nav aria-label="breadcrumb">
            <ol class="fables-breadcrumb breadcrumb px-0 py-3">
              <li class="breadcrumb-item">
                <a href="/" class="fables-second-text-color">
                  Home
                </a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Blog Details 1
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Getting to Another Level of Design{" "}
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="container" key={item.id}>
        <div class="row">
          <div class="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 mt-4 mt-xl-5">
            <h1 class="fables-second-text-color font-20 mb-3 semi-font">
              {data?.attributes?.title}
            </h1>
            <p class="fables-forth-text-color font-14">
              {data?.attributes?.desc}
            </p>

            <div class="row">
              <div class="col-sm-10 offset-sm-1">
                <div class="fables-blog-quote fables-main-text-color text-center my-5 italic semi-font font-14 px-4 px-md-0">
                  <span class="fables-iconquote-left-light"></span>
                  No matter what issue or questions pops up, you are always
                  there to assist me. Thank you so much for your excellent
                  assistance and great customer support through years.
                  <span class="fables-iconquote-right-light"></span>
                </div>
              </div>
            </div>

            <p class="fables-forth-text-color font-14">
              {data?.attributes?.addtional_desc}
            </p>
          </div>
        </div>
        <div>
          <div class="row mt-4 mt-lg-5 mb-0 mb-lg-4">
            <div class="col-12 col-sm-6 col-md-3 mb-4">
              <div class="image-container rotateIn-effect">
                <img
                  src={`http://localhost:1337${data?.attributes?.img?.data[0]?.attributes?.url}`}
                  alt=""
                  class="w-100"
                />
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3 mb-4">
              <div class="image-container rotateIn-effect">
                <img
                  src={`http://localhost:1337${data?.attributes?.img?.data[1]?.attributes?.url}`}
                  alt=""
                  class="w-100"
                />
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3 mb-4">
              <div class="image-container rotateIn-effect">
                <img
                  src={`http://localhost:1337${data?.attributes?.img?.data[2]?.attributes?.url}`}
                  alt=""
                  class="w-100"
                />
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3 mb-4">
              <div class="image-container rotateIn-effect">
                <img
                  src={`http://localhost:1337${data?.attributes?.img?.data[3]?.attributes?.url}`}
                  alt=""
                  class="w-100"
                />
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3 mb-4">
              <div class="image-container rotateIn-effect">
                <img
                  src={`http://localhost:1337${data?.attributes?.img?.data[4]?.attributes?.url}`}
                  alt=""
                  class="w-100"
                />
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3 mb-4">
              <div class="image-container rotateIn-effect">
                <img
                  src={`http://localhost:1337${data?.attributes?.img?.data[5]?.attributes?.url}`}
                  alt=""
                  class="w-100"
                />
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3 mb-4">
              <div class="image-container rotateIn-effect">
                <img
                  src={`http://localhost:1337${data?.attributes?.img?.data[6]?.attributes?.url}`}
                  alt=""
                  class="w-100"
                />
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3 mb-4">
              <div class="image-container rotateIn-effect">
                <img
                  src={`http://localhost:1337${data?.attributes?.img?.data[7]?.attributes?.url}`}
                  alt=""
                  class="w-100"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
              <p class="fables-forth-text-color font-14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                iaculis egestas nisl vel faucibus. Pellentesque ac dapibus orci.
                In aliquam nisi at est posuere ornare. Aliquam scelerisque magna
                a turpis mollis, eu interdum enim commodo. In quis tellus
                consequat, vehicula nunc pretium, gravida mauris. In commodo
                convallis massa, sit amet gravida erat dictum vitae. Etiam
                sollicitudin leo ut quam egestas, ullamcorper placerat nunc
                facilisis. Nunc iaculis, lorem euismod euismod venenatis, magna
                leo euismod felis, et laoreet velit lacus ac nisl lorem euismod
                euismod venenatis.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Duis iaculis egestas nisl vel faucibus.
                Pellentesque ac dapibus orci. In aliquam nisi at est posuere
                ornare
              </p>
            </div>
          </div>
          <div class="mb-4 mb-lg-5">
            <div class="owl-carousel owl-theme default-carousel absolute-dots my-4 my-lg-5 nav-0" />
            <div class="image-container rotateIn-effect">
              <a href="#">
                <img
                  src={`http://localhost:1337${data?.attributes?.img?.data[8]?.attributes?.url}`}
                  alt=""
                  class="w-100"
                />
              </a>
            </div>
          </div>
          <p class="fables-forth-text-color font-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            iaculis egestas nisl vel faucibus. Pellentesque ac dapibus orci. In
            aliquam nisi at est posuere ornare. Aliquam scelerisque magna a
            turpis mollis, eu interdum enim commodo. In quis tellus consequat,
            vehicula nunc pretium, gravida mauris. In commodo convallis massa,
            sit amet gravida erat dictum vitae. Etiam sollicitudin leo ut quam
            egestas, ullamcorper placerat nunc facilisis. Nunc iaculis, lorem
            euismod euismod venenatis, magna leo euismod felis, et laoreet velit
            lacus ac nisl lorem euismod euismod venenatis.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Duis iaculis egestas nisl vel
            faucibus. Pellentesque ac dapibus orci. In aliquam nisi at est
            posuere ornare
          </p>
          <hr />
          <div class="fabales-single-share">
            <div class="row">
              <div class="col-3 col-sm-2 col-md-1">
                <span class="fables-forth-text-color underline  mt-2 font-18 d-inline-block">
                  Share
                </span>
              </div>
              <div class="col-8 col-sm-5">
                <ul class="nav mt-2">
                  <li>
                    <a
                      href=""
                      class="fables-forth-text-color fables-single-link fables-second-hover-color"
                    >
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      class="fables-forth-text-color fables-single-link fables-second-hover-color"
                    >
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      class="fables-forth-text-color fables-single-link fables-second-hover-color"
                    >
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      class="fables-forth-text-color fables-single-link fables-second-hover-color"
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-12 col-sm-5 col-md-6 mt-3 mt-sm-0">
                <span class="fables-forth-text-color float-sm-right font-14 ">
                  09 November, 2018
                </span>
              </div>
            </div>
          </div>
          <div class="mt-4 mt-lg-5">
            <a
              href=""
              class="fables-forth-text-color fables-second-hover-color"
            >
              <i class="fa-solid fa-arrow-left"></i>
              <span class="underline">Prev Article</span>
            </a>
            <a
              href=""
              class="fables-forth-text-color fables-second-hover-color float-right"
            >
              <span class="underline">Next Article</span>
              <i class="fa-solid fa-right-long"></i>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleBlogPage;
