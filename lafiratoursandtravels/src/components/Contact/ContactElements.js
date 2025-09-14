import styled from 'styled-components';

export const ContactContainer = styled.section`
  background: #fff;
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactInfo = styled.div`
  opacity: ${props => props.inView ? 1 : 0};
  transform: ${props => props.inView ? 'translateX(0)' : 'translateX(-50px)'};
  transition: all 0.8s ease;
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: #003366;
  }
  
  p {
    margin-bottom: 30px;
    line-height: 1.6;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
  
  svg {
    font-size: 1.2rem;
    color: #003366;
    margin-right: 15px;
    margin-top: 5px;
  }
  
  div {
    display: flex;
    flex-direction: column;
    
    span {
      color: #666;
      margin-bottom: 5px;
    }
    
    strong {
      color: #003366;
    }
  }
`;

export const PhoneNumbers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContactForm = styled.form`
  opacity: ${props => props.inView ? 1 : 0};
  transform: ${props => props.inView ? 'translateX(0)' : 'translateX(50px)'};
  transition: all 0.8s ease ${props => props.delay}s;
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: #003366;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  
  input, textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-family: 'Laila', serif;
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: #003366;
    }
  }
`;

export const SubmitButton = styled.button`
  background: #003366;
  color: #fff;
  border: none;
  padding: 12px 30px;
  border-radius: 5px;
  font-family: 'Laila', serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: #002244;
    transform: translateY(-3px);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  svg {
    margin-left: 10px;
  }
`;