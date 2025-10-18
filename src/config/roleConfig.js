export const USER_ROLES = {
  JUDGE: "judge",
  ACR: "acr",
};

export const CURRENT_USER_ROLE = USER_ROLES.JUDGE;

export const ROLE_PERMISSIONS = {
  [USER_ROLES.JUDGE]: {
    allowedRoutes: [
      "DASHBOARD",
      "MY_CASES",
      "MY_CALENDAR",
      "MY_NOTE",
      "HEARING_NOTICE",
      "POST_JUDGEMENT",
      "CASE_MANAGEMENT",
      "ADR_CASES",
      "NJC_REPORT",
      "HELP",
    ],
    defaultRoute: "/dashboard",
  },
  [USER_ROLES.ACR]: {
    allowedRoutes: ["DASHBOARD", "ACR_CASES", "FIAT"],
    defaultRoute: "/dashboard",
  },
  //   [USER_ROLES.PUBLIC]: {
  //     allowedRoutes: ["DASHBOARD", "CASE_SEARCH", "CAUSE_LIST", "HELP"],
  //     defaultRoute: "/dashboard",
  //   },
};
