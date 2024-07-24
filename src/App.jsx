import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./components/layout/Layout";

const Home = lazy(() => import("./pages/home/Home"));
const Login = lazy(() => import("./pages/login/Login"));
const Auth = lazy(() => import("./pages/auth/Auth"));
const Admin = lazy(() => import("./pages/admin"));
const Detail = lazy(() => import("./pages/detail/Detail"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products/:id" element={<Detail />} />
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
