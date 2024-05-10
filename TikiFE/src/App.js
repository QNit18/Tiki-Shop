import './App.css';
import Navbar from './Page/Navbar/Navbar';
import Footer from './Page/Footer/Footer';
import HomePage from './Page/HomePage/HomePage';
import DetailProduct from './Page/DetailProduct/DetailProduct';
import Cart from './Page/Cart/Cart';
import Checkout from './Page/Checkout/Checkout';

function App() {
  return (
    <>
      <Navbar/>
      {/* <HomePage/> */}
      {/* <DetailProduct/> */}
      {/* <Cart/> */}
      <Checkout/>
      <Footer/>
    </>
  );
}

export default App;
