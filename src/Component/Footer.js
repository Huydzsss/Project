import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import fb from "./img/fb.png";
import X from "./img/X.png";
import Yt from "./img/Yt.png";
import Dc from "./img/Dc.png";
import "./Home.css"

export default function Footer() {
  return (
    <div>
      <footer className="text-center py-3 mt-5 bg-dark text-white bg-light">
      <div className="row">
      <div className="col-md-6" style={{textAlign: "left"}}>
      <p>Zootopia - Prestigious National Park, booking tours and best price travel combo.<br/>
<br/>
- Headquarters: Head Office: Room 3618 - 3619, C5 d'Aca Capitale, No. 119 Tran Duy Hung, Hanoi <br/>
- Phone: 024 3564 2888/0912 120 208 <br/>
- Hotline: 0941 766 338 <br/>
- Ho Chi Minh City Hotline: 0948 055 338 <br/>
- Hotline reflects service quality: 0944 399303 </p>
<p> Business license number: 0107465706 <br/>
Travel business license number: 01-2782/2022/TCDL-GQTQT </p>

</div>

<div className="col-md-6 text-end pe-5">
<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FVinpearlSafari.Phuquoc&tabs=timeline&width=350&height=250&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
width="350" height="250" style={{border: "none", overflow: "hidden"}} scrolling="no" frameborder="0" 
allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>


</div>
</div>
        <div className="container d-flex justify-content-end align-items-center">
          <a href="#" className="mx-2"><img src={fb} height={"40px"} width={"40px"} alt="fb logo"></img></a>
          <a href="#" className="mx-2"><img src={X} height={"80px"} width={"80px"} alt="X logo"></img></a>
          <a href="#" className="mx-2"><img src={Yt} height={"40px"} width={"40px"} alt="Yt logo"></img></a>
          <a href="#" className="mx-2"><img src={Dc} height={"40px"} width={"40px"} alt="Dc logo"></img></a>
        </div>
        <div>
        <ul className="list-unstyled d-flex justify-content-center mt-3">
          <li className="nav-item ">
                  <a className="nav-link  btn btn-primary font-weight-bold mx-4 ul-color" href="#" >Discovery</a>
                  <ul className="ul-style">
                    <li><a className="dropdown-item" href="Region">Region</a></li>
                    <li><a className="dropdown-item" href="Narture">Nature</a></li>
                    <li><a className="dropdown-item" href="Culture">Culture</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="Event" className="nav-link btn btn-primary font-weight-bold mx-4 ul-color">Events</a>
                </li>
                <li className="nav-item">
                    <a href="Aboutus" className="nav-link btn btn-primary font-weight-bold mx-4 ul-color">About Us</a>
                </li>
                <li className="nav-item">
                    <a href="ContactUS" className="nav-link btn btn-primary font-weight-bold mx-4 ul-color">Contact Us</a>
                </li>
          </ul>
        </div>
        <p>&copy; 2024 National Parks Zootopia. Web by Le Ngoc Huy,Nguyen Duy Hai,Nguyen Xuan Chinh,Phan Lac Viet.</p>
      </footer>
    </div>
  );
}