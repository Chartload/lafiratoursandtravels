import styled from 'styled-components';

export const AboutContainer = styled.section`
  background: #f8f9fa;
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  margin-bottom: 60px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutText = styled.div`
  h3 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #003366;
  }
  
  p {
    margin-bottom: 15px;
    line-height: 1.6;
  }
`;

export const AboutImage = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
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
    background: linear-gradient(45deg, rgba(0, 51, 102, 0.2), transparent);
    z-index: 1;
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const StatItem = styled.div`
  text-align: center;
  padding: 30px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  opacity: ${props => props.inView ? 1 : 0};
  transform: ${props => props.inView ? 'translateY(0)' : 'translateY(30px)'};
  transition: all 0.5s ease ${props => props.delay}s;
  
  h4 {
    font-size: 2.5rem;
    color: #003366;
    margin-bottom: 10px;
  }
  
  p {
    color: #666;
    font-weight: 500;
  }
`;