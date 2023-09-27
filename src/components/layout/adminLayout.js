import React from "react";
import { Outlet } from "react-router-dom";
import NavbarAdmin from "../navbarAdmin";
import SidebarAdmin from "../sidebarAdmin";

const AdminLayout = () => {
  return (
    <div>
      <NavbarAdmin />
      <div
        className="mt-4"
        style={{ paddingLeft: "10%", paddingRight: "7%", color: "#333333" }}
      >
        <div className="row">
          <div
            className="col-lg-3 px-4 py-5"
            style={{
              backgroundColor: "#ECECEC",
              borderRadius: 16,
              height: "80vh",
            }}
          >
            <SidebarAdmin />
          </div>
          <div className="col-lg-9 ps-5">
            <Outlet show={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
