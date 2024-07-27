import React, { memo } from "react";
import { IoClose } from "react-icons/io5";
import "./modal.scss";

const Modal = ({ children, close, width }) => {
  return (
    <>
      <div className="overlay" onClick={() => close(false)}></div>
      <div style={{ width }} className="modal">
        <div className="modal__close">
          <button onClick={() => close(false)}>
            <IoClose />
          </button>
        </div>
        {children}
      </div>
    </>
  );
};

export default memo(Modal);
