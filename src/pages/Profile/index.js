import React from "react";
import Navbar from "../../components/navbar";
import profilePicture from "../../public/image/profile_picture.jpg";
import { LuPencilLine } from "react-icons/lu";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const ProfilePage = () => {
  const dataProfile = [
    {
      title: "Latitude",
      value: "12843",
    },
    {
      title: "Longitude",
      value: "89008",
    },
    {
      title: "Land Areas",
      value: "Kalimantan, Sumatera, Sulawesi",
    },
    {
      title: "Total Land Areas",
      value: "9660000000 Ha",
    },
    {
      title: "Forest Areas",
      value: "Kalimantan, Sumatera",
    },
    {
      title: "Total Forest Areas",
      value: "892099834 Ha",
    },
    {
      title: "Mangrove Areas",
      value: "Jawa, Kalimantan, Maluku, Papua",
    },
    {
      title: "Total Mangrove Areas",
      value: "336000000 Ha",
    },
    {
      title: "Percentage",
      value: "92,8%",
    },
    {
      title: "Challenges",
      value: "Tantangan 1, Tantangan 2, Tantangan 3",
    },
    {
      title: "Recommendation",
      value: "Rekomendasi 1, Rekomendasi 2",
    },
    {
      title: "Program Activities",
      value: "Aktivitas 1, Aktivitas 2, Aktivitas 3",
    },
    {
      title: "Policy",
      value: "UNEA Resolution 4/12.2019",
    },
  ];

  const leftSection = () => {
    return (
      <div className="shadow p-4">
        <div className="row justify-content-center">
          <div className="col-4">
            <img
              src={profilePicture}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 200,
              }}
              alt="profile_picture"
            />
          </div>
        </div>
        <div className="d-flex justify-content-between mt-4 mb-3">
          <div className="fw-bold" style={{ fontSize: 18 }}>
            Udin Syarifudin
          </div>
          <div>
            <LuPencilLine size={18} />
          </div>
        </div>
        <div className="mb-4">
          <div style={{ color: "#707070", fontSize: 17 }}>
            Member - Indonesia
          </div>
        </div>
        <div className="d-flex align-items-center mb-2">
          <BsFillTelephoneFill className="me-3" size={20} />
          <div className="fw-semibold" style={{ fontSize: 15 }}>
            082211887632
          </div>
        </div>
        <div className="d-flex align-items-center mb-4">
          <AiOutlineMail className="me-3" size={20} />
          <div className="fw-semibold" style={{ fontSize: 15 }}>
            udin111@gmail.com
          </div>
        </div>
      </div>
    );
  };

  const rightSection = () => {
    return (
      <div className="shadow p-4">
        <div className="fw-bold mb-4" style={{ fontSize: 24 }}>
          Country Profile
        </div>
        <div className="mb-4 fw-bold">Indonesia</div>
        {dataProfile &&
          dataProfile.map((item) => (
            <div className="row mb-2" style={{ color: "#707070" }}>
              <div className="col-4">{item.title}</div>
              <div className="col-8">: {item.value}</div>
            </div>
          ))}
      </div>
    );
  };

  return (
    <div>
      <Navbar page={""} />
      <div
        className="mt-4"
        style={{ paddingLeft: "10%", paddingRight: "10%", color: "#333333" }}
      >
        <div className="row">
          <div className="col-lg-5">{leftSection()}</div>
          <div className="col-lg-7">{rightSection()}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
