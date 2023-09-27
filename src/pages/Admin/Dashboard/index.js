import React from "react";
import {
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
import stat_icon1 from "../../../public/image/stat_icon1.png";
import stat_icon2 from "../../../public/image/stat_icon2.png";
import stat_icon3 from "../../../public/image/stat_icon3.png";
import stat_icon4 from "../../../public/image/stat_icon4.png";

const DashboardPage = () => {
  const lastStatContent = [
    {
      image: stat_icon1,
      title: "Content",
      total: 125,
    },
    {
      image: stat_icon2,
      title: "Visitor",
      total: 100,
    },
    {
      image: stat_icon3,
      title: "New User",
      total: 15,
    },
    {
      image: stat_icon4,
      title: "Registered User",
      total: 10,
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

  const LastStatistic = () => {
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

  const VisitorInsight = () => {
    return (
      <div className="shadow p-3 bg-body rounded">
        <div className="fw-semibold mb-3" style={{ fontSize: 24 }}>
          Visitor Insights
        </div>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            data={dataLine}
            margin={{ top: 5, right: 30, left: 0, bottom: 0 }}
            style={{ paddingLeft: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis width={40} />
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
            <LineChart
              type="monotone"
              dataKey="Unique Customers"
              stroke="#EF4444"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };

  const MostPopular = () => {
    return (
      <div class="shadow p-3 bg-body rounded">
        <div className="fw-semibold mb-3" style={{ fontSize: 24 }}>
          Most Popular Content
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
    );
  };

  return (
    <div>
      <div className="row mb-4">
        <div className="col-lg-9">{LastStatistic()}</div>
      </div>
      <div className="row">
        <div className="col-lg-6">{VisitorInsight()}</div>
        <div className="col-lg-6">{MostPopular()}</div>
      </div>
    </div>
  );
};

export default DashboardPage;
