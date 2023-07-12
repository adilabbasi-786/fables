import React from "react";
import par1 from "../../images/partner2-1.jpg";
import par2 from "../../images/partner2-2.jpg";

function Partner() {
  return (
    <>
      <div class="fables-light-background-color py-4">
        <div class="container">
          <div class="owl-carousel owl-theme nav-0 carousel-items-6 dots-0">
            <div>
              <img
                src={par1}
                alt="Fables Template"
                class="fables-partner-carousel-img"
              />
            </div>
            <div>
              <img
                src={par2}
                alt="Fables Template"
                class="fables-partner-carousel-img"
              />
            </div>
            <div>
              <img
                src={par2}
                alt="Fables Template"
                class="fables-partner-carousel-img"
              />
            </div>
            <div>
              <img
                src={par1}
                alt="Fables Template"
                class="fables-partner-carousel-img"
              />
            </div>
            <div>
              <img
                src={par2}
                alt="Fables Template"
                class="fables-partner-carousel-img"
              />
            </div>
            <div>
              <img
                src={par1}
                alt="Fables Template"
                class="fables-partner-carousel-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partner;
