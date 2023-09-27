import ContentAdminPage from "../../../pages/Admin/Content";
import AddContentAdminPage from "../../../pages/Admin/Content/AddContent";
import AllContentAdminPage from "../../../pages/Admin/Content/AllContent";
import DetailContentAdminPage from "../../../pages/Admin/Content/Detail";
import YourContentAdminPage from "../../../pages/Admin/Content/YourContent";

const contentAdminRoutes = [
  {
    path: "content",
    element: <ContentAdminPage />,
  },
  {
    path: "content/:id",
    element: <DetailContentAdminPage />,
  },
  {
    path: "content/add",
    element: <AddContentAdminPage />,
  },
  {
    path: "content/your-content",
    element: <YourContentAdminPage />,
  },
  {
    path: "content/all-content",
    element: <AllContentAdminPage />,
  },
];

export default contentAdminRoutes;
