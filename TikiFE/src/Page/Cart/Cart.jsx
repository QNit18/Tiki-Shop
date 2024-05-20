import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const negative = useNavigate();

  useEffect(()=> {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = storedCartItems.map((item) => ({
      ...item,
      price: parseFloat(item.price),
      quantity: parseInt(item.quantity),
    }));
    // console.log(updatedCartItems)
    setCartItems(updatedCartItems);
  }, []);

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleChangeQuantity = (id, change) => {
    const updateCartItems = cartItems
      .map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          if (newQuantity <= 0) {
            if(window.confirm("Bạn sẽ xoá mặt hàng này khỏi giỏ hàng ?")){
              return null;
            }else {
              return item;
            }
          } else {
            return { ...item, quantity: newQuantity };
          }
        }
        return item;
      })
      .filter(Boolean); // Remove ptu null
    setCartItems(updateCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updateCartItems));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const toCheckout = () => {
    if(cartItems.length > 0){
      negative("/checkout")
    }else{
      window.alert("Bạn phải có sản phẩm mới tiến hành mua hàng được!")
    }
  }

  return (
    <div>
      <div className="container mt-3">
        <h3>Giỏ hàng</h3>
        <div className="row">
          <div className="col-lg-9">
            <div
              className="card remove-border p-2"
              style={{ fontWeight: "bolder" }}
            >
              <div className="row">
                <div class="col-lg-6">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label
                    className="form-check-label ms-1"
                    for="flexCheckChecked"
                  >
                    Tất cả ({cartItems.length} sản phẩm)
                  </label>
                </div>
                <div className="col-lg-6 info-cart-product d-none d-lg-block">
                  <div className="row">
                    <div className="col-lg unit-price opacity-75">Đơn giá</div>
                    <div className="col-lg unit-quantity opacity-75k">
                      Số lượng
                    </div>
                    <div className="col-lg unit-total-money opacity-75 ">
                      Thành tiền
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {cartItems.map((item, index) => (
              <div key={item.id} className="card mt-2 remove-border p-2">
                <div className="author">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id={`flexCheckChecked${index}`}
                      checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`flexCheckChecked${index}`}
                    >
                      <p>{item.company}</p>
                    </label>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 d-flex">
                    <div className="col-lg-3 image-product-card">
                      <img alt={item.name} src={item.image} />
                    </div>
                    <div className="ms-2">
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "blue", marginRight: "10px" }}
                      ></i>
                      Chính hãng
                      <div className="info-product-card">
                        <p>{item.name}</p>
                        <div className="can-time-shipping">
                          <i class="fa-solid fa-truck-fast"></i> Giao thứ 2,
                          13/05
                        </div>
                        <p>Sách không hỗ trợ Bookcare</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center fw-bold d-none d-lg-block">
                    <div className="row">
                      <div className="col-lg unit-price opacity-75">
                        {formatPrice(item.price)} đ
                      </div>
                      <div className="col-lg unit-quantity opacity-75">
                        <button
                          onClick={() => handleChangeQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => handleChangeQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                      <div className="col-lg unit-total-money opacity-75">
                        {formatPrice(item.price * item.quantity)}đ
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-3">
            <div className="card p-3 about-shipping">
              <div className="row">
                <div className="col-7">Giao tới</div>
                <div className="col-5">Thay đổi</div>
              </div>
              <div className="row">
                <div className="col-7">Nguyen Van Quang</div>
                <div className="col-5">0366441803</div>
              </div>
              <div className="address-cart">
                <i>Địa chi</i>: Xóm 3 Nguyễn Úy, Xã Nguyễn Úy, Huyện Kim Bảng,
                Hà Nam
              </div>
            </div>

            <div className="card p-3 mt-2">
              <div className="row">
                <div className="col-7">Tiki Khuyến mãi</div>
                <div className="col-5">Có thể chọn 2</div>
              </div>
              <br />
              <div style={{ color: "blue", fontSize: "15px" }} className="ms-2">
                <i class="fa-solid fa-ticket"></i> Chọn hoặc nhập khuyến mại
                khác
              </div>
            </div>

            <div className="card p-3 mt-2">
              <div className="row">
                <div className="col-6">Tạm tính</div>
                <div className="col-6">{formatPrice(subtotal)} đ</div>
              </div>
              <div className="row">
                <div className="col-6">Giảm giá</div>
                <div className="col-6">-10.000 đ</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-6">Tổng tiền</div>
                <div className="col-6 fs-5">
                  {formatPrice(subtotal - 10000)} đ
                </div>
              </div>
            </div>
            <div to="/checkout" className="card mt-2 btn-buy">
              <button
                class="btn btn-buy-now"
                type="button"
                onClick={toCheckout}
              >
                Mua ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
