import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import { RoutePaths } from "./routePaths";
import Login from "../pages/auth/login.jsx";
import { AffidavitTemplate } from "../components/AffidavitTemplate.jsx";
import TestPage from "../pages/uiTest.jsx";
import DashboardLayout from "../layout/DashboardLayout.jsx";
import Home from "../pages/dashboard/home.jsx";

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
  {
    path: RoutePaths.ARC_CASE,
    element: <ArcCase />,
  },
]);
