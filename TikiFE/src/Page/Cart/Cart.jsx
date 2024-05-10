import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div>
      <div className="container mt-3">
        <h3>Giỏ hàng</h3>
        <div className="row">
          <div className="col-lg-9">
            <div className="card remove-border p-2">
              <div className="row">
                <div class="col-lg-6">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label className="form-check-label ms-1" for="flexCheckChecked">
                    Tất cả (1 sản phẩm)
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

            <div className="card mt-2 remove-border p-2">
              <div className="author">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    <p>Luân Việt Book </p>
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 d-flex">
                  <div className="col-lg-3 image-product-card">
                    <img alt="" src="https://salt.tikicdn.com/cache/w160/ts/product/81/d0/dc/98a3aacdef091d52a1e23f1dbcaf7b95.jpg.webp" />
                  </div>
                  <div className="ms-2">
                    <i
                      class="fa-solid fa-circle-check"
                      style={{ color: "blue", marginRight: "10px" }}
                    ></i>
                    Chính hãng
                    <div className="info-product-card">
                      <p>
                        Sách Tài Chính Cá Nhân Cho Người Việt Nam - Tặng Khóa
                        học Online về Tài chính
                      </p>
                      <div className="can-time-shipping">
                        <i class="fa-solid fa-truck-fast"></i> Giao thứ 2, 13/05
                      </div>
                      <p>Sách không hỗ trợ Bookcare</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center fw-bold d-none d-lg-block">
                  <div className="row">
                    <div className="col-lg unit-price opacity-75">200.000</div>
                    <div className="col-lg unit-quantity opacity-75">2</div>
                    <div className="col-lg unit-total-money opacity-75">
                      400.000
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-6 d-flex">
                  <div className="col-lg-3 image-product-card">
                    <img alt="" src="https://salt.tikicdn.com/cache/w160/ts/product/81/d0/dc/98a3aacdef091d52a1e23f1dbcaf7b95.jpg.webp" />
                  </div>
                  <div className="ms-2">
                    <i
                      class="fa-solid fa-circle-check"
                      style={{ color: "blue", marginRight: "10px" }}
                    ></i>
                    Chính hãng
                    <div className="info-product-card">
                      <p>
                        Sách Tài Chính Cá Nhân Cho Người Việt Nam - Tặng Khóa
                        học Online về Tài chính
                      </p>
                      <div className="can-time-shipping">
                        <i class="fa-solid fa-truck-fast"></i> Giao thứ 2, 13/05
                      </div>
                      <p>Sách không hỗ trợ Bookcare</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center fw-bold d-none d-lg-block">
                  <div className="row">
                    <div className="col-lg unit-price opacity-75">200.000</div>
                    <div className="col-lg unit-quantity opacity-75">2</div>
                    <div className="col-lg unit-total-money opacity-75">
                      400.000
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-6 d-flex">
                  <div className="col-lg-3 image-product-card">
                    <img alt="" src="https://salt.tikicdn.com/cache/w160/ts/product/81/d0/dc/98a3aacdef091d52a1e23f1dbcaf7b95.jpg.webp" />
                  </div>
                  <div className="ms-2">
                    <i
                      class="fa-solid fa-circle-check"
                      style={{ color: "blue", marginRight: "10px" }}
                    ></i>
                    Chính hãng
                    <div className="info-product-card">
                      <p>
                        Sách Tài Chính Cá Nhân Cho Người Việt Nam - Tặng Khóa
                        học Online về Tài chính
                      </p>
                      <div className="can-time-shipping">
                        <i class="fa-solid fa-truck-fast"></i> Giao thứ 2, 13/05
                      </div>
                      <p>Sách không hỗ trợ Bookcare</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center fw-bold d-none d-lg-block">
                  <div className="row">
                    <div className="col-lg unit-price opacity-75">200.000</div>
                    <div className="col-lg unit-quantity opacity-75">2</div>
                    <div className="col-lg unit-total-money opacity-75">
                      400.000
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                <div className="col-6">600.000đ</div>
              </div>
              <div className="row">
                <div className="col-6">Giảm giá</div>
                <div className="col-6">-10.000đ</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-6">Tổng tiền</div>
                <div className="col-6 fs-5">590.000 đ</div>
              </div>
            </div>
            <div className="card mt-2">
              <button class="btn btn-buy-now" type="button">
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
