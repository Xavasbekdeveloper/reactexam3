import { memo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import sapHeaderIcon from "../../assets/icons/ticket-percent.svg";
import logo from "../../assets/icons/logo.svg";
import { IoArrowForwardOutline, IoClose, IoMenu } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { IoMdContact } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuHeart } from "react-icons/lu";
import Search from "./search/Search";
import Menu from "./Menu/Menu";
import { RiLoginBoxLine } from "react-icons/ri";
import { useSelector } from "react-redux";

import "./header.scss";

const Header = () => {
  const [searchToggle, setSearchToggle] = useState(false);
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(true);

  const handleHide = () => {
    setShow(false);
  };

  const cartData = useSelector((state) => state.cart.value);
  const wishlistData = useSelector((state) => state.wishlist.data);
  const isLogin = useSelector((state) => state.auth.token);

  return (
    <>
      {show ? (
        <div className="sap-header">
          <div className="sap-header__base-cart"></div>
          <div className="sap-header__left-box">
            <img src={sapHeaderIcon} alt="Sap header icons" />
            <h3 className="sap-header__title">
              30% off storewide — Limited time!{" "}
            </h3>
            <Link to={"/shop"} className="sap-header__link">
              <p>Shop Now</p>
              <IoArrowForwardOutline />
            </Link>
            <button className="sap-header__close sap-header__close-responsive">
              <IoClose />
            </button>
          </div>
          <button onClick={handleHide} className="sap-header__close">
            <IoClose />
          </button>
        </div>
      ) : (
        <></>
      )}
      <header className="header">
        <Menu menu={menu} setMenu={setMenu} />
        <nav className="header__navbar container">
          <div className="header__logo-box">
            <button onClick={() => setMenu(true)} className="header__menu-btn">
              <IoMenu />
            </button>
            <NavLink to={"/"} className="header__logo-link">
              <img src={logo} alt="site logo" />
            </NavLink>
          </div>
          <ul className="header__list">
            <li className="header__item">
              <NavLink className="header__link" to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink className="header__link" to={"/shop"}>
                Shop
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink className="header__link" to={"/blog"}>
                Blog
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink className="header__link" to={"/contact"}>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="header__right-box">
            <div className="header__right-box-button">
              <button onClick={() => setSearchToggle(!searchToggle)}>
                {searchToggle ? <IoClose /> : <FiSearch />}
              </button>
              {searchToggle ? <Search /> : <></>}
            </div>
            <Link
              to={isLogin ? "/admin/create-product" : "/login"}
              className="header__right-box-link"
            >
              {isLogin ? <IoMdContact /> : <RiLoginBoxLine />}
            </Link>
            <Link
              to={"/cart/view"}
              className="header__right-box-link header__right-box-link--cart--like"
            >
              <HiOutlineShoppingBag />
              <span>{cartData.length ? cartData.length : "0"}</span>
            </Link>
            <Link
              to={"/wishlist"}
              className="header__right-box-link header__right-box-link--cart--like"
            >
              <LuHeart />
              <span>{wishlistData.length ? wishlistData.length : "0"}</span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default memo(Header);
