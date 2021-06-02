import React from "react";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Offers from "../components/Offers";
import Slider from "../components/Slider";
function Home() {
  return (
    <div>
      <Header />
      <Categories />
      <Slider />
      <Offers />
    </div>
  );
}

export default Home;
