import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhoneAlt, FaCreditCard } from 'react-icons/fa';
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
  LogoImage,
  MobileContactButton,
  Overlay,
  CloseButton,
  MobileContactInfo,
  PaymentLink
} from './HeaderElements';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle scroll for header background
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav') && !event.target.closest('.mobile-icon')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 968 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <HeaderContainer $scroll={scroll}>
        <HeaderContent>
          <Logo to="/" onClick={closeMenu}>
            <LogoImage 
              src="/logo.png" 
              alt="Lafira Tours and Travels" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/fallback-logo.png';
              }}
            />
            <div className="logo-text">
              <span className="logo-main">Lafira Tours</span>
              <span className="logo-sub">& Travels</span>
            </div>
          </Logo>
          
          {/* Desktop Contact Info */}
          <ContactInfo>
            <FaPhoneAlt className="phone-icon" />
            <div className="phone-numbers">
              <span className="phone-number">0729 228 859</span>
              <span className="phone-number">0704 100 229</span>
              <span className="phone-label">24/7 Support</span>
            </div>
          </ContactInfo>
          
          {/* Desktop Payment Link */}
          <PaymentLink to="/payment">
            <FaCreditCard style={{ marginRight: '8px' }} />
            Pay Now
          </PaymentLink>
          
          {/* Mobile Contact Button - only show when menu is closed */}
          {!isOpen && (
            <MobileContactButton to="contact" smooth={true} duration={500} onClick={handleNavClick}>
              <FaPhoneAlt style={{ marginRight: '5px' }} />
              Call Now
            </MobileContactButton>
          )}
          
          <MobileIcon className="mobile-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileIcon>
        </HeaderContent>
      </HeaderContainer>

      {/* Mobile Menu */}
      <Nav $isOpen={isOpen}>
        <NavMenu>
          <NavItem>
            <NavLink 
              to="hero" 
              smooth={true} 
              duration={500}
              spy={true}
              offset={-80}
              onClick={handleNavClick}
              activeClass="active"
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
              onClick={handleNavClick}
              activeClass="active"
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
              onClick={handleNavClick}
              activeClass="active"
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
              onClick={handleNavClick}
              activeClass="active"
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
              onClick={handleNavClick}
              activeClass="active"
            >
              Contact
            </NavLink>
          </NavItem>
          {/* Mobile Payment Link */}
          <NavItem>
            <PaymentLink 
              to="/payment"
              onClick={handleNavClick}
              style={{ marginTop: '10px' }}
            >
              <FaCreditCard style={{ marginRight: '8px' }} />
              Pay Now
            </PaymentLink>
          </NavItem>
          
          {/* Close button inside menu */}
          <CloseButton $isOpen={isOpen} onClick={closeMenu}>
            <FaTimes />
          </CloseButton>
          
          {/* Mobile contact info in menu */}
          <MobileContactInfo>
            <FaPhoneAlt style={{ fontSize: '1.5rem', color: '#66ccff', marginBottom: '10px' }} />
            <div className="phone-numbers">
              <span>0729 228 859</span>
              <span>0704 100 229</span>
              <span style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '5px' }}>24/7 Support</span>
            </div>
          </MobileContactInfo>
        </NavMenu>
      </Nav>
      
      <Overlay $isOpen={isOpen} onClick={closeMenu} />
    </>
  );
};

export default Header;