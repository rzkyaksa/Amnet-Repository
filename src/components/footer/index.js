import React from "react";

const Footer = () => {
  return (
    <div className="mt-5 pt-4">
      <footer
        className="page-footer shadow py-5"
        style={{
          backgroundColor: "#5B7F69",
          color: "white",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <div className="row justify-content-between mb-5">
          <div className="col-lg-3 row justify-content-start align-items-center">
            <img
              src="./image/logo_footer.png"
              style={{
                width: "50%",
                height: "75%",
                objectFit: "contain",
              }}
              alt="logo"
            />
          </div>
          <div className="col-lg-3">
            <div
              className="mb-3"
              style={{ color: "white", opacity: 0.75, fontSize: 16 }}
            >
              MENU
            </div>
            <div className="mb-2">
              <a
                href="#"
                style={{ color: "white", textDecoration: "none", fontSize: 16 }}
              >
                Home
              </a>
            </div>
            <div className="mb-2">
              <a
                href="#"
                style={{ color: "white", textDecoration: "none", fontSize: 16 }}
              >
                Content
              </a>
            </div>
            <div className="mb-2">
              <a
                href="#"
                style={{ color: "white", textDecoration: "none", fontSize: 16 }}
              >
                Statistics
              </a>
            </div>
            <div className="mb-2">
              <a
                href="#"
                style={{ color: "white", textDecoration: "none", fontSize: 16 }}
              >
                About Us
              </a>
            </div>
          </div>
          <div className="col-lg-3">
            <div
              className="mb-3"
              style={{ color: "white", opacity: 0.75, fontSize: 16 }}
            >
              BEST <br />
              PRACTICE
            </div>
            <div className="mb-2">
              <a
                href="#"
                style={{ color: "white", textDecoration: "none", fontSize: 16 }}
              >
                Article
              </a>
            </div>
            <div className="mb-2">
              <a
                href="#"
                style={{ color: "white", textDecoration: "none", fontSize: 16 }}
              >
                Video
              </a>
            </div>
            <div className="mb-2">
              <a
                href="#"
                style={{ color: "white", textDecoration: "none", fontSize: 16 }}
              >
                Document
              </a>
            </div>
          </div>
          <div className="col-lg-3 row justify-content-center align-items-center">
            <div className="row justify-content-end">
              <div className="col-lg-3">
                <img
                  src="./image/sosmed_footer3.png"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  alt="logo"
                />
              </div>
              <div className="col-lg-3">
                <img
                  src="./image/sosmed_footer2.png"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  alt="logo"
                />
              </div>
              <div className="col-lg-3">
                <img
                  src="./image/sosmed_footer1.png"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 row justify-content-between align-items-center">
          <div className="col-lg-4">
            <div style={{ fontSize: 14, opacity: 0.6 }}>
              Copyright &copy; 2023 AMNET
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-flex justify-content-end">
              <div className="me-4" style={{ fontSize: 14 }}>
                Terms of Use
              </div>
              <div style={{ fontSize: 14 }}>Privacy Policy</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
