import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import { 
  HeaderContainer, 
  HeaderContent,
  Logo, 
  Nav, 
  NavMenu, 
  NavItem, 
  NavLink, 
  MobileIcon,
  ContactInfo,
  LogoImage
} from './HeaderElements';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer $scroll={scroll}>
      <HeaderContent>
        <Logo to="/">
          <LogoImage src="/logo.png" alt="Lafira Tours and Travels" />
          <div className="logo-text">
            <span className="logo-main">Lafira Tours</span>
            <span className="logo-sub">& Travels</span>
          </div>
        </Logo>
        
        <Nav $isOpen={isOpen}>
          <NavMenu>
            <NavItem>
              <NavLink 
                to="hero" 
                smooth={true} 
                duration={500}
                spy={true}
                offset={-80}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                to="about" 
                smooth={true} 
                duration={500}
                spy={true}
                offset={-80}
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                to="services" 
                smooth={true} 
                duration={500}
                spy={true}
                offset={-80}
                onClick={() => setIsOpen(false)}
              >
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                to="testimonials" 
                smooth={true} 
                duration={500}
                spy={true}
                offset={-80}
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                to="contact" 
                smooth={true} 
                duration={500}
                spy={true}
                offset={-80}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </NavItem>
          </NavMenu>
        </Nav>
        
        <ContactInfo>
          <FaPhoneAlt className="phone-icon" />
          <div className="phone-numbers">
            <span>0729 228 859</span>
            <span>0704 100 229</span>
          </div>
        </ContactInfo>
        
        <MobileIcon onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;