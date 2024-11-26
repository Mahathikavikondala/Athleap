import React from 'react';
// Update the path as needed
import '../styles/products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import tsh1 from './menimg/p1.jpg';
import tsh2 from './menimg/p2.avif';
import tsh3 from './menimg/p3.jpg';
import tsh4 from './menimg/p4.jpg';
import shoe1 from './menimg/s1.avif';
import shoe2 from './menimg/s2.jpg';
import shoe3 from './menimg/s3.webp';
import shoe4 from './menimg/s4.jpg_2000Wx3000H';
import jack1 from './menimg/j1.jpg';
import jack2 from './menimg/j2.jpg';
import jack3 from './menimg/j3.webp';
import jack4 from './menimg/j4.jpg';
import acc1 from './menimg/c1.jpg';
import acc2 from './menimg/c2.webp';
import acc3 from './menimg/c3.jpg';
import acc4 from './menimg/c4.jpg';
import backpack from './menimg/b1.webp';
import backpack2 from './menimg/b2.jpg';
import backpack3 from './menimg/b3.jpg';
import backpack4 from './menimg/back4.webp';
const Men = () => {
  return (
    <div className="App">
      {/* Navbar */}
      <header>
        <h1>Athleap</h1>
        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li className="dropdown">
              <a href="#products" className="dropbtn">Products</a>
              <div className="dropdown-content">
                <a href="/men">Men</a>
                <a href="../products/women.html">Women</a>
                <a href="#product3">Kids</a>
                <a href="#product4">Equipment</a>
              </div>
            </li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      {/* Popular in Outfits Section */}
      <div className="usually-section">
        <h2>Popular in Outfits</h2>
        <div className="cards-container">
          {/* Card 1 */}
          <div className="cute-card">
            <img src= {tsh1} alt="T-shirts" />
            <h3>T-shirts</h3>
            <p>T-shirts for any game</p>
          </div>
          {/* Card 2 */}
          <div className="cute-card">
            <img src= {shoe1} alt="Shoes" />
            <h3>Shoes</h3>
            <p>Latest shoes in all men sizes</p>
          </div>
          {/* Card 3 */}
          <div className="cute-card">
            <img src= {jack1} alt="Jackets" />
            <h3>Jackets</h3>
            <p>Above the top jackets from top brands.</p>
          </div>
          {/* Card 4 */}
          <div className="cute-card">
            <img src= {acc1} alt="Accessories" />
            <h3>Accessories</h3>
            <p>Works with versatility</p>
          </div>
          {/* Card 5 */}
          <div className="cute-card">
            <img src= {backpack} alt="Backpacks" />
            <h3>Backpacks</h3>
            <p>Large space area and many pockets.</p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      {[{
        title: 'OUTFITS',
        subtitle: 'MEN',
        products: [
          { img: tsh1, name: 'T-SHIRT', price: '₹ 599' },
          { img: tsh2, name: "ARTENGO Men's Full Sleeved Quick Dry Black", price: '₹ 999' },
          { img: tsh3, name: "OLAMA Men's Surfing Outfit", price: '₹ 1,199' },
          { img: tsh4, name: "SOLOGNAC Men's Breathable Lightweight Cargo Trousers Pant", price: '₹ 1,299' },
        ]
      }, {
        title: 'SHOES',
        subtitle: 'MEN',
        products: [
          { img: shoe1, name: 'DOMYOS Sports Shoes', price: '₹ 999' },
          { img: shoe2, name: "AJANTA Men's Shoes Black Affordable", price: '₹ 999' },
          { img: shoe3, name: 'NIKE Men Running Shoes Black', price: '₹ 2,199' },
          { img: shoe4, name: 'SOLOGNAC Adidas Men Shoes Low Lace Up Grey', price: '₹ 1,999' },
        ]
      }, {
        title: 'JACKETS',
        subtitle: 'MEN',
        products: [
          { img: jack1, name: 'DENIM Jacket black with Zipper', price: '₹ 1,999' },
          { img: jack2, name: "AJANTA Men's Jacket Affordable", price: '₹ 999' },
          { img: jack3, name: 'NIYE White Men Jacket', price: '₹ 2,199' },
          { img: jack4, name: 'Adidas Men Jacket Black', price: '₹ 1,999' },
        ]
      },{
        title: 'CAPS AND MORE',
        subtitle: 'MEN',
        products: [
          { img: acc1, name: 'DOMYOS Sports Cap Affordable', price: '₹ 999' },
          { img: acc2, name: "AJANTA Men's Headband blue Easy to Use", price: '₹ 999' },
          { img: acc3, name: 'Prada Black Bucket Hat', price: '₹ 2,199' },
          { img: acc4, name: 'SOLOGNAC Sunglasses', price: '₹ 1,999' },
        ]
      },{
        title: 'BACKPACKS',
        subtitle: 'MEN',
        products: [
          { img: backpack, name: "TORONTO Trendy Men Back Pack Green Many Pockets Easy To Carry", price: '₹ 999' },
          { img: backpack2, name: "American Tourister Men's Back Pack Quick Dry Easy To Use Black", price: '₹ 999' },
          { img: backpack3, name: "PUMA Men's Back Pack Black", price: '₹ 2,199' },
          { img: backpack4, name: 'Leather Backpack Affordable', price: '₹ 4,999' },
        ]
      }].map(section => (
        <div className="products-section" key={section.title}>
          <div className="sidebar">
            <h2>{section.title}</h2>
            <h1>{section.subtitle}</h1>
          </div>
          <div className="products-carousel">
            {/* <button className="scroll-btn left-btn" onClick={() => scrollLeft()}>&#9664;</button> */}
            <div className="products-container" id="products-container">
              {section.products.map((product, index) => (
                <div className="product-card" key={index}>
                  <img src={product.img} alt={product.name} />
                  <div className="product-info">
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <button>Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
            {/* <button className="scroll-btn right-btn" onClick={() => scrollRight()}>&#9654;</button> */}
          </div>
        </div>
      ))}

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
          <p><a href="mailto:contact@yourcompany.com">Contact Us</a> | <a href="privacy-policy.html">Privacy Policy</a></p>
          <div className="social-icons">
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" title="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" title="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" title="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" title="YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Men;

// Define scrollLeft and scrollRight functions as needed
const scrollLeft = () => {
  // Implement scroll left functionality

};

const scrollRight = () => {
  // Implement scroll right functionality

};
