import React from 'react';
import { 
  FooterContainer, 
  FooterContent, 
  FooterSection, 
  FooterLogo,
  FooterLinks,
  FooterLink,
  SocialIcons,
  SocialIcon,
  Copyright,
  ContactItem,
  FooterHeading
} from './FooterElements';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterSection>
            <FooterLogo>
              <span>Lafira Tours</span>
              <span className="logo-sub">& Travels</span>
            </FooterLogo>
            <p className="company-description">
              Creating unforgettable travel experiences with personalized service 
              and attention to detail. Your journey begins with us.
            </p>
            <SocialIcons>
              <SocialIcon href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </SocialIcon>
            </SocialIcons>
          </FooterSection>
          
          <FooterSection>
            <FooterHeading>Quick Links</FooterHeading>
            <FooterLinks>
              <FooterLink to="hero" smooth={true} duration={500} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Home
              </FooterLink>
              <FooterLink to="about" smooth={true} duration={500} offset={-80}>
                About Us
              </FooterLink>
              <FooterLink to="services" smooth={true} duration={500} offset={-80}>
                Our Services
              </FooterLink>
              <FooterLink to="testimonials" smooth={true} duration={500} offset={-80}>
                Testimonials
              </FooterLink>
              <FooterLink to="contact" smooth={true} duration={500} offset={-80}>
                Contact Us
              </FooterLink>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <FooterHeading>Our Services</FooterHeading>
            <FooterLinks>
              <FooterLink to="#" className="service-link">Beach Vacations</FooterLink>
              <FooterLink to="#" className="service-link">Adventure Tours</FooterLink>
              <FooterLink to="#" className="service-link">Hotel Bookings</FooterLink>
              <FooterLink to="#" className="service-link">Flight Bookings</FooterLink>
              <FooterLink to="#" className="service-link">Visa Assistance</FooterLink>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <FooterHeading>Contact Info</FooterHeading>
            <ContactItem>
              <FaPhoneAlt className="contact-icon" />
              <div className="contact-details">
                <span className="contact-label">Call Us 24/7</span>
                <span className="contact-value">0729 228 859</span>
                <span className="contact-value">0704 100 229</span>
              </div>
            </ContactItem>
            
            <ContactItem>
              <FaEnvelope className="contact-icon" />
              <div className="contact-details">
                <span className="contact-label">Email Us</span>
                <span className="contact-value">lafiratoursandtravels</span>
                <span className="contact-value" style={{ marginTop: '-5px' }}>@gmail.com</span>
              </div>
            </ContactItem>
            
            <ContactItem>
              <FaMapMarkerAlt className="contact-icon" />
              <div className="contact-details">
                <span className="contact-label">Visit Us</span>
                <span className="contact-value">Nairobi, Kenya</span>
                <span className="contact-value" style={{ fontSize: '0.8rem' }}>CBD Area</span>
              </div>
            </ContactItem>
          </FooterSection>
        </FooterContent>
        
        <Copyright>
          <p>&copy; {currentYear} Lafira Tours and Travels. All rights reserved.</p>
          <p className="credit">
            Designed with ❤️ for unforgettable journeys
          </p>
        </Copyright>
      </div>
    </FooterContainer>
  );
};

export default Footer;