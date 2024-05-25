import React, { useEffect, useState } from "react";
import "./OrderFail.css";
import { useNavigate } from "react-router-dom";

const OrderFail = () => {

  const navigate = useNavigate();

  const continueShop = () => {
    navigate("/checkout");
  };

  return (
    <div className="container text-center mt-3 fail-order">
      <h2>Bạn đã đặt hàng thất bại</h2>
      <img className="image-error" src="https://images.pexels.com/photos/4439425/pexels-photo-4439425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <div className="btn-return-checkout">
        <button
          className="btn btn-buy-now"
          type="button"
          onClick={() => continueShop()}
        >
          Quay lại trang thanh toán
        </button>
      </div>
    </div>
  );
};

export default OrderFail;
