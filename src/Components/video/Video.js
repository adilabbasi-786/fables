import React from "react";

const Video = () => {
  return (
    <>
      <section class="content-section video-section fables-after-overlay">
        <div class="pattern-overlay">
          <a
            id="bgndVideo"
            class="player"
            data-property="{videoURL:'https://www.youtube.com/watch?v=fdJc1_IBKJA',containment:'.video-section', quality:'large',mute: 'true' ,autoPlay:true, opacity:1}"
          >
            bg
          </a>
          <div class="container position-relative z-index">
            <div
              class="fables-video-caption text-center wow zoomIn"
              data-wow-delay="1s"
              data-wow-duration="2s"
            >
              <h1 class="white-color font-weight-bold mt-6">
                We are a full service digital product agency{" "}
              </h1>
              <p class="fables-fifth-text-color mt-3 mb-4 font-18">
                We are a full service digital product agency
              </p>
              <a
                data-fancybox
                href="https://www.youtube.com/watch?v=meBbDqAXago"
              >
                <span class="fables-iconplay fables-second-text-color fa-4x wow bounce"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
