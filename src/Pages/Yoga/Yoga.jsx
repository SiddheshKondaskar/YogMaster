import React from 'react';
import "./Yoga.css";

const Yoga = ({ currentPose }) => {
  // Define function to handle click event
  const handleStopPose = () => {
    // Implement functionality here
    console.log("Pose stopped");
  };

  return (
    <div className="container-fluid yoga-container">
      <div className="row">
        <div className="col-md-12">
          <div className="row posedata">
            <div className="col-md-10">
              <h4>Pose : {currentPose}</h4>
              {/* <h4>Pose Time: {poseTime} s</h4> */}
            </div>
            <div className="col-md-2">
              {/* Use handleStopPose function in onClick attribute */}
              <button onClick={handleStopPose} className="btn btn-dark">
                Stop Pose
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div>
            <img
              className="image-placeholder"
              src="https://via.placeholder.com/400"
              alt="Camera Placeholder"
            />
  
          </div>
        </div>
        <div className="col-md-6  mb-3">
          <div>
            <img
              className="image-placeholder "
              src="https://via.placeholder.com/400  "
              alt="Image Placeholder"
            />
  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yoga;
