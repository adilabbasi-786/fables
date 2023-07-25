import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const handleClick = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: { email: email },
      }),
    };
    const response = await fetch(
      "http://localhost:1337/api/subscribes",
      requestOptions
    );
    const data = await response.json();
    setEmail("");
  };
  return (
    <>
      <div class="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-2 mb-5 text-center">
        <h2 class="font-30 semi-font mb-5">Newsletter</h2>
        <div class="form-inline position-relative">
          <div class="form-group fables-subscribe-formgroup">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              class="form-control fables-subscribe-input fables-btn-rouned"
              placeholder="Your Email"
            />
          </div>
          <button
            onClick={handleClick}
            type="submit"
            class="btn fables-second-background-color fables-btn-rouned fables-subscribe-btn"
          >
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
