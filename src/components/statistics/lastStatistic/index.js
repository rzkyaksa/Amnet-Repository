import React from "react";

const LastStatistic = () => {
  const lastStatContent = [
    {
      image: "./image/stat_icon1.png",
      title: "Content",
      total: 125,
    },
    {
      image: "./image/stat_icon2.png",
      title: "Visitor",
      total: 100,
    },
    {
      image: "./image/stat_icon3.png",
      title: "New User",
      total: 15,
    },
    {
      image: "./image/stat_icon4.png",
      title: "Registered User",
      total: 10,
    },
  ];

  return (
    <div class="shadow p-3 bg-body rounded">
      <div className="fw-semibold mb-3" style={{ fontSize: 26 }}>
        In the last 30 days
      </div>
      <div className="row">
        {lastStatContent &&
          lastStatContent.map((item, i) => (
            <div className="col-lg-3">
              <div
                className="px-3"
                style={{
                  backgroundColor:
                    i == 0
                      ? "#FFE2E5"
                      : i == 1
                      ? "#FFF4DE"
                      : i == 2
                      ? "#DCFCE7"
                      : "#F3E8FF",
                  paddingTop: 14,
                  paddingBottom: 24,
                  borderRadius: 12,
                }}
              >
                <div className="mb-3" style={{ width: "25%" }}>
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
                <div className="fw-semibold mb-2" style={{ fontSize: 22 }}>
                  {item.total}
                </div>
                <div style={{ fontSize: 14 }}>{item.title}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LastStatistic;
