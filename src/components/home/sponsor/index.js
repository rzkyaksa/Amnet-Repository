import React from "react";

const Sponsor = () => {
  const content = [
    {
      id: 1,
      image: "./image/dummy/dummy_sponsor1.png",
    },
    {
      id: 2,
      image: "./image/dummy/dummy_sponsor2.png",
    },
    {
      id: 3,
      image: "./image/dummy/dummy_sponsor3.png",
    },
    {
      id: 4,
      image: "./image/dummy/dummy_sponsor4.png",
    },
    {
      id: 5,
      image: "./image/dummy/dummy_sponsor5.png",
    },
  ];

  return (
    <div
      className="mt-5 pt-4 mb-5"
      style={{ paddingLeft: "10%", paddingRight: "10%" }}
    >
      <div
        className="fw-bold row justify-content-center mb-5"
        style={{ color: "#333333", fontSize: 42 }}
      >
        Our Partners
      </div>
      <div className="row justify-content-center">
        {content.map((item) => (
          <div className="col-lg-2">
            <img
              src={item.image}
              style={{
                width: "100%",
                height: "75%",
                objectFit: "contain",
              }}
              alt="logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
