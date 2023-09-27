import React from "react";
import { useState } from "react";
import { BiSolidUserPlus } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";

const AdminSettingPage = () => {
  const [isModal, setIsModal] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      width: "35%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const listCountry = [
    "Indonesia",
    "Malaysia",
    "Singapura",
    "Thailand",
    "Filipina",
    "Brunei",
    "Vietnam",
    "Laos",
    "Myanmar",
    "Kamboja",
    "Timor Leste",
  ];

  const dataTable = [
    {
      id: 1,
      name: "Hector Hugo",
      email: "hugo@gmail.com",
      handphone: "00823213123",
      country: "Corona",
      institution: "Corona",
      position: "Corona",
      username: "Corona",
      activation: true,
    },
    {
      id: 2,
      name: "Fernanda",
      email: "fernanda@gmail.com",
      handphone: "0082397923",
      country: "hernandez",
      institution: "hernandez",
      position: "hernandez",
      username: "hernandez",
      activation: true,
    },
    {
      id: 3,
      name: "Fransisco",
      email: "fransisco@gmail.com",
      handphone: "00822345123",
      country: "Coronada",
      institution: "Coronada",
      position: "Coronada",
      username: "Coronada",
      activation: false,
    },
    {
      id: 4,
      name: "Alberto",
      email: "alberto@gmail.com",
      handphone: "00828797123",
      country: "Morales",
      institution: "Morales",
      position: "Morales",
      username: "Morales",
      activation: true,
    },
    {
      id: 5,
      name: "Mauricio",
      email: "mauricio@gmail.com",
      handphone: "008223478977",
      country: "Perez",
      institution: "Perez",
      position: "Perez",
      username: "Perez",
      activation: false,
    },
  ];

  const headerSection = () => {
    return (
      <div className="row align-items-center">
        <div className="col-8">
          <div className="fw-bold" style={{ color: "#333333", fontSize: 28 }}>
            List of Country Admin
          </div>
        </div>
        <div className="col-4 d-flex justify-content-end">
          <div
            className="px-3 py-2"
            style={{
              color: "white",
              backgroundColor: "#44835C",
              borderRadius: 12,
            }}
            onClick={() => setIsModal(!isModal)}
          >
            <BiSolidUserPlus className="me-1" size={24} />{" "}
            <span style={{ fontSize: 13 }}>Add New Admin</span>
          </div>
        </div>
      </div>
    );
  };

  const modalAddUser = () => {
    return (
      <Modal
        isOpen={isModal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => setIsModal(!isModal)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="d-flex justify-content-between mt-2 mb-4">
          <div style={{ fontSize: 18, fontWeight: "bold", color: "#333333" }}>
            Add Country Admin
          </div>
          <div onClick={() => setIsModal(!isModal)}>
            <AiOutlineCloseCircle size={18} />
          </div>
        </div>
        <form>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label"
              style={{ fontSize: 14, fontWeight: "bold" }}
            >
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                  style={{ fontSize: 14, fontWeight: "bold" }}
                >
                  E-mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                  style={{ fontSize: 14, fontWeight: "bold" }}
                >
                  Handphone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div class="mb-3">
                <label
                  for="country"
                  class="form-label"
                  style={{ fontSize: 14, fontWeight: "bold" }}
                >
                  Country
                </label>
                <select id="country" class="form-select">
                  <option selected="true" disabled="disabled">
                    {" "}
                  </option>
                  {listCountry.map((item) => (
                    <option>{item}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                  style={{ fontSize: 14, fontWeight: "bold" }}
                >
                  Institution
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                  style={{ fontSize: 14, fontWeight: "bold" }}
                >
                  Position
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label"
              style={{ fontSize: 14, fontWeight: "bold" }}
            >
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label"
              style={{ fontSize: 14, fontWeight: "bold" }}
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
        </form>
        <div className="d-flex justify-content-end mt-4 mb-3">
          <div
            className="px-3 py-1 fw-bold"
            style={{
              backgroundColor: "#F5AD0D",
              color: "white",
              width: "fit-content",
              borderRadius: 8,
              fontSize: 15,
            }}
          >
            Add
          </div>
        </div>
      </Modal>
    );
  };

  const tableSection = () => {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" style={{ color: "#707683", fontSize: 14 }}>
                Name
              </th>
              <th scope="col" style={{ color: "#707683", fontSize: 14 }}>
                Email
              </th>
              <th scope="col" style={{ color: "#707683", fontSize: 14 }}>
                No. Handphone
              </th>
              <th scope="col" style={{ color: "#707683", fontSize: 14 }}>
                Country
              </th>
              <th scope="col" style={{ color: "#707683", fontSize: 14 }}>
                Institution
              </th>
              <th scope="col" style={{ color: "#707683", fontSize: 14 }}>
                Position
              </th>
              <th scope="col" style={{ color: "#707683", fontSize: 14 }}>
                Username
              </th>
              <th scope="col" style={{ color: "#707683", fontSize: 14 }}>
                Activation
              </th>
              <th scope="col" style={{ color: "#707683", fontSize: 14 }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {dataTable.map &&
              dataTable.map((item) => (
                <tr>
                  <td
                    style={{
                      color: "black",
                      paddingTop: 14,
                      paddingBottom: 14,
                    }}
                  >
                    {item.name}
                  </td>
                  <td
                    style={{
                      color: "#707683",
                      fontSize: 14,
                      verticalAlign: "middle",
                    }}
                  >
                    {item.email}
                  </td>
                  <td
                    style={{
                      color: "#707683",
                      fontSize: 14,
                      verticalAlign: "middle",
                    }}
                  >
                    {item.handphone}
                  </td>
                  <td
                    style={{
                      color: "#707683",
                      fontSize: 14,
                      verticalAlign: "middle",
                    }}
                  >
                    {item.country}
                  </td>
                  <td
                    style={{
                      color: "#707683",
                      fontSize: 14,
                      verticalAlign: "middle",
                    }}
                  >
                    {item.institution}
                  </td>
                  <td
                    style={{
                      color: "#707683",
                      fontSize: 14,
                      verticalAlign: "middle",
                    }}
                  >
                    {item.position}
                  </td>
                  <td
                    style={{
                      color: "#707683",
                      fontSize: 14,
                      verticalAlign: "middle",
                    }}
                  >
                    {item.username}
                  </td>
                  <td
                    style={{
                      color: "#707683",
                      fontSize: 14,
                      verticalAlign: "middle",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: item.activation
                          ? "#5B7F69"
                          : "#C8424A",
                        color: "white",
                        borderRadius: 4,
                        paddingTop: 2,
                        paddingBottom: 2,
                      }}
                      className="d-flex justify-content-center px-4"
                    >
                      {item.activation ? "Active" : "Inactive"}
                    </div>
                  </td>
                  <td
                    style={{
                      color: "#707683",
                      fontSize: 14,
                      verticalAlign: "middle",
                    }}
                  >
                    <div className="d-flex">
                      <div className="me-2">
                        <FiEdit size={16} color="#979797" />
                      </div>
                      <div>
                        <RiDeleteBin5Line size={18} color="#979797" />
                      </div>
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
      <div className="mb-5">{headerSection()}</div>
      <div className="mb-5">{tableSection()}</div>
      <div>{modalAddUser()}</div>
    </div>
  );
};

export default AdminSettingPage;
