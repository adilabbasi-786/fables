import React, { useEffect, useState } from "react";

const Contact = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let req = await fetch("http://localhost:1337/api/footer-contacts");
      let res = await req.json();
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <>
      {data.map((item) => (
        <div class="col-12 col-sm-6 col-lg-4">
          <h2 class="font-20 semi-font fables-second-border-color border-bottom pb-3">
            Contact us
          </h2>
          <div class="my-3">
            <h4 class="font-16 semi-font">
              <i class="fa-solid fa-location-dot fables-second-text-color pr-2 font-20 mt-1 d-inline-block"></i>{" "}
              Address Information
            </h4>
            <p class="font-14 fables-fifth-text-color mt-2 ml-4">
              {item.attributes.address}
            </p>
          </div>
          <div class="my-3">
            <h4 class="font-16 semi-font">
              <i class="fa-solid fa-phone fables-second-text-color pr-2 font-20 mt-1 d-inline-block"></i>
              Call Now{" "}
            </h4>
            <p class="font-14 fables-fifth-text-color mt-2 ml-4">
              {item.attributes.phone_number}
            </p>
          </div>
          <div class="my-3">
            <h4 class="font-16 semi-font">
              <i class="fa-solid fa-envelope fables-second-text-color pr-2 font-20 mt-1 d-inline-block"></i>
              Mail{" "}
            </h4>
            <p class="font-14 fables-fifth-text-color mt-2 ml-4">
              {item.attributes.email}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Contact;
