import styled, { keyframes } from 'styled-components';

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const TestimonialsContainer = styled.section`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  padding: 80px 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(0,51,102,0.03) 0%, transparent 70%);
    border-radius: 50%;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(102,204,255,0.03) 0%, transparent 70%);
    border-radius: 50%;
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
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
  
  @media (max-width: 360px) {
    font-size: 1.8rem;
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
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
  
  @media (max-width: 360px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 320px) {
    font-size: 0.9rem;
  }
`;

export const TestimonialSlider = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  min-height: 400px;
  
  @media (max-width: 768px) {
    min-height: 450px;
  }
  
  @media (max-width: 580px) {
    min-height: 500px;
    max-width: 90%;
  }
  
  @media (max-width: 480px) {
    min-height: 550px;
  }
  
  @media (max-width: 360px) {
    min-height: 600px;
    max-width: 95%;
  }
  
  @media (max-width: 320px) {
    min-height: 650px;
  }
`;

export const TestimonialSlide = styled.div`
  text-align: center;
  padding: 40px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  opacity: ${props => props.active ? 1 : 0};
  transform: ${props => props.active ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)'};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  transition: all 0.6s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: ${props => props.active ? 'all' : 'none'};
  border: 1px solid rgba(0, 51, 102, 0.05);
  
  @media (max-width: 768px) {
    padding: 35px 30px;
  }
  
  @media (max-width: 580px) {
    padding: 30px 25px;
  }
  
  @media (max-width: 480px) {
    padding: 25px 20px;
  }
  
  @media (max-width: 360px) {
    padding: 20px 15px;
  }
  
  @media (max-width: 320px) {
    padding: 15px 12px;
  }
`;

export const TestimonialContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  animation: ${props => props.active ? fadeIn : 'none'} 0.8s ease;
  
  .quote-icon {
    font-size: 2.5rem;
    color: #003366;
    margin-bottom: 20px;
    opacity: 0.3;
    
    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
    
    @media (max-width: 480px) {
      font-size: 2rem;
      margin-bottom: 15px;
    }
    
    @media (max-width: 360px) {
      font-size: 1.8rem;
    }
  }
  
  .client-image {
    width: 80px;
    height: 80px;
    margin: 0 auto 15px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #003366;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    @media (max-width: 768px) {
      width: 70px;
      height: 70px;
    }
    
    @media (max-width: 480px) {
      width: 60px;
      height: 60px;
    }
    
    @media (max-width: 360px) {
      width: 50px;
      height: 50px;
    }
  }
`;

export const RatingStars = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-bottom: 15px;
  
  svg {
    color: #FFD700;
    font-size: 1.2rem;
    
    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
    
    @media (max-width: 360px) {
      font-size: 1rem;
    }
    
    @media (max-width: 320px) {
      font-size: 0.9rem;
    }
  }
`;

export const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #333;
  font-style: italic;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.7;
  }
  
  @media (max-width: 580px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.6;
  }
  
  @media (max-width: 360px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
`;

export const TestimonialAuthor = styled.div`
  color: #003366;
  display: flex;
  flex-direction: column;
  gap: 3px;
  
  strong {
    font-size: 1.2rem;
    font-weight: 700;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1rem;
    }
    
    @media (max-width: 360px) {
      font-size: 0.95rem;
    }
  }
  
  .location {
    color: #666;
    font-size: 1rem;
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
    
    @media (max-width: 360px) {
      font-size: 0.85rem;
    }
  }
  
  .date {
    color: #999;
    font-size: 0.9rem;
    
    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
    
    @media (max-width: 360px) {
      font-size: 0.75rem;
    }
  }
`;

export const SliderControls = styled.div`
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 15px;
  align-items: center;
  
  @media (max-width: 768px) {
    bottom: -50px;
  }
  
  @media (max-width: 580px) {
    position: relative;
    bottom: 0;
    margin-top: 30px;
  }
  
  @media (max-width: 480px) {
    margin-top: 25px;
    gap: 12px;
  }
  
  @media (max-width: 360px) {
    margin-top: 20px;
    gap: 10px;
  }
`;

export const SliderButton = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(135deg, #003366, #002244);
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 51, 102, 0.2);
  
  &:hover {
    background: linear-gradient(135deg, #002244, #001a33);
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(0, 51, 102, 0.3);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  svg {
    font-size: 1.2rem;
    
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
  
  @media (max-width: 580px) {
    width: 38px;
    height: 38px;
  }
  
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
  
  @media (max-width: 360px) {
    width: 32px;
    height: 32px;
  }
`;

export const SlideIndicator = styled.span`
  color: #003366;
  font-weight: 600;
  font-size: 1rem;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 360px) {
    font-size: 0.85rem;
  }
`;

export const SlideDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  
  @media (max-width: 580px) {
    margin-top: 15px;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
  }
  
  @media (max-width: 360px) {
    gap: 6px;
  }
`;

export const SlideDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.active ? '#003366' : '#ccc'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  
  &:hover {
    background: #003366;
    transform: scale(1.2);
  }
  
  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
  }
  
  @media (max-width: 360px) {
    width: 8px;
    height: 8px;
  }
`;