import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import landingphoto from "../../Assets/Home/LandingPhoto.png";
export default function Home() {
  return (
    <div class="container-fluid page">
      <div className="curve"></div>
      <div class="row">
        <div class="col-md-6 landingtext">
          <h1 className="LandingFond h1">
            Practice Yoga
            <br /> Anytime Anywhere
          </h1>
          <br />
          <p className="">
            Yoga is an ancient art that connects the mind and body. It is an
            <br />
            exercise that we perform by balancing the elements of our bodies.
            <br /> In addition, it helps us meditate and relax. Moreover, yoga
            helps us
            <br />
            keep control of our bodies as well as mind.
          </p>
          <br />
          <Link className="btn btn-dark" to="/Instruction">
            Try Yoga
          </Link>
        </div>
        <div class="col-md-6 Landingphoto">
          <img src={landingphoto} alt="" />
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <div className="curve">
        <div class="page">
          <div class="row landingwraper">
            <div class="col landingtext">
              <h1 className="LandingFond h1">
                Practice Yoga <br />
                Anytime <br />
                Anywhere
                <br />
              </h1>
              <br />
              <p className="">
                Yoga is an ancient art that connects the mind and body. It is an
                exercise that we perform by balancing the elements of our
                bodies. In addition, it helps us meditate and relax. Moreover,
                yoga helps us keep control of our bodies as well as mind.
              </p>
              <br />
              <Link className="btn btn-dark" to="/Instruction">
                Try Yoga
              </Link>
            </div>
            <div class="col Landingphoto">
              <img src={landingphoto} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
