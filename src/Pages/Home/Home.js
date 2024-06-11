import React from "react";
import AllBeeImage from "../../components/AllBeeImage/allimage";
import HomeNativePlants from "../../components/HomeNativePlants/nativeplants";
import HomePlantOfMonthAndImage from "../../components/HomePlantOfMonthAndImage/plantofmonth";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <AllBeeImage />
      <div className="row">
        <div className="col-md-6">
          <div className="nativeplants-container">
            <HomeNativePlants />
          </div>
        </div>
        <div className="col-md-6 d-flex">
          <div className="plantofmonth-container">
            <HomePlantOfMonthAndImage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
