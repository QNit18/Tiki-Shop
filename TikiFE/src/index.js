import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./Page/Cart/Cart";
import DetailProduct from "./Page/DetailProduct/DetailProduct";
import Checkout from "./Page/Checkout/Checkout";
import Layout from "./Layout";
import HomePage from "./Page/HomePage/HomePage";
import OrderSuccess from "./Page/OrderSucess/OrderSuccess";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import OrderFail from "./Page/OrderFail/OrderFail";


const fetchData = async (setBooks) => {
  try {
    const response = await fetch("http://localhost:8080/api/books");
    let data = await response.json();
    data = data.content;
    setBooks(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const Index = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData(setBooks);
  }, []);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const routers = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout searchTerm={searchTerm} onSearchChange={handleSearchChange}>
          <HomePage searchTerm={searchTerm} />
        </Layout>
      ),
    },
    {
      path: "/cart",
      element: (
        <Layout searchTerm={searchTerm} onSearchChange={handleSearchChange}>
          <Cart />
        </Layout>
      ),
    },
    {
      path: "/detail-product/:id",
      element: (
        <Layout searchTerm={searchTerm} onSearchChange={handleSearchChange}>
          <DetailProduct />
        </Layout>
      ),
    },
    {
      path: "/checkout",
      element: (
        <Layout searchTerm={searchTerm} onSearchChange={handleSearchChange}>
          <Checkout />
        </Layout>
      ),
    },
    {
      path: "/complete",
      element: (
        <Layout searchTerm={searchTerm} onSearchChange={handleSearchChange}>
          <OrderSuccess />
        </Layout>
      ),
    },
    {
      path: "/orderfail",
      element: (
        <Layout searchTerm={searchTerm} onSearchChange={handleSearchChange}>
          <OrderFail />
        </Layout>
      ),
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={routers} />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);

reportWebVitals();