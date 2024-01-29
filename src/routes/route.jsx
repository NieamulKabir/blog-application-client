import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs/Blogs";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import AddBlog from "../pages/AddBlog/AddBlog";
import Wishlist from "../pages/Wishlist/Wishlist";
import NotFound from "../pages/NotFound/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },

      {
        path: '/blogs/:id',
        element: <BlogDetails />,
      },
      {
        path:'/addBlog',
        element:<AddBlog />
      },
      {
        path:'/wishList',
        element:<Wishlist />
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
