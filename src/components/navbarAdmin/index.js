import React, { useEffect, useState } from "react";
import "./nav.css";
import { BsSearch } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const NavbarAdmin = ({ page }) => {
  const cookies = new Cookies();
  const navigate = new useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const dummyUser = {
    name: "Udin",
    role: "Admin",
    location: "Indonesia",
  };

  useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  const actionSignIn = () => {
    cookies.set("token", "adsqeqwe131hbu08uy8912bhsdb");
    setIsLogin(true);
    return navigate("/");
  };

  const actionLogOut = () => {
    cookies.remove("token", { path: "/" });
    setIsLogin(false);
    return navigate("/");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light align-self-center py-3"
      style={{
        backgroundColor: "white",
        paddingLeft: "10%",
        paddingRight: "10%",
      }}
    >
      <a className="navbar-brand" href="/" style={{ width: "4%" }}>
        <img
          src="/image/logo_amnet.png"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt="logo-AMT"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <div
          className="input-group"
          style={{ width: "50%", backgroundColor: "#F9FAFB" }}
        >
          <div className="input-group-prepend">
            <span
              className="input-group-text"
              id="basic-addon1"
              style={{
                backgroundColor: "#F9FAFB",
                borderTopLeftRadius: 12,
                borderBottomLeftRadius: 12,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                borderRightWidth: 0,
                // border: "none",
              }}
            >
              <BsSearch color="#5B7F69" size={24} />
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Search here..."
            aria-label="search"
            aria-describedby="basic-addon1"
            style={{
              backgroundColor: "#F9FAFB",
              borderTopRightRadius: 12,
              borderBottomRightRadius: 12,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderLeftWidth: 0,
              // border: "none",
            }}
          />
        </div>
      </div>

      <div className="left-side-nav">
        <div className="d-flex justify-content-end align-items-center">
          {/* <BsSearch size={20} className="me-3 fw-bold left-side-nav" /> */}
          <IoNotificationsOutline
            size={24}
            className="me-3 fw-bold left-side-nav"
          />
          {isLogin == false && (
            <div
              style={{
                backgroundColor: "#688272",
                color: "white",
                borderRadius: 24,
              }}
              className="py-2 px-4 left-side-nav"
              onClick={() => actionSignIn()}
            >
              Sign In
            </div>
          )}
          {isLogin && (
            <div className="dropdown left-side-nav">
              <div
                id="dropdownMenuButton1"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className="d-flex justify-content-center align-items-center"
              >
                <div style={{ width: 50, height: 50 }}>
                  <img
                    src="/image/profile_picture.jpg"
                    className="dropdown-toggle"
                    style={{
                      borderRadius: 100,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="ms-2">
                  <div style={{ fontSize: 16 }}>{dummyUser.name}</div>
                  <div style={{ fontSize: 12, color: "#707070" }}>
                    {dummyUser.role} - {dummyUser.location}
                  </div>
                </div>
              </div>
              <ul
                className="dropdown-menu dropdown-menu-lg-end"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="/profile">
                    Profile
                  </a>
                </li>
                <li>
                  <div className="dropdown-item" onClick={() => actionLogOut()}>
                    Sign Out
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
