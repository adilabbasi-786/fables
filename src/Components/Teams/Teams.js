import React, { useState, useEffect } from "react";
import team2 from "../../images/team2-1.jpg";
import team22 from "../../images/team2-2.jpg";
import team21 from "../../images/team2-1.jpg";

function Teams() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let req = await fetch("http://localhost:1337/api/teams?populate=*");
      let res = await req.json();
      setData(res.data);
    };
    getData();
  }, []);

  return (
    <>
      <div class="container" id="teams">
        <div class="fables-team">
          <h2 class="font-35 font-weight-bold text-center fables-main-text-color my-3 my-lg-5">
            Team
          </h2>
          <div class="row overflow-hidden">
            {data.map((item) => (
              <div
                class="col-6 col-md-3 wow bounceInDown mb-3"
                data-wow-duration="2s"
                data-wow-delay=".4s"
                key={item.id}
              >
                <div class="card fables-team-block fables-second-hover-text-color">
                  <div class="image-container shine-effect">
                    <a href="#">
                      <img
                        class="w-100"
                        src={`http://localhost:1337${item.attributes.img.data.attributes.url}`}
                        alt="Fables Template"
                      />
                    </a>
                  </div>
                  <div class="card-body">
                    <h5>
                      <a
                        href="#"
                        class="font-19 semi-font fables-main-text-color team-name"
                      >
                        {item?.attributes?.name}
                      </a>
                    </h5>
                    <p class="font-13 fables-fifth-text-color italic my-2">
                      {item.attributes.designation}
                    </p>
                    <ul class="nav fables-team-social-links">
                      <li>
                        <a href="#" target="_blank">
                          <i class="fa-brands fa-facebook fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i class="fa-brands fa-twitter fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i class="fa-brands fa-square-instagram fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Teams;
