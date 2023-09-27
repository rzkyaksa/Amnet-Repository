import React from "react";
import { GoBook } from "react-icons/go";
import { RiDraftLine } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";
import "./style.css";

const SidebarContent = ({ page }) => {
  return (
    <div>
      <div
        className={page == "content" ? "active-side mb-2" : "mb-2 item-sidee"}
      >
        <a
          href="/content/article"
          className={page == "content" ? "text-active" : "text-not-active"}
        >
          <div
            className="d-flex align-items-center px-4 py-3"
            style={{ borderRadius: 8 }}
          >
            <GoBook size={28} />
            <div className="ms-3">Content</div>
          </div>
        </a>
      </div>
      <div className={page == "draft" ? "active-side mb-2" : "mb-2 item-sidee"}>
        <a
          href="/content/draft"
          className={page == "draft" ? "text-active" : "text-not-active"}
        >
          <div
            className="d-flex align-items-center px-4 py-3"
            style={{ borderRadius: 8 }}
          >
            <RiDraftLine size={28} />
            <div className="ms-3">Draft</div>
          </div>
        </a>
      </div>
      <div
        className={page == "bookmark" ? "active-side mb-2" : "mb-2 item-sidee"}
      >
        <a
          href="/content/bookmark"
          className={page == "bookmark" ? "text-active" : "text-not-active"}
        >
          <div
            className="d-flex align-items-center px-4 py-3"
            style={{ borderRadius: 8 }}
          >
            <BsBookmark size={28} />
            <div className="ms-3">Bookmark</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SidebarContent;
