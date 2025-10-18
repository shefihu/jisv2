import { ACRIcon, DashboardIcon } from "../assets/Svg";
import { RoutePaths } from "../routes/routePaths";

export const sidebarRoutesByRole = {
  judge: [
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
      hasDropdown: true,
      dropdownOptions: [
        { name: "Active Cases", path: RoutePaths.FIAT },
        { name: "Pending Cases", path: RoutePaths.FIAT },
        { name: "Completed Cases", path: RoutePaths.FIAT },
        { name: "Case Analytics", path: RoutePaths.FIAT },
      ],
    },
    {
      name: "ADR Cases",
      icon: <ACRIcon />,
      hasDropdown: true,
      dropdownOptions: [
        { name: "Mediation", path: RoutePaths.FIAT },
        { name: "Arbitration", path: RoutePaths.FIAT },
        { name: "Conciliation", path: RoutePaths.FIAT },
        { name: "Settlement", path: RoutePaths.FIAT },
      ],
    },
    {
      name: "NJC Report",
      icon: <ACRIcon />,
      hasDropdown: true,
      dropdownOptions: [
        { name: "Monthly Reports", path: RoutePaths.FIAT },
        { name: "Annual Reports", path: RoutePaths.FIAT },
        { name: "Performance Reports", path: RoutePaths.FIAT },
        { name: "Statistical Reports", path: RoutePaths.FIAT },
      ],
    },
  ],

  acr: [
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
  ],
};
