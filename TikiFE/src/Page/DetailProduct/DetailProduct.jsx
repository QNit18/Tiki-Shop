import React from "react";
import "./DetailProduct.css";

const DetailProduct = () => {
  return (
    <div>
      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-lg-3 d-none d-lg-block">
            <div class="card">
              <img
                src="https://salt.tikicdn.com/cache/750x750/ts/product/01/66/58/fe886ea64fb2b7de001d0bc4957fac49.jpg.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body d-none d-lg-block">
                <div className="carousel-image row mb-2">
                  <img
                    className="col-lg-3"
                    src="https://salt.tikicdn.com/cache/750x750/ts/product/01/66/58/fe886ea64fb2b7de001d0bc4957fac49.jpg.webp"
                    alt="..."
                  />
                  <img
                    className="col-lg-3"
                    src="https://salt.tikicdn.com/cache/750x750/ts/product/01/66/58/fe886ea64fb2b7de001d0bc4957fac49.jpg.webp"
                    alt="..."
                  />
                  <img
                    className="col-lg-3"
                    src="https://salt.tikicdn.com/cache/750x750/ts/product/01/66/58/fe886ea64fb2b7de001d0bc4957fac49.jpg.webp"
                    alt="..."
                  />
                  <img
                    className="col-lg-3"
                    src="https://salt.tikicdn.com/cache/750x750/ts/product/01/66/58/fe886ea64fb2b7de001d0bc4957fac49.jpg.webp"
                    alt="..."
                  />
                </div>
                <h6 class="card-title">Đặc điểm nổi bật</h6>
                <p class="card-text">
                  <i
                    class="fa-solid fa-circle-check"
                    style={{ color: "blue" }}
                  ></i>{" "}
                  &nbsp; Cung cấp kiến thức tối ưu từ những thành công và sai
                  lầm của các nhà giao dịch đã kiếm được hàng
                </p>
                <p class="card-text">
                  <i
                    class="fa-solid fa-circle-check"
                    style={{ color: "blue" }}
                  ></i>{" "}
                  &nbsp; Cung cấp kiến thức tối ưu từ những thành công và sai
                  lầm của các nhà giao dịch đã kiếm được hàng
                </p>
                <p class="card-text">
                  <i
                    class="fa-solid fa-circle-check"
                    style={{ color: "blue" }}
                  ></i>{" "}
                  &nbsp; Cung cấp kiến thức tối ưu từ những thành công và sai
                  lầm của các nhà giao dịch đã kiếm được hàng
                </p>
                <hr />
                <a href="/">Xem thông thông tin</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="card p-2">
              <div className="info-author ">
                <img
                  src="https://salt.tikicdn.com/cache/750x750/ts/product/01/66/58/fe886ea64fb2b7de001d0bc4957fac49.jpg.webp"
                  alt=""
                  className="d-block d-lg-none imgae-after-responsive mb-2"
                />
                <div className="d-flex d-flex align-items-center align-content-center">
                  <i
                    class="fa-solid fa-circle-check"
                    style={{ color: "blue" }}
                  ></i>
                  <p style={{ color: "blue" }}>Chính hãng</p>
                  <p>Tác giả:</p>{" "}
                  <a className="ms-2" href="/">
                    Aleksandra Mizinska, Edo gawa
                  </a>
                </div>
              </div>

              <div className="mt-2">
                <h5 className="card-title">Bản Đồ</h5>
                <div className="vote-product" style={{ fontSize: "12px" }}>
                  4.8 <i class="fa-solid fa-star color-star"></i>
                  <i class="fa-solid fa-star color-star"></i>
                  <i class="fa-solid fa-star color-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i> (928) | Đã bán 5000+
                </div>
                <h6 className="card-product-price mt-2">
                  250.000 đ &nbsp;
                  <p className="d-inline percent-discount">-2.6%</p>
                </h6>
              </div>

              <div className="info-product mt-4 d-none d-lg-block">
                <h6 style={{ fontSize: "1rem" }}>Thông tin chi tiết</h6>
                <div className="table-info-product">
                  <div className="version-book row">
                    <p className="col-lg-6 info-supiler">Phiên bản sách</p>
                    <p className="col-lg-6">Phiên bản thường</p>
                  </div>
                  <hr />
                  <div className="version-book row">
                    <p className="col-lg-6 info-supiler">Công ty phát hành</p>
                    <p className="col-lg-6">Phiên bản thường</p>
                  </div>
                  <hr />
                  <div className="version-book row">
                    <p className="col-lg-6 info-supiler">Ngày xuất bản</p>
                    <p className="col-lg-6">Phiên bản thường</p>
                  </div>
                  <hr />
                  <div className="version-book row">
                    <p className="col-lg-6 info-supiler">Kích thước</p>
                    <p className="col-lg-6">Phiên bản thường</p>
                  </div>
                  <hr />
                  <div className="version-book row">
                    <p className="col-lg-6 info-supiler">Dịch Giá</p>
                    <p className="col-lg-6">Phiên bản thường</p>
                  </div>
                  <hr />
                  <div className="version-book row">
                    <p className="col-lg-6 info-supiler">Loại bìa</p>
                    <p className="col-lg-6">Phiên bản thường</p>
                  </div>
                  <hr />
                  <div className="version-book row">
                    <p className="col-lg-6 info-supiler">Số trang</p>
                    <p className="col-lg-6">Phiên bản thường</p>
                  </div>
                  <hr />
                  <div className="version-book row">
                    <p className="col-lg-6 info-supiler">Nhà xuất bản</p>
                    <p className="col-lg-6">Nhà xuất bản Lao Động</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-2 mt-3">
              <h6>Mô tả sản phẩm</h6>
              <img
                src="https://salt.tikicdn.com/cache/750x750/ts/product/01/66/58/fe886ea64fb2b7de001d0bc4957fac49.jpg.webp"
                alt=""
              />
              <p className="detail-product">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, explicabo? Tempora laborum molestias quod at nobis ut
                incidunt vitae? Accusantium ut ex culpa necessitatibus tempora
                deserunt beatae eos voluptatibus quidem! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Dolor est, quam in explicabo
                hic aliquam quae reprehenderit, veniam aliquid minus ab dolore
                voluptatibus fugit iure! Vitae fugit exercitationem dolor error.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card p-2 check-quantity-product">
              <h6>Số lượng</h6>
              <div className="d-flex gap-1 quantity-product">
                <button
                  className="sub-product btn-quantity-product"
                  type="button"
                >
                  -
                </button>
                <div className="count-product">1</div>
                <button
                  className="plus-product btn-quantity-product"
                  type="button"
                >
                  +
                </button>
              </div>
              <div className="quantity-price mt-3">
                <h6>Tạm tính</h6>
                <h5 className="card-product-price mt-2">250.000 đ &nbsp;</h5>
              </div>
              <div class="d-grid gap-2">
                <button class="btn btn-buy-now" type="button">
                  Mua ngay
                </button>
                <button class="btn btn-status-custom" type="button">
                  Thêm vào giỏ hàng
                </button>
                <button class="btn btn-status-custom" type="button">
                  Mua trước trả sau
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
