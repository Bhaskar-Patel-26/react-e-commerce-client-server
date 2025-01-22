import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <div>Home Page</div>,
      },
      {
        path: "/shop",
        element: <div>Shop Page</div>,
      },
      {
        path: "/blog",
        element: <div>Blog Page</div>,
      },
      {
        path: "/contact",
        element: <div>Contact Page</div>,
      },
    ],
  },
]);

export default router;
