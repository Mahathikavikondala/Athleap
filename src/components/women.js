import React from 'react';
// Update the path as needed
import '../styles/products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import ac1 from './womenimg/ac1.jpg';
import ac2 from './womenimg/ac2.webp';
import ac3 from './womenimg/ac3.jpg';
import ac4 from './womenimg/ac4.jpg';
import bw1 from './womenimg/bw1.jpg';
import bw2 from './womenimg/bw2.avif';
import bw3 from './womenimg/bw3.avif';
import bw4 from './womenimg/bw4.webp';
import t1 from './womenimg/pw1.webp';
import t2 from './womenimg/pw2.jpg';
import t3 from './womenimg/pw3.webp';
import t4 from './womenimg/pw4.jpg';
import s1 from './womenimg/sw1.jpg';
import s2 from './womenimg/sw2.jpg';
import s3 from './womenimg/sw3.avif';
import s4 from './womenimg/sw4.avif';
import sw1 from './womenimg/swim1.webp';
import sw2 from './womenimg/swim2.jpg';
import sw3 from './womenimg/swim3.avif';
import sw4 from './womenimg/swim4.jpg';
const Women = () => {
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
            <img src= {t1} alt="T-shirts" />
            <h3>Tops</h3>
            <p>Topwear for women in any sport</p>
          </div>
          {/* Card 2 */}
          <div className="cute-card">
            <img src= {s1} alt="Shoes" />
            <h3>Shoes</h3>
            <p>Latest shoes for better offers</p>
          </div>
          {/* Card 3 */}
          <div className="cute-card">
            <img src= {bw1} alt="Jackets" />
            <h3>Bottomwear</h3>
            <p>Above the top jackets from top brands.</p>
          </div>
          {/* Card 4 */}
          <div className="cute-card">
            <img src= {sw1} alt="Accessories" />
            <h3>Accessories</h3>
            <p>Works with versatility</p>
          </div>
          {/* Card 5 */}
          <div className="cute-card">
            <img src= {bw2} alt="Backpacks" />
            <h3>Swimwear</h3>
            <p>Easy to wear Swimsuits.</p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      {[{
        title: 'TOPS',
        subtitle: 'WOMEN',
        products: [
          { img: t1, name: 'NIKE Long Sleeves Trainee Black TEE', price: '₹ 999' },
          { img: t2, name: "UBUY Women's White sleeveless Sports Tank Top", price: '₹ 1,299' },
          { img: t3, name: "ZIVAME Women's Sports black outfit", price: '₹ 1,199' },
          { img: t4, name: "SOLOGNAC Women Yoga Running T-shirt black", price: '₹ 1,299' },
        ]
      }, {
        title: 'SHOES',
        subtitle: 'WOMEN',
        products: [
          { img: s1, name: 'IMPACKTO Sports shoes', price: '₹ 1,999' },
          { img: s2, name: "MOCHI Women's shoes pink comfy", price: '₹ 1,399' },
          { img: s3, name: 'PUMA Women running shoes', price: '₹ 2,199' },
          { img: s4, name: 'ADIDAS Women Laceup shoe grey', price: '₹ 3,999' },
        ]
      }, {
        title: 'BOTTOMWEAR',
        subtitle: 'WOMEN',
        products: [
          { img: bw1, name: 'ZIVAME Sports track Women', price: '₹ 1,999' },
          { img: bw2, name: "AJIO Women black track pant comfy", price: '₹ 1,299' },
          { img: bw3, name: 'DOMYOS Women gym leggings mottled blue', price: '₹ 2,199' },
          { img: bw4, name: 'ADIDAS Joggers Casual Olive green', price: '₹ 1,199' },
        ]
      },{
        title: 'ACCESSORIES',
        subtitle: 'WOMEN',
        products: [
          { img: ac1, name: 'TORONIO Trendy Easy Gym bag luggage pink', price: '₹ 1,699' },
          { img: ac2, name: "NIKE Women's Head band easy quick yoga", price: '₹ 1,499' },
          { img: ac3, name: "MILTON Women's 2-litre water bottle black", price: '₹ 1,199' },
          { img: ac4, name: 'RAYBOND Classic fit bit white watch', price: '₹ 1,149' },
        ]
      },{
        title: 'SWIMWEAR',
        subtitle: 'WOMEN',
        products: [
          { img: sw1, name: "TROMIE Trendy women black one piece swimsuit", price: '₹ 3,299' },
          { img: sw2, name: "NEWONES Women's sports swim suit", price: '₹ 2,299' },
          { img: sw3, name: "ADIDAS Women's Swimsuit", price: '₹ 2,139' },
          { img: sw4, name: 'RAYTIE Classic women Full length swimsuit', price: '₹ 4,999' },
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

export default Women;

// Define scrollLeft and scrollRight functions as needed
const scrollLeft = () => {
  // Implement scroll left functionality

};

const scrollRight = () => {
  // Implement scroll right functionality

};
