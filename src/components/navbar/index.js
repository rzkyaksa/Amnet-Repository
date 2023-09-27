import React, { useEffect, useState } from "react";
import "./nav.css";
import { BsSearch } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const Navbar = ({ page }) => {
  const cookies = new Cookies();
  const navigate = new useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const dummyUser = {
    name: "Udin",
    role: "Member",
    location: "Indonesia",
  };

  useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  const actionSignIn = () => {
    return navigate("/login");
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
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <div className={page == "home" ? "active-nav" : "not-active-nav"}>
                Home
              </div>
            </a>
          </li>
          {isLogin == false && (
            <li className="nav-item">
              <a className="nav-link" href="/content">
                <div
                  className={
                    page == "content" ? "active-nav" : "not-active-nav"
                  }
                >
                  Content
                </div>
              </a>
            </li>
          )}
          {isLogin && (
            <li className="nav-item">
              <a className="nav-link" href="/content/article">
                <div
                  className={
                    page == "content" ? "active-nav" : "not-active-nav"
                  }
                >
                  Content
                </div>
              </a>
            </li>
          )}
          <li className="nav-item">
            <a className="nav-link" href="/statistics">
              <div
                className={
                  page == "statistic" ? "active-nav" : "not-active-nav"
                }
              >
                Statistics
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div className="left-side-nav">
        <div className="d-flex justify-content-end align-items-center">
          <BsSearch size={20} className="me-3 fw-bold left-side-nav" />
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
                  <a className="dropdown-item" href="/admin/dashboard">
                    Dashboard
                  </a>
                </li>
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

export default Navbar;
