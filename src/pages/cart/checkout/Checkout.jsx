import { memo, useState } from "react";
import { MdClose } from "react-icons/md";
import { BiCreditCardFront } from "react-icons/bi";
import Process from "../../../components/process/Process";
import { useDispatch, useSelector } from "react-redux";

import { Navigate } from "react-router-dom";

import "./checkout.scss";
import { decreaseAmount, removeCart } from "../../../context/slice/cartSlice";
import Order from "../order/Order";

const CheckoutDetails = () => {
  const [voucher, setVoucher] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [order, setOrder] = useState(false);
  const cartData = useSelector((state) => state.cart.value);
  const initialState = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    streetAddress: "",
    country: "",
    city: "",
    state: "",
    zipCode: "",
    useDifferentBillingAddress: false,
    paymentMethod: "",
    cardNumber: "",
    expirationDate: "",
    cvc: "",
  };

  const [formData, setFormData] = useState(initialState);
  let dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

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

  if (cartData.length === 0) return <Navigate to={"/"} replace />;

  return (
    <>
      {order ? (
        <Order total={calculateDiscountedPrice()} />
      ) : (
        <>
          {" "}
          <Process title={"Checkout"} />
          <section className="check-out">
            <div className="container check-out__wrapper">
              <div className="check-out__left-box">
                <div className="check-out__contact-information">
                  <h2 className="check-out__title">Contact Information</h2>
                  <div className="check-out__input-cards">
                    <div className="check-out__input-card">
                      <label className="check-out__label" htmlFor="firstName">
                        FIRST NAME
                      </label>
                      <input
                        required
                        type="text"
                        className="check-out__input"
                        placeholder="First name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="check-out__input-card">
                      <label className="check-out__label" htmlFor="lastName">
                        LAST NAME
                      </label>
                      <input
                        required
                        type="text"
                        className="check-out__input"
                        placeholder="Last name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="check-out__input-card">
                    <label className="check-out__label" htmlFor="phoneNumber">
                      Phone Number
                    </label>
                    <input
                      required
                      type="text"
                      className="check-out__input"
                      placeholder="Phone Number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="check-out__input-card">
                    <label className="check-out__label" htmlFor="email">
                      Email address
                    </label>
                    <input
                      required
                      type="text"
                      className="check-out__input"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="check-out__shipping-address">
                  <h2 className="check-out__title">Shipping Address</h2>
                  <div className="check-out__input-card">
                    <label className="check-out__label" htmlFor="streetAddress">
                      Street Address *
                    </label>
                    <input
                      required
                      type="text"
                      id="streetAddress"
                      className="check-out__input"
                      placeholder="Street Address"
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="check-out__input-card">
                    <label className="check-out__label" htmlFor="country">
                      Country *
                    </label>
                    <select
                      className="check-out__input"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                    >
                      <option disabled value="">
                        Country
                      </option>
                      <option value="andijon,uzbekiston">
                        Andijon,Uzbekiston
                      </option>
                      <option value="namangan,uzbekiston">
                        Namangan,Uzbekiston
                      </option>
                      <option value="fargona,uzbekiston">
                        Fargona,Uzbekiston
                      </option>
                      <option value="toshkent,uzbekiston">
                        Toshkent,Uzbekiston
                      </option>
                    </select>
                  </div>
                  <div className="check-out__input-card">
                    <label className="check-out__label" htmlFor="city">
                      Town / City *
                    </label>
                    <input
                      required
                      type="text"
                      id="city"
                      className="check-out__input"
                      placeholder="Town / City"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="check-out__input-cards">
                    <div className="check-out__input-card">
                      <label className="check-out__label" htmlFor="state">
                        State
                      </label>
                      <input
                        required
                        id="state"
                        type="text"
                        className="check-out__input"
                        placeholder="State"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="check-out__input-card">
                      <label className="check-out__label" htmlFor="zipCode">
                        Zip Code
                      </label>
                      <input
                        required
                        id="zipCode"
                        type="text"
                        className="check-out__input"
                        placeholder="Zip Code"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="check-out__checkbox-card">
                    <input
                      type="checkbox"
                      id="useDifferentBillingAddress"
                      name="useDifferentBillingAddress"
                      checked={formData.useDifferentBillingAddress}
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="useDifferentBillingAddress"
                      className="check-out__label"
                    >
                      Use a different billing address (optional)
                    </label>
                  </div>
                </div>
                <div className="check-out__payment-method">
                  <h2 className="check-out__title">Payment method</h2>
                  <div className="check-out__radio-box">
                    <label className="check-out__radio-label" htmlFor="credit">
                      <input
                        required
                        type="radio"
                        name="paymentMethod"
                        id="credit"
                        value="credit"
                        checked={formData.paymentMethod === "credit"}
                        onChange={handleInputChange}
                      />
                      <p>Pay by Card Credit</p>
                      <BiCreditCardFront />
                    </label>
                    <label className="check-out__radio-label" htmlFor="paypal">
                      <input
                        required
                        type="radio"
                        name="paymentMethod"
                        id="paypal"
                        value="paypal"
                        checked={formData.paymentMethod === "paypal"}
                        onChange={handleInputChange}
                      />
                      <p>Paypal</p>
                    </label>
                  </div>
                  <div className="check-out__input-card">
                    <label className="check-out__label" htmlFor="cardNumber">
                      Card Number
                    </label>
                    <input
                      required
                      type="text"
                      id="cardNumber"
                      className="check-out__input"
                      placeholder="1234 1234 1234"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="check-out__input-cards">
                    <div className="check-out__input-card">
                      <label
                        className="check-out__label"
                        htmlFor="expirationDate"
                      >
                        Expiration dates
                      </label>
                      <input
                        required
                        id="expirationDate"
                        type="date"
                        className="check-out__input"
                        name="expirationDate"
                        value={formData.expirationDate}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="check-out__input-card">
                      <label className="check-out__label" htmlFor="cvc">
                        CVC
                      </label>
                      <input
                        required
                        id="cvc"
                        type="text"
                        className="check-out__input"
                        placeholder="CVC code"
                        name="cvc"
                        value={formData.cvc}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setOrder(true)}
                  className="check-out__payment-btn"
                >
                  Place Order
                </button>
              </div>
              <div className="check-out__right-box">
                <div className="check-out__right-wrapper">
                  <h2 className="check-out__right-box-title">Order summary</h2>
                  {cartData.map((item) => (
                    <div key={item.id} className="check-out__right-box-card">
                      <div className="check-out__right-box-card-content">
                        <img
                          className="check-out__right-box-card-img"
                          src={item?.images[0]}
                          alt={item?.title}
                        />
                        <div className="check-out__right-box-card-part">
                          <h3 className="check-out__right-box-card-title">
                            {item?.title}
                          </h3>
                          <p className="check-out__right-box-card-text">
                            Color: Black
                          </p>
                          <div className="check-out__right-box-card-counter">
                            <button
                              disabled={item?.quantity <= 0}
                              onClick={() => dispatch(decreaseAmount(item))}
                              className="check-out__right-box-card-minus-btn"
                            >
                              -
                            </button>
                            <p>{item?.amount}</p>
                            <button
                              onClick={() => dispatch(addToCart(item))}
                              className="check-out__right-box-card-plus-btn"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="check-out__right-box-card-price">
                        <p className="check-out__right-box-price-text">
                          ${item?.price}
                        </p>
                        <button
                          onClick={() => dispatch(removeCart(item?.id))}
                          className="check-out__right-box-close-btn"
                        >
                          <MdClose />
                        </button>
                      </div>
                    </div>
                  ))}

                  <form className="check-out__right-box-form">
                    <input
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      type="text"
                      className="check-out__right-box-input"
                      placeholder="Input"
                    />

                    <button
                      onClick={handleCoupon}
                      className="check-out__right-box-apply-btn"
                    >
                      Apply
                    </button>
                  </form>
                  <ul className="check-out__right-box-list">
                    <li className="check-out__right-box-item">
                      <h3 className="check-out__right-box-item-title">
                        JenkateMW
                      </h3>
                      <p className="check-out__right-box-item-text check-out__right-box-item-text--remove">
                        18.00{"[Remove]"}
                      </p>
                    </li>
                    <li className="check-out__right-box-item">
                      <h3 className="check-out__right-box-item-title">
                        Shipping
                      </h3>
                      <p className="check-out__right-box-item-text">$18.00</p>
                    </li>
                    <li className="check-out__right-box-item">
                      <h3 className="check-out__right-box-item-title">
                        Subtotal
                      </h3>
                      <p className="check-out__right-box-item-text">$18.00</p>
                    </li>
                  </ul>
                  <div className="check-out__right-box-total-count">
                    <p className="check-out__right-box-total-count-text">
                      Total
                    </p>
                    <p className="check-out__right-box-total-count-text">
                      ${calculateDiscountedPrice()}
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOrder(true)}
                className="check-out__payment-btn check-out__payment-btn-responsive "
              >
                Place Order
              </button>
            </div>
          </section>{" "}
        </>
      )}
    </>
  );
};

export default memo(CheckoutDetails);
