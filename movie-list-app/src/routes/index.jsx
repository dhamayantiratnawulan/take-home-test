import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/Layouts/MainLayout";

import Home from "@/pages/home";
import Detail from '@/pages/detail';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'detail/:id',
        element: <Detail />,
      }
    ],
  },
]);
