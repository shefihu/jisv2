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
