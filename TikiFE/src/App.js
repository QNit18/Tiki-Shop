import './App.css';
import Navbar from './Page/Navbar/Navbar';
import Footer from './Page/Footer/Footer';
import HomePage from './Page/HomePage/HomePage';
import DetailProduct from './Page/DetailProduct/DetailProduct';

function App() {
  return (
    <>
      <Navbar/>
      {/* <HomePage/> */}
      <DetailProduct/>
      <Footer/>
    </>
  );
}

export default App;
