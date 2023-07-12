import React from "react";
import testimonials from "../../images/testimonial-img.png";
import videoimg from "../../images/index-video.jpg";
import playbtn from "../../images/play-button.png";

const Feedback = () => {
  return (
    <>
      <div class="fables-testimonial fables-after-overlay py-4 py-md-5 my-4 my-lg-5 half-width-testimonial bg-rules">
        <div class="container z-index position-relative">
          <div class="row">
            <div
              class="col-12 col-md-6 wow fadeIn"
              data-wow-duration="2.5s"
              data-wow-delay=".4s"
            >
              <p class="white-color font-25 mb-2">See what</p>
              <h2 class="fables-second-text-color font-35 font-weight-bold">
                others <span class="white-color">are saying</span>
              </h2>
              <p class="fables-third-text-color mt-4 mb-4">
                We care, we take a personalized approach to each customer, and
                our management team is never more than a phone call or email
                away.
              </p>
              <div
                class="owl-carousel owl-theme dots-0 nav-default"
                id="fables-testimonial-carousel"
              >
                <div class="text-center">
                  <div>
                    <div class="image-container shine-effect d-inline-block rounded-circle">
                      <img
                        src={testimonials}
                        alt="Fables Template"
                        class="fables-testimonial-carousel-img my-0 mx-auto rounded-circle"
                      />
                    </div>
                    <h3 class="font-14 semi-font  white-color mt-3">
                      Billy Richards
                    </h3>
                    <h3 class="font-13 font-italic white-color mt-2 mb-4">
                      Chief Manager, Simba Co
                    </h3>
                  </div>
                  <div class="fables-testimonial-carousel-item fables-rounded p-3">
                    <div class="fables-testimonial-detail font-15 font-italic white-color position-relative">
                      No matter what issue or questions pops up, you are always
                      there to assist me. Thank you so much for your excellent
                      assistance and great customer support through years.
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <div>
                    <div class="image-container shine-effect d-inline-block rounded-circle">
                      <img
                        src={testimonials}
                        alt="Fables Template"
                        class="fables-testimonial-carousel-img my-0 mx-auto rounded-circle"
                      />
                    </div>
                    <h3 class="font-14 semi-font  white-color mt-3">
                      Billy Richards
                    </h3>
                    <h3 class="font-13 font-italic white-color mt-2 mb-4">
                      Chief Manager, Simba Co
                    </h3>
                  </div>
                  <div class="fables-testimonial-carousel-item fables-rounded p-3">
                    <div class="fables-testimonial-detail font-15 font-italic white-color position-relative">
                      No matter what issue or questions pops up, you are always
                      there to assist me. Thank you so much for your excellent
                      assistance and great customer support through years.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-12 col-md-6 wow fadeIn mt-4 mt-md-5 mt-lg-0"
              data-wow-duration="2.5s"
              data-wow-delay=".4s"
            >
              <div class="position-relative image-container zoomIn-effect">
                <img src={videoimg} alt="" class="img-fluid" />
                <div class="demo-gallery-poster fables-main-gradient">
                  <a
                    data-fancybox
                    href="https://www.youtube.com/watch?v=meBbDqAXago"
                  >
                    <img src={playbtn} alt="play button" class="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
