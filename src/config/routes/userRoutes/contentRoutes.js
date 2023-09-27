import ContentPage from "../../../pages/Content";
import Article from "../../../pages/Content/Article";
import AddArticlePage from "../../../pages/Content/Article/AddArticle";
import AllArticlePage from "../../../pages/Content/Article/AllArticle";
import YourArticlePage from "../../../pages/Content/Article/YourArticle";
import BookmarkPage from "../../../pages/Content/Bookmark";
import DetailContent from "../../../pages/Content/Detail";
import DraftPage from "../../../pages/Content/Draft";

const contentRoutes = [
  {
    path: "/content",
    element: <ContentPage />,
  },
  {
    path: "/content/add",
    element: <AddArticlePage />,
  },
  {
    path: "/content/:id",
    element: <DetailContent />,
  },
  {
    path: "/content/article",
    element: <Article />,
  },
  {
    path: "/content/article/all-article",
    element: <AllArticlePage />,
  },
  {
    path: "/content/article/your-article",
    element: <YourArticlePage />,
  },
  {
    path: "/content/draft",
    element: <DraftPage />,
  },
  {
    path: "/content/bookmark",
    element: <BookmarkPage />,
  },
];

export default contentRoutes;
