import React from "react";
import { useRoutes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import AppointmentPage from "../../pages/AppointmentPage";
import PaidRequestPage from "../../pages/PaidRequestPage";
import MessagePage from "../../pages/MessagePage";
import CollectionEmailPage from "../../pages/CollectionEmailPage";
import HomePage from "../../pages/HomePage";
import NotFoundPage from "../../pages/NotFoundPage";

function AdminLayout() {
  let element = useRoutes([
    {
      element: <Dashboard />,
      children: [
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/appointment",
          element: <AppointmentPage />,
        },
        { path: "/paidrequest", element: <PaidRequestPage /> },
        { path: "/message", element: <MessagePage /> },
        { path: "/collectionEmail", element: <CollectionEmailPage /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);
  return element;
}

export default AdminLayout;
