import { ACRIcon, DashboardIcon } from "../assets/Svg";
import { RoutePaths } from "../routes/routePaths";

export const sidebarRoutes = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    path: RoutePaths.DASHBOARD,
  },
  {
    name: "ACR Cases",
    icon: <ACRIcon />,
    path: RoutePaths.ACR_CASES,
  },
  {
    name: "Fiat",
    icon: <ACRIcon />,
    path: RoutePaths.FIAT,
  },
];
