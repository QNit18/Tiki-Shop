/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(12);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/books?name=${searchTerm}&page=${currentPage}&limit=${limit}`
        );
        const data = await response.json();
        setBooks(data.content);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchTerm, currentPage, limit]);

  useEffect(() => {
    const filterBooks = () => {
      if (selectedCategory) {
        const filteredBooks = books.filter(
          (book) => book.categories.name === selectedCategory
        );
        setFilteredBooks(filteredBooks);
      } else {
        setFilteredBooks(books);
      }
    };

    filterBooks();
  }, [books, selectedCategory]);

  const truncateText = (text, number) => {
    const words = text.split(" ");
    if (words.length > number) {
      return words.slice(0, number).join(" ") + "...";
    }
    return text;
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(0); // Reset to the first page on category change
  };

  console.log(books);

  return (
    <div className="container home-page mb-3 mt-1">
      <div className="position-now d-flex" style={{ opacity: "0.6" }}>
        <Link to="/">Trang chủ</Link>
        &nbsp; &gt;&nbsp;
        <Link to="/">Nhà sách Tiki</Link>
      </div>
      <div className="row main-page">
        <div className="col-lg-2 category rounded-1 d-none d-xxl-block">
          <div className="info">
            <h6 className="mt-2">Danh Mục Sản Phẩm</h6>
            <a
              href="#"
              className={
                selectedCategory === "Sách Tiếng Việt"
                  ? "active-category d-block"
                  : "d-block"
              }
              onClick={() => handleCategoryChange("Sách Tiếng Việt")}
            >
              Sách Tiếng Việt
            </a>
            <a
              href="#"
              className={
                selectedCategory === "English Books"
                  ? "active-category d-block"
                  : "d-block"
              }
              onClick={() => handleCategoryChange("English Books")}
            >
              English Books
            </a>
            <a
              href="#"
              className={
                selectedCategory === "Sách tư duy - Kỹ năng sống"
                  ? "active-category d-block"
                  : "d-block"
              }
              onClick={() => handleCategoryChange("Sách tư duy - Kỹ năng sống")}
            >
              Sách tư duy - Kỹ năng sống
            </a>
            <a
              href="#"
              className={
                selectedCategory === "Tác phẩm kinh điển"
                  ? "active-category d-block"
                  : "d-block"
              }
              onClick={() => handleCategoryChange("Tác phẩm kinh điển")}
            >
              Tác phẩm kinh điển
            </a>
          </div>
          <hr />
          <h6>Nhà cung cấp</h6>
          <div className="form-supplier">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Nhà sách Fahasa
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Bamboo Books
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Nhà Sách Trẻ Online
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                VBooks
              </label>
            </div>
          </div>
          <hr />
          <h6>Đánh giá</h6>
          <div className="star five-star">
            <i className="fa-solid fa-star color-star"></i>
            <i className="fa-solid fa-star color-star"></i>
            <i className="fa-solid fa-star color-star"></i>
            <i className="fa-solid fa-star color-star"></i>
            <i className="fa-solid fa-star color-star"></i>
            <p className="star-vote">Từ 5 sao</p>
          </div>
          <div className="star four-star">
            <i className="fa-solid fa-star color-star"></i>
            <i className="fa-solid fa-star color-star"></i>
            <i className="fa-solid fa-star color-star"></i>
            <i className="fa-solid fa-star color-star"></i>
            <i className="fa-regular fa-star"></i>
            <p className="star-vote">Từ 4 sao</p>
          </div>
          <div className="star three-star">
            <i className="fa-solid fa-star color-star"></i>
            <i className="fa-solid fa-star color-star"></i>
            <i className="fa-solid fa-star color-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <p className="star-vote">Từ 3 sao</p>
          </div>
          <br />
        </div>
        <div className="col-lg-10 product-item">
          <div className="row">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="col-lg-3 col-sm-4 col-6 product-cart"
              >
                <Link
                  to={`/detail-product/${book.id}`}
                  className="card card-item"
                >
                  <img
                    src={book.images[0].base_url}
                    className="card-img-top"
                    alt={book.name}
                  />
                  <div className="card-body justify-content-center">
                    <p className="card-text">{truncateText(book.name, 25)}</p>
                    <div className="vote-product">
                      {Array.from({ length: 5 }, (_, index) => (
                        <i
                          key={index}
                          className={`fa-star ${
                            index < book.ratingAverage
                              ? "fa-solid color-star"
                              : "fa-regular"
                          }`}
                        ></i>
                      ))}
                    </div>
                    <h6 className="card-product-price">
                      {formatPrice(book.originalPrice)}đ &nbsp;
                      <p className="d-inline percent-discount">-2.6%</p>
                    </h6>
                    <hr />
                    <p className="status-shipper">Giao siêu tốc 2h</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="pagination-page d-flex justify-content-center mt-4">
            <nav aria-label="Page navigation">
              <ul className="pagination">
                <li
                  className={`page-item ${currentPage === 0 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    Trang sau
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPage === index ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(index)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item ${
                    currentPage === totalPages - 1 ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    Trang trước
                  </button>
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
