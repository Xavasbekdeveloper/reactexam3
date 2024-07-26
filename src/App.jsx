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
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
