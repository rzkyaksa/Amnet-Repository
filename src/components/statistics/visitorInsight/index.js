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

const VisitorInsight = () => {
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

export default VisitorInsight;
