import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = ({ searchTerm, onSearchChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);


  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  }

  const closeNavbar = () => {
    setIsCollapsed(true);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex">
        <div className="d-flex logoTiki">
          <a className="navbar-brand d-none d-lg-block slogan" href="/">
            <img
              className="image-Logo"
              src="https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png"
              alt="Logo"
            />
            <p className="m-2 slogan">Tốt & nhanh</p>
          </a>
        </div>
        <form className="col-lg-6 col-9 d-flex align-items-center search-product">
          <i className="fa-solid fa-magnifying-glass icon-search"></i>
          <input
            type="text"
            className="search-book"
            name="search-book"
            placeholder="Free ship đến 30k"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button className="btn-search d-lg-inline-block d-none" type="submit">
            Tìm
          </button>
        </form>
        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={!isCollapsed}
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ms-4">
              <i className="fa-solid fa-house"></i>&nbsp;
              <a href="/">Trang chủ</a>
            </li>
            <li className="nav-item ms-4">
              <i className="fa-solid fa-face-smile-wink"></i>&nbsp;
              <Link to="/">Tài khoản</Link>
            </li>
            <li className="nav-item ms-4">
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping cart"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
