import React from "react";
import Navbar from "../../../components/navbar";
import SidebarContent from "../../../components/sidebarContent";
import dummyImage1 from "../../../public/image/content_dummy1.png";
import { LuPencilLine } from "react-icons/lu";

const DraftPage = () => {
  const content = [
    {
      id: 1,
      image: "./image/dummy/content_dummy1.png",
      title: "Build prototypes with thousands of.",
      content:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.",
      user: "Ahmad",
      calendar: "5 July 2023",
      keyword: "mangrove, repository",
    },
    {
      id: 2,
      image: "./image/dummy/content_dummy2.png",
      title: "Build prototypes with thousands of.",
      content:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.",
      user: "Ahmad",
      calendar: "5 July 2023",
      keyword: "mangrove, repository",
    },
  ];

  const searchSection = () => {
    return (
      <div className="d-flex aling-items-center">
        <div className="fw-bold me-3" style={{ fontSize: 24 }}>
          Search
        </div>
        <div className="me-2" style={{ width: "40%" }}>
          <input
            type="text"
            id="searchInput"
            className="form-control"
            aria-describedby="searchHelpInline"
            placeholder="Search here..."
          />
        </div>
        <div
          className="px-3 py-1 me-3 fw-bold"
          style={{
            backgroundColor: "#F5AD0D",
            color: "white",
            borderRadius: 12,
            fontSize: 16,
          }}
        >
          Go
        </div>
        <div className="fw-bold me-2" style={{ fontSize: 24 }}>
          Filters
        </div>
        <div className="">
          <select className="form-select" aria-label="Default select example">
            <option value="all" selected>
              All
            </option>
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="country">Country</option>
          </select>
        </div>
      </div>
    );
  };

  const contentSection = () => {
    return (
      <div>
        <div className="fw-bold mb-3" style={{ fontSize: 28 }}>
          Draft
        </div>
        <div className="row">
          {content &&
            content.map((item, i) => (
              <div className="col-lg-3 mb-4">
                <div className="card">
                  <img
                    src={dummyImage1}
                    className="card-img-top"
                    alt="image-card"
                  />
                  <div className="card-body">
                    <div
                      className="card-title fw-bold mb-2"
                      style={{ fontSize: 14 }}
                    >
                      <div className="me-2">{item.title}</div>
                    </div>
                    <div
                      className="card-text mb-3"
                      style={{ fontSize: 12, color: "#81838C" }}
                    >
                      {item.content}
                    </div>
                    <a
                      href="#"
                      className="fw-bold d-flex justify-content-end"
                      style={{ color: "black", fontSize: 14 }}
                    >
                      <LuPencilLine size={17} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar page={"content"} />
      <div
        className="mt-4"
        style={{ paddingLeft: "10%", paddingRight: "10%", color: "#333333" }}
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
            <SidebarContent page={"draft"} />
          </div>
          <div className="col-lg-9 ps-5">
            <div className="mb-4">{searchSection()}</div>
            <div className="mb-4">{contentSection()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraftPage;
