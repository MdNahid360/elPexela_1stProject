import MainPage from "../../layout/MainPage/MainPage";
import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";
import Users from "../../component/DashboardComponent/Users/Users";
import Home from "../../pages/Home/Home";
import Shop from "../../pages/Shop/Shop";
import About from "../../pages/About/About";
import Blog from "../../pages/Blog/Blog";
import ProductDetail from "../../pages/ProductDetail/ProductDetail";
import Login from "../../pages/Login/Login";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "../../pages/SignUp/SignUp";
import CategoryProduct from "../../pages/CategoryProduct/CategoryProduct";
import AllBlogs from "../../pages/AllBlogs/AllBlogs";
import BlogDetails from "../../pages/BlogDetails/BlogDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/all_blogs",
        element: <AllBlogs />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "/category/:id",
        element: <CategoryProduct />,
      },
    ],
  },

  // dashboard layout
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: "dashboard",
      },
      {
        path: "/dashboard/users",
        element: <Users />,
      },
    ],
  },
]);
