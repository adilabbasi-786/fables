import React from "react";
import logo from "../../src/images/logo-dark.png";

function Signup() {
  return (
    <>
      <div class="fables-header fables-after-overlay">
        <div class="container">
          <h2 class="fables-page-title fables-second-border-color">Register</h2>
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
                Register
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="container">
        <div class="row my-4 my-lg-5">
          <div class="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3 text-center">
            <img src={logo} alt="signin" class="img-fluid" />
            <p class="font-20 semi-font fables-main-text-color mt-4 mb-5">
              Create a new account
            </p>
            <form>
              <div class="form-row form-group">
                <div class="col-12 col-md-6 mb-4 mb-md-0">
                  <div class="input-icon">
                    <i class="fa-solid fa-user fables-input-icon mt-2 font-13"></i>
                    <input
                      type="text"
                      class="form-control rounded-0 py-3 pl-5 font-13 sign-register-input"
                      placeholder="First name"
                    />
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="input-icon">
                    <i class="fa-solid fa-user fables-input-icon mt-2 font-13"></i>

                    <input
                      type="text"
                      class="form-control rounded-0 py-3 pl-5 font-13 sign-register-input"
                      placeholder="Last name"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="input-icon">
                  <i class="fa-sharp fa-regular fa-envelope fables-input-icon mt-2 font-13"></i>
                  <input
                    type="email"
                    class="form-control rounded-0 py-3 pl-5 font-13 sign-register-input"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="input-icon">
                  <i class="fa-solid fa-lock fables-input-icon font-19 mt-1"></i>
                  <input
                    type="password"
                    class="form-control rounded-0 py-3 pl-5 font-13 sign-register-input"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="input-icon">
                  <i class="fa-solid fa-lock fables-input-icon font-19 mt-1"></i>

                  <input
                    type="password"
                    class="form-control rounded-0 py-3 pl-5 font-13 sign-register-input"
                    placeholder="Repeat Password"
                  />
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-block rounded-0 white-color fables-main-hover-background-color fables-second-background-color font-16 semi-font py-3"
              >
                Register Now
              </button>
              <a
                href="#"
                class="fables-forth-text-color font-16 fables-second-hover-color underline mt-3 mb-4 mb-lg-5 d-block"
              >
                Forgot Password ?
              </a>
              <p class="fables-forth-text-color">
                Already have an account ?{" "}
                <a
                  href="/login"
                  class="font-16 semi-font fables-second-text-color underline fables-main-hover-color ml-2"
                >
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
