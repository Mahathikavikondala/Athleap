import React from 'react';
import '../styles/index.css';
import '../styles/about.css';
import image1 from'../components/aboutimg/image1.jpg';
import image2 from '../components/aboutimg/image2.jpg';
const Aboutus = () => {
  return (
    <div className="App">
      {/* Header */}
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
      {/* Main Content */}
      <main>
        {/* About Section - Mission */}
        <section className="about-section">
          <div className="section-content">
            
            <img src= {image1} className="image" alt="Mission pic"/>
            
            <div className="text">
              <h2>Our Mission</h2>
              <p>
                Our mission is to innovate and deliver high-quality solutions that meet the evolving needs of our customers. We strive to push the boundaries of technology and service excellence, ensuring that we consistently exceed expectations and create lasting value.
              </p>
            </div>
          </div>
        </section>

        {/* About Section - Story */}
        <section className="about-section">
          <div className="section-content">
            <div className="text">
            
              <h2>Our Story</h2>
              <p>
                Founded in 2024, our company began with a simple vision: to transform industries with groundbreaking solutions. Over the years, we have grown from a small startup into a leader in our field, thanks to our dedicated team and our commitment to innovation and excellence.
              </p>
            </div>
          </div>
          <img src= {image2} className="image2" alt="Story"/>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Company Name. All rights reserved.</p>
        <p><a href="privacy.html">Privacy Policy</a> | <a href="terms.html">Terms of Service</a></p>
      </footer>
    </div>
  );
};

export default Aboutus;
