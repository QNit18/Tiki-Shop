import React, { useEffect, useState } from "react";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [books, setBooks] = useState([]);
  const [selectedMethod, setSelectedMehthod] = useState("COD");

  const navigate = useNavigate();

  useEffect(() => {
    const storedBook = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedBooks = storedBook.map(item => ({
      ...item,
      price: parseFloat(item.price),
      quantity: parseInt(item.quantity)
    }));
    setBooks(updatedBooks);
  }, []);

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleMethodChange = (method) => {
    setSelectedMehthod(method);
  };

  const complete = () => {
    const subTotal = books.reduce((total, item) => total + item.price * item.quantity, 0);

    if (selectedMethod === "CreditCard") {
      fetch(`http://localhost:8080/submitOrder?amount=${subTotal}&orderInfo=Thanh toan don hang 2923`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          window.location.href = data.url;
        })
        .catch(error => {
          console.error("Error submitting order:", error);
        });
    } else {
      navigate("/complete");
    }
  }

  const subTotal = books.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mt-3">
      <h3 className="ms-1 title-order">Tiến hành đặt hàng</h3>
      <div className="row">
        <div className="col-lg-9">
          <div className="card p-3">
            <h5>Chọn hình thức giao hàng</h5>
            <div
              className="card p-3"
              style={{ width: "100%", backgroundColor: "#f0f8ff" }}
            >
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault-check"
                  id="flexRadioDefault-check"
                  checked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault-check">
                  Giao hàng tiết kiệm
                </label>
              </div>
            </div>

            {books.map((book, index) => (
              <div className="product-checkout p-2 mt-2" key={index}>
                <div className="row">
                  <div className="col-lg-8 col-12" style={{ fontSize: "12px" }}>
                    <div className="row">
                      <p className="col-9">GIAO TIẾT KIỆM</p>
                      <p className="col-3">16.000đ</p>
                    </div>

                    <div className="row">
                      <div className="col-2 image-product-card">
                        <img alt="" src={book.image} />
                      </div>
                      <div className="col-7">
                        <i
                          className="fa-solid fa-circle-check"
                          style={{ color: "blue", marginRight: "10px" }}
                        ></i>
                        Chính hãng
                        <div className="info-product-card">
                          <p>{book.name}</p>
                          <div className="can-time-shipping">
                            <i className="fa-solid fa-truck-fast"></i> Giao thứ 2,
                            13/05
                          </div>
                          <p>SL: x{book.quantity}</p>
                        </div>
                      </div>
                      <div
                        className="col-3 d-flex"
                        style={{ fontSize: "14px" }}
                      >
                        <p className="align-self-end">
                          {formatPrice(book.price * book.quantity)}₫
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12  d-flex align-items-center">
                    <div
                      className="card p-2"
                      style={{ backgroundColor: "#f5f5fa" }}
                    >
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <i className="fa-solid fa-truck-fast"></i>
                        </div>
                        <div className="col">
                          <p className="mb-0">
                            Được giao bởi TikiNOW Smart Logistics (giao từ Hồ
                            Chí Minh)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card mt-2 p-3">
            <h5>Chọn hình thức thanh toán</h5>
            <div className="form-check-payment-method">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  checked={selectedMethod === "COD"}
                  onChange={() => handleMethodChange("COD")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  <i className="fa-solid fa-hand-holding-dollar"></i> Thanh toán
                  khi nhận hàng (COD)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked={selectedMethod === "CreditCard"}
                  onChange={() => handleMethodChange("CreditCard")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  <i className="fa-solid fa-credit-card"></i> Thanh toán bằng
                  thẻ nội địa
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  checked={selectedMethod === "Visa"}
                  onChange={() => handleMethodChange("Visa")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  <i
                    className="fa-brands fa-cc-visa"
                    style={{ fontSize: "20px", marginLeft: "-1px" }}
                  ></i>{" "}
                  Thanh toán bằng thẻ Visa
                </label>
              </div>
            </div>
          </div>
          {selectedMethod === "Visa" && (
            <div className="card mt-2 p-3">
              <div className="col-lg-5">
                <div className="card bg-primary text-white rounded-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h5 className="mb-0">Card details</h5>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                        className="img-fluid rounded-3"
                        style={{ width: "45px" }}
                        alt="Avatar"
                      />
                    </div>

                    <p className="small mb-2">Card type</p>
                    <a href="#!" type="submit" className="text-white">
                      <i className="fab fa-cc-mastercard fa-2x me-2"></i>
                    </a>
                    <a href="#!" type="submit" className="text-white">
                      <i className="fab fa-cc-visa fa-2x me-2"></i>
                    </a>
                    <a href="#!" type="submit" className="text-white">
                      <i className="fab fa-cc-amex fa-2x me-2"></i>
                    </a>
                    <a href="#!" type="submit" className="text-white">
                      <i className="fab fa-cc-paypal fa-2x"></i>
                    </a>

                    <form className="mt-4">
                      <div
                        data-mdb-input-init
                        className="form-outline form-white mb-4"
                      >
                        <input
                          type="text"
                          id="typeName"
                          className="form-control form-control-lg"
                          siez="17"
                          placeholder="Cardholder's Name"
                        />
                        <label className="form-label" htmlFor="typeName">
                          Cardholder's Name
                        </label>
                      </div>

                      <div
                        data-mdb-input-init
                        className="form-outline form-white mb-4"
                      >
                        <input
                          type="text"
                          id="typeText"
                          className="form-control form-control-lg"
                          siez="17"
                          placeholder="1234 5678 9012 3457"
                          minLength="19"
                          maxLength="19"
                        />
                        <label className="form-label" htmlFor="typeText">
                          Card Number
                        </label>
                      </div>

                      <div className="row mb-4">
                        <div className="col-md-6">
                          <div
                            data-mdb-input-init
                            className="form-outline form-white"
                          >
                            <input
                              type="text"
                              id="typeExp"
                              className="form-control form-control-lg"
                              placeholder="MM/YYYY"
                              size="7"
                              minLength="7"
                              maxLength="7"
                            />
                            <label className="form-label" htmlFor="typeExp">
                              Expiration
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div
                            data-mdb-input-init
                            className="form-outline form-white"
                          >
                            <input
                              type="password"
                              id="typeText"
                              className="form-control form-control-lg"
                              placeholder="&#9679;&#9679;&#9679;"
                              size="1"
                              minLength="3"
                              maxLength="3"
                            />
                            <label className="form-label" htmlFor="typeText">
                              Cvv
                            </label>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="col-lg-3">
          <div className="card p-3 about-shipping">
            <div className="row">
              <div className="col-7">Giao tới</div>
              <div className="col-5" style={{ color: "blue" }}>
                Thay đổi
              </div>
            </div>
            <div className="row">
              <div className="col-7">Nguyen Van Quang</div>
              <div className="col-5">023456789</div>
            </div>
            <div className="address-cart">
              <i>Địa chi</i>: Xóm 3 Nguyễn Úy, Xã Nguyễn Úy, Huyện Kim Bảng, Hà
              Nam
            </div>
          </div>

          <div className="card p-3 mt-2">
            <div className="row">
              <div className="col-7">Tiki Khuyến mãi</div>
              <div className="col-5">Có thể chọn 2</div>
            </div>
            <br />
            <div style={{ color: "blue", fontSize: "15px" }} className="ms-2">
              <i className="fa-solid fa-ticket"></i> Chọn hoặc nhập khuyến mại khác
            </div>
          </div>

          <div className="card p-3 mt-2">
            <div className="row">
              <div className="col-7">Đơn hàng</div>
              <div className="col-5" style={{ color: "blue" }}>
                Thay đổi
              </div>
            </div>
            <hr />
            <div className="info-to-order">
              <div className="row">
                <div className="col-7">Tạm tính</div>
                <div className="col-5">{formatPrice(subTotal)} đ</div>
              </div>
              <div className="row">
                <div className="col-7">Chi phí vận chuyển</div>
                <div className="col-5">84.000 đ</div>
              </div>
              <div className="row">
                <div className="col-7">Khuyến mãi vận chuyển</div>
                <div className="col-5" style={{ color: "green" }}>
                  -20.000 đ
                </div>
              </div>
              <div className="row">
                <div className="col-7">Giảm giá</div>
                <div className="col-5" style={{ color: "green" }}>
                  -10.000 đ
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-7">Tổng tiền</div>
              <div className="col-5 fs-6" style={{ color: "red" }}>
                {formatPrice(subTotal + 84000 - 14000 - 10000)} đ
              </div>
            </div>
          </div>
          <div className="card mt-2">
            <button
              className="btn btn-buy-now"
              type="button"
              onClick={() => complete()}
            >
              Đặt hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
