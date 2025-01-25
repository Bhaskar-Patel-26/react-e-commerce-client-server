import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage";
import SearchPage from "../pages/SearchPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/categories/:categoryName",
        element: <CategoryPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
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
