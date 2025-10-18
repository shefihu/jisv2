import { ACRIcon, DashboardIcon } from "../assets/Svg";
import { RoutePaths } from "../routes/routePaths";

export const judgesSidebarRoutes = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    path: RoutePaths.DASHBOARD,
  },
  {
    name: "My cases",
    icon: <ACRIcon />,
    path: RoutePaths.MY_CASES,
  },
  {
    name: "My Calendar",
    icon: <ACRIcon />,
    path: RoutePaths.MY_CALENDAR,
  },
  {
    name: "My Note",
    icon: <ACRIcon />,
    path: RoutePaths.MY_NOTE,
  },
  {
    name: "Hearing Notice",
    icon: <ACRIcon />,
    path: RoutePaths.HEARING_NOTICE,
  },
  {
    name: "Post Judgement",
    icon: <ACRIcon />,
    path: RoutePaths.POST_JUDGEMENT,
  },
  {
    name: "Case management",
    icon: <ACRIcon />,
  },
  {
    name: "ADR Cases",
    icon: <ACRIcon />,
  },
  {
    name: "NJC Report",
    icon: <ACRIcon />,
  },
];
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
