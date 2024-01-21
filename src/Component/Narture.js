import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Home.css';
import anh2 from './img/anh2.png';
import Menu from "./menu";
import Footer from "./Footer";

export default function Nature() {
  return (
    <div>
      <Menu />
      <h1 className="d-flex justify-content-center" style={{ fontSize: "60px" }}> Nature</h1>
      <div className="image">
        <img
          className="img-fluid vw-100 "
          style={{ height: "500px" }}
          src="https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/08/cuc-dep-hinh-nen-thien-nhien.jpg.webp"
          alt="Nature"
        />
        <div className="d-flex justify-content-center container">
          <strong style={{ fontSize: "30px" }}>Zootopia incredible biodiversity is recognized all over the world.</strong>
        </div>
        <p>
          The park World Heritage-listed landscapes change dramatically from one end of the park to the other, encompassing mangrove-lined coastlines, sweeping stone country and endless floodplains and wetlands.
          Its savanna woodlands and lowlands, which make up about 80% of the park, house a huge variety of plants and animals.
          Zootopia is home to 2,000 plant species, around one-third of all Australian bird species and about one-fifth of all Australian mammals.
          Some of these animals are threatened or endangered and many aren’t found anywhere else in the world. And there are other species still waiting to be discovered.
          Come to Zootopia to experience nature at its most remarkable.
        </p>
      </div>
      <div className="d-flex justify-content-center container">
        <strong style={{ fontSize: "30px" }}>Recommend with nature in Zootopia</strong>
      </div>
      <br />
      <div className="d-flex justify-content-center flex-row">
        <div className="card" style={{ width: "18rem", margin: "10px" }}>
          <img
            src="https://cdn.discordapp.com/attachments/1192010367057002626/1192833608541540352/image.png?ex=65aa83de&is=65980ede&hm=397b8ddfb186be0585d7d7f4b37c96d8cd939eb4459ed4071dde406a01e52308&"
            className="card-img-top"
            alt="Animal 1"
          />
          <div className="card-body">
            <h5 className="card-title">Animals</h5>
            <a href="Animals" className="btn btn-primary">
              See more
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem", margin: "10px" }}>
          <img
            src="https://cdn.discordapp.com/attachments/1192010367057002626/1194550484120387604/rainforest.png?ex=65b0c2d5&is=659e4dd5&hm=cc11e93ee8fd6ae39f0cccc1a9fee29b03ae2ceb6a848f8b82cd544322dd74c2&"
            className="card-img-top"
            alt="Plant"
          />
          <div className="card-body">
            <h5 className="card-title">Plant</h5>
            <a href="Plants" className="btn btn-primary">
              See more
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
