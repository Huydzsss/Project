import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css';
import logo from './img/logo.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Menu() {
  const [showModal, setShowModal] = useState(false);
  const [ticketInfo, setTicketInfo] = useState({
    adult: 1,
    child: 1,
    old: 1,
  });
  const [date, setDate] = useState(new Date());
  const [ticketPrice, setTicketPrice] = useState({
    adultPrice: 100,
    childPrice: 50,
    oldPrice: 70,
  });

  const handleTicketChange = (type, value) => {
    value = Math.max(0, value);
    const updatedTicketPrice = { ...ticketPrice };
    updatedTicketPrice[type + "Price"] *= value;
    setTicketPrice(updatedTicketPrice);
    setTicketInfo({
      ...ticketInfo,
      [type]: value,
    });
  };

  const openModal = (e) => {
    e.preventDefault(); 
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    toast.success('Buy tickets success!');
    console.log('Thông tin vé:', ticketInfo, date);
    setTicketInfo({
      adult: 1,
      child: 1,
      old: 1,
    });
    setTicketPrice({
      adultPrice: 100,
      childPrice: 50,
      oldPrice: 70,
    })
    setDate(new Date());
    closeModal();
  };

  return (
    <div>
      <div className="row bg-light justify-content-between align-items-center">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} style={{height:"60px", width:"60px"}} alt="Logo"/>
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShowModal(!showModal)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item dropdown">
                  <div className="dropdown ">
                    <a to="#" className="nav-link dropdown-toggle mx-4 " role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={(e) => openModal(e)}>Discovery</a>
                    <div className="dropdown-menu">
                      <li><NavLink className="dropdown-item " to="/Region">Region</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/Narture">Nature</NavLink></li>
                      <li><NavLink className="dropdown-item " to="/Culture">Culture</NavLink></li>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink to="/Event" className="nav-link mx-4 ">Events</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Aboutus" className="nav-link mx-4 ">About Us</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/ContactUs" className="nav-link mx-4 ">Contact Us</NavLink>
                </li>
                <li className="nav-item">
                  <button className="nav-link active btn btn-danger mx-4" style={{ fontSize: "20px", color: "white" }} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={openModal}>
                    Tickets
                  </button>
                </li>
              </ul>
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
                  <p>Price: ${ticketPrice.adultPrice}</p>
                </div>
                <div className="col">
                  <label htmlFor="child">Children:</label>
                  <input type="number" id="child" className="form-control" value={ticketInfo.child} onChange={(e) => handleTicketChange('child', e.target.value)} />
                  <p>Price: ${ticketPrice.childPrice}</p>
                </div>
                <div className="col">
                  <label htmlFor="old">Old:</label>
                  <input type="number" id="old" className="form-control" value={ticketInfo.old} onChange={(e) => handleTicketChange('old', e.target.value)} />
                  <p>Price: ${ticketPrice.oldPrice}</p>
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
      
      <ToastContainer />
    </div>
  );
}
