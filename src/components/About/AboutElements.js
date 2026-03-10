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

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

export const AboutContainer = styled.section`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  padding: 80px 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(0,51,102,0.03) 0%, transparent 70%);
    border-radius: 50%;
    z-index: 0;
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
    margin-bottom: 50px;
    position: relative;
    z-index: 1;
    
    @media (max-width: 768px) {
      margin-bottom: 40px;
    }
    
    @media (max-width: 480px) {
      margin-bottom: 35px;
    }
    
    @media (max-width: 360px) {
      margin-bottom: 30px;
    }
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #003366;
  margin-bottom: 10px;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: #66ccff;
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    
    &::after {
      width: 50px;
      bottom: -8px;
    }
  }
  
  @media (max-width: 360px) {
    font-size: 1.8rem;
    
    &::after {
      width: 40px;
    }
  }
  
  @media (max-width: 320px) {
    font-size: 1.6rem;
  }
`;

export const SectionSubTitle = styled.p`
  color: #666;
  font-size: 1.1rem;
  margin-top: 15px;
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-top: 12px;
  }
  
  @media (max-width: 360px) {
    font-size: 0.95rem;
    margin-top: 10px;
  }
  
  @media (max-width: 320px) {
    font-size: 0.9rem;
  }
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  margin-bottom: 60px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 992px) {
    gap: 40px;
  }
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  
  @media (max-width: 768px) {
    gap: 40px;
    margin-bottom: 50px;
  }
  
  @media (max-width: 480px) {
    gap: 35px;
    margin-bottom: 40px;
  }
  
  @media (max-width: 360px) {
    gap: 30px;
    margin-bottom: 35px;
  }
  
  @media (max-width: 320px) {
    gap: 25px;
    margin-bottom: 30px;
  }
`;

export const AboutText = styled.div`
  opacity: ${props => props.inView ? 1 : 0};
  transform: ${props => props.inView ? 'translateX(0)' : 'translateX(-30px)'};
  transition: all 0.8s ease;
  
  .highlight-text {
    font-size: 1.2rem;
    color: #003366;
    font-weight: 500;
    margin-bottom: 20px;
    line-height: 1.5;
    border-left: 4px solid #66ccff;
    padding-left: 20px;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
      padding-left: 15px;
    }
    
    @media (max-width: 480px) {
      font-size: 1rem;
      padding-left: 12px;
      margin-bottom: 15px;
    }
    
    @media (max-width: 360px) {
      font-size: 0.95rem;
      padding-left: 10px;
    }
    
    @media (max-width: 320px) {
      font-size: 0.9rem;
    }
  }
  
  p {
    margin-bottom: 15px;
    line-height: 1.8;
    color: #555;
    
    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.7;
    }
    
    @media (max-width: 480px) {
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 12px;
    }
    
    @media (max-width: 360px) {
      font-size: 0.9rem;
      line-height: 1.5;
    }
    
    @media (max-width: 320px) {
      font-size: 0.85rem;
    }
  }
  
  .feature-text {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 25px;
    
    .feature-badge {
      background: #e6f0ff;
      color: #003366;
      padding: 8px 15px;
      border-radius: 50px;
      font-size: 0.95rem;
      font-weight: 500;
      transition: all 0.3s ease;
      
      &:hover {
        background: #003366;
        color: #fff;
        transform: translateY(-2px);
        box-shadow: 0 5px 10px rgba(0, 51, 102, 0.2);
      }
      
      @media (max-width: 768px) {
        padding: 6px 12px;
        font-size: 0.9rem;
      }
      
      @media (max-width: 480px) {
        padding: 5px 10px;
        font-size: 0.85rem;
      }
      
      @media (max-width: 360px) {
        padding: 4px 8px;
        font-size: 0.8rem;
      }
      
      @media (max-width: 320px) {
        padding: 3px 6px;
        font-size: 0.75rem;
      }
    }
    
    @media (max-width: 480px) {
      gap: 10px;
      margin-top: 20px;
    }
    
    @media (max-width: 360px) {
      gap: 8px;
    }
  }
`;

