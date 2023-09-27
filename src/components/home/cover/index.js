import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const CoverHome = () => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          backgroundColor: "#F2F2F2",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
        className="d-flex justify-content-between align-items-center"
      >
        <div>
          <div className="mb-2" style={{ fontSize: 25 }}>
            ASEAN Mangrove Network
          </div>
          <div className="mb-2" style={{ fontSize: 40, fontWeight: "bold" }}>
            Knowledge Sharing <br />{" "}
            <span style={{ color: "#688272" }}>Mangrove</span> Ecosystem
            Management
          </div>
          <div
            className="mb-2"
            style={{ width: "70%", fontSize: 18, color: "#7B7D84" }}
          >
            Lorem Ipsum It is a long established fact that a reader will be
            distracted by the readable content of a page when at its layout.
          </div>
          <div
            className="px-3 mt-3"
            style={{
              backgroundColor: "#688272",
              color: "white",
              width: "fit-content",
              borderRadius: 6,
              paddingTop: 8,
              paddingBottom: 12,
            }}
          >
            Read More <BsArrowUpRight className="ms-2" size={16} />
          </div>
        </div>
        <div>
          <img src="/image/tree.png" alt="tes" />
        </div>
      </div>
      <div>
        <div style={{ position: "absolute", top: 70 }}>
          <img src="./image/dot.png" alt="." />
        </div>
        <div style={{ position: "absolute", bottom: 60, right: 0 }}>
          <img src="./image/dot.png" alt="." />
        </div>
      </div>
    </div>
  );
};

export default CoverHome;
