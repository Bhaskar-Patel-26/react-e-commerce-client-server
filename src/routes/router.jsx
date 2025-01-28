import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage";
import SearchPage from "../pages/SearchPage";
import ShopPage from "../pages/ShopPage";
import SingleProduct from "../components/shop/SingleProduct";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

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
        element: <ShopPage />,
      },
      {
        path: "/shop/:id",
        element: <SingleProduct />,
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
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
]);

export default router;
