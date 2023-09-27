import React from "react";
import { Link } from "react-router-dom";

const YourHistory = () => {
  const content = [
    {
      id: 1,
      image: "./image/dummy/content_dummy1.png",
      title: "Build prototypes with thousands of components.",
      content:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.",
    },
    {
      id: 2,
      image: "./image/dummy/content_dummy2.png",
      title: "Build prototypes with thousands of components.",
      content:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.",
    },
    {
      id: 3,
      image: "./image/dummy/content_dummy3.png",
      title: "Build prototypes with thousands of components.",
      content:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.",
    },
  ];

  return (
    <div
      className="mt-5 pt-4"
      style={{ paddingLeft: "10%", paddingRight: "10%" }}
    >
      <div
        className="fw-bold row justify-content-center mb-5"
        style={{ color: "#333333", fontSize: 42 }}
      >
        Your History
      </div>
      <div className="row justify-content-center">
        {content.map((item) => (
          <div className="col-lg-4">
            <div className="card">
              <img src={item.image} className="card-img-top" alt="image-card" />
              <div className="card-body">
                <div
                  className="card-title fw-bold mb-3"
                  style={{ fontSize: 18 }}
                >
                  {item.title}
                </div>
                <div
                  className="card-text mb-4"
                  style={{ fontSize: 15, color: "#81838C" }}
                >
                  {item.content}
                </div>
                <Link
                  to={`/content/${item.id}`}
                  className="fw-bold"
                  style={{ color: "#5B7F69" }}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourHistory;
