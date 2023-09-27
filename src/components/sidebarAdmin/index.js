import React from "react";
import { AiOutlinePieChart } from "react-icons/ai";
import { GoBook } from "react-icons/go";
import { RiDraftLine } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";
import "./style.css";
import { useLocation } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";
import { useEffect } from "react";

const SidebarAdmin = () => {
  const location = new useLocation();
  const pathname = location.pathname;
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (pathname.includes("master")) {
      setIsShow(true);
    }
  }, []);

  return (
    <div>
      <div
        className={
          pathname.includes("dashboard")
            ? "active-side mb-2"
            : "mb-2 item-sidee"
        }
      >
        <a
          href="/admin/dashboard"
          className={
            pathname.includes("dashboard") ? "text-active" : "text-not-active"
          }
        >
          <div
            className="d-flex align-items-center px-4 py-3"
            style={{ borderRadius: 8 }}
          >
            <AiOutlinePieChart size={28} />
            <div className="ms-3">Dashboard</div>
          </div>
        </a>
      </div>
      <div
        className={
          pathname.includes("content") ? "active-side mb-2" : "mb-2 item-sidee"
        }
      >
        <a
          href="/admin/content"
          className={
            pathname.includes("content") ? "text-active" : "text-not-active"
          }
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
      <div
        className={
          pathname.includes("draft") ? "active-side mb-2" : "mb-2 item-sidee"
        }
      >
        <a
          href="/admin/draft"
          className={
            pathname.includes("draft") ? "text-active" : "text-not-active"
          }
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
        className={
          pathname.includes("bookmark") ? "active-side mb-2" : "mb-2 item-sidee"
        }
      >
        <a
          href="/admin/bookmark"
          className={
            pathname.includes("bookmark") ? "text-active" : "text-not-active"
          }
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
      <div className="hover-click">
        <div data-bs-toggle="collapse" onClick={() => setIsShow(!isShow)}>
          <div
            className="d-flex align-items-center px-4 py-3"
            style={{ borderRadius: 8 }}
          >
            <IoSettingsOutline size={28} />
            <div className="ms-3">Master</div>
          </div>
        </div>
      </div>
      {isShow && (
        <div className="ms-5">
          <div>
            <div
              className={
                pathname.includes("user-setting") ? "active-side" : "item-sidee"
              }
            >
              <a
                href="/admin/master/user-setting"
                className={
                  pathname.includes("user-setting")
                    ? "text-active"
                    : "text-not-active"
                }
              >
                <div
                  className="d-flex align-items-center py-2"
                  style={{ borderRadius: 8 }}
                >
                  <div className="ms-3">User Setting</div>
                </div>
              </a>
            </div>
            <hr className="my-2" />
            <div
              className={
                pathname.includes("admin-setting")
                  ? "active-side"
                  : "item-sidee"
              }
            >
              <a
                href="/admin/master/admin-setting"
                className={
                  pathname.includes("admin-setting")
                    ? "text-active"
                    : "text-not-active"
                }
              >
                <div
                  className="d-flex align-items-center py-2"
                  style={{ borderRadius: 8 }}
                >
                  <div className="ms-3">Admin Setting</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarAdmin;
