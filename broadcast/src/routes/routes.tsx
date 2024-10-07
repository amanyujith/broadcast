// import ContactList from "@/containers/contactList/contactList";
import ErrorPage from "@/containers/errorPage/errorPage";
import Layout from "@/containers/layout/layout";
import Profile from "@/containers/profile/profile";
import Quiz from "@/containers/steps/quiz/quiz";
import { Data } from "@/containers/table/data";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout as the element for root routes
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Profile/>,
      },
      {
        path: "/score",
        element: <Data/>,
      },
      {
        path: "/steps",
        element:<Quiz/>,
      },
    ],
  },
]);


