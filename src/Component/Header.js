import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Home.css';

export default function Header() {
  return (
    <div>
      <header className="text-center mt-5 ">
        <div className="position-relative">
          <img
            src="https://media.discordapp.net/attachments/1192010367057002626/1195268569391431680/nature-woods-1170x600.png?ex=65bc9a19&is=65aa2519&hm=db31965dafce97062072d237fc5cc8b0de98156817c3fbe1b0566d4728950590&=&format=webp&quality=lossless&width=1132&height=580"
            className="img-fluid vw-100  vh-100" 
          />
          <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
            <h1 className="display-3">National Parks Zootopia</h1>
            <p className="lead">Explore the natural beauty of top national parks. Start your journey now!</p>
              <a className="btn btn-primary btn-success" href="#" role="button">Explore now</a>
          </div>
        </div>
      </header>
    </div>
  );
}
