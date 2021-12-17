import React, { useEffect, useState } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import AddProducts from "../../Pages/AddProducts/AddProducts";
import ManageProducts from "../../Pages/ManageProducts/ManageProducts";
import MangeReviews from '../../Pages/ManageReview/ManageReview';
import MangeOrders from "../../Pages/MangeOrder/MangeOrder";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import AddReviews from "../../Pages/ReviewAdd/ReviewAdd";
import AdminRoute from "../AdminRoute/AdminRoute";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import './Dashboard.css';
const Dashbaord = () => {
  const { user, logOut } = useAuth()
  let { path, url } = useRouteMatch();
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(false);
        } else {
          setIsAdmin(true);
        }
      });
  }, [user?.email]);

  return (
    <div>
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-2 ">
            <div className="Dashboard">
              <Link to={url}>
                <h5 className="dashboard-heading">Dashboard</h5>
              </Link>
              <div className="dashboard-all">
                {isAdmin ?
                  <>
                    <Link to={`${url}/myorder`}>
                      <li className="dashboard-menu">My Orders</li>
                    </Link>
                    <Link to={`${url}/pay`}>
                      <li className="dashboard-menu">Payment Option</li>
                    </Link>
                    <Link to={`${url}/addreview`}>
                      <li className="dashboard-menu">Add Review</li>
                    </Link>
                    <Link to={`${url}/myreview`}>
                      <li className="dashboard-menu">My Review</li>
                    </Link>
                  </> :
                 <>
                 <Link to={`${url}/orderslist`}>
                   <li className="dashboard-menu">  Orders list</li>
                 </Link>
                 <Link to={`${url}/allreview`}>
                   <li className="dashboard-menu">  Review list</li>
                 </Link>
                 <Link to={`${url}/addproduct`}>
                   <li className="dashboard-menu">Add Prodcuts</li>
                 </Link>
                 <Link to={`${url}/mangeproducts`}>
                   <li className="dashboard-menu">Manage Products</li>
                 </Link>
                 <Link to={`${url}/makeAdmin`}>
                   <li className="dashboard-menu">Make Admin</li>
                 </Link>


               </>
               }
               
                <Link to="..">
                  <li className="dashboard-menu logout-dashboard" onClick={logOut}> Logout</li>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-9">
        
            <Switch>
         
              <Route path={`${path}/myorder`}>
                <MyOrders></MyOrders>
              </Route>
              <Route path={`${path}/addreview`}>
                <AddReviews></AddReviews>
              </Route>
          
              <AdminRoute path={`${path}/orderslist`}>
                <MangeOrders></MangeOrders>
              </AdminRoute>
              <AdminRoute path={`${path}/allreview`}>
                <MangeReviews></MangeReviews>
              </AdminRoute>
              <AdminRoute path={`${path}/addproduct`}>
                <AddProducts></AddProducts>
              </AdminRoute>
              <AdminRoute path={`${path}/mangeproducts`}>
                <ManageProducts></ManageProducts>
              </AdminRoute>
              <AdminRoute path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>

              <Route path={path}>
              <DashboardHome />
          </Route>
            </Switch>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;