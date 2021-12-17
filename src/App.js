import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Booking from "./Components/Pages/Booking/Booking";
import Home from './Components/Pages/Home/Home';
import NotFound from "./Components/Pages/NotFound/NotFound";
import ProductView from "./Components/Pages/ProductView/ProductView";
import Shop from "./Components/Pages/Shop/Shop";
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="productview/:productId" element={<ProductView />} />
          <Route path="shop/productview/:productId" element={<ProductView />} />
          <Route path="booking/:productId" element={<Booking />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
