import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Menu from "./menu";
import Footer from "./Footer";

 export default function AboutUs() {
  return (
    <div>
      <Menu />
      <div className=" mt-4">
        <h2 className="text-center mb-4">About Us</h2>
        <div className="text-center">
          <img
            src="https://cdn.discordapp.com/attachments/1192010367057002626/1194550484120387604/rainforest.png?ex=65b9fd55&is=65a78855&hm=9913283ef3008ab83e9e628fed8d17b82402dc217ad66e52e6776b1b39bf7b45&"
            className="img-fluid vw-100 vh-100 rounded"
            alt="Rainforest"
          />
        </div>
        <p className="text-justify mt-4">
          Zootopia Nature National Park is nestled among the green mountains and
          tree-lined valleys in the North of the country.
        </p>
        <p className="text-justify">
          Our mission is to preserve the natural beauty of our region and provide
          an educational experience for the community and visitors. We believe in
          the importance of conservation and aim to create awareness about the
          diverse flora and fauna in our national park.
        </p>
        <p className="text-justify">
          Thank you for supporting our cause! If you have any questions or would
          like to get involved, feel free to <a href="ContactUs">contact us</a>.
        </p>
      </div>
      <Footer />
    </div>
  );
}


