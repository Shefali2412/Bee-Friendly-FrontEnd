import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./nativeplants.css";

function HomeNativePlants() {
  return (
    <div className="d-flex justify-content-start my-3">
      <div className="colored-box p-3">
        <h2 className="box-title">
          Why are native plants essential for bee populations
        </h2>
        <p className="box-text">
          There are some 360 bee species in the Netherlands, half of which are
          on the red list of threatened species. Around 34 species have already
          become extinct. Native plants are vital for supporting local bee
          populations and provide the specific nectar and pollen that local bees
          have evolved to depend on.
        </p>
      </div>
    </div>
  );
}

export default HomeNativePlants;
