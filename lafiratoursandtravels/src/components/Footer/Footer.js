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
  Copyright
} from './FooterElements';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterSection>
            <FooterLogo>
              <span>Lafira Tours & Travels</span>
            </FooterLogo>
            <p>
              Creating unforgettable travel experiences with personalized service 
              and attention to detail.
            </p>
            <SocialIcons>
              <SocialIcon href="#"><FaFacebookF /></SocialIcon>
              <SocialIcon href="#"><FaTwitter /></SocialIcon>
              <SocialIcon href="#"><FaInstagram /></SocialIcon>
              <SocialIcon href="#"><FaLinkedinIn /></SocialIcon>
            </SocialIcons>
          </FooterSection>
          
          <FooterSection>
            <h4>Quick Links</h4>
            <FooterLinks>
              <FooterLink to="hero" smooth={true} duration={500}>Home</FooterLink>
              <FooterLink to="about" smooth={true} duration={500}>About</FooterLink>
              <FooterLink to="services" smooth={true} duration={500}>Services</FooterLink>
              <FooterLink to="testimonials" smooth={true} duration={500}>Testimonials</FooterLink>
              <FooterLink to="contact" smooth={true} duration={500}>Contact</FooterLink>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <h4>Services</h4>
            <FooterLinks>
              <FooterLink to="#">Beach Vacations</FooterLink>
              <FooterLink to="#">Adventure Tours</FooterLink>
              <FooterLink to="#">Hotel Bookings</FooterLink>
              <FooterLink to="#">Flight Bookings</FooterLink>
              <FooterLink to="#">Visa Assistance</FooterLink>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <h4>Contact Info</h4>
            <p>
              <FaPhoneAlt /> 
              <span>0729 228 859 | 0704 100 229</span>
            </p>
            <p>lafiratoursandtravels@gmail.com</p>
            <p>Nairobi, Kenya</p>
          </FooterSection>
        </FooterContent>
        
        <Copyright>
          <p>&copy; {new Date().getFullYear()} Lafira Tours and Travels. All rights reserved.</p>
        </Copyright>
      </div>
    </FooterContainer>
  );
};

export default Footer;