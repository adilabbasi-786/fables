import React, { useState, useEffect } from "react";
import team2 from "../../images/team2-1.jpg";
import team22 from "../../images/team2-2.jpg";
import team21 from "../../images/team2-1.jpg";

function Teams() {
  const [data, setData] = useState([
    {
      id: 1,
      attributes: {
        name: "JOHN MARTIN",
        designation: "programer",
        createdAt: "2023-07-13T15:03:55.433Z",
        updatedAt: "2023-07-13T15:04:52.952Z",
        publishedAt: "2023-07-13T15:04:52.949Z",
        img: {
          data: {
            id: 1,
            attributes: {
              name: "team1-3.jpg",
              alternativeText: null,
              caption: null,
              width: 234,
              height: 243,
              formats: {
                thumbnail: {
                  name: "thumbnail_team1-3.jpg",
                  hash: "thumbnail_team1_3_708eda6bb9",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 150,
                  height: 156,
                  size: 5.01,
                  url: "/uploads/thumbnail_team1_3_708eda6bb9.jpg",
                },
              },
              hash: "team1_3_708eda6bb9",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 9.88,
              url: "/uploads/team1_3_708eda6bb9.jpg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2023-07-13T15:03:42.280Z",
              updatedAt: "2023-07-13T15:05:49.590Z",
            },
          },
        },
      },
    },
    {
      id: 2,
      attributes: {
        name: "Marthon",
        designation: "Quality Assurance",
        createdAt: "2023-07-13T15:04:44.743Z",
        updatedAt: "2023-07-13T15:05:06.331Z",
        publishedAt: "2023-07-13T15:04:48.373Z",
        img: {
          data: {
            id: 3,
            attributes: {
              name: "team1-1.jpg",
              alternativeText: null,
              caption: null,
              width: 234,
              height: 243,
              formats: {
                thumbnail: {
                  name: "thumbnail_team1-1.jpg",
                  hash: "thumbnail_team1_1_3d9ac9f86f",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 150,
                  height: 156,
                  size: 5.01,
                  url: "/uploads/thumbnail_team1_1_3d9ac9f86f.jpg",
                },
              },
              hash: "team1_1_3d9ac9f86f",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 9.53,
              url: "/uploads/team1_1_3d9ac9f86f.jpg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2023-07-13T15:03:42.311Z",
              updatedAt: "2023-07-13T15:03:42.311Z",
            },
          },
        },
      },
    },
    {
      id: 3,
      attributes: {
        name: "Jhon Abraham",
        designation: "CEO",
        createdAt: "2023-07-13T15:05:53.307Z",
        updatedAt: "2023-07-13T15:05:55.026Z",
        publishedAt: "2023-07-13T15:05:55.022Z",
        img: {
          data: {
            id: 1,
            attributes: {
              name: "team1-3.jpg",
              alternativeText: null,
              caption: null,
              width: 234,
              height: 243,
              formats: {
                thumbnail: {
                  name: "thumbnail_team1-3.jpg",
                  hash: "thumbnail_team1_3_708eda6bb9",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 150,
                  height: 156,
                  size: 5.01,
                  url: "/uploads/thumbnail_team1_3_708eda6bb9.jpg",
                },
              },
              hash: "team1_3_708eda6bb9",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 9.88,
              url: "/uploads/team1_3_708eda6bb9.jpg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2023-07-13T15:03:42.280Z",
              updatedAt: "2023-07-13T15:05:49.590Z",
            },
          },
        },
      },
    },
    {
      id: 4,
      attributes: {
        name: "kameena",
        designation: "kalaam",
        createdAt: "2023-07-13T15:06:34.258Z",
        updatedAt: "2023-07-13T15:06:35.180Z",
        publishedAt: "2023-07-13T15:06:35.177Z",
        img: {
          data: {
            id: 4,
            attributes: {
              name: "team1-4.jpg",
              alternativeText: null,
              caption: null,
              width: 234,
              height: 243,
              formats: {
                thumbnail: {
                  name: "thumbnail_team1-4.jpg",
                  hash: "thumbnail_team1_4_8f7c8d872c",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 150,
                  height: 156,
                  size: 7.06,
                  url: "/uploads/thumbnail_team1_4_8f7c8d872c.jpg",
                },
              },
              hash: "team1_4_8f7c8d872c",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 13.55,
              url: "/uploads/team1_4_8f7c8d872c.jpg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2023-07-13T15:06:31.551Z",
              updatedAt: "2023-07-13T15:06:31.551Z",
            },
          },
        },
      },
    },
  ]);
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
      <div class="container">
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