export const AboutHeading = styled.h3`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #003366;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 15px;
  }
  
  @media (max-width: 360px) {
    font-size: 1.4rem;
  }
  
  @media (max-width: 320px) {
    font-size: 1.3rem;
  }
`;

export const AboutImage = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  opacity: ${props => props.inView ? 1 : 0};
  transform: ${props => props.inView ? 'translateY(0)' : 'translateY(50px)'};
  transition: all 0.8s ease;
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(0, 51, 102, 0.3), transparent);
    z-index: 1;
  }
  
  .experience-badge {
    position: absolute;
    bottom: 30px;
    right: 30px;
    background: #003366;
    color: #fff;
    padding: 15px 20px;
    border-radius: 10px;
    text-align: center;
    z-index: 2;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    animation: ${pulse} 2s infinite;
    
    .years {
      font-size: 1.8rem;
      font-weight: 700;
      display: block;
      line-height: 1;
    }
    
    .text {
      font-size: 0.9rem;
      opacity: 0.9;
    }
    
    @media (max-width: 768px) {
      bottom: 20px;
      right: 20px;
      padding: 12px 15px;
      
      .years {
        font-size: 1.5rem;
      }
      
      .text {
        font-size: 0.8rem;
      }
    }
    
    @media (max-width: 480px) {
      bottom: 15px;
      right: 15px;
      padding: 10px 12px;
      
      .years {
        font-size: 1.3rem;
      }
      
      .text {
        font-size: 0.7rem;
      }
    }
    
    @media (max-width: 360px) {
      bottom: 10px;
      right: 10px;
      padding: 8px 10px;
      
      .years {
        font-size: 1.1rem;
      }
      
      .text {
        font-size: 0.6rem;
      }
    }
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 992px) {
    gap: 25px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
    max-width: 300px;
    margin: 0 auto;
  }
  
  @media (max-width: 360px) {
    max-width: 250px;
  }
`;

export const StatItem = styled.div`
  text-align: center;
  padding: 35px 20px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  opacity: ${props => props.inView ? 1 : 0};
  transform: ${props => props.inView ? 'translateY(0)' : 'translateY(30px)'};
  transition: all 0.5s ease ${props => props.delay}s;
  border: 1px solid rgba(102, 204, 255, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #003366, #66ccff);
  }
  
  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 15px 35px rgba(0, 51, 102, 0.1);
    
    .stat-icon {
      animation: ${pulse} 1s ease;
    }
  }
  
  .stat-icon {
    font-size: 2.5rem;
    color: #003366;
    margin-bottom: 15px;
    
    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
    
    @media (max-width: 480px) {
      font-size: 2rem;
      margin-bottom: 10px;
    }
    
    @media (max-width: 360px) {
      font-size: 1.8rem;
    }
  }
  
  @media (max-width: 768px) {
    padding: 30px 15px;
  }
  
  @media (max-width: 480px) {
    padding: 25px 15px;
    display: flex;
    align-items: center;
    text-align: left;
    
    .stat-icon {
      margin-bottom: 0;
      margin-right: 20px;
    }
  }
  
  @media (max-width: 360px) {
    padding: 20px 12px;
    
    .stat-icon {
      margin-right: 15px;
    }
  }
  
  @media (max-width: 320px) {
    padding: 15px 10px;
    
    .stat-icon {
      margin-right: 12px;
    }
  }
`;

export const StatNumber = styled.h4`
  font-size: 2.5rem;
  color: #003366;
  margin-bottom: 5px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 2px;
  }
  
  @media (max-width: 360px) {
    font-size: 1.8rem;
  }
  
  @media (max-width: 320px) {
    font-size: 1.6rem;
  }
`;

export const StatLabel = styled.p`
  color: #666;
  font-weight: 500;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 360px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 320px) {
    font-size: 0.85rem;
  }
`;