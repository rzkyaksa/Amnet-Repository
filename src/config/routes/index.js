import React from "react";
import { createBrowserRouter } from "react-router-dom";
import UserRoutes from "./userRoutes";
import RequireAuth from "../../utils/requireAuth";
import dashboardRoutes from "./adminRoutes/dashboardRoutes";
import contentAdminRoutes from "./adminRoutes/contentAdminRoutes";
import draftAdminRoutes from "./adminRoutes/draftAdminRoutes";
import bookmarkAdminRoutes from "./adminRoutes/bookmarkAdminRoutes";
import masterAdminRoutes from "./adminRoutes/masterAdminRoutes";

const router = createBrowserRouter([
  ...UserRoutes,
  {
    path: "/admin",
    element: <RequireAuth />,
    children: [
      ...dashboardRoutes,
      ...contentAdminRoutes,
      ...draftAdminRoutes,
      ...bookmarkAdminRoutes,
      ...masterAdminRoutes,
    ],
  },
]);

export default router;
