import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const FooterContainer = styled.footer`
  background: #002244;
  color: #fff;
  padding: 60px 0 20px;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 40px;
  
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 580px) {
    grid-template-columns: 1fr;
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
    }
  }
  
  p {
    margin-bottom: 15px;
    line-height: 1.6;
    
    svg {
      margin-right: 10px;
    }
  }
`;

export const FooterLogo = styled.div`
  margin-bottom: 20px;
  
  span {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterLink = styled(LinkS)`
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #66ccff;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
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
  
  &:hover {
    background: #66ccff;
    transform: translateY(-5px);
  }
`;

export const Copyright = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  p {
    color: #ccc;
  }
`;