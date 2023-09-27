import React from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const cookies = new Cookies();
  const navigate = new useNavigate();

  const actionSignIn = () => {
    cookies.set("token", "adsqeqwe131hbu08uy8912bhsdb");
    return navigate("/");
  };

  return (
    <div className="row" style={{ width: "100%", marginLeft: 0 }}>
      <div
        className="col-lg-4 d-flex justify-content-center align-items-center"
        style={{ height: "100vh", backgroundColor: "#F2F2F2" }}
      >
        <div style={{ width: "40%" }}>
          <img
            src="/image/logo_login.png"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="logo-AMT"
          />
        </div>
      </div>
      <div className="col-lg-8" style={{ height: "100vh" }}>
        <div className="row justify-content-center" style={{ height: "100vh" }}>
          <div
            className="col-9 d-flex justify-content-center align-items-center flex-column"
            style={{ backgroundColor: "white" }}
          >
            <div className="fw-semibold mb-4" style={{ fontSize: 40 }}>
              Sign In
            </div>
            <div style={{ width: "80%" }}>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
              </form>
            </div>
            <div
              className="mt-4 py-2 px-3 fw-semibold"
              style={{
                backgroundColor: "#5B7F69",
                color: "white",
                borderRadius: 20,
                fontSize: 18,
              }}
              onClick={() => actionSignIn()}
            >
              Sign In
            </div>
            <div className="mt-3">
              <span style={{ color: "#707070" }}>
                You don't have an account?{" "}
              </span>
              <a
                href="/signup"
                className="fw-semibold"
                style={{ color: "#5B7F69", textDecoration: "none" }}
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
