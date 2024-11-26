import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import '../styles/index.css';
import salesimg1 from './indeximg/sales2.jpg';
import salesimg2 from './indeximg/sales3.webp';
import salesimg3 from './indeximg/sales4.png';
import star1 from './indeximg/spec1.png';
import star2 from './indeximg/spec2.jpg';
import star3 from './indeximg/spec3.jpg';
import star4 from './indeximg/spec4.jpg';
import cs1 from './indeximg/carousel1.avif';
import cs2 from './indeximg/carousel2.jpg';
import cs3 from './indeximg/carousel3.jpg';
const Athleap = () => {
  const [chatbotVisible, setChatbotVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const sendMessage = () => {
    if (userInput.trim() === '') return;

    const newMessages = [
      ...messages,
      { sender: 'user', text: userInput },
      { sender: 'bot', text: getBotResponse(userInput) }
    ];
    setMessages(newMessages);
    setUserInput('');
  };

  const getBotResponse = (input) => {
    input = input.toLowerCase();

    if (input.includes('hello') || input.includes('hi')) {
      return 'Hello! How can I assist you today?';
    }
    if (input.includes('help')) {
      return 'I\'m here to help! You can ask me about our products, services, or anything else.';
    }
    if (input.includes('goodbye') || input.includes('bye')) {
      return 'Goodbye! Have a great day!';
    }
    return 'I\'m not sure how to respond to that. Try asking something else!';
  };

  const handleCarouselNavigation = (direction) => {
    if (direction === 'next') {
      setCurrentSlide((currentSlide + 1) % 3);
    } else {
      setCurrentSlide((currentSlide === 0) ? 2 : currentSlide - 1);
    }
  };

  return (
    <div>
      <header className="hero-header">
        <h1>Athleap</h1>
        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li className="dropdown">
              <a href="#products" className="dropbtn">Products</a>
              <div className="dropdown-content">
                <a href="/men">Men</a>
                <a href="/women">Women</a>
                <a href="">Kids</a>
                <a href="">Equipment</a>
              </div>
            </li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      <div className="welcome-content">
        <h1>Welcome to Athleap</h1>
        <p>Your journey to fitness starts here.</p>
      </div>

      <section id="offers" className="offers">
        <h2>Special Offers</h2>
        <div className="product-grid">
          <div className="product">
            <img src= {salesimg1} alt="Product 1" />
            <h3>Best Deals Right Now</h3>
            <p>30% OFF</p>
          </div>
          <div className="product">
            <img src= {salesimg2} alt="Product 2" />
            <h3>Only for this monsoon</h3>
            <p>Buy 1 Get 1 Free</p>
          </div>
          <div className="product">
            <img src= {salesimg3} alt="Product 4" />
            <h3>Join Membership</h3>
            <p>20% OFF for Members</p>
          </div>
        </div>
      </section>

      <section id="star-products" className="star-products">
        <h2>Popular Now</h2>
        <div className="product-grid">
          <div className="product">
            <img src= {star1} alt="Star Product 1" />
            <h3>Star Product 1</h3>
            <p>Best-selling running shoes</p>
          </div>
          <div className="product">
            <img src= {star2} alt="Star Product 2" />
            <h3>Star Product 2</h3>
            <p>Pro-level tennis racket</p>
          </div>
          <div className="product">
            <img src= {star3} alt="Star Product 3" />
            <h3>Star Product 3</h3>
            <p>High-performance fitness tracker</p>
          </div>
          <div className="product">
            <img src= {star4} alt="Star Product 4" />
            <h3>Star Product 4</h3>
            <p>Advanced yoga mat</p>
          </div>
        </div>
      </section>

      <div className="container">
        <h2>Shop By category</h2><br/>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li className={currentSlide === 0 ? 'active' : ''} onClick={() => setCurrentSlide(0)}></li>
            <li className={currentSlide === 1 ? 'active' : ''} onClick={() => setCurrentSlide(1)}></li>
            <li className={currentSlide === 2 ? 'active' : ''} onClick={() => setCurrentSlide(2)}></li>
          </ol>

          {/* Wrapper for slides */}
          <div className="carousel-inner">
            <div className={`item ${currentSlide === 0 ? 'active' : ''}`}>
              <img src= {cs1} alt="Los Angeles" />
            </div>

            <div className={`item ${currentSlide === 1 ? 'active' : ''}`}>
              <img src= {cs2} alt="Chicago" />
            </div>

            <div className={`item ${currentSlide === 2 ? 'active' : ''}`}>
              <img src= {cs3} alt="New York" />
            </div>
          </div>

          {/* Left and right controls */}
          <a className="left carousel-control" onClick={() => handleCarouselNavigation('prev')}>
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" onClick={() => handleCarouselNavigation('next')}>
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div className="chatbot" style={{ display: chatbotVisible ? 'block' : 'none' }}>
        <div className="chat-header">
          <span>Chatbot</span>
          <button className="close-btn" onClick={toggleChatbot}>×</button>
        </div>
        <div className="chat-container">
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>{msg.text}</div>
            ))}
          </div>
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>

      <footer>
        <div className="footer-content">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
          <p><a href="mailto:contact@yourcompany.com">Contact Us</a> | <a href="privacy-policy.html">Privacy Policy</a></p>
          <div className="social-icons">
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" title="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" title="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" title="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" title="YouTube"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Athleap;
