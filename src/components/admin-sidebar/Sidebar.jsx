import React, { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { AiOutlineProduct } from "react-icons/ai";
import { RiEdit2Line } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import { useDispatch } from "react-redux";

import "./sidebar.scss";
import { logout } from "../../context/slice/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <section className="sidebar">
      <div className="sidebar__top">
        <Link className="sidebar__top__link" to={"/"}>
          <FaArrowLeft />
          Admin Dashboard
        </Link>
      </div>
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <NavLink to={"/admin/create-product"} className={"sidebar__link"}>
            <AiOutlineProduct /> Create product
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to={"/admin/manage-product"} className={"sidebar__link"}>
            <RiEdit2Line /> Manage product
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to={"/admin/create-category"} className={"sidebar__link"}>
            <AiOutlineProduct /> Create category
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to={"/admin/manage-category"} className={"sidebar__link"}>
            <RiEdit2Line /> Manage category
          </NavLink>
        </li>
      </ul>
      <div className="sidebar__bottom">
        <button onClick={() => dispatch(logout())}>
          <MdOutlineLogout /> Logout
        </button>
      </div>
    </section>
  );
};

export default memo(Sidebar);
