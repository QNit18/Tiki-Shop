import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="container mt-3">
      <h3 className="ms-1 title-order">Tiến hành đặt hàng</h3>
      <div className="row">
        <div className="col-lg-9">
          <div className="card p-3">
            <h5>Chọn hình thức giao hàng</h5>
            <div
              className="card p-3"
              style={{ width: "60%", backgroundColor: "#f0f8ff" }}
            >
              <div class="form-check ">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault-check"
                  id="flexRadioDefault-check"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault-check">
                  Giao hàng tiết kiệm
                </label>
              </div>
            </div>

            <div className="product-checkout p-2 mt-2">
              <div className="row">
                <div className="col-lg-8 col-12" style={{ fontSize: "12px" }}>
                  <div className="row">
                    <p className="col-9">GIAO TIẾT KIỆM</p>
                    <p className="col-3">16.000đ</p>
                  </div>

                  <div className="row">
                    <div className="col-2 image-product-card">
                      <img
                        alt=""
                        src="https://salt.tikicdn.com/cache/w160/ts/product/81/d0/dc/98a3aacdef091d52a1e23f1dbcaf7b95.jpg.webp"
                      />
                    </div>
                    <div className="col-7">
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "blue", marginRight: "10px" }}
                      ></i>
                      Chính hãng
                      <div className="info-product-card">
                        <p>Sách Tài Chính Cá Nhân Cho Người Việt Nam</p>
                        <div className="can-time-shipping">
                          <i class="fa-solid fa-truck-fast"></i> Giao thứ 2,
                          13/05
                        </div>
                        <p>SL: x1</p>
                      </div>
                    </div>
                    <div className="col-3 d-flex" style={{ fontSize: "14px" }}>
                      <p className="align-self-end">200.000 ₫</p>
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
                          Được giao bởi TikiNOW Smart Logistics (giao từ Hồ Chí
                          Minh)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-checkout p-2 mt-2">
              <div className="row">
                <div className="col-lg-8 col-12" style={{ fontSize: "12px" }}>
                  <div className="row">
                    <p className="col-9">GIAO TIẾT KIỆM</p>
                    <p className="col-3">16.000đ</p>
                  </div>

                  <div className="row">
                    <div className="col-2 image-product-card">
                      <img
                        alt=""
                        src="https://salt.tikicdn.com/cache/w160/ts/product/81/d0/dc/98a3aacdef091d52a1e23f1dbcaf7b95.jpg.webp"
                      />
                    </div>
                    <div className="col-7">
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "blue", marginRight: "10px" }}
                      ></i>
                      Chính hãng
                      <div className="info-product-card">
                        <p>Sách Tài Chính Cá Nhân Cho Người Việt Nam</p>
                        <div className="can-time-shipping">
                          <i class="fa-solid fa-truck-fast"></i> Giao thứ 2,
                          13/05
                        </div>
                        <p>SL: x1</p>
                      </div>
                    </div>
                    <div className="col-3 d-flex" style={{ fontSize: "14px" }}>
                      <p className="align-self-end">200.000 ₫</p>
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
                          Được giao bởi TikiNOW Smart Logistics (giao từ Hồ Chí
                          Minh)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-checkout p-2 mt-2">
              <div className="row">
                <div className="col-lg-8 col-12" style={{ fontSize: "12px" }}>
                  <div className="row">
                    <p className="col-9">GIAO TIẾT KIỆM</p>
                    <p className="col-3">16.000đ</p>
                  </div>

                  <div className="row">
                    <div className="col-2 image-product-card">
                      <img
                        alt=""
                        src="https://salt.tikicdn.com/cache/w160/ts/product/81/d0/dc/98a3aacdef091d52a1e23f1dbcaf7b95.jpg.webp"
                      />
                    </div>
                    <div className="col-7">
                      <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "blue", marginRight: "10px" }}
                      ></i>
                      Chính hãng
                      <div className="info-product-card">
                        <p>Sách Tài Chính Cá Nhân Cho Người Việt Nam</p>
                        <div className="can-time-shipping">
                          <i class="fa-solid fa-truck-fast"></i> Giao thứ 2,
                          13/05
                        </div>
                        <p>SL: x1</p>
                      </div>
                    </div>
                    <div className="col-3 d-flex" style={{ fontSize: "14px" }}>
                      <p className="align-self-end">200.000 ₫</p>
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
                          Được giao bởi TikiNOW Smart Logistics (giao từ Hồ Chí
                          Minh)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-2 p-3">
            <h5>Chọn hình thức thanh toán</h5>
            <div className="form-check-payment-method">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  <i class="fa-solid fa-hand-holding-dollar"></i> Thanh toán khi
                  nhận hàng (COD)
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  <i class="fa-solid fa-credit-card"></i> Thanh toán bằng thẻ
                  nội địa
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  <i
                    class="fa-brands fa-cc-visa"
                    style={{ fontSize: "20px", marginLeft: "-1px" }}
                  ></i>{" "}
                  Thanh toán bằng thẻ Visa
                </label>
              </div>
            </div>
          </div>
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
              <div className="col-5">0366441803</div>
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
              <i class="fa-solid fa-ticket"></i> Chọn hoặc nhập khuyến mại khác
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
                <div className="col-5">600.000đ</div>
              </div>
              <div className="row">
                <div className="col-7">Chi phí vận chuyển</div>
                <div className="col-5">84.000 đ</div>
              </div>
              <div className="row">
                <div className="col-7">Khuyến mãi vận chuyển</div>
                <div className="col-5" style={{ color: "green" }}>
                  -14.000 đ
                </div>
              </div>
              <div className="row">
                <div className="col-7">Giảm giá</div>
                <div className="col-5 " style={{ color: "green" }}>
                  -10.000 đ
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-7">Tổng tiền</div>
              <div className="col-5 fs-5" style={{ color: "red" }}>
                590.000 đ
              </div>
            </div>
          </div>
          <div className="card mt-2">
            <button class="btn btn-buy-now" type="button">
              Đặt hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
