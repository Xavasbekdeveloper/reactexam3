import React, { memo, useEffect } from "react";
import { TbHome } from "react-icons/tb";
import { TbPhone } from "react-icons/tb";
import { TbMail } from "react-icons/tb";
import Service from "../../components/service/Service";
import Banners from "../../components/banners/Banners";

import "./contact.scss";
import useGetInputValue from "../../hooks/useGetValue";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const BOT__TOKEN = "7296011111:AAH9fsPtqvBOqekhvlcG9MVl4JBifgNtEJk";
const CHAT__ID = "-1002221404265";

const Contact = () => {
  const { formData, setFormData, handleChange } =
    useGetInputValue(initialState);

  const handleSend = (e) => {
    e.preventDefault();
    const text = `Name: ${formData.name} %0AEmail: ${formData.email} %0AMessage: ${formData.message}`;

    let url = ` https://api.telegram.org/bot${BOT__TOKEN}/sendMessage?chat_id=${CHAT__ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    setFormData(initialState);
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className="contact">
      <div className="container">
        <h1>
          We believe in sustainable decor. We’re passionate about life at home.
        </h1>
        <p className="contact__desc">
          Our features timeless furniture, with natural fabrics, curved lines,
          plenty of mirrors and classic design, which can be incorporated into
          any decor project. The pieces enchant for their sobriety, to last for
          generations, faithful to the shapes of each period, with a touch of
          the present
        </p>
        <Banners
          title={"About Us"}
          desc={
            "3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. Our customer service is always prepared to  support you <br /> 24/7"
          }
        />
        <h2 className="contact__title">Contact Us</h2>
        <div className="contact__cards">
          <div className="contact__card">
            <TbHome />
            <p>Address</p>
            <h3>234 Hai Trieu, Ho Chi Minh City, Viet Nam</h3>
          </div>
          <div className="contact__card">
            <TbPhone />
            <p>Contact Us</p>
            <h3>+84 234 567 890</h3>
          </div>
          <div className="contact__card">
            <TbMail />
            <p>Email</p>
            <h3>hello@3legant.com</h3>
          </div>
        </div>
        <div className="contact__form">
          <form onSubmit={handleSend} action="" className="contact__form__left">
            <div className="contact__form__input">
              <label htmlFor="fullName">Full Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="contact__form__input">
              <label htmlFor="fullName">Email Address</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                type="text"
                placeholder="Your Email"
              />
            </div>
            <div className="contact__form__input">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                type="text"
                placeholder="Message"
              />
            </div>
            <button>Send Message</button>
          </form>
          <div className="contact__form__right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11992.726986994308!2d69.20431214999999!3d41.2831488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1722011724520!5m2!1sen!2s"
              height="400px"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="contact__service">
        <Service />
      </div>
    </section>
  );
};

export default memo(Contact);
