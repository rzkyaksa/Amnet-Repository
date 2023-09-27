import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const MostPopular = () => {
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
                  bgColor={i == 0 ? "#5b7f69" : i == 1 ? "#00e068" : "#ff8f0d"}
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
                    color: i == 0 ? "#5b7f69" : i == 1 ? "#9CD161" : "#FF8900",
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

export default MostPopular;
