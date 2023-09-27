import React from "react";
import Navbar from "../../components/navbar";
import VisitorInsight from "../../components/statistics/visitorInsight";
import LastStatistic from "../../components/statistics/lastStatistic";
import MostPopular from "../../components/statistics/mostPopular";

const Statistics = () => {
  return (
    <div>
      <Navbar page={"statistic"} />
      <div
        className="mt-4"
        style={{ paddingLeft: "10%", paddingRight: "10%", color: "#333333" }}
      >
        <div className="row mb-4">
          <div className="col-lg-7">
            <LastStatistic />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <VisitorInsight />
          </div>
          <div className="col-lg-6">
            <MostPopular />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
