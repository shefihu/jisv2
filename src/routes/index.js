import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import { RoutePaths } from "./routePaths";
import TestPage from "../pages/uiTest";
import Login from "../pages/auth/login.jsx";
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
    path: RoutePaths.ROOT,
    element: <TestPage />,
  },
]);
