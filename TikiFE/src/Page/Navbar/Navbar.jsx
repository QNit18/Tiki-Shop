import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid d-flex">
        <div className="d-flex logoTiki">
          <a class="navbar-brand" href="/" className="d-none d-lg-block slogan">
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
          />
          <button
            className="btn-search d-lg-inline-block d-none"
            type="submit"
          >
            Tìm
          </button>
        </form>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse ms-4" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item ms-4">
              <i className="fa-solid fa-house"></i>&nbsp;
              <a href="/">Trang chủ</a>
            </li>
            <li class="nav-item ms-4">
              <i className="fa-solid fa-face-smile-wink"></i>&nbsp;
              <a href="/">Tài khoản</a>
            </li>
            <li class="nav-item ms-4">
              <a href="/">
                <i className="fa-solid fa-cart-shopping cart"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
