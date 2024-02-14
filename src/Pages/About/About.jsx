import React from "react";

export default function About() {
  return (
    <div className="container page">
      <br />
      <div className="about-container">
      <h2>About Yogmaster</h2>
      <p>
        Yogmaster is a project aimed at helping users practice yoga poses with the assistance of a camera. It utilizes advanced computer vision technology to identify and provide feedback on various yoga poses.
      </p>
      <h3>Features</h3>
      <ul>
        <li>Real-time Pose Detection: Yogmaster uses computer vision algorithms to detect and analyze yoga poses in real-time.</li>
        <li>Feedback and Guidance: Users receive instant feedback and guidance on their pose alignment and posture.</li>
          <li>Five Key Poses: Yogmaster focuses on five key yoga poses that are fundamental to a well-rounded yoga practice.</li>
      </ul>
      <h3>Supported Poses</h3>
      <ul>
      <li>Adho Mukha Svanasana </li>
        <li>Padmasana </li>
        <li>Utkatasana </li>
        <li>Utthita Trikonasana </li>
        <li>Vrikshasana </li>
      </ul>
      <p>
        Whether you're a beginner or an experienced yogi, Yogmaster is here to support and enhance your yoga journey.
      </p>
    </div>
    </div>
  );
}
