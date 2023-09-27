import React, { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ProgressBar from "@ramonak/react-progress-bar";

const Statistics = () => {
  const dataBar = [
    {
      name: "Monday",
      "online sales": 4000,
      "offline sales": 2400,
    },
    {
      name: "Tuesday",
      "online sales": 3000,
      "offline sales": 1398,
    },
    {
      name: "Wednesday",
      "online sales": 2000,
      "offline sales": 9800,
    },
    {
      name: "Thursday",
      "online sales": 2780,
      "offline sales": 3908,
    },
    {
      name: "Friday",
      "online sales": 1890,
      "offline sales": 4800,
    },
    {
      name: "Saturday",
      "online sales": 2390,
      "offline sales": 3800,
    },
    {
      name: "Sunday",
      "online sales": 3490,
      "offline sales": 4300,
    },
  ];

  const dataLine = [
    {
      name: "Jan",
      "Loyal Customers": 300,
      "New Customers": 250,
      "Unique Customers": 330,
    },
    {
      name: "Feb",
      "Loyal Customers": 70,
      "New Customers": 100,
      "Unique Customers": 120,
    },
    {
      name: "Mar",
      "Loyal Customers": 200,
      "New Customers": 250,
      "Unique Customers": 230,
    },
    {
      name: "Apr",
      "Loyal Customers": 300,
      "New Customers": 250,
      "Unique Customers": 275,
    },
  ];

  const summaryData = [
    {
      id: 1,
      title: "Total Contents",
      count: 125,
    },
    {
      id: 2,
      title: "Article",
      count: 100,
    },
    {
      id: 3,
      title: "Videos",
      count: 20,
    },
    {
      id: 4,
      title: "Documents",
      count: 5,
    },
    {
      id: 5,
      title: "Your Contents",
      count: 32,
    },
    {
      id: 6,
      title: "Your Drafts",
      count: 1,
    },
  ];

  const mostPopularData = [
    {
      id: 1,
      name: "Article",
      popularity: 75,
      sales: "45%",
    },
    {
      id: 2,
      name: "Video",
      popularity: 50,
      sales: "29%",
    },
    {
      id: 3,
      name: "Document",
      popularity: 25,
      sales: "25%",
    },
  ];

  const summary = () => {
    return (
      <div className="row justify-content-center mb-5">
        <div className="col-lg-8">
          <div className="row">
            {summaryData.map((item, i) => (
              <div className="col-lg-2">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <div
                    className="fw-bold mb-2"
                    style={{
                      color:
                        i == 0 || i == 4
                          ? "#5B7F69"
                          : i == 1 || i == 2 || i == 3
                          ? "#F5AD0D"
                          : "#29282B",
                      fontSize: 28,
                    }}
                  >
                    {item.count}
                  </div>
                  <div
                    className="fw-bold"
                    style={{
                      color: i == 0 || i == 4 ? "#5B7F69" : "#575757",
                      fontSize: 16,
                    }}
                  >
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const barChart = () => {
    return (
      <div className="mb-5">
        <div
          className="fw-semibold mb-3"
          style={{ fontSize: 26, color: "#333333" }}
        >
          The Country with The Most Posts
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={dataBar}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="online sales" fill="#F5AD0D" />
            <Bar dataKey="offline sales" fill="#5B7F69" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };

  const lineChart = () => {
    return (
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div
            className="fw-semibold mb-3"
            style={{ fontSize: 26, color: "#333333" }}
          >
            Most Viewed Content
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={dataLine}
              //   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Loyal Customers"
                stroke="#8950FC"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="New Customers"
                stroke="#3CD856"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="Unique Customers"
                stroke="#EF4444"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };

  const mostPopular = () => {
    return (
      <div className="row justify-content-center mb-5">
        <div className="col-lg-8">
          <div
            className="fw-semibold mb-3"
            style={{ fontSize: 26, color: "#333333" }}
          >
            Most Popular Content Categories
          </div>
          <table class="table">
            <thead>
              <tr>
                <th className="text-center" scope="col">
                  #
                </th>
                <th className="text-center" scope="col">
                  Name
                </th>
                <th className="text-center" scope="col">
                  Popularity
                </th>
                <th className="text-center" scope="col">
                  Sales
                </th>
              </tr>
            </thead>
            <tbody>
              {mostPopularData.map((item, i) => (
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    <ProgressBar
                      completed={item.popularity}
                      bgColor={
                        i == 0 ? "#5b7f69" : i == 1 ? "#00e068" : "#ff8f0d"
                      }
                      baseBgColor={
                        i == 0 ? "#cde7ff" : i == 1 ? "#8cfac7" : "#ffd5a4"
                      }
                      isLabelVisible={false}
                      height="5px"
                    />
                  </td>

                  <td className="d-flex justify-content-center">
                    <div
                      className="px-4 py-1"
                      style={{
                        backgroundColor:
                          i == 0 ? "#F0F9FF" : i == 1 ? "#F0FDF4" : "#FEF6E6",
                        borderWidth: 1,
                        borderColor:
                          i == 0 ? "#5b7f69" : i == 1 ? "#9CD161" : "#FF8900",
                        borderStyle: "solid",
                        color:
                          i == 0 ? "#5b7f69" : i == 1 ? "#9CD161" : "#FF8900",
                        width: "fit-content",
                        borderRadius: 8,
                      }}
                    >
                      {item.sales}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div
      className="mt-5 pt-4"
      style={{ paddingLeft: "10%", paddingRight: "10%" }}
    >
      <div
        className="fw-bold row justify-content-center mb-5"
        style={{ color: "#333333", fontSize: 42 }}
      >
        Statistics
      </div>

      {/* summary */}
      {summary()}

      {/* barchart */}
      {barChart()}

      {/* most popular */}
      {mostPopular()}

      {/* linechart */}
      {lineChart()}
    </div>
  );
};

export default Statistics;
