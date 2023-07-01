import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import LandlordListings from "./pages/LandlordListings.jsx";
import AddListingPage from "./pages/AddListingPage";
import ThankYouListing from "./pages/ThankYouListing.jsx";
import ThankYouPayment from "./pages/ThankYouPayment.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
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
    ]
  },
]);

export default router
