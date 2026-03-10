import styled, { keyframes } from 'styled-components';

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

export const ServicesContainer = styled.section`
  background: linear-gradient(135deg, #ffffff 0%, #f8faff 100%);
  padding: 80px 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(0,51,102,0.02) 0%, transparent 50%);
    animation: ${shimmer} 20s linear infinite;
  }
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
  
  @media (max-width: 480px) {
    padding: 50px 0;
  }
  
  @media (max-width: 360px) {
    padding: 40px 0;
  }
  
  @media (max-width: 320px) {
    padding: 30px 0;
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 60px;
    position: relative;
    z-index: 1;
    
    @media (max-width: 768px) {
      margin-bottom: 50px;
    }
    
    @media (max-width: 480px) {
      margin-bottom: 40px;
    }
    
    @media (max-width: 360px) {
      margin-bottom: 35px;
    }
    
    @media (max-width: 320px) {
      margin-bottom: 30px;
    }
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #003366;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #003366, #66ccff, #003366);
    border-radius: 2px;
    background-size: 200% 100%;
    animation: ${shimmer} 3s linear infinite;
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    
    &::after {
      width: 60px;
      height: 3px;
      bottom: -8px;
    }
  }
  
  @media (max-width: 360px) {
    font-size: 1.8rem;
    
    &::after {
      width: 50px;
    }
  }
  
  @media (max-width: 320px) {
    font-size: 1.6rem;
  }
`;

export const SectionSubTitle = styled.p`
  color: #666;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 500px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    max-width: 300px;
  }
  
  @media (max-width: 360px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 320px) {
    font-size: 0.9rem;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 992px) {
    gap: 25px;
  }
  
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
  
  @media (max-width: 768px) {
    gap: 20px;
  }
  
  @media (max-width: 580px) {
    grid-template-columns: 1fr;
    gap: 25px;
    max-width: 400px;
    margin: 0 auto;
  }
  
  @media (max-width: 480px) {
    gap: 20px;
    max-width: 350px;
  }
  
  @media (max-width: 360px) {
    max-width: 280px;
    gap: 18px;
  }
  
  @media (max-width: 320px) {
    max-width: 260px;
    gap: 15px;
  }
`;

export const ServiceBadge = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  background: ${props => props.color || '#003366'};
  color: white;
  padding: 5px 12px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  z-index: 2;
  
  @media (max-width: 480px) {
    top: 12px;
    right: 12px;
    padding: 4px 10px;
    font-size: 0.7rem;
  }
  
  @media (max-width: 360px) {
    top: 10px;
    right: 10px;
    padding: 3px 8px;
    font-size: 0.65rem;
  }
  
  @media (max-width: 320px) {
    padding: 2px 6px;
    font-size: 0.6rem;
  }
`;

// IMPORTANT: Define ServiceIcon BEFORE ServiceCard since ServiceCard references it
export const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: #f0f5ff;
  color: #003366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 2.2rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 5px 15px rgba(0, 51, 102, 0.1);
  
  svg {
    transition: all 0.3s ease;
  }
  
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    font-size: 2rem;
  }
  
  @media (max-width: 580px) {
    width: 75px;
    height: 75px;
    font-size: 2.1rem;
  }
  
  @media (max-width: 480px) {
    width: 65px;
    height: 65px;
    font-size: 1.8rem;
    margin-bottom: 15px;
  }
  
  @media (max-width: 360px) {
    width: 60px;
    height: 60px;
    font-size: 1.6rem;
  }
  
  @media (max-width: 320px) {
    width: 50px;
    height: 50px;
    font-size: 1.4rem;
  }
`;

// Define ServiceTitle and ServiceDescription BEFORE ServiceCard
export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: #003366;
  transition: color 0.3s ease;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  
  @media (max-width: 580px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }
  
  @media (max-width: 360px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 320px) {
    font-size: 1.1rem;
  }
`;

export const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.7;
  font-size: 1rem;
  transition: color 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  @media (max-width: 580px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 360px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  @media (max-width: 320px) {
    font-size: 0.85rem;
  }
`;

// Now define ServiceCard (after all components it references)
export const ServiceCard = styled.div`
  background: #ffffff;
  padding: 40px 25px;
  border-radius: 20px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: ${props => props.inView ? 1 : 0};
  transform: ${props => props.inView ? 'translateY(0)' : 'translateY(50px)'};
  transition: all 0.6s ease ${props => props.delay}s;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0, 51, 102, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, ${props => props.color || '#003366'}10, transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, ${props => props.color || '#003366'}20, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 51, 102, 0.15);
    border-color: transparent;
    
    &::before, &::after {
      opacity: 1;
    }
    
    ${ServiceIcon} {
      background: ${props => props.color || '#003366'};
      color: white;
      transform: scale(1.1) rotate(5deg);
      
      svg {
        animation: ${float} 1s ease infinite;
      }
    }
    
    ${ServiceTitle} {
      color: ${props => props.color || '#003366'};
    }
    
    .card-footer .learn-more {
      color: ${props => props.color || '#003366'};
      transform: translateX(5px);
    }
  }
  
  .card-footer {
    margin-top: 20px;
    
    .learn-more {
      font-size: 0.95rem;
      color: #666;
      transition: all 0.3s ease;
      display: inline-block;
      
      @media (max-width: 480px) {
        font-size: 0.9rem;
      }
      
      @media (max-width: 360px) {
        font-size: 0.85rem;
      }
      
      @media (max-width: 320px) {
        font-size: 0.8rem;
      }
    }
  }
  
  @media (max-width: 768px) {
    padding: 35px 20px;
  }
  
  @media (max-width: 580px) {
    padding: 35px 25px;
    
    &:hover {
      transform: translateY(-10px) scale(1.01);
    }
  }
  
  @media (max-width: 480px) {
    padding: 30px 20px;
  }
  
  @media (max-width: 360px) {
    padding: 25px 15px;
  }
  
  @media (max-width: 320px) {
    padding: 20px 12px;
  }
`;