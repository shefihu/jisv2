export const RoutePaths = {
  ROOT: "/",
  TEST: "/test",

  // AUTH
  LOGIN: "/login",

  // COMMON DASHBOARD
  DASHBOARD: "/dashboard",
  HELP: "/dashboard/help",

  // JUDGE ROUTES
  MY_CASES: "/dashboard/my-cases",
  MY_CASE: "/dashboard/my-cases/:suitId",

  JUDGE_CALENDAR: "/dashboard/judge/calendar",
  MY_NOTE: "/dashboard/my-note",
  HEARING_NOTICE: "/dashboard/hearing-notice",
  POST_JUDGEMENT: "/dashboard/post-judgement",
  CASE_MANAGEMENT: "/dashboard/case-management",
  SCHEDULE_TRIAL: "/dashboard/case-management/schedule-trial",
  SCHEDULE_CMC: "/dashboard/case-management/schedule-cmc",
  CASE_DEPOSITION: "/dashboard/case-management/case-deposition",
  SCHEDULE_ADR_CASES: "/dashboard/adr-cases/schedule-adr-cases",
  JUDGE_ADR_CASES: "/dashboard/adr-cases/judge-adr-cases",

  ADR_CASES: "/dashboard/adr-cases",
  NJC_REPORT: "/dashboard/njc-report",
  CANCEL_SCHEDULED_REPORT: "/dashboard/njc-report/cancel-scheduled-report",

  // CHIEF JUDGE
  CJ_ACTION_CASES: "/dashboard/cj-action-cases",
  CASE_ASSIGNMENT_REPORT: "/dashboard/case-assignment-report",
  CASE_ASSIGNMENT: "/dashboard/case-assignment",
  MOTION_CASES: "/dashboard/motion-cases",
  ADR_CASES_ASSIGNMENT: "/dashboard/adr-cases/adr-cases-assignment",
  ASSIGN_MOTION_CASES: "/dashboard/motion-cases/assign-motion-cases",
  SCHEDULE_MOTION_CASES: "/dashboard/motion-cases/schedule-motion-cases",

  // CLERK ROUTES
  ACR_CASES: "/dashboard/acr-cases",
  ACR_CASE: "/dashboard/acr-cases/:suitId",
  FIAT: "/dashboard/fiat",
  CASE_FILING: "/dashboard/case-filing",
  DOCUMENT_MANAGEMENT: "/dashboard/document-management",
  SCHEDULING: "/dashboard/scheduling",

  // REGISTRAR ROUTES
  CASE_REGISTRY: "/dashboard/case-registry",
  COURT_PROCEEDINGS: "/dashboard/court-proceedings",
  CAUSE_LIST: "/dashboard/cause-list",
  REPORTS: "/dashboard/reports",

  // LAWYER ROUTES
  FILE_CASE: "/dashboard/file-case",
  DOCUMENTS: "/dashboard/documents",
  COURT_DATES: "/dashboard/court-dates",

  // DEPUTY SHERIFF ROUTES
  DS_CASES: "/dashboard/ds-cases",
  DS_CASE: "/dashboard/ds-cases/:suitId",
  DS_MOTION_CASES: "/dashboard/ds-motion-cases",
  DS_ADR_CASES: "/dashboard/ds-adr-cases",
  REPORT: "/dashboard/report",

  // PUBLIC ROUTES
  CASE_SEARCH: "/dashboard/case-search",
};
