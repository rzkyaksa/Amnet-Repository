import React from "react";

const SignUp = () => {
  const listCountry = [
    "Indonesia",
    "Malaysia",
    "Singapura",
    "Thailand",
    "Filipina",
    "Brunei",
    "Vietnam",
    "Laos",
    "Myanmar",
    "Kamboja",
    "Timor Leste",
  ];

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
              Sign Up
            </div>
            <div style={{ width: "80%" }}>
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                      />
                    </div>
                  </div>
                </div>
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
                <div class="mb-3">
                  <label for="country" class="form-label">
                    Country
                  </label>
                  <select id="country" class="form-select">
                    <option selected="true" disabled="disabled">
                      {" "}
                    </option>
                    {listCountry.map((item) => (
                      <option>{item}</option>
                    ))}
                  </select>
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
            >
              Create an account
            </div>
            <div className="mt-3">
              <span style={{ color: "#707070" }}>
                Already have an account?{" "}
              </span>
              <a
                href="/login"
                className="fw-semibold"
                style={{ color: "#5B7F69", textDecoration: "none" }}
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
