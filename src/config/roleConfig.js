export const USER_ROLES = {
  JUDGE: "judge",
  CHIEF_JUDGE: "chiefJudge",
  ACR: "acr",
  DEPUTY_SHERIFF: "deputySheriff",
};

export const CURRENT_USER_ROLE = USER_ROLES.DEPUTY_SHERIFF;

export const ROLE_PERMISSIONS = {
  [USER_ROLES.JUDGE]: {
    allowedRoutes: [
      "DASHBOARD",
      "MY_CASES",
      "MY_CALENDAR",
      "CJ_ACTION_CASES",
      "MOTION_CASES",
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
  [USER_ROLES.CHIEF_JUDGE]: {
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

  [USER_ROLES.DEPUTY_SHERIFF]: {
    allowedRoutes: [
      "DASHBOARD",
      "DS_CASES",
      "DS_MOTION_CASES",
      "DS_ADR_CASES",
      "POST_JUDGEMENT",
      "REPORT",
    ],
    defaultRoute: "/dashboard",
  },
  //   [USER_ROLES.PUBLIC]: {
  //     allowedRoutes: ["DASHBOARD", "CASE_SEARCH", "CAUSE_LIST", "HELP"],
  //     defaultRoute: "/dashboard",
  //   },
};
