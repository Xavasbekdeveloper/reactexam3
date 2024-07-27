import { memo, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { BiCreditCardFront } from "react-icons/bi";
import Process from "../../../components/process/Process";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decreaseAmount, removeCart } from "../../../context/slice/cartSlice";
import useGetInputValue from "../../../hooks/useGetValue";

import "./checkout.scss";

const initialState = {
  firstName: "xavasbek",
  lastName: "tursunov",
  phoneNumber: "+998931092049",
  email: "wolfcomp6@gmail.com",
  streetAddress: "Qatortol",
  country: "uzbekistan",
  city: "Tashkent",
  state: "Tashkent",
  zipCode: "1203193",
  useDifferentBillingAddress: false,
  paymentMethod: "credit",
  cardNumber: "6262 5700 7754 6028",
  expirationDate: "",
  cvc: "12313091",
};

const BOT__TOKEN = "7296011111:AAH9fsPtqvBOqekhvlcG9MVl4JBifgNtEJk";
const CHAT__ID = "-1002221404265";

const CheckoutDetails = () => {
  const [voucher, setVoucher] = useState(0);
  const [coupon, setCoupon] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cart.value);
  const { formData, setFormData, handleChange } =
    useGetInputValue(initialState);

  const calculateAllPrice = () => {
    let total = cartData?.reduce(
      (sum, item) => sum + item?.amount * item?.price,
      0
    );
    return total.toFixed(2);
  };

  const handleCoupon = (e) => {
    e.preventDefault();
    if (coupon === "laylo") {
      setVoucher((+calculateAllPrice() + +calculateAllPrice() * 0.02) * 0.2);
    } else {
      alert("Invalid coupon");
    }
    setCoupon("");
  };

  const calculateDiscountedPrice = () => {
    const total = calculateAllPrice();
    return (total - voucher).toFixed(2);
  };

  const handleCompleted = (e) => {
    e.preventDefault();
    let cartText = cartData
      .map(
        (product) =>
          `Mahsulot: ${product.title}%0A Miqdori: ${product.amount}%0A Narxi: ${product.price}`
      )
      .join("%0A%0A");

    const text = ` 
Ism-Familiya: ${formData.firstName} ${formData.lastName}%0A
Email: ${formData.email}%0A
Telefon: ${formData.phoneNumber}%0A
Manzil: ${formData.streetAddress}, ${formData.city}, ${formData.state}, ${
      formData.country
    }, ${formData.zipCode}%0A
To'lov usuli: ${formData.paymentMethod}%0A%0A
Mahsulotlar:%0A%0A${cartText}%0A%0A
Jami: ${calculateDiscountedPrice()}
        `;

    let url = ` https://api.telegram.org/bot${BOT__TOKEN}/sendMessage?chat_id=${CHAT__ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    navigate("/cart/completed");
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <>
        {" "}
        <Process title={"Checkout"} />
        <section className="checkout">
          <div className="container checkout__wrapper">
            <form onSubmit={handleCompleted} action="">
              <div className="checkout__left-box">
                <div className="checkout__contact-information">
                  <h2 className="checkout__title">Contact Information</h2>
                  <div className="checkout__input-cards">
                    <div className="checkout__input-card">
                      <label className="checkout__label" htmlFor="firstName">
                        FIRST NAME
                      </label>
                      <input
                        required
                        type="text"
                        className="checkout__input"
                        placeholder="First name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="checkout__input-card">
                      <label className="checkout__label" htmlFor="lastName">
                        LAST NAME
                      </label>
                      <input
                        required
                        type="text"
                        className="checkout__input"
                        placeholder="Last name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="checkout__input-card">
                    <label className="checkout__label" htmlFor="phoneNumber">
                      Phone Number
                    </label>
                    <input
                      required
                      type="text"
                      className="checkout__input"
                      placeholder="Phone Number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="checkout__input-card">
                    <label className="checkout__label" htmlFor="email">
                      Email address
                    </label>
                    <input
                      required
                      type="text"
                      className="checkout__input"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="checkout__shipping-address">
                  <h2 className="checkout__title">Shipping Address</h2>
                  <div className="checkout__input-card">
                    <label className="checkout__label" htmlFor="streetAddress">
                      Street Address *
                    </label>
                    <input
                      required
                      type="text"
                      id="streetAddress"
                      className="checkout__input"
                      placeholder="Street Address"
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="checkout__input-card">
                    <label className="checkout__label" htmlFor="country">
                      Country *
                    </label>
                    <select
                      className="checkout__input"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    >
                      <option disabled value="">
                        Country
                      </option>
                      <option value="uzbekistan">Uzbekistan</option>
                      <option value="russia">Russia</option>
                      <option value="china">China</option>
                    </select>
                  </div>
                  <div className="checkout__input-card">
                    <label className="checkout__label" htmlFor="city">
                      Town / City *
                    </label>
                    <input
                      required
                      type="text"
                      id="city"
                      className="checkout__input"
                      placeholder="Town / City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="checkout__input-cards">
                    <div className="checkout__input-card">
                      <label className="checkout__label" htmlFor="state">
                        State
                      </label>
                      <input
                        required
                        id="state"
                        type="text"
                        className="checkout__input"
                        placeholder="State"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="checkout__input-card">
                      <label className="checkout__label" htmlFor="zipCode">
                        Zip Code
                      </label>
                      <input
                        required
                        id="zipCode"
                        type="text"
                        className="checkout__input"
                        placeholder="Zip Code"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="checkout__checkbox-card">
                    <input
                      type="checkbox"
                      id="useDifferentBillingAddress"
                      name="useDifferentBillingAddress"
                      checked={formData.useDifferentBillingAddress}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="useDifferentBillingAddress"
                      className="checkout__label"
                    >
                      Use a different billing address (optional)
                    </label>
                  </div>
                </div>
                <div className="checkout__payment-method">
                  <h2 className="checkout__title">Payment method</h2>
                  <div className="checkout__radio-box">
                    <label className="checkout__radio-label" htmlFor="credit">
                      <input
                        required
                        type="radio"
                        name="paymentMethod"
                        id="credit"
                        value="credit"
                        checked={formData.paymentMethod === "credit"}
                        onChange={handleChange}
                      />
                      <p>Pay by Card Credit</p>
                      <BiCreditCardFront />
                    </label>
                    <label className="checkout__radio-label" htmlFor="paypal">
                      <input
                        required
                        type="radio"
                        name="paymentMethod"
                        id="paypal"
                        value="paypal"
                        checked={formData.paymentMethod === "paypal"}
                        onChange={handleChange}
                      />
                      <p>Paypal</p>
                    </label>
                  </div>
                  <div className="checkout__input-card">
                    <label className="checkout__label" htmlFor="cardNumber">
                      Card Number
                    </label>
                    <input
                      required
                      type="text"
                      id="cardNumber"
                      className="checkout__input"
                      placeholder="1234 1234 1234"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="checkout__input-cards">
                    <div className="checkout__input-card">
                      <label
                        className="checkout__label"
                        htmlFor="expirationDate"
                      >
                        Expiration dates
                      </label>
                      <input
                        required
                        id="expirationDate"
                        type="date"
                        className="checkout__input"
                        name="expirationDate"
                        value={formData.expirationDate}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="checkout__input-card">
                      <label className="checkout__label" htmlFor="cvc">
                        CVC
                      </label>
                      <input
                        required
                        id="cvc"
                        type="text"
                        className="checkout__input"
                        placeholder="CVC code"
                        name="cvc"
                        value={formData.cvc}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <button className="checkout__payment-btn">Place Order</button>
              </div>
            </form>
            <div className="checkout__right-box">
              <div className="checkout__right-wrapper">
                <h2 className="checkout__right-box-title">Order summary</h2>
                {cartData.map((item) => (
                  <div key={item.id} className="checkout__right-box-card">
                    <div className="checkout__right-box-card-content">
                      <img
                        className="checkout__right-box-card-img"
                        src={item?.images[0]}
                        alt={item?.title}
                      />
                      <div className="checkout__right-box-card-part">
                        <h3 className="checkout__right-box-card-title">
                          {item?.title}
                        </h3>
                        <p className="checkout__right-box-card-text">
                          Color: Black
                        </p>
                        <div className="checkout__right-box-card-counter">
                          <button
                            disabled={item?.quantity <= 0}
                            onClick={() => dispatch(decreaseAmount(item))}
                            className="checkout__right-box-card-minus-btn"
                          >
                            -
                          </button>
                          <p>{item?.amount}</p>
                          <button
                            onClick={() => dispatch(addToCart(item))}
                            className="checkout__right-box-card-plus-btn"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="checkout__right-box-card-price">
                      <p className="checkout__right-box-price-text">
                        ${item?.price}
                      </p>
                      <button
                        onClick={() => dispatch(removeCart(item?.id))}
                        className="checkout__right-box-close-btn"
                      >
                        <MdClose />
                      </button>
                    </div>
                  </div>
                ))}

                <form className="checkout__right-box-form">
                  <input
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    type="text"
                    className="checkout__right-box-input"
                    placeholder="Input"
                  />

                  <button
                    onClick={handleCoupon}
                    className="checkout__right-box-apply-btn"
                  >
                    Apply
                  </button>
                </form>
                <ul className="checkout__right-box-list">
                  <li className="checkout__right-box-item">
                    <h3 className="checkout__right-box-item-title">
                      JenkateMW
                    </h3>
                    <p className="checkout__right-box-item-text checkout__right-box-item-text--remove">
                      18.00{"[Remove]"}
                    </p>
                  </li>
                  <li className="checkout__right-box-item">
                    <h3 className="checkout__right-box-item-title">Shipping</h3>
                    <p className="checkout__right-box-item-text">$18.00</p>
                  </li>
                  <li className="checkout__right-box-item">
                    <h3 className="checkout__right-box-item-title">Subtotal</h3>
                    <p className="checkout__right-box-item-text">$18.00</p>
                  </li>
                </ul>
                <div className="checkout__right-box-total-count">
                  <p className="checkout__right-box-total-count-text">Total</p>
                  <p className="checkout__right-box-total-count-text">
                    ${calculateDiscountedPrice()}
                  </p>
                </div>
              </div>
            </div>
            <button className="checkout__payment-btn checkout__payment-btn-responsive ">
              Place Order
            </button>
          </div>
        </section>{" "}
      </>
    </>
  );
};

export default memo(CheckoutDetails);
