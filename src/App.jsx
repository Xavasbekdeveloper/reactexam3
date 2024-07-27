import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./components/layout/Layout";

const Home = lazy(() => import("./pages/home/Home"));
const Login = lazy(() => import("./pages/login/Login"));
const Auth = lazy(() => import("./pages/auth/Auth"));
const Admin = lazy(() => import("./pages/admin"));
const Detail = lazy(() => import("./pages/detail/Detail"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const View = lazy(() => import("./pages/cart/view/View"));
const Checkout = lazy(() => import("./pages/cart/checkout/Checkout"));
const Order = lazy(() => import("./pages/cart/order/Order"));
const Wishlist = lazy(() => import("./pages/wishlist/Wishlist"));
const Shop = lazy(() => import("./pages/shop/Shop"));
const Blog = lazy(() => import("./pages/blog/Blog"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const CreateProduct = lazy(() =>
  import("./pages/admin/create-product/CreateProduct")
);
const CreateCategory = lazy(() =>
  import("./pages/admin/create-category/CreateCategory")
);
const ManageProduct = lazy(() =>
  import("./pages/admin/manage-product/ManageProduct")
);
const ManageCategory = lazy(() =>
  import("./pages/admin/manage-category/ManageCategory")
);

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products/:id" element={<Detail />} />
          <Route path="cart" element={<Cart />}>
            <Route path="view" element={<View />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="completed" element={<Order />} />
          </Route>
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="shop" element={<Shop />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />}>
            <Route path="create-product" element={<CreateProduct />} />
            <Route path="create-category" element={<CreateCategory />} />
            <Route path="manage-product" element={<ManageProduct />} />
            <Route path="manage-category" element={<ManageCategory />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
