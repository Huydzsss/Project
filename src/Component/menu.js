import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css';
import logo from './img/logo.png';
import house from "./img/house.svg";

export default function Menu() {
  const [showModal, setShowModal] = useState(false);
  const [ticketInfo, setTicketInfo] = useState({
    adult: 1,
    child: 0,
    old: 0,
  });
  const [date, setDate] = useState(new Date());
  const [showSearch, setShowSearch] = useState(false);

  const handleTicketChange = (type, value) => {
    setTicketInfo({
      ...ticketInfo,
      [type]: value,
    });
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    alert("Buy success!")
    console.log('Thông tin vé:', ticketInfo, date);
    window.location.reload();
    closeModal();
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div >
      <div className="row bg-light justify-content-between align-items-center">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} style={{height:"60px", width:"60px"}}/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleSearch}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
               <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav mx-auto">
                
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle btn btn-primary font-weight-bold mx-4" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Discovery</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="Region">Region</a></li>
                    <li><a className="dropdown-item" href="Narture">Nature</a></li>
                    <li><a className="dropdown-item" href="Culture">Culture</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="Event" className="nav-link btn btn-primary font-weight-bold mx-4">Events</a>
                </li>
                <li className="nav-item">
                  <a href="Aboutus" className="nav-link btn btn-primary font-weight-bold mx-4">About Us</a>
                </li>
                <li className="nav-item">
                  <a href="ContactUs" className="nav-link btn btn-primary font-weight-bold mx-4">Contact Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active btn btn-danger mx-4" style={{ fontSize: "20px", color: "white" }} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Tickets
                  </a>
                </li>
              </ul>
            </div>
              <form className="d-flex justify-content-end ms-1" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">
                  <span className="bi bi-search"></span>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      <div className={`modal fade ${showModal ? 'show' : ''}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Choose Tickets</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
            </div>
            <div className="modal-body">
              <div className="form-row mb-3 align-items-start">
                <div className="col">
                  <label htmlFor="date">Date:</label>
                  <input type="date" id="date" className="form-control" value={date.toISOString().slice(0, 10)} onChange={(e) => setDate(new Date(e.target.value))} />
                </div>
                <div className="col">
                  <label htmlFor="adult">Adults:</label>
                  <input type="number" id="adult" className="form-control" value={ticketInfo.adult} onChange={(e) => handleTicketChange('adult', e.target.value)} />
                </div>
                <div className="col">
                  <label htmlFor="child">Children:</label>
                  <input type="number" id="child" className="form-control" value={ticketInfo.child} onChange={(e) => handleTicketChange('child', e.target.value)} />
                </div>
                <div className="col">
                  <label htmlFor="old">Old:</label>
                  <input type="number" id="old" className="form-control" value={ticketInfo.old} onChange={(e) => handleTicketChange('old', e.target.value)} />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
