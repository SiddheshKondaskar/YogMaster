import React from "react";
import "./Instruction.css";
import { Link } from "react-router-dom";
import adhoMukhaSvanasanaImage from "../../Assets/Home/adhoMukhaSvanasanaImage.jpg";
import padmasanaImage from "../../Assets/Home/padmasanaImage.jpg";
import utkatasanaImage from "../../Assets/Home/utkatasanaImage.jpg";
import utthitaTrikonasanaImage from "../../Assets/Home/utthitaTrikonasanaImage.jpg";
import vrikshasanaImage from "../../Assets/Home/vrikshasanaImage.jpg";
// import { DropdownButton, Dropdown } from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function YogaPoses() {
  const [selectedPose, setSelectedPose] = useState("adho_mukha_svanasana");

  const handlePoseSelect = (pose) => {
    setSelectedPose(pose);
  };

  return (
    <div className="page page1">
      <div className="col-md-12 school-options-dropdown text-center">
        <div className="dropdown btn-group text-center">
          <div class="dropdown">
            <button
              class="btn btn-secondary btn-dark dropdown-toggle "
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectedPose}
            </button>
            <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => handlePoseSelect("adho_mukha_svanasana")}
                >
                  Adho Mukha Svanasana
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => handlePoseSelect("padmasana")}
                >
                  Padmasana
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => handlePoseSelect("utkatasana")}
                >
                  Utkatasana
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => handlePoseSelect("utthita_trikonasana")}
                >
                  Utthita Trikonasana
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => handlePoseSelect("vriksasana")}
                >
                  Vrikshasana
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="">
          {selectedPose === "adho_mukha_svanasana" && (
            <div className="row">
              <div className="col text-center">
                <img
                  src={adhoMukhaSvanasanaImage}
                  className="img-fluid"
                  alt="Adho Mukha Svanasana"
                  style={{ width: "425px", height: "250px" }}
                />
              </div>
              <div className="col-md-6">
                <h4>Adho Mukha Svana</h4>
                <p className="text-muted">
                  Adho Mukha Svanasana, also known as Downward-Facing Dog, is a
                  foundational yoga pose that stretches the entire body, builds
                  strength, and improves circulation. To perform the pose, start
                  in a tabletop position with your hands and knees on the
                  ground, then lift your hips up and back while straightening
                  your arms and legs.
                </p>
                <br />
                <Link
                  className="btn btn-dark"
                  // to={{ pathname: "/Yoga", query: { pose: selectedPose } }}
                  to="/Yoga"
                  state={{ pose: selectedPose }}
                >
                  Try Adho Mukha Svanasana
                </Link>
              </div>
            </div>
          )}
          {selectedPose === "padmasana" && (
            <div className="row">
              <div className="col">
                <img
                  src={padmasanaImage}
                  className="img-fluid"
                  alt="Padmasana"
                  style={{ width: "425px", height: "250px" }}
                />
              </div>
              <div className="col">
                <h4>Padmasana</h4>
                <p className="text-muted">
                  Padmasana, also known as Lotus Pose, is a seated yoga posture
                  that is commonly used for meditation and pranayama (breathing
                  exercises). It is a challenging pose that requires flexibility
                  in the hips and knees. To perform the pose, start in a seated
                  position with your legs extended in front of you, then bend
                  one knee and place your foot on the opposite thigh. Repeat
                  with the other leg, bringing both feet to rest on the opposite
                  thighs.
                </p>
                <br />
                <Link
                  className="btn btn-dark"
                  to="/Yoga"
                  state={{ pose: selectedPose }}
                >
                  Try Padmasana
                </Link>
              </div>
            </div>
          )}
          {selectedPose === "utkatasana" && (
            <div className="row">
              <div className="col">
                <img
                  src={utkatasanaImage}
                  className="img-fluid"
                  alt="Utkatasana"
                  style={{ width: "425px", height: "250px" }}
                />
              </div>

              <div className="col">
                <h4>Utkatasana</h4>
                <p className="text-muted">
                  Utkatasana, also known as Chair Pose, is a standing yoga
                  posture that strengthens the thighs and calves, stretches the
                  shoulders and chest, and stimulates the heart and diaphragm.
                  To perform the pose, start in a standing position with your
                  feet together, then bend your knees and lower your hips as if
                  you are sitting in an imaginary chair. Raise your arms
                  overhead and hold the pose for several breaths.
                </p>
                <br />
                <Link
                  className="btn btn-dark"
                  to="/Yoga"
                  state={{ pose: selectedPose }}
                >
                  Try Utkatasana
                </Link>
              </div>
            </div>
          )}
          {selectedPose === "utthita_trikonasana" && (
            <div className="row">
              <div className="col">
                <img
                  src={utthitaTrikonasanaImage}
                  className="img-fluid"
                  alt="Utthita Trikonasana"
                  style={{ width: "425px", height: "250px" }}
                />
              </div>
              <div className="col">
                <h4>Utthita Trikonasana</h4>
                <p className="text-muted">
                  Utthita Trikonasana, also known as Extended Triangle Pose, is
                  a standing yoga posture that stretches the hips, hamstrings,
                  and spine, and strengthens the legs and ankles. To perform the
                  pose, start in a standing position with your feet about three
                  to four feet apart, then turn your right foot out to a
                  90-degree angle and your left foot in slightly. Reach your
                  right arm down and place your hand on your right shin, ankle,
                  or the floor outside your right foot. Stretch your left arm up
                  towards the ceiling and gaze up at your left hand.
                </p>
                <br />
                <Link
                  className="btn btn-dark"
                  to="/Yoga"
                  state={{ pose: selectedPose }}
                >
                  Try Utthita Trikonasana
                </Link>
              </div>
            </div>
          )}
          {selectedPose === "vriksasana" && (
            <div className="row">
              <div className="col">
                <img
                  src={vrikshasanaImage}
                  className="img-fluid"
                  alt="Vrikshasana"
                  style={{ width: "425px", height: "250px" }}
                />
              </div>
              <div className="col">
                <h4>Vrikshasana</h4>
                <p className="text-muted">
                  Vrikshasana, also known as Tree Pose, is a standing yoga
                  posture that improves balance and stability, strengthens the
                  legs, and stretches the hips and thighs. To perform the pose,
                  start in a standing position with your feet together, then
                  shift your weight onto your left foot and place your right
                  foot on the inside of your left thigh. Press your foot into
                  your thigh and bring your hands together in front of your
                  heart. Hold the pose for several breaths before switching
                  sides.
                </p>
                <br />
                <Link
                  className="btn btn-dark"
                  to="/Yoga"
                  state={{ pose: selectedPose }}
                >
                  Try Vrikshasana
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
