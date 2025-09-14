import styled from 'styled-components';

export const ServicesContainer = styled.section`
  background: #fff;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.div`
  background: #f8f9fa;
  padding: 40px 30px;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease;
  opacity: ${props => props.inView ? 1 : 0};
  transform: ${props => props.inView ? 'translateY(0)' : 'translateY(50px)'};
  transition: all 0.5s ease ${props => props.delay}s;
  
  &:hover {
    background: #003366;
    color: #fff;
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 51, 102, 0.2);
    
    h3, p {
      color: #fff;
    }
    
    div {
      background: #fff;
      color: #003366;
    }
  }
`;

export const ServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  background: #003366;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 1.8rem;
  transition: all 0.3s ease;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #003366;
  transition: color 0.3s ease;
`;

export const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
  transition: color 0.3s ease;
`;