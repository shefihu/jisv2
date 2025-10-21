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
      path: RoutePaths.JUDGE_CALENDAR,
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
      // hasDropdown: true,
      dropdownOptions: [
        { name: "Schedule Trial", path: RoutePaths.SCHEDULE_TRIAL },
        { name: "Schedule CMC", path: RoutePaths.SCHEDULE_CMC },
        { name: "Case Deposition", path: RoutePaths.CASE_DEPOSITION },
      ],
    },
    {
      name: "ADR Cases",
      icon: <ACRIcon />,
      // hasDropdown: true,
      dropdownOptions: [
        { name: "Schedule ADR Cases", path: RoutePaths.SCHEDULE_ADR_CASES },
        { name: "Judge  ADR Cases", path: RoutePaths.JUDGE_ADR_CASES },
      ],
    },
    {
      name: "NJC Report",
      icon: <ACRIcon />,
      // hasDropdown: true,
      dropdownOptions: [
        // { name: "Monthly Reports", path: RoutePaths.FIAT },
        // { name: "Annual Reports", path: RoutePaths.FIAT },
        // { name: "Performance Reports", path: RoutePaths.FIAT },
        // { name: "Statistical Reports", path: RoutePaths.FIAT },
        {
          name: "Cancelled scheduled report",
          path: RoutePaths.CANCEL_SCHEDULED_REPORT,
        },
        { name: "NJC Report", path: RoutePaths.NJC_REPORT },
      ],
    },
  ],

  chiefJudge: [
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
      path: RoutePaths.JUDGE_CALENDAR,
    },
    {
      name: "CJ Auction Cases",
      icon: <ACRIcon />,
      path: RoutePaths.CJ_ACTION_CASES,
    },
    {
      name: "Case assignment report",
      icon: <ACRIcon />,
      path: RoutePaths.CASE_ASSIGNMENT_REPORT,
    },
    {
      name: "Motion cases",
      icon: <ACRIcon />,
      dropdownOptions: [
        { name: "Assign Motion Cases", path: RoutePaths.ASSIGN_MOTION_CASES },
        {
          name: "Schedule Motion Cases",
          path: RoutePaths.SCHEDULE_MOTION_CASES,
        },
      ],
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
      // hasDropdown: true,
      dropdownOptions: [
        { name: "Schedule Trial", path: RoutePaths.SCHEDULE_TRIAL },
        { name: "Schedule CMC", path: RoutePaths.SCHEDULE_CMC },
        { name: "Case Deposition", path: RoutePaths.CASE_DEPOSITION },
        {
          name: "Case assignment",
          path: RoutePaths.CASE_ASSIGNMENT,
        },
      ],
    },
    {
      name: "ADR Cases",
      icon: <ACRIcon />,
      // hasDropdown: true,
      dropdownOptions: [
        { name: "Schedule ADR Cases", path: RoutePaths.SCHEDULE_ADR_CASES },
        { name: "Judge  ADR Cases", path: RoutePaths.JUDGE_ADR_CASES },
        { name: "ADR Case Assignment", path: RoutePaths.ADR_CASES_ASSIGNMENT },
      ],
    },
    {
      name: "NJC Report",
      icon: <ACRIcon />,
      // hasDropdown: true,
      dropdownOptions: [
        // { name: "Monthly Reports", path: RoutePaths.FIAT },
        // { name: "Annual Reports", path: RoutePaths.FIAT },
        // { name: "Performance Reports", path: RoutePaths.FIAT },
        // { name: "Statistical Reports", path: RoutePaths.FIAT },
        {
          name: "Cancelled scheduled report",
          path: RoutePaths.CANCEL_SCHEDULED_REPORT,
        },
        { name: "NJC Report", path: RoutePaths.NJC_REPORT },
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
  deputySheriff: [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      path: RoutePaths.DASHBOARD,
    },
    {
      name: "DS Cases",
      icon: <ACRIcon />,
      path: RoutePaths.DS_CASES,
    },
    {
      name: "DS Motion Cases",
      icon: <ACRIcon />,
      path: RoutePaths.DS_MOTION_CASES,
    },
    {
      name: "DS ADR Cases",
      icon: <ACRIcon />,
      path: RoutePaths.DS_ADR_CASES,
    },
    {
      name: "Post Judgement",
      icon: <ACRIcon />,
      path: RoutePaths.POST_JUDGEMENT,
    },
    {
      name: "Report",
      icon: <ACRIcon />,
      path: RoutePaths.REPORT,
    },
  ],
};
