import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

// Overlay when menu is open
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  pointer-events: ${props => props.$isOpen ? 'all' : 'none'};
  
  @media (min-width: 969px) {
    display: none;
  }
`;

// Header container with transient prop ($scroll)
export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.$scroll ? '70px' : '80px'};
  background: ${({ $scroll }) => $scroll ? 'rgba(0, 51, 102, 0.98)' : 'transparent'};
  backdrop-filter: ${({ $scroll }) => $scroll ? 'blur(10px)' : 'none'};
  display: flex;
  align-items: center;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: ${({ $scroll }) => $scroll ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  
  /* Adjust heights for very small devices */
  @media (max-width: 480px) {
    height: ${props => props.$scroll ? '60px' : '70px'};
  }
  
  @media (max-width: 360px) {
    height: ${props => props.$scroll ? '55px' : '65px'};
  }
  
  @media (max-width: 320px) {
    height: ${props => props.$scroll ? '50px' : '60px'};
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;

  @media (max-width: 968px) {
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    padding: 0 15px;
  }
  
  @media (max-width: 480px) {
    padding: 0 12px;
  }
  
  @media (max-width: 360px) {
    padding: 0 10px;
  }
  
  @media (max-width: 320px) {
    padding: 0 8px;
  }
`;

// Logo links to router pages (react-router-dom)
export const Logo = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  
  .logo-text {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    
    .logo-main {
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 1.1;
    }
    
    .logo-sub {
      font-size: 0.9rem;
      font-weight: 500;
      opacity: 0.9;
    }
  }

  &:hover {
    color: #fff;
    opacity: 0.9;
  }

  @media (max-width: 968px) {
    .logo-text {
      .logo-main {
        font-size: 1.2rem;
      }
      
      .logo-sub {
        font-size: 0.8rem;
      }
    }
  }

  @media (max-width: 768px) {
    .logo-text {
      .logo-main {
        font-size: 1.1rem;
      }
      
      .logo-sub {
        font-size: 0.75rem;
      }
    }
  }

  @media (max-width: 480px) {
    .logo-text {
      display: none;
    }
  }
  
  @media (max-width: 360px) {
    .logo-text {
      display: none;
    }
  }
`;

export const LogoImage = styled.img`
  height: 40px;
  width: auto;
  object-fit: contain;

  @media (max-width: 968px) {
    height: 35px;
  }
  
  @media (max-width: 768px) {
    height: 32px;
  }
  
  @media (max-width: 480px) {
    height: 30px;
  }
  
  @media (max-width: 360px) {
    height: 28px;
  }
  
  @media (max-width: 320px) {
    height: 25px;
  }
`;

// Mobile Menu Navigation
export const Nav = styled.nav`
  display: none;
  
  @media (max-width: 968px) {
    display: block;
    position: fixed;
    top: ${props => props.$isOpen ? '0' : '-100%'};
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 51, 102, 0.98);
    backdrop-filter: blur(10px);
    transition: top 0.3s ease-in-out;
    z-index: 999;
    overflow-y: auto;
    padding-top: 80px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  
  @media (max-width: 480px) {
    padding-top: 20px;
  }
`;

export const NavItem = styled.li`
  margin: 15px 0;
  width: 100%;
  text-align: center;
  
  @media (max-width: 480px) {
    margin: 12px 0;
  }
  
  @media (max-width: 360px) {
    margin: 10px 0;
  }
  
  @media (max-width: 320px) {
    margin: 8px 0;
  }
`;

// NavLink for smooth scrolling (react-scroll)
export const NavLink = styled(LinkS)`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 12px 0;
  display: block;
  width: 100%;
  font-size: 1.2rem;
  
  &:hover {
    color: #66ccff;
    background: rgba(102, 204, 255, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 10px 0;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 8px 0;
  }
`;

// Payment Link
export const PaymentLink = styled(LinkR)`
  color: #66ccff;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 1rem;
  background: rgba(102, 204, 255, 0.1);
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  border: 2px solid #66ccff;
  
  &:hover {
    background: #66ccff;
    color: #003366;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 204, 255, 0.3);
  }

  /* Desktop styles */
  @media (min-width: 969px) {
    margin-left: 20px;
  }

  /* Mobile styles */
  @media (max-width: 968px) {
    font-size: 1.2rem;
    padding: 12px 25px;
    margin: 10px auto;
    width: fit-content;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 10px 20px;
  }
`;

// Close button inside mobile menu
export const CloseButton = styled.div`
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #66ccff;
    color: #003366;
    transform: rotate(90deg);
  }
  
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 1.3rem;
    top: 15px;
    right: 15px;
  }
  
  @media (max-width: 360px) {
    width: 32px;
    height: 32px;
    font-size: 1.2rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: auto;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
  
  @media (max-width: 968px) {
    display: block;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 360px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 320px) {
    font-size: 1.1rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 20px;
  color: #fff;
  
  .phone-icon {
    font-size: 1.1rem;
    margin-right: 10px;
    color: #66ccff;
  }
  
  .phone-numbers {
    display: flex;
    flex-direction: column;
    
    span {
      font-size: 0.85rem;
      line-height: 1.3;
      white-space: nowrap;
    }
    
    .phone-label {
      font-size: 0.7rem;
      opacity: 0.8;
    }
  }
  
  @media (max-width: 1100px) {
    margin-right: 15px;
    
    .phone-numbers {
      span {
        font-size: 0.8rem;
      }
    }
  }
  
  @media (max-width: 1024px) {
    margin-right: 10px;
    
    .phone-numbers {
      span {
        font-size: 0.75rem;
      }
    }
  }
  
  @media (max-width: 968px) {
    display: none;
  }
`;

// Mobile contact button
export const MobileContactButton = styled(LinkS)`
  display: none;
  background: #66ccff;
  color: #003366;
  padding: 6px 12px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.8rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  align-items: center;
  border: 2px solid transparent;
  margin-left: auto;
  margin-right: 10px;
  
  &:hover {
    background: #fff;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-color: #66ccff;
  }
  
  @media (max-width: 968px) {
    display: inline-flex;
  }
  
  @media (max-width: 480px) {
    padding: 5px 10px;
    font-size: 0.75rem;
  }
  
  @media (max-width: 360px) {
    padding: 4px 8px;
    font-size: 0.7rem;
  }
`;

// Mobile contact info in menu
export const MobileContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  
  .phone-numbers {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-top: 10px;
    
    span {
      color: #fff;
      font-size: 1rem;
      
      @media (max-width: 480px) {
        font-size: 0.9rem;
      }
    }
  }
`;