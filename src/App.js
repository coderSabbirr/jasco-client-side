
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css';
import AuthProvider from "./Components/Context/AuthProvider";
import AddProducts from "./Components/Pages/AddProducts/AddProducts";
import Booking from "./Components/Pages/Booking/Booking";
import Home from './Components/Pages/Home/Home';
import Login from "./Components/Pages/Login/Login";
import ManageProducts from "./Components/Pages/ManageProducts/ManageProducts";
import ManageReview from "./Components/Pages/ManageReview/ManageReview";
import MangeOrder from "./Components/Pages/MangeOrder/MangeOrder";
import MyOrder from "./Components/Pages/MyOrders/MyOrders";
import NotFound from "./Components/Pages/NotFound/NotFound";
import ProductView from "./Components/Pages/ProductView/ProductView";
import Register from "./Components/Pages/Register/Register";
import ReviewAdd from "./Components/Pages/ReviewAdd/ReviewAdd";
import Shop from "./Components/Pages/Shop/Shop";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="login" element={<Login />} />
            <Route path="addproduct" element={<AddProducts />} />
            <Route path="manageproduct" element={<ManageProducts />} />
            <Route path="manageorder" element={<MangeOrder />} />
            <Route path="register" element={<Register />} />
            <Route path="productview/:productId" element={<ProductView />} />
            <Route path="shop/productview/:productId" element={<ProductView />} />
            <Route path="booking/:productId" element={<PrivateRoute >
              <Booking />
            </PrivateRoute>}></Route>
            <Route path="myorder" element={<PrivateRoute >
              <MyOrder />
            </PrivateRoute>}></Route>
            <Route path="addreview" element={<PrivateRoute >
              <ReviewAdd />
            </PrivateRoute>}></Route>
            <Route path="managereview" element={<PrivateRoute >
              <ManageReview />
            </PrivateRoute>}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
