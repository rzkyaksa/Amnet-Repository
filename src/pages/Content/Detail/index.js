import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar";
import SidebarContent from "../../../components/sidebarContent";
import dummyImage1 from "../../../public/image/content_dummy1.png";
import { useEffect } from "react";
import { useState } from "react";
import { BsBookmark, BsDownload } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import Cookies from "universal-cookie";

const DetailContent = () => {
  const { id } = useParams();
  const cookies = new Cookies();
  const [detailData, setDetailData] = useState();
  const [isLoginn, setIsLoginn] = useState(false);

  useEffect(() => {
    content.map((item) => {
      if (item.id == id) {
        setDetailData(item);
      }
    });
    const token = cookies.get("token");
    if (token) {
      setIsLoginn(true);
    }
  }, []);

  const content = [
    {
      id: 1,
      image: "./image/dummy/content_dummy1.png",
      title: "Build prototypes with thousands of components.",
      content:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.",
      user: "Ahmad",
      calendar: "5 July 2023",
      keyword: "mangrove, repository",
    },
    {
      id: 2,
      image: "./image/dummy/content_dummy2.png",
      title: "Build prototypes with thousands of components.",
      content:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.",
      user: "Ahmad",
      calendar: "5 July 2023",
      keyword: "mangrove, repository",
    },
    {
      id: 3,
      image: "./image/dummy/content_dummy3.png",
      title: "Build prototypes with thousands of components.",
      content:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.",
      user: "Ahmad",
      calendar: "5 July 2023",
      keyword: "mangrove, repository",
    },
    {
      id: 4,
      image: "./image/dummy/content_dummy3.png",
      title: "Build prototypes with thousands of components.",
      content:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.",
      user: "Ahmad",
      calendar: "5 July 2023",
      keyword: "mangrove, repository",
    },
    {
      id: 5,
      image: "./image/dummy/content_dummy1.png",
      title: "Build prototypes with thousands of components.",
      content:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.",
      user: "Ahmad",
      calendar: "5 July 2023",
      keyword: "mangrove, repository",
    },
    {
      id: 6,
      image: "./image/dummy/content_dummy2.png",
      title: "Build prototypes with thousands of components.",
      content:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.",
      user: "Ahmad",
      calendar: "5 July 2023",
      keyword: "mangrove, repository",
    },
    {
      id: 7,
      image: "./image/dummy/content_dummy3.png",
      title: "Build prototypes with thousands of components.",
      content:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.",
      user: "Ahmad",
      calendar: "5 July 2023",
      keyword: "mangrove, repository",
    },
    {
      id: 8,
      image: "./image/dummy/content_dummy3.png",
      title: "Build prototypes with thousands of components.",
      content:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.",
      user: "Ahmad",
      calendar: "5 July 2023",
      keyword: "mangrove, repository",
    },
  ];

  const contentSection = () => {
    return (
      <div>
        <div className="row align-items-center mb-3">
          <div className="col-10">
            <div className="fw-bold" style={{ fontSize: 30 }}>
              {detailData.title}
            </div>
          </div>
          <div className="col-2 d-flex justify-content-end">
            <BsBookmark size={32} />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-3">
            <div className="d-flex align-items-center" style={{ fontSize: 14 }}>
              <FiUser color="#989898" size={24} className="me-2" />
              <div>by {detailData.user}</div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="d-flex align-items-center" style={{ fontSize: 14 }}>
              <HiOutlineCalendarDays
                color="#989898"
                size={24}
                className="me-2"
              />
              <div>by {detailData.calendar}</div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="d-flex align-items-center" style={{ fontSize: 14 }}>
              <BsDownload color="#989898" size={24} className="me-2" />
              <div>Download Article</div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-3">
          <div className="col-lg-6" style={{ height: 250 }}>
            <img
              src={dummyImage1}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="logo-AMT"
            />
          </div>
        </div>
        <div className="mb-4">
          <div style={{ textAlign: "justify" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatem, voluptas blanditiis doloribus accusantium facilis beatae
            repudiandae dolorem officiis nobis, sit, quae odio perspiciatis unde
            reiciendis. Id repellat consequatur vero ipsum a, laboriosam culpa
            rerum recusandae, non perferendis necessitatibus voluptate, est qui
            nihil nobis eos tenetur molestiae? Possimus iure tempora fugiat qui
            quis distinctio, omnis nam obcaecati soluta dolore incidunt cum
            ipsam sint sunt impedit tenetur maxime illo odio optio
            reprehenderit? Quis, aperiam aut doloribus labore laboriosam
            corrupti officiis quod beatae enim minus. Minima dolorem fugiat
            eligendi quo distinctio autem repudiandae assumenda! Praesentium
            ratione ipsum inventore tempore deserunt dolorum ipsa ut?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta odit
            voluptatum earum. Dicta eos repudiandae pariatur sint saepe cumque
            amet consequatur natus perferendis omnis, quod nobis asperiores
            eaque dolor consequuntur beatae reiciendis facilis maiores nisi ad
            accusamus. Saepe, sunt eaque! Est laudantium sint ipsum nobis.
            Tempore, quibusdam ipsam veniam architecto deserunt exercitationem
            obcaecati! Nam perferendis, voluptates pariatur asperiores officiis
            saepe.
          </div>
        </div>
        <div>
          <div style={{ color: "#707070" }}>
            <span className="fw-bold">Keyword: </span>
            {detailData.keyword}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar page={"content"} />
      <div
        className="mt-4"
        style={{ paddingLeft: "10%", paddingRight: "10%", color: "#333333" }}
      >
        {isLoginn && (
          <div className="row">
            <div
              className="col-lg-3 px-4 py-5"
              style={{
                backgroundColor: "#ECECEC",
                borderRadius: 16,
                height: "80vh",
              }}
            >
              <SidebarContent page={"content"} />
            </div>
            <div className="col-lg-9 ps-5">
              <div className="mb-4">{detailData && contentSection()}</div>
            </div>
          </div>
        )}
        {isLoginn == false && (
          <div className="mb-4">{detailData && contentSection()}</div>
        )}
      </div>
    </div>
  );
};

export default DetailContent;
