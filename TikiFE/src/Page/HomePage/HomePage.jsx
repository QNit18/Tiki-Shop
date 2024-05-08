import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container home-page mb-3 mt-1">
      <div className="position-now d-flex">
        <a href="/" style={{ opacity: "0.6" }}>
          Trang chủ
        </a>
        &nbsp; &gt;&nbsp;
        <a href="/">Nhà sách Tiki</a>
      </div>

      <div className="row main-page">
        <div className="col-lg-2 category rounded-1 d-none d-xxl-block">
          <div className="info">
            <h6 className="mt-2">Danh Mục Sản Phẩm</h6>
            <a href="/" className="d-block">
              English Books
            </a>
            <a href="/" className="d-block">
              Sách tiếng Việt
            </a>
            <a href="/" className="d-block">
              Văn phòng phẩm
            </a>
            <a href="/" className="d-block">
              Quà lưu niệm
            </a>
          </div>
          <hr />
          <h6>Nhà cung cấp</h6>
          <div className="form-supplier">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Nhà sách Fahasa
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Bamboo Books
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Nhà Sách Trẻ Online
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                VBooks
              </label>
            </div>
          </div>
          <hr />
          <h6>Đánh giá</h6>
          <div className="star five-star">
            <i class="fa-solid fa-star color-star"></i>
            <i class="fa-solid fa-star color-star"></i>
            <i class="fa-solid fa-star color-star"></i>
            <i class="fa-solid fa-star color-star"></i>
            <i class="fa-solid fa-star color-star"></i>
            <p className="star-vote">Từ 5 sao</p>
          </div>

          <div className="star four-star">
            <i class="fa-solid fa-star color-star"></i>
            <i class="fa-solid fa-star color-star"></i>
            <i class="fa-solid fa-star color-star"></i>
            <i class="fa-solid fa-star color-star"></i>
            <i class="fa-regular fa-star"></i>
            <p className="star-vote">Từ 4 sao</p>
          </div>
          <div className="star three-star">
            <i class="fa-solid fa-star color-star"></i>
            <i class="fa-solid fa-star color-star"></i>
            <i class="fa-solid fa-star color-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <p className="star-vote">Từ 3 sao</p>
          </div>
          <br />
        </div>

        <div className="col-lg-10 product-item">
          <div className="row">
            <div className="col-lg-3 col-sm-4 col-6 product-cart">
              <div className="card card-item">
                <img
                  src="https://salt.tikicdn.com/cache/280x280/ts/product/1a/35/d6/9cf8ccda6c0577918ca45f168c7e5916.jpg.webp"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body justify-content-center">
                  <p className="card-text">
                    Không Ai Có Thể Làm Bạn Tổn Thương Trừ Khi Bạn Cho Phép
                  </p>
                  <div className="vote-product">
                    <i class="fa-solid fa-star color-star"></i>
                    <i class="fa-solid fa-star color-star"></i>
                    <i class="fa-solid fa-star color-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                  <h6 className="card-product-price">
                    250.000 đ &nbsp;
                    <p className="d-inline percent-discount">-2.6%</p>
                  </h6>
                  <hr />
                  <p className="status-shipper">Giao siêu tốc 2h</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-6 product-cart">
              <div className="card card-item">
                <img
                  src="https://salt.tikicdn.com/cache/280x280/ts/product/1a/35/d6/9cf8ccda6c0577918ca45f168c7e5916.jpg.webp"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body justify-content-center">
                  <p className="card-text">
                    Không Ai Có Thể Làm Bạn Tổn Thương Trừ Khi Bạn Cho Phép
                  </p>
                  <div className="vote-product">
                    <i class="fa-solid fa-star color-star"></i>
                    <i class="fa-solid fa-star color-star"></i>
                    <i class="fa-solid fa-star color-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                  <h6 className="card-product-price">
                    250.000 đ &nbsp;
                    <p className="d-inline percent-discount">-2.6%</p>
                  </h6>
                  <hr />
                  <p className="status-shipper">Giao siêu tốc 2h</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-6 product-cart">
              <div className="card card-item">
                <img
                  src="https://salt.tikicdn.com/cache/280x280/ts/product/1a/35/d6/9cf8ccda6c0577918ca45f168c7e5916.jpg.webp"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body justify-content-center">
                  <p className="card-text">
                    Không Ai Có Thể Làm Bạn Tổn Thương Trừ Khi Bạn Cho Phép
                  </p>
                  <div className="vote-product">
                    <i class="fa-solid fa-star color-star"></i>
                    <i class="fa-solid fa-star color-star"></i>
                    <i class="fa-solid fa-star color-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                  <h6 className="card-product-price">
                    250.000 đ &nbsp;
                    <p className="d-inline percent-discount">-2.6%</p>
                  </h6>
                  <hr />
                  <p className="status-shipper">Giao siêu tốc 2h</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-6 product-cart">
              <div className="card card-item">
                <img
                  src="https://salt.tikicdn.com/cache/280x280/ts/product/1a/35/d6/9cf8ccda6c0577918ca45f168c7e5916.jpg.webp"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body justify-content-center">
                  <p className="card-text">
                    Không Ai Có Thể Làm Bạn Tổn Thương Trừ Khi Bạn Cho Phép
                  </p>
                  <div className="vote-product">
                    <i class="fa-solid fa-star color-star"></i>
                    <i class="fa-solid fa-star color-star"></i>
                    <i class="fa-solid fa-star color-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                  <h6 className="card-product-price">
                    250.000 đ &nbsp;
                    <p className="d-inline percent-discount">-2.6%</p>
                  </h6>
                  <hr />
                  <p className="status-shipper">Giao siêu tốc 2h</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-6 product-cart">
              <div className="card card-item">
                <img
                  src="https://salt.tikicdn.com/cache/280x280/ts/product/1a/35/d6/9cf8ccda6c0577918ca45f168c7e5916.jpg.webp"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body justify-content-center">
                  <p className="card-text">
                    Không Ai Có Thể Làm Bạn Tổn Thương Trừ Khi Bạn Cho Phép
                  </p>
                  <div className="vote-product">
                    <i class="fa-solid fa-star color-star"></i>
                    <i class="fa-solid fa-star color-star"></i>
                    <i class="fa-solid fa-star color-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                  <h6 className="card-product-price">
                    250.000 đ &nbsp;
                    <p className="d-inline percent-discount">-2.6%</p>
                  </h6>
                  <hr />
                  <p className="status-shipper">Giao siêu tốc 2h</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-6 product-cart">
              <div className="card card-item">
                <img
                  src="https://salt.tikicdn.com/cache/280x280/ts/product/1a/35/d6/9cf8ccda6c0577918ca45f168c7e5916.jpg.webp"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body justify-content-center">
                  <p className="card-text">
                    Không Ai Có Thể Làm Bạn Tổn Thương Trừ Khi Bạn Cho Phép
                  </p>
                  <div className="vote-product">
                    <i class="fa-solid fa-star color-star"></i>
                    <i class="fa-solid fa-star color-star"></i>
                    <i class="fa-solid fa-star color-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                  <h6 className="card-product-price">
                    250.000 đ &nbsp;
                    <p className="d-inline percent-discount">-2.6%</p>
                  </h6>
                  <hr />
                  <p className="status-shipper">Giao siêu tốc 2h</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-6 product-cart">
              <div className="card card-item">
                <img
                  src="https://salt.tikicdn.com/cache/280x280/ts/product/1a/35/d6/9cf8ccda6c0577918ca45f168c7e5916.jpg.webp"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body justify-content-center">
                  <p className="card-text">
                    Không Ai Có Thể Làm Bạn Tổn Thương Trừ Khi Bạn Cho Phép
                  </p>
                  <div className="vote-product">
                    <i class="fa-solid fa-star color-star"></i>
                    <i class="fa-solid fa-star color-star"></i>
                    <i class="fa-solid fa-star color-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                  <h6 className="card-product-price">
                    250.000 đ &nbsp;
                    <p className="d-inline percent-discount">-2.6%</p>
                  </h6>
                  <hr />
                  <p className="status-shipper">Giao siêu tốc 2h</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination-page d-flex justify-content-center mt-4">
            <nav aria-label="...">
              <ul class="pagination">
                <li class="page-item disabled">
                  <a class="page-link">Previous</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item active" aria-current="page">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
