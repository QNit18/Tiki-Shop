import "./Navbar.css";

const Navbar = () => {

  return (
    <div className="container-fluid backColor">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2 d-lg-block d-none">
            <img
              className="image-Logo"
              src="https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png"
              alt="Logo"
            />
            <p className="m-2 slogan">Tốt & nhanh</p>
          </div>

          <div className="col-1 d-lg-none back-page d-flex align-items-center item-mini">
            <a href="/">
              <i className="fa-solid fa-chevron-left"></i>
            </a>
            &nbsp;
            <a href="/">
              <i className="fa-solid fa-bars"></i>
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
            <button className="btn-search d-lg-inline-block d-none">
              Tìm kiếm
            </button>
          </form>

          <div className="col-lg-auto d-lg-block d-none info-header">
            <i className="fa-solid fa-house"></i>&nbsp;
            <a href="/">Trang chủ</a>
          </div>
          <div className="col-lg-auto d-lg-block d-none info-header">
            <i className="fa-solid fa-face-smile-wink"></i>&nbsp;
            <a href="/">Tài khoản</a>
          </div>
          <div className="col-auto">
            <a href="/"><i className="fa-solid fa-cart-shopping cart"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
