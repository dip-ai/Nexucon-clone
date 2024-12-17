import React, { useState, useEffect } from 'react';
import './navbar.css';
import Desccard from './Desccard';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isScrolled, setIsScrolled] = useState(false);

  const languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Arabic'];

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="home-page">
        <div className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
          <nav className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
            {/* Logo Section */}
            <div className="logo-container">
              <img
                className="logo"
                src="https://res.cloudinary.com/dxqzklc00/image/upload/v1731819548/logowithtag_tgkdpc.webp"
                alt="Nexucon"
              />
            </div>

            {/* Hamburger Menu for Small Screens */}
            <div className="hamburger-menu">
              <Menu
                className="hamburger-icon"
                onClick={() => setShowMenu(!showMenu)}
              />
            </div>

            {/* Menu Section */}
            <div className={`menu-bar ${showMenu ? 'active' : ''}`}>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Our Offerings</a></li>
                <li><a href="#">About Us</a></li>
              </ul>
            </div>

            {/* Button Section */}
            <div className={`button-container ${showMenu ? 'active' : ''}`}>
              <button type="button" className="btn btn-primary">Contact Us</button>

              {/* Language Dropdown */}
              <div className="dropdown">
                <button className="btn dropdown-btn">
                  {selectedLanguage}
                </button>
                <ul className="dropdown-menu">
                  {languages.map((lang, index) => (
                    <li key={index} onClick={() => setSelectedLanguage(lang)}>
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {/* Page Content */}
        <div className="card-wrapper">
          <Desccard />
        </div>
      </div>
    </>
  );
};

export default Navbar;
