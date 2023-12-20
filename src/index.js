import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./component/navbar";
import Renter from "./component/renter";
import Rentee from "./component/rentee";
import Driver from "./component/driver";
import BookingVehicleDetail from "./component/booking_car";
import DriverDetails from "./component/driver_listing";
import VehicleDetail from "./component/renter_listings";
import LoginPage from "./component/login";
import SignupForm from "./component/signup";
import Billing from "./component/billing";
import RenterhomePage from "./component/renter_home";
import RenteehomePage from "./component/rentee_home";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Navbar />
    {/* <Renter /> */}
    {/* <Rentee/> */}
    {/* <Driver/> */}
    {/* <VehicleDetail/> */}
    {/* <BookingVehicleDetail/> */}
        {/* <Billing/> */}
    {/* <VehicleDetail/> */}
    {/* <LoginPage /> */}
    {/* <SignupForm/> */}
    {/* <DriverDetails/> */}
    {/* <RenterhomePage/> */}
    <RenteehomePage/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
