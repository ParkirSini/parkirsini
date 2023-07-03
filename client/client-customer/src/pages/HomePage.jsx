import React from 'react'
import FeaturedListings from "../components/HomePageComponents/FeaturedListings";
import DetailedItem from "../components/HomePageComponents/DetailedItems";
import HowItWorks from "../components/HomePageComponents/HowItWorks";
import AddListing from "../components/HomePageComponents/AddListing.jsx";
import Hero from "../components/HomePageComponents/Hero.jsx";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedListings />
      <DetailedItem />
      <HowItWorks />
      <AddListing />
    </>
  )
}

export default HomePage
