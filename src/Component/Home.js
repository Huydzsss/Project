import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Home.css';
import Menu from "./menu";
import Header from "./Header";
import Footer from "./Footer";
import sutu from "./img/sutu.png";
import giaitri from "./img/giaitri.png";
import t1 from "./img/t1.png";
import t2 from "./img/t2.png";
import t3 from "./img/t3.png";
import t4 from "./img/t4.png";
import safari from "./img/safari.png";

export default function Home() {
  return (
    <div >
      <Menu />
      <Header />
      <section className="my-5 py-0" >
        <div className="container p-0">
          <div className="row">
            <div className="col-md-6">
              <img className="img-fluid rounded" src={sutu} alt="National Park" />
            </div>
            <div className="col-md-6">
              <h2>About National Parks Zootopia</h2>
              <p>
                1. The zoo display area is a place designed to introduce and display animals from around the world. This is a popular destination for visitors of all ages, where they can explore and learn about the diversity of the animal world. Zoo exhibits typically include naturalistic animal habitats, enclosures, educational play areas, and interactive activities such as guided tours by specialized staff. Karma. This is also where visitors can participate in educational programs on animal conservation or environmental conservation programs. The main goal of the zoo exhibition area is not only to entertain but also to educate and motivate visitors to care for and protect animals and their habitat. Zoos also often participate in conservation projects and scientific research to contribute to the protection of animal species worldwide. The zoo exhibition area offers great opportunities for visitors to gain a deeper understanding of the animal world, discover and experience interesting things about species and how they live in their natural environment.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center">
          <h1 className="d-flex justify-content-center align-items-center">Explore Zootopia</h1>
          <div className="img-fluid rounded">
            <img
              className="img-thumbnail imgZ"
              useMap="#workmap"
              src={safari}
              alt="Safari"
            />
            <map name="workmap" >
              <area shape="rect" coords="139, 179,272, 246" href="Narture" />
              <area shape="rect" coords="499, 261,618, 328" href="Culture" />
              <area shape="rect" coords="594, 213,760, 294" href="Region" />
            </map>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="container align-items-center">
          <div className="row">
            <div className="col-md-6">
              <img className="img-fluid rounded" src={giaitri} alt="National Park" />
            </div>
            <div className="col-md-6">
              <h2>Reasons to Visit Zootopia.</h2>
              <p>
                1.Animal Shows: These feature trained animals showcasing their natural behaviors and talents, providing an entertaining and educational experience for visitors. <br />
                2.Interactive Exhibits: Hands-on exhibits or interactive displays where visitors can learn more about specific animals, their habitats, and conservation efforts through games, quizzes, or demonstrations. <br />
                3.Play Areas: Child-friendly zones with playgrounds, mini-amusement rides, or interactive play areas themed around animals, offering fun and recreation for younger visitors. <br />
                4.Theater or Auditorium: Spaces where educational documentaries, wildlife films, or informative talks about conservation efforts and animal behaviors are screened or conducted. <br />
                5.Feeding Demonstrations: Scheduled feeding times for certain animals, accompanied by educational talks from zookeepers, allowing visitors to witness and learn about animal feeding habits and diets. <br />
                6.Live Demonstrations and Encounters: Scheduled sessions where zookeepers or educators present live demonstrations or allow visitors to have close encounters with certain animals under safe and controlled conditions.
              </p>
            </div>
          </div>
        </div>
        <br />
        <section className="my-0 bg-warning mt-1">
  <div className="container gallery text-center">
    <strong style={{ fontSize: "50px" }}>Gallery</strong>
  </div>
  <div className="container-fluid bg-warning">
    <div className="row justify-content-center">
      <div className="col-md-4 mb-4">
        <div className="img-wrapper zoom pt-1">
          <img className="img-thumbnail imgZ" src={t1} alt="Gallery 1" />
          <p className="image-caption">July every year Zootopia will organize Animal Week</p>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="img-wrapper zoom pt-1">
          <img className="img-thumbnail imgZ" src={t2} alt="Gallery 2" />
          <p className="image-caption">Staff in the park is instructing the delegation</p>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="img-wrapper zoom pt-1">
          <img
            className="img-thumbnail imgZ"
            src="https://cdn.discordapp.com/attachments/1192010367057002626/1193841469388234824/11093_IMG_7736.png?ex=65ae2e82&is=659bb982&hm=ddbe789f42d70a21b420834020197cc6a579b9100e6a5792a2cb84c8052690bf&"
            alt="Gallery 3"
          />
          <p className="image-caption">Play area in the park</p>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-4 mb-4">
        <div className="img-wrapper zoom pt-5">
          <img className="img-thumbnail imgZ" src={t3} alt="Gallery 4" />
          <p className="image-caption">Rhino care staff</p>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="img-wrapper zoom pt-5">
          <img className="img-thumbnail imgZ" src={t4} alt="Gallery 5" />
          <p className="image-caption">Tiger care staff</p>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="img-wrapper zoom pt-5">
          <img
            className="img-thumbnail imgZ"
            src="https://cdn.discordapp.com/attachments/1192010367057002626/1193841629178638366/Kombo-coaster3-Kerrie-Best.png?ex=65ae2ea8&is=659bb9a8&hm=e27d8c19a47e749d4e2a3d5a30b68811dbfd0de9422b0e5abdb32a14b8282ac3&"
            alt="Gallery 6"
          />
          <p className="image-caption">The thrilling amusement park</p>
        </div>
      </div>
    </div>
  </div>
</section>
      </section>
      <Footer />
    </div>
  );
}
