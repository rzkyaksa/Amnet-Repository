import React from "react";
import dummyImage1 from "../../../public/image/content_dummy1.png";
import { BsArrowRight } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ContentAdminPage = () => {
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
    {
      id: 3,
      image: "./image/dummy/content_dummy3.png",
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
      <div className="d-flex aling-items-center justify-content-center">
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

  const yourContent = () => {
    return (
      <div>
        <div className="d-flex align-items-center mb-3">
          <div className="fw-bold me-3" style={{ fontSize: 28 }}>
            Your Content
          </div>
          <div
            className="px-3 py-1"
            style={{
              backgroundColor: "#F5AD0D",
              width: "fit-content",

              borderRadius: 12,
              fontSize: 14,
            }}
          >
            <Link
              to={"/admin/content/add"}
              style={{ color: "white", textDecoration: "none" }}
            >
              Add Content
            </Link>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-10">
            <div className="row">
              {content &&
                content.map((item) => (
                  <div className="col-lg-4">
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
                          <div className="d-flex">
                            <div className="me-2">{item.title}</div>
                            <div>
                              <BsBookmark size={16} />
                            </div>
                          </div>
                        </div>
                        <div
                          className="card-text mb-2"
                          style={{ fontSize: 12, color: "#81838C" }}
                        >
                          {item.content}
                        </div>
                        <Link
                          to={`/admin/content/${item.id}`}
                          className="fw-bold d-flex justify-content-end"
                          style={{ color: "#5B7F69", fontSize: 12 }}
                        >
                          Read More
                        </Link>
                        <hr />
                        <div className="row justify-content-between">
                          <div
                            className="col-6"
                            style={{ fontSize: 12, color: "#81838C" }}
                          >
                            <FiUser className="me-1" /> By {item.user}
                          </div>
                          <div
                            className="col-6"
                            style={{ fontSize: 12, color: "#81838C" }}
                          >
                            <div className="d-flex justify-content-end align-items-center">
                              <HiOutlineCalendarDays className="me-1" />{" "}
                              {item.calendar}
                            </div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div
                            className="fw-bold mb-1"
                            style={{ color: "#707070", fontSize: 12 }}
                          >
                            Keyword:
                          </div>
                          <div style={{ color: "#81838C", fontSize: 12 }}>
                            {item.keyword}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-lg-2">
            <a
              href="/admin/content/your-content"
              className="fw-bold"
              style={{ color: "#5B7F69", textDecoration: "none" }}
            >
              Show All <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
    );
  };

  const allContent = () => {
    return (
      <div>
        <div className="fw-bold mb-3" style={{ fontSize: 28 }}>
          All Content
        </div>
        <div className="row align-items-center">
          <div className="col-lg-10">
            <div className="row">
              {content &&
                content.map((item) => (
                  <div className="col-lg-4">
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
                          <div className="d-flex">
                            <div className="me-2">{item.title}</div>
                            <div>
                              <BsBookmark size={16} />
                            </div>
                          </div>
                        </div>
                        <div
                          className="card-text mb-2"
                          style={{ fontSize: 12, color: "#81838C" }}
                        >
                          {item.content}
                        </div>
                        <Link
                          to={`/admin/content/${item.id}`}
                          className="fw-bold d-flex justify-content-end"
                          style={{ color: "#5B7F69", fontSize: 12 }}
                        >
                          Read More
                        </Link>
                        <hr />
                        <div className="row justify-content-between">
                          <div
                            className="col-6"
                            style={{ fontSize: 12, color: "#81838C" }}
                          >
                            <FiUser className="me-1" /> By {item.user}
                          </div>
                          <div
                            className="col-6"
                            style={{ fontSize: 12, color: "#81838C" }}
                          >
                            <div className="d-flex justify-content-end align-items-center">
                              <HiOutlineCalendarDays className="me-1" />{" "}
                              {item.calendar}
                            </div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div
                            className="fw-bold mb-1"
                            style={{ color: "#707070", fontSize: 12 }}
                          >
                            Keyword:
                          </div>
                          <div style={{ color: "#81838C", fontSize: 12 }}>
                            {item.keyword}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-lg-2">
            <a
              href="/admin/content/all-content"
              className="fw-bold"
              style={{ color: "#5B7F69", textDecoration: "none" }}
            >
              Show All <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="mb-4">
        <div className="row justify-content-center">
          <div className="col-lg-10">{searchSection()}</div>
        </div>
      </div>
      <div className="mb-4">{yourContent()}</div>
      <div className="mb-4">{allContent()}</div>
    </div>
  );
};

export default ContentAdminPage;
