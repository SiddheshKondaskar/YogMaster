import React from "react";
import "./Navbar.css";
import logo from "../../Assets/Home/YogMaster.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light  container mt-3 fixed-top">
      <Link class="navbar-brand font-weight-bold" to="/">
        YogMaster
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <Link class="nav-link" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Instruction">
              Instruction
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/About">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
  //   return (
  //     <>
  //       <nav className="container navbar">
  //         <Link id="logo" to="/">
  //           <img src={logo} alt="Treine-me" />
  //         </Link>
  //         <button
  //           class="navbar-toggler"
  //           type="button"
  //           data-toggle="collapse"
  //           data-target="#collapsibleNavbar"
  //         >
  //           <span class="navbar-toggler-icon"></span>
  //         </button>
  //         <div class="collapse navbar-collapse" id="collapsibleNavbar">
  //           <ul class="navbar-nav">
  //             <li class="nav-item">
  //               <a class="nav-link" href="#">
  //                 Link
  //               </a>
  //             </li>
  //             <li class="nav-item">
  //               <a class="nav-link" href="#">
  //                 Link
  //               </a>
  //             </li>
  //             <li class="nav-item">
  //               <a class="nav-link" href="#">
  //                 Link
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       </nav>
  //     </>
  //   );
}
