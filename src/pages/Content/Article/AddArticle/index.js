import React from "react";
import Navbar from "../../../../components/navbar";
import SidebarContent from "../../../../components/sidebarContent";
import { BsDownload } from "react-icons/bs";

const AddArticlePage = () => {
  const contentSection = () => {
    return (
      <div>
        <div className="d-flex align-items-center mb-4">
          <div className="me-5 fw-bold" style={{ fontSize: 28 }}>
            Add Content
          </div>
          <div>
            <div className="d-flex align-items-center" style={{ fontSize: 16 }}>
              <BsDownload color="#989898" size={24} className="me-2" />
              <div>Download Template</div>
            </div>
          </div>
        </div>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="exampleInput1" className="fw-bold mb-2">
              Title<span style={{ color: "red" }}> *</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInput1"
              aria-describedby="emailHelp"
              //   placeholder="Enter title"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInput1" className="fw-bold mb-2">
              Author<span style={{ color: "red" }}> *</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInput1"
              aria-describedby="emailHelp"
              //   placeholder="Enter title"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInput1" className="fw-bold mb-2">
              Institution<span style={{ color: "red" }}> *</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInput1"
              aria-describedby="emailHelp"
              //   placeholder="Enter title"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInput1" className="fw-bold mb-2">
              Summary<span style={{ color: "red" }}> *</span>
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
            ></textarea>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInput1" className="fw-bold mb-2">
              Keyword<span style={{ color: "red" }}> *</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInput1"
              aria-describedby="emailHelp"
              //   placeholder="Enter title"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInput1" className="fw-bold mb-2">
              Ecology Dimension
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInput1" className="fw-bold mb-2">
              Social Dimension
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInput1" className="fw-bold mb-2">
              Economy Dimension
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInput1" className="fw-bold mb-2">
              Institutional Dimension
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInput1" className="fw-bold mb-2">
              Technology Dimension
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInput1" className="fw-bold mb-2">
              Sustainability
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInput1"
              aria-describedby="emailHelp"
              //   placeholder="Enter title"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInput1" className="fw-bold mb-2">
              Video Link
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInput1"
              aria-describedby="emailHelp"
              //   placeholder="Enter title"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInput1" className="fw-bold mb-2">
              Attachment (Best Practices Document)
            </label>
            <input type="file" class="form-control" id="customFile" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInput1" className="fw-bold mb-2">
              Attachment (Supporting Document)
            </label>
            <input type="file" class="form-control" id="customFile" />
          </div>
        </form>
        <div className="mt-5 mb-5 d-flex justify-content-end">
          <div
            className="px-4 py-2 me-3"
            style={{
              backgroundColor: "#5B7F69",
              borderRadius: 12,
              color: "white",
            }}
          >
            Save as Draft
          </div>
          <div
            className="px-4 py-2"
            style={{
              backgroundColor: "#F5AD0D",
              borderRadius: 12,
              color: "white",
            }}
          >
            Post
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
            <div className="mb-4">{contentSection()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddArticlePage;
