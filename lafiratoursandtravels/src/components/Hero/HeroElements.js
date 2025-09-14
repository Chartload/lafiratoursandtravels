import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(rgba(0, 51, 102, 0.7), rgba(0, 51, 102, 0.7)), 
              url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  color: #fff;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(transparent, #fff);
    z-index: 1;
  }
`;

export const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

export const HeroH1 = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
  animation: fadeInUp 1s ease;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroP = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  animation: fadeInUp 1s ease 0.2s both;
`;

export const HeroBtnWrapper = styled.div`
  animation: fadeInUp 1s ease 0.4s both;
`;

export const Button = styled(LinkS)`
  display: inline-flex;
  align-items: center;
  background: #fff;
  color: #003366;
  padding: 12px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  svg {
    margin-left: 10px;
  }
`;