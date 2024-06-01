import React from "react";
import AllBeeImage from "../../components/AllBeeImage/allimage";
import HomeNativePlants from "../../components/HomeNativePlants/nativeplants";
import HomePlantOfMonthAndImage from "../../components/HomePlantOfMonthAndImage/plantofmonth";
import "./Home.css";

function Home() {
  return (
    <div>
      <AllBeeImage />
      <HomeNativePlants />
      <HomePlantOfMonthAndImage />
    </div>
  );
}

export default Home;
