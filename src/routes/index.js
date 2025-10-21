import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import { RoutePaths } from "./routePaths";
import Login from "../pages/auth/login.jsx";
import { AffidavitTemplate } from "../components/AffidavitTemplate.jsx";
import TestPage from "../pages/uiTest.jsx";
import DashboardLayout from "../layout/DashboardLayout.jsx";
import Home from "../pages/dashboard/home.jsx";
import AcrCaseDetails from "../pages/dashboard/profiles/acr/acrCases/acrCaseDetails.jsx";
import AcrCases from "../pages/dashboard/profiles/acr/acrCases/acrCases.jsx";
import Fiat from "../pages/dashboard/profiles/acr/fiat.jsx";
import JudgesCalendar from "../pages/dashboard/profiles/judges/judgesCalendar.jsx";
import MyCases from "../pages/dashboard/profiles/judges/myCases.jsx";
import MyCaseDetails from "../pages/dashboard/profiles/judges/myCaseDetails.jsx";
import ScheduleCmc from "../pages/dashboard/profiles/judges/scheduleCmc.jsx";
import ScheduleTrial from "../pages/dashboard/profiles/judges/scheduleTrial.jsx";
import MyNote from "../pages/dashboard/profiles/judges/myNote.jsx";
import HearingNotice from "../pages/dashboard/profiles/judges/hearingNotice.jsx";
import CancelledScheduledReport from "../pages/dashboard/profiles/judges/njcReport/cancelledScheduledReport.jsx";
import NjcReport from "../pages/dashboard/profiles/judges/njcReport/njcReport.jsx";
import CjAuctionCases from "../pages/dashboard/profiles/chiefJudge/cjAuctionCases.jsx";
import CaseDeposition from "../pages/dashboard/profiles/judges/caseDeposition.jsx";
import ScheduleAdrCases from "../pages/dashboard/profiles/judges/scheduleAdrCases.jsx";
import JudgeAdrCases from "../pages/dashboard/profiles/judges/judgeAdrCases.jsx";
import CaseAssignment from "../pages/dashboard/profiles/chiefJudge/caseAssignment.jsx";
import CaseAssignmentReport from "../pages/dashboard/profiles/chiefJudge/caseAssignmentReport.jsx";
import AdrCaseAssignment from "../pages/dashboard/profiles/chiefJudge/adrCaseAssignment.jsx";
import AssignMotionCases from "../pages/dashboard/profiles/chiefJudge/assignMotionCases.jsx";
import ScheduleMotionCase from "../pages/dashboard/profiles/chiefJudge/scheduleMotionCases.jsx";
import DsCase from "../pages/dashboard/profiles/deputySheriff/dsCases.jsx";
import DsCaseDetails from "../pages/dashboard/profiles/deputySheriff/dsCaseDetails.jsx";
import DsMotionCases from "../pages/dashboard/profiles/deputySheriff/dsMotionCases.jsx";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: RoutePaths.LOGIN,
        element: <Login />,
      },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: RoutePaths.DASHBOARD,
        element: <Home />,
      },
      {
        path: RoutePaths.ACR_CASE,
        element: <AcrCaseDetails />,
      },
      {
        path: RoutePaths.ACR_CASES,
        element: <AcrCases />,
      },
      {
        path: RoutePaths.FIAT,
        element: <Fiat />,
      },
      {
        path: RoutePaths.JUDGE_CALENDAR,
        element: <JudgesCalendar />,
      },
      {
        path: RoutePaths.MY_CASES,
        element: <MyCases />,
      },
      {
        path: RoutePaths.MY_CASE,
        element: <MyCaseDetails />,
      },
      {
        path: RoutePaths.SCHEDULE_TRIAL,
        element: <ScheduleTrial />,
      },
      {
        path: RoutePaths.SCHEDULE_TRIAL,
        element: <ScheduleTrial />,
      },
      {
        path: RoutePaths.SCHEDULE_CMC,
        element: <ScheduleCmc />,
      },
      {
        path: RoutePaths.MY_NOTE,
        element: <MyNote />,
      },
      {
        path: RoutePaths.HEARING_NOTICE,
        element: <HearingNotice />,
      },
      {
        path: RoutePaths.CANCEL_SCHEDULED_REPORT,
        element: <CancelledScheduledReport />,
      },
      {
        path: RoutePaths.NJC_REPORT,
        element: <NjcReport />,
      },
      {
        path: RoutePaths.CJ_ACTION_CASES,
        element: <CjAuctionCases />,
      },
      {
        path: RoutePaths.CASE_DEPOSITION,
        element: <CaseDeposition />,
      },
      {
        path: RoutePaths.JUDGE_ADR_CASES,
        element: <JudgeAdrCases />,
      },
      {
        path: RoutePaths.SCHEDULE_ADR_CASES,
        element: <ScheduleAdrCases />,
      },
      {
        path: RoutePaths.CASE_ASSIGNMENT,
        element: <CaseAssignment />,
      },
      {
        path: RoutePaths.CASE_ASSIGNMENT_REPORT,
        element: <CaseAssignmentReport />,
      },
      {
        path: RoutePaths.ADR_CASES_ASSIGNMENT,
        element: <AdrCaseAssignment />,
      },
      {
        path: RoutePaths.SCHEDULE_MOTION_CASES,
        element: <ScheduleMotionCase />,
      },
      {
        path: RoutePaths.ASSIGN_MOTION_CASES,
        element: <AssignMotionCases />,
      },
      {
        path: RoutePaths.DS_CASES,
        element: <DsCase />,
      },
      {
        path: RoutePaths.DS_CASE,
        element: <DsCaseDetails />,
      },
      {
        path: RoutePaths.DS_MOTION_CASES,
        element: <DsMotionCases />,
      },
    ],
  },
  {
    path: RoutePaths.ROOT,
    element: <AffidavitTemplate />,
  },
  {
    path: RoutePaths.TEST,
    element: <TestPage />,
  },
]);
