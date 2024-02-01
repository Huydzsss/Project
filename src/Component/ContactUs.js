import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Menu from "./menu";
import Footer from "./Footer";
import { toast, ToastContainer } from 'react-toastify';
export default function ContactUS() {
  const [sentSuccess, setSentSuccess] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill out all fields");
      return;
    }
  
    try {
      const response = await fetch('http://localhost:3001/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        toast.success("Form data sent successfully.")
      } else {
        console.error('Failed to send form data.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div >
      <Menu />
      <div className="row">
        <div className="col-md-6">
          <iframe
            title="Simple Map"
            style={{ border: 0, width: "100%", height: "400px" }}
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.0598604555594!2d103.8888607737027!3d10.337094789786217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31081f95e87bbad9%3A0xa7eb0609640a10d8!2zVmlucGVhcmwgU2FmYXJpIFBow7ogUXXhu5Fj!5e0!3m2!1sen!2s!4v1705654054057!5m2!1sen!2s"
          ></iframe>
        </div>
        <div className="col-md-6">
          <h1 style={{ textAlign: "center" }}>Contact us</h1>
          {sentSuccess && <p style={{ color: "green" }}>{sentSuccess}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
