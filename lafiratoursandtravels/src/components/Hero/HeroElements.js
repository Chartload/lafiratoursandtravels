import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const HeroContainer = styled.section`
  min-height: 100vh;
  height: auto;
  display: flex;
  align-items: center;
  background: linear-gradient(rgba(0, 51, 102, 0.7), rgba(0, 51, 102, 0.7)), 
              url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  color: #fff;
  position: relative;
  overflow: hidden;
  padding: 80px 20px;
  
  /* Adjust padding for very small devices */
  @media (max-width: 480px) {
    padding: 60px 16px;
    min-height: 90vh;
  }

  @media (max-width: 360px) {
    padding: 50px 12px;
    min-height: 85vh;
  }

  @media (max-width: 320px) {
    padding: 40px 10px;
  }
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(transparent, #fff);
    z-index: 1;
    
    /* Adjust gradient height for smaller screens */
    @media (max-width: 768px) {
      height: 80px;
    }
    
    @media (max-width: 480px) {
      height: 60px;
    }
    
    @media (max-width: 360px) {
      height: 50px;
    }
  }
`;

export const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  padding: 0 20px;
  
  /* Adjust padding for very small devices */
  @media (max-width: 768px) {
    padding: 0 16px;
  }
  
  @media (max-width: 480px) {
    padding: 0 12px;
  }
  
  @media (max-width: 360px) {
    padding: 0 8px;
  }
  
  @media (max-width: 320px) {
    padding: 0 5px;
  }
`;

export const HeroH1 = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
  animation: fadeInUp 1s ease;
  word-wrap: break-word;
  line-height: 1.2;
  
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
  
  /* Responsive font sizes */
  @media (max-width: 992px) {
    font-size: 3rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 15px;
  }
  
  @media (max-width: 400px) {
    font-size: 1.6rem;
  }
  
  @media (max-width: 360px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 320px) {
    font-size: 1.4rem;
  }
`;

export const HeroP = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  animation: fadeInUp 1s ease 0.2s both;
  line-height: 1.6;
  word-wrap: break-word;
  padding: 0 10px;
  
  /* Responsive font sizes */
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 25px;
  }
  
  @media (max-width: 576px) {
    font-size: 1rem;
    margin-bottom: 22px;
    padding: 0 8px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 20px;
    line-height: 1.5;
    padding: 0 5px;
  }
  
  @media (max-width: 400px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 360px) {
    font-size: 0.85rem;
    margin-bottom: 18px;
  }
  
  @media (max-width: 320px) {
    font-size: 0.8rem;
    margin-bottom: 16px;
  }
`;

export const HeroBtnWrapper = styled.div`
  animation: fadeInUp 1s ease 0.4s both;
  display: flex;
  justify-content: center;
  width: 100%;
  
  /* Adjust animation offset for smaller screens */
  @media (max-width: 768px) {
    animation: fadeInUp 0.8s ease 0.3s both;
  }
  
  @media (max-width: 480px) {
    animation: fadeInUp 0.7s ease 0.2s both;
  }
`;

export const Button = styled(LinkS)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  color: #003366;
  padding: 12px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
  white-space: nowrap;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background: #003366;
    color: #fff;
    border-color: #fff;
  }
  
  /* Responsive button sizes */
  @media (max-width: 768px) {
    padding: 10px 25px;
    font-size: 0.95rem;
  }
  
  @media (max-width: 576px) {
    padding: 10px 22px;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    padding: 8px 20px;
    font-size: 0.85rem;
    width: 100%;
    max-width: 250px;
    white-space: normal;
    word-wrap: break-word;
  }
  
  @media (max-width: 400px) {
    padding: 8px 18px;
    font-size: 0.8rem;
    max-width: 220px;
  }
  
  @media (max-width: 360px) {
    padding: 8px 16px;
    font-size: 0.75rem;
    max-width: 200px;
  }
  
  @media (max-width: 320px) {
    padding: 6px 14px;
    font-size: 0.7rem;
    max-width: 180px;
  }
  
  svg {
    margin-left: 10px;
    font-size: 1rem;
    
    /* Responsive icon size */
    @media (max-width: 768px) {
      margin-left: 8px;
      font-size: 0.9rem;
    }
    
    @media (max-width: 576px) {
      margin-left: 6px;
      font-size: 0.85rem;
    }
    
    @media (max-width: 480px) {
      margin-left: 5px;
      font-size: 0.8rem;
    }
    
    @media (max-width: 360px) {
      margin-left: 4px;
      font-size: 0.7rem;
    }
  }
`;