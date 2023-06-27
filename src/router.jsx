import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import TestPage from "./pages/TestPage";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "test",
        element: <TestPage />,
      },
      {
        path: "result",
        element: <ResultPage />,
      },
    ],
  },
]);
export default router;
