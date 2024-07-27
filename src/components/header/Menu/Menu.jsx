import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/icons/logo.svg";
import { IoClose, IoLogoInstagram } from "react-icons/io5";
import Search from "../search/Search";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuFacebook, LuHeart } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RiLoginBoxLine } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import "./menu.scss";

const Menu = ({ menu, setMenu }) => {
  const cartData = useSelector((state) => state.cart.value);
  const wishlistData = useSelector((state) => state.wishlist.data);
  const isLogin = useSelector((state) => state.auth.token);
  return (
    <>
      <div
        onClick={() => setMenu(false)}
        className={`header__menu__overlay ${
          menu ? "header__menu__overlay-show" : ""
        }`}
      ></div>
      <div className={`header__menu ${menu ? "header__menu-show" : ""}`}>
        {/* top */}
        <div className="header__menu__top-box">
          <div className="header__menu__logo-box">
            <Link to={"/"} className="header__menu__logo-link">
              <img src={logo} alt="site logo" />
            </Link>
            <button
              onClick={() => setMenu(false)}
              className="header__menu__btn-close"
            >
              <IoClose />
            </button>
          </div>
          <Search />
          <ul className="header__menu__menu-list">
            <li className="header__menu__menu-item">
              <NavLink className="header__menu__menu-link" to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="header__menu__menu-item">
              <NavLink className="header__menu__menu-link" to={"/shop"}>
                Shop
              </NavLink>
            </li>
            <li className="header__menu__menu-item">
              <NavLink className="header__menu__menu-link" to={"/blog"}>
                Blog
              </NavLink>
            </li>
            <li className="header__menu__menu-item">
              <NavLink className="header__menu__menu-link" to={"/contact"}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        {/* bottom */}
        <div className="header__menu__bottom-box">
          <ul className="header__menu__menu-list">
            <li className="header__menu__menu-item">
              <NavLink className="header__menu__menu-link" to={"/cart/view"}>
                <p>Cart</p>
                <div className="header__menu__menu-link__cart--link">
                  <HiOutlineShoppingBag />
                  <span>{cartData.length ? cartData.length : "0"}</span>
                </div>
              </NavLink>
            </li>
            <li className="header__menu__menu-item">
              <NavLink className="header__menu__menu-link" to={"/wishlist"}>
                <p>Wishlist</p>
                <div className="header__menu__menu-link__cart--link">
                  <LuHeart />
                  <span>{wishlistData.length ? wishlistData.length : "0"}</span>
                </div>
              </NavLink>
            </li>
          </ul>
          <Link
            to={isLogin ? "/admin/create-product" : "/login"}
            className="header__menu__menu-link-login"
          >
            {isLogin ? <IoMdContact /> : <RiLoginBoxLine />}
          </Link>
          <div className="header__menu__menu-buttons">
            <IoLogoInstagram />
            <LuFacebook />
            <AiOutlineYoutube />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
