import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import LandlordListings from "./pages/LandlordListings.jsx";
import AddListingPage from "./pages/AddListingPage";
import ThankYouListing from "./pages/ThankYouListing.jsx";
import ThankYouPayment from "./pages/ThankYouPayment.jsx";
import LocationComponent from "./pages/MapLocation";
import CustomerRent from "./pages/CustomerRent.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ResultPage from "./pages/ResultPage.jsx";
import RentalApproval from "./pages/RentalApproval.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/detail/:id",
        element: <DetailPage />
      },
      {
        path: "/detail",
        element: <DetailPage />
      },
      {
        path: "/landlordListings",
        element: <LandlordListings />
      },
      {
        path: "/landlordListings/:id",
        element: <LandlordListings />
      },
      {
        path: "/add-listing",
        element: <AddListingPage />
      },
      {
        path: "/thankyou-listing",
        element: <ThankYouListing />
      },
      {
        path: "/thankyou-payment",
        element: <ThankYouPayment />
      },
      {
        path: "/location",
        element: <LocationComponent />
      },
      {
        path: "/rented",
        element: <CustomerRent />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/reg",
        element: <RegisterPage />
      },
      {
        path: "/result",
        element: <ResultPage />
      },
      {
        path: "/approval",
        element: <RentalApproval />
      },
    ]
  },
]);

export default router
