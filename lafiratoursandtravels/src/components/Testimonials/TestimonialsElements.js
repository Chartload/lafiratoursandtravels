import styled from 'styled-components';

export const TestimonialsContainer = styled.section`
  background: #f8f9fa;
`;

export const TestimonialSlider = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
`;

export const TestimonialSlide = styled.div`
  text-align: center;
  padding: 40px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  opacity: ${props => props.active ? 1 : 0};
  transform: ${props => props.active ? 'translateY(0)' : 'translateY(50px)'};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TestimonialContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  
  svg {
    font-size: 2rem;
    color: #003366;
    margin-bottom: 20px;
  }
`;

export const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #333;
`;

export const TestimonialAuthor = styled.p`
  color: #003366;
  font-weight: 600;
`;

export const SliderControls = styled.div`
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 15px;
`;

export const SliderButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #003366;
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: #002244;
    transform: scale(1.1);
  }
`;