import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #001a33 0%, #002244 100%);
  color: #fff;
  padding: 60px 0 20px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #66ccff, #003366, #66ccff);
  }
  
  @media (max-width: 768px) {
    padding: 50px 0 20px;
  }
  
  @media (max-width: 480px) {
    padding: 40px 0 15px;
  }
  
  @media (max-width: 360px) {
    padding: 30px 0 10px;
  }
  
  @media (max-width: 320px) {
    padding: 25px 0 10px;
  }
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 40px;
  
  @media (max-width: 992px) {
    gap: 30px;
  }
  
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  
  @media (max-width: 768px) {
    gap: 25px;
    margin-bottom: 30px;
  }
  
  @media (max-width: 580px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  @media (max-width: 480px) {
    gap: 25px;
    margin-bottom: 25px;
  }
  
  @media (max-width: 360px) {
    gap: 20px;
  }
  
  @media (max-width: 320px) {
    gap: 18px;
    margin-bottom: 20px;
  }
`;

export const FooterSection = styled.div`
  h4 {
    font-size: 1.2rem;
    margin-bottom: 20px;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 40px;
      height: 3px;
      background: #66ccff;
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 60px;
    }
  }
  
  p {
    margin-bottom: 15px;
    line-height: 1.6;
    color: #ccc;
    
    svg {
      margin-right: 10px;
      color: #66ccff;
    }
  }
  
  .company-description {
    font-size: 0.95rem;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.85rem;
      margin-bottom: 15px;
    }
    
    @media (max-width: 360px) {
      font-size: 0.8rem;
    }
    
    @media (max-width: 320px) {
      font-size: 0.75rem;
    }
  }
  
  @media (max-width: 580px) {
    text-align: center;
    
    h4::after {
      left: 50%;
      transform: translateX(-50%);
    }
    
    p {
      text-align: center;
    }
  }
`;

export const FooterHeading = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 20px;
  position: relative;
  color: #fff;
  font-weight: 600;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 3px;
    background: #66ccff;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 60px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 580px) {
    font-size: 1.2rem;
    text-align: center;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
    
    &:hover::after {
      width: 80px;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 15px;
    
    &::after {
      width: 35px;
    }
  }
  
  @media (max-width: 360px) {
    font-size: 1rem;
  }
  
  @media (max-width: 320px) {
    font-size: 0.95rem;
    margin-bottom: 12px;
    
    &::after {
      width: 30px;
      bottom: -8px;
    }
  }
`;

export const FooterLogo = styled.div`
  margin-bottom: 20px;
  
  span {
    font-size: 1.5rem;
    font-weight: 700;
    display: block;
    line-height: 1.2;
    background: linear-gradient(135deg, #fff, #66ccff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .logo-sub {
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 5px;
  }
  
  @media (max-width: 768px) {
    span {
      font-size: 1.3rem;
    }
    
    .logo-sub {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 580px) {
    span {
      font-size: 1.5rem;
    }
    
    .logo-sub {
      font-size: 1.1rem;
    }
  }
  
  @media (max-width: 480px) {
    margin-bottom: 15px;
    
    span {
      font-size: 1.4rem;
    }
    
    .logo-sub {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 360px) {
    span {
      font-size: 1.3rem;
    }
    
    .logo-sub {
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 320px) {
    span {
      font-size: 1.2rem;
    }
    
    .logo-sub {
      font-size: 0.85rem;
    }
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  @media (max-width: 580px) {
    align-items: center;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
  }
  
  @media (max-width: 360px) {
    gap: 6px;
  }
`;

export const FooterLink = styled(LinkS)`
  color: #ccc;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 0.95rem;
  position: relative;
  display: inline-block;
  width: fit-content;
  
  &::before {
    content: '›';
    margin-right: 8px;
    color: #66ccff;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  &:hover {
    color: #66ccff;
    transform: translateX(5px);
    
    &::before {
      opacity: 1;
    }
  }
  
  &.service-link {
    &::before {
      content: '•';
    }
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 580px) {
    width: auto;
    text-align: center;
    font-size: 1rem;
    
    &::before {
      display: none;
    }
    
    &:hover {
      transform: translateX(0);
    }
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 360px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  
  @media (max-width: 580px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    gap: 12px;
    margin-top: 15px;
  }
  
  @media (max-width: 360px) {
    gap: 10px;
    margin-top: 12px;
  }
  
  @media (max-width: 320px) {
    gap: 8px;
  }
`;

export const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: #fff;
  font-size: 1rem;
  
  &:hover {
    background: #66ccff;
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(102, 204, 255, 0.4);
  }
  
  @media (max-width: 768px) {
    width: 38px;
    height: 38px;
    font-size: 0.95rem;
  }
  
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 0.9rem;
  }
  
  @media (max-width: 360px) {
    width: 32px;
    height: 32px;
    font-size: 0.85rem;
  }
  
  @media (max-width: 320px) {
    width: 28px;
    height: 28px;
    font-size: 0.8rem;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  gap: 12px;
  
  .contact-icon {
    color: #66ccff;
    font-size: 1.2rem;
    min-width: 24px;
    margin-top: 3px;
  }
  
  .contact-details {
    display: flex;
    flex-direction: column;
    
    .contact-label {
      font-size: 0.8rem;
      color: #888;
      margin-bottom: 2px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .contact-value {
      color: #fff;
      font-size: 0.95rem;
      line-height: 1.4;
    }
  }
  
  @media (max-width: 768px) {
    .contact-icon {
      font-size: 1.1rem;
    }
    
    .contact-details {
      .contact-value {
        font-size: 0.9rem;
      }
    }
  }
  
  @media (max-width: 580px) {
    justify-content: center;
    text-align: left;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
  
  @media (max-width: 480px) {
    gap: 10px;
    margin-bottom: 15px;
    
    .contact-icon {
      font-size: 1rem;
      min-width: 20px;
    }
    
    .contact-details {
      .contact-label {
        font-size: 0.7rem;
      }
      
      .contact-value {
        font-size: 0.85rem;
      }
    }
  }
  
  @media (max-width: 360px) {
    .contact-details {
      .contact-value {
        font-size: 0.8rem;
      }
    }
  }
  
  @media (max-width: 320px) {
    gap: 8px;
    
    .contact-icon {
      font-size: 0.9rem;
    }
    
    .contact-details {
      .contact-value {
        font-size: 0.75rem;
      }
    }
  }
`;

export const Copyright = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  p {
    color: #ccc;
    font-size: 0.9rem;
  }
  
  .credit {
    font-size: 0.8rem;
    margin-top: 5px;
    color: #888;
  }
  
  @media (max-width: 768px) {
    padding-top: 18px;
    
    p {
      font-size: 0.85rem;
    }
    
    .credit {
      font-size: 0.75rem;
    }
  }
  
  @media (max-width: 480px) {
    padding-top: 15px;
    
    p {
      font-size: 0.8rem;
    }
    
    .credit {
      font-size: 0.7rem;
    }
  }
  
  @media (max-width: 360px) {
    padding-top: 12px;
    
    p {
      font-size: 0.75rem;
    }
    
    .credit {
      font-size: 0.65rem;
    }
  }
  
  @media (max-width: 320px) {
    padding-top: 10px;
    
    p {
      font-size: 0.7rem;
    }
    
    .credit {
      font-size: 0.6rem;
    }
  }
`;