import React from "react";

const BestPractice = () => {
  const content = [
    {
      image: "./image/bestpractice_home1.png",
      title: "Ecology",
      content:
        "Stay on top of your task lists and stay in touch with what's happening",
    },
    {
      image: "./image/bestpractice_home2.png",
      title: "Social",
      content:
        "Stay on top of your task lists and stay in touch with what's happening",
    },
    {
      image: "./image/bestpractice_home3.png",
      title: "Economy",
      content:
        "Stay on top of your task lists and stay in touch with what's happening",
    },
    {
      image: "./image/bestpractice_home4.png",
      title: "Institutional",
      content:
        "Stay on top of your task lists and stay in touch with what's happening",
    },
    {
      image: "./image/bestpractice_home5.png",
      title: "Technology",
      content:
        "Stay on top of your task lists and stay in touch with what's happening",
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
        Dimesion of Best Practices
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="row justify-content-center">
            {content.map((item, i) => (
              <div className="col-lg-2">
                <div
                  className="mb-3"
                  style={{ width: i == 1 ? "52%" : i == 4 ? "40%" : "35%" }}
                >
                  <img
                    src={item.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    alt="logo"
                  />
                </div>
                <div
                  className="mb-2 fw-semibold"
                  style={{ color: "#25373F", fontSize: 18 }}
                >
                  {item.title}
                </div>
                <div
                  className="mb-3"
                  style={{ color: "#25373F", fontSize: 14 }}
                >
                  <div className="row">
                    <div className="col-lg-10">{item.content}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestPractice;
