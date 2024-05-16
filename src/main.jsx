import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuestionCard1 from "./components/QuestionCard.jsx";
import QuestionCard2 from "./components/QuestionCard2.jsx";
import QuestionCard3 from "./components/QuestionCard3.jsx";
import ResultCard from "./components/ResultCard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/question1",
    element: <QuestionCard1 />,
  },
  {
    path: "/question2",
    element: <QuestionCard2 />,
  },
  {
    path: "/question3",
    element: <QuestionCard3 />,
  },
  {
    path: "/result",
    element: <ResultCard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
