import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

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

  @media (max-width: 768px) {
    padding: 0 15px;
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

  @media (max-width: 480px) {
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
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
  
  @media (max-width: 968px) {
    position: fixed;
    top: ${props => props.$isOpen ? '70px' : '-100%'};
    left: 0;
    width: 100%;
    height: calc(100vh - 70px);
    background: rgba(0, 51, 102, 0.98);
    transition: top 0.3s ease;
    z-index: 999;
    overflow-y: auto;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    padding-top: 40px;
    width: 100%;
  }
`;

export const NavItem = styled.li`
  margin: 0 12px;
  
  @media (max-width: 968px) {
    margin: 15px 0;
    width: 100%;
    text-align: center;
  }
`;

// NavLink for smooth scrolling (react-scroll)
export const NavLink = styled(LinkS)`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 8px 5px;
  position: relative;
  font-size: 1rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #66ccff;
    transition: width 0.3s ease;
  }
  
  &:hover, &.active {
    color: #66ccff;
    
    &:after {
      width: 100%;
    }
  }

  @media (max-width: 968px) {
    font-size: 1.2rem;
    padding: 12px 0;
    display: block;
    width: 100%;
    
    &:after {
      display: none;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: 20px;
  
  @media (max-width: 968px) {
    display: block;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  color: #fff;
  
  .phone-icon {
    font-size: 1.1rem;
    margin-right: 10px;
  }
  
  .phone-numbers {
    display: flex;
    flex-direction: column;
    
    span {
      font-size: 0.85rem;
      line-height: 1.3;
      white-space: nowrap;
    }
  }
  
  @media (max-width: 1100px) {
    margin-left: 20px;
    
    .phone-numbers {
      span {
        font-size: 0.8rem;
      }
    }
  }
  
  @media (max-width: 968px) {
    display: none;
  }
`;