import React, { useEffect, useState } from "react";
import "./OrderSuccess.css";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const [books, setBooks] = useState([]);
  const [dataRetrieved, setDataRetrieved] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedBook = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedBooks = storedBook.map((item) => ({
      ...item,
      price: parseFloat(item.price),
      quantity: parseInt(item.quantity),
    }));
    setBooks(updatedBooks);
    setDataRetrieved(true);
  }, []);

  useEffect(() => {
    if (dataRetrieved){
      localStorage.removeItem("cartItems");
    }
  }, [dataRetrieved]);

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const subTotal = books.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const continueShop = () => {
    navigate("/");
  };

  return (
    <div className="container text-center mt-3">
      <h2>Bạn đã đặt hàng thành công</h2>
      <div className="row">
        <div className="col-lg-9">
          <div className="card p-3">
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
                          class="fa-solid fa-circle-check"
                          style={{ color: "blue", marginRight: "10px" }}
                        ></i>
                        Chính hãng
                        <div className="info-product-card">
                          <p>{book.name}</p>
                          <div className="can-time-shipping">
                            <i class="fa-solid fa-truck-fast"></i> Giao thứ 2,
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
        </div>
        <div className="col-lg-3">
          <div className="card p-3 about-shipping">
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
              <div className="col-7">Tổng tiền</div>
              <div className="col-5 fs-6" style={{ color: "green" }}>
                {formatPrice(subTotal + 84000 - 14000 - 10000)} đ
              </div>
            </div>
          </div>
          <div className="card mt-2">
            <button
              class="btn btn-buy-now"
              type="button"
              onClick={() => continueShop()}
            >
              Tiếp tục mua hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
