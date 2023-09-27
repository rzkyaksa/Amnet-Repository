import contentRoutes from "./contentRoutes";
import homeRoutes from "./homeRoutes";
import profileRoutes from "./profileRoutes";
import statisticRoutes from "./statisticRoutes";
import userVerificationRoutes from "./userVerificationRoutes";

const UserRoutes = [
  ...homeRoutes,
  ...userVerificationRoutes,
  ...statisticRoutes,
  ...contentRoutes,
  ...profileRoutes,
];

export default UserRoutes;
