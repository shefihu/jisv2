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
import ScheduleAdrCases from "../pages/dashboard/profiles/judges/scheduleAdrCases.jsx";
import JudgeAdrCases from "../pages/dashboard/profiles/judges/judgeAdrCases.jsx";

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
        path: RoutePaths.SCHEDULE_ADR_CASES,
        element: <ScheduleAdrCases />,
      },
      {
        path: RoutePaths.JUDGE_ADR_CASES,
        element: <JudgeAdrCases />,
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
