import React from 'react'
import Navbar from './Page/Navbar/Navbar'
import Footer from './Page/Footer/Footer'

const Layout = ({ children, searchTerm, onSearchChange }) => {
  return (
    <div>
      <Navbar searchTerm={searchTerm} onSearchChange={onSearchChange}></Navbar>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout