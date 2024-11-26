import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/contact.css';
import '../styles/index.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_t12yh7d', 'template_1t3iqpt', formData, 'ZikyadR_JaWxYBSOW')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send email.');
      });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="background">
        <header className="hero-header">
        <h1>Athleap</h1>
        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li className="dropdown">
              <a href="#products" className="dropbtn">Products</a>
              <div className="dropdown-content">
                <a href="">Men</a>
                <a href="">Women</a>
                <a href="">Kids</a>
                <a href="">Equipment</a>
              </div>
            </li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <br/><br/><br/><br/> 
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
        label="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        label="Email"
        required
      />
      <div className="custom-input">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          required
          id="message"
        ></textarea>
      </div>
      <button type="submit">Send Email</button>
    </form>
    </div>
  );
};

export default Contact;
