import { useEffect, useState } from "react";
import "./DetailProduct.css";
import { useNavigate, useParams } from "react-router-dom";

const DetailProduct = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/books/${id}`);
        const data = await response.json();
        setBook(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching book details:", error);
        setIsLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleChangeQuantity = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  const handleAddCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemIndex = cartItems.findIndex((item) => item.id === book.id);

    if (itemIndex > -1) {
      cartItems[itemIndex].quantity += quantity;
    } else {
      cartItems.push({
        id: book.id,
        name: book.name,
        price: book.listPrice,
        quantity,
        image: book.images[0].thumbnail_url,
        company: book.specifications[0].attributes[0].value,
      });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const handleBuyNow = () => {
    navigate("/cart");
  };

  const formatDescription = (description) => {
    return description.replace(/\n/g, "<br>");
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div>
      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-lg-3 d-none d-lg-block">
            <div className="card">
              <img
                src={book.images[0].base_url}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body d-none d-lg-block">
                <div className="carousel-image row mb-2">
                  <img
                    className="col-lg-3"
                    src={book.images[0].thumbnail_url}
                    alt="..."
                  />
                  <img
                    className="col-lg-3"
                    src={book.images[0].thumbnail_url}
                    alt="..."
                  />
                  <img
                    className="col-lg-3"
                    src={book.images[0].thumbnail_url}
                    alt="..."
                  />
                  <img
                    className="col-lg-3"
                    src={book.images[0].thumbnail_url}
                    alt="..."
                  />
                </div>
                <h6 className="card-title">Đặc điểm nổi bật</h6>
                <p className="card-text">
                  <i
                    className="fa-solid fa-circle-check"
                    style={{ color: "blue" }}
                  ></i>{" "}
                  &nbsp; Cung cấp kiến thức tối ưu từ những thành công và sai
                  lầm của các nhà giao dịch đã kiếm được hàng
                </p>
                <p className="card-text">
                  <i
                    className="fa-solid fa-circle-check"
                    style={{ color: "blue" }}
                  ></i>{" "}
                  &nbsp; Cung cấp kiến thức tối ưu từ những thành công và sai
                  lầm của các nhà giao dịch đã kiếm được hàng
                </p>
                <p className="card-text">
                  <i
                    className="fa-solid fa-circle-check"
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
              <div className="info-author">
                <img
                  src={book.images[0].thumbnail_url}
                  alt={book.name}
                  className="d-block d-lg-none image-after-responsive mb-2"
                />
                <div className="d-flex align-items-center align-content-center">
                  <i
                    className="fa-solid fa-circle-check"
                    style={{ color: "blue" }}
                  ></i>
                  <p style={{ color: "blue" }}>Chính hãng</p>
                  <p>Tác giả:</p>{" "}
                  <a className="ms-2" href="/">
                    {book.authors && book.authors[0]
                      ? book.authors[0].name
                      : "N/A"}
                  </a>
                </div>
              </div>

              <div className="mt-2">
                <h5 className="card-title">{book.name}</h5>
                <div className="vote-product" style={{ fontSize: "12px" }}>
                  {book.ratingAverage}{" "}
                  {Array.from({ length: 5 }, (_, index) => (
                    <i
                      key={index}
                      className={`fa-star ${
                        index < book.ratingAverage
                          ? "fa-solid color-star"
                          : "fa-regular"
                      }`}
                    ></i>
                  ))}{" "}
                  ({book.quantitySold.value}) | {book.quantitySold.text}
                </div>
                <h6 className="card-product-price mt-2">
                  {formatPrice(book.listPrice)} đ&nbsp;
                  <p className="d-inline percent-discount">-2.6%</p>
                </h6>
              </div>

              <div className="info-product mt-4 d-none d-lg-block">
                <h6 style={{ fontSize: "1rem" }}>Thông tin chi tiết</h6>
                <div className="table-info-product">
                  {book.specifications.map((spec, index) => (
                    <div key={index}>
                      {spec.attributes.map((att, idx) => (
                        <div className="version-book row" key={idx}>
                          <p className="col-lg-6 info-supiler">{att.name}</p>
                          <p className="col-lg-6 info-supiler">{att.value}</p>
                        </div>
                      ))}
                      {index < book.specifications.length - 1 && <hr />}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card p-2 mt-3">
              <h6>Mô tả sản phẩm</h6>
              <img src={book.images[0].base_url} alt="" />
              <div
                dangerouslySetInnerHTML={{
                  __html: formatDescription(book.description),
                }}
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card p-2 check-quantity-product">
              <h6>Số lượng</h6>
              <div className="d-flex gap-1 quantity-product">
                <button
                  className="sub-product btn-quantity-product"
                  type="button"
                  onClick={() => handleChangeQuantity(-1)}
                >
                  -
                </button>
                <div className="count-product">{quantity}</div>
                <button
                  className="plus-product btn-quantity-product"
                  type="button"
                  onClick={() => handleChangeQuantity(1)}
                >
                  +
                </button>
              </div>
              <div className="quantity-price mt-3">
                <h6>Tạm tính</h6>
                <h5 className="card-product-price mt-2">250.000 đ &nbsp;</h5>
              </div>
              <div className="d-grid gap-2">
                <button
                  className="btn btn-buy-now"
                  type="button"
                  onClick={handleBuyNow}
                >
                  Đi tới giỏ hàng
                </button>
                <button
                  className="btn btn-status-custom"
                  type="button"
                  onClick={() => handleAddCart()}
                >
                  Thêm vào giỏ hàng
                </button>
                <button className="btn btn-status-custom" type="button">
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
