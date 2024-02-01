import React from "react";
import { NavLink } from "react-router-dom";
import fb from "./img/fb.png";
import X from "./img/X.png";
import Yt from "./img/Yt.png";
import Dc from "./img/Dc.png";
import "./Home.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>Contact Information</h5>
            <p>National Park Office</p>
            <p>123 Park Avenue</p>
            <p>City, State, Zip Code</p>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@nationalpark.com</p>
          </div>
          <div className="col">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><NavLink to="#" className="nav-link  color-footer">Discovery</NavLink>
                <ul className="list-inline">
                  <li className="list-inline-item"><NavLink to="/Region" className="nav-link text-light">Region</NavLink></li>
                  <li className="list-inline-item"><NavLink to="/Nature" className="nav-link text-light">Nature</NavLink></li>
                  <li className="list-inline-item"><NavLink to="/Culture" className="nav-link text-light">Culture</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="/Event" className="nav-link  color-footer">Events</NavLink></li>
              <li><NavLink to="/Aboutus" className="nav-link color-footer">About Us</NavLink></li>
              <li><NavLink to="/ContactUS" className="nav-link  color-footer">Contact Us</NavLink></li>
            </ul>
          </div>
          <div className="col">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FVinpearlSafari.Phuquoc&tabs=timeline&width=350&height=250&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                  width="350" height="250" style={{border: "none", overflow: "hidden"}} scrolling="no" frameBorder="0" 
                  allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
          <div>
            <a href="#" className="mx-2"><img src={fb} height={"40px"} width={"40px"} alt="fb logo" /></a>
            <a href="#" className="mx-2"><img src={X} height={"80px"} width={"80px"} alt="X logo" /></a>
            <a href="#" className="mx-2"><img src={Yt} height={"40px"} width={"40px"} alt="Yt logo" /></a>
            <a href="#" className="mx-2 "><img src={Dc} height={"40px"} width={"40px"} alt="Dc logo" /></a>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} National Park. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
