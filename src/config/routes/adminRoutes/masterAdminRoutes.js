import AdminSettingPage from "../../../pages/Admin/master/admin-setting";
import UserSettingPage from "../../../pages/Admin/master/user-setting";

const masterAdminRoutes = [
  {
    path: "master/user-setting",
    element: <UserSettingPage />,
  },
  {
    path: "master/admin-setting",
    element: <AdminSettingPage />,
  },
];

export default masterAdminRoutes;
