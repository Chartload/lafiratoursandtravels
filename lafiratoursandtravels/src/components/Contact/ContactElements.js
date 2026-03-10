import styled, { keyframes } from 'styled-components';

// Define keyframes using styled-components
const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ContactContainer = styled.section`
  background: #fff;
  padding: 80px 0;
  
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
    
    @media (max-width: 768px) {
      margin-bottom: 40px;
    }
    
    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
    
    @media (max-width: 360px) {
      margin-bottom: 25px;
    }
  }
`;

export const ContactHeading = styled.h2`
  font-size: 2.5rem;
  color: #003366;
  margin-bottom: 10px;
  
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

export const ContactSubHeading = styled.p`
  color: #666;
  font-size: 1.1rem;
  
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

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: 992px) {
    gap: 40px;
  }
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  
  @media (max-width: 768px) {
    gap: 40px;
  }
  
  @media (max-width: 480px) {
    gap: 35px;
  }
  
  @media (max-width: 360px) {
    gap: 30px;
  }
  
  @media (max-width: 320px) {
    gap: 25px;
  }
`;

export const ContactInfo = styled.div`
  opacity: ${props => props.inView ? 1 : 0};
  transform: ${props => props.inView ? 'translateX(0)' : 'translateX(-50px)'};
  transition: all 0.8s ease;
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: #003366;
    
    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.5rem;
      margin-bottom: 12px;
    }
    
    @media (max-width: 360px) {
      font-size: 1.4rem;
    }
    
    @media (max-width: 320px) {
      font-size: 1.3rem;
    }
  }
  
  .info-description {
    margin-bottom: 30px;
    line-height: 1.6;
    color: #666;
    
    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 25px;
    }
    
    @media (max-width: 480px) {
      font-size: 0.95rem;
      margin-bottom: 20px;
    }
    
    @media (max-width: 360px) {
      font-size: 0.9rem;
    }
    
    @media (max-width: 320px) {
      font-size: 0.85rem;
    }
  }
  
  .business-hours {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    
    h4 {
      color: #003366;
      margin-bottom: 15px;
      font-size: 1.2rem;
      
      @media (max-width: 480px) {
        font-size: 1.1rem;
        margin-bottom: 12px;
      }
      
      @media (max-width: 360px) {
        font-size: 1rem;
      }
    }
    
    p {
      margin-bottom: 8px;
      color: #666;
      
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
    
    @media (max-width: 480px) {
      margin-top: 25px;
      padding: 15px;
    }
    
    @media (max-width: 360px) {
      padding: 12px;
    }
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
    
    .clickable {
      color: #66ccff;
    }
  }
  
  svg {
    font-size: 1.2rem;
    color: #003366;
    margin-right: 15px;
    margin-top: 5px;
    min-width: 24px;
    
    &.whatsapp-icon {
      color: #25D366;
      font-size: 1.4rem;
      cursor: pointer;
      
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  
  div {
    display: flex;
    flex-direction: column;
    flex: 1;
    
    .info-label {
      color: #888;
      margin-bottom: 5px;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      
      @media (max-width: 480px) {
        font-size: 0.8rem;
      }
    }
    
    strong {
      color: #003366;
      font-size: 1.1rem;
      line-height: 1.4;
      
      &.clickable {
        cursor: pointer;
        transition: color 0.3s ease;
      }
      
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
    }
    
    .info-hint {
      font-size: 0.7rem;
      color: #999;
      margin-top: 3px;
      
      @media (max-width: 480px) {
        font-size: 0.65rem;
      }
    }
    
    .address-detail {
      font-size: 0.9rem;
      color: #666;
      margin-top: 3px;
      
      @media (max-width: 480px) {
        font-size: 0.85rem;
      }
      
      @media (max-width: 360px) {
        font-size: 0.8rem;
      }
    }
  }
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 18px;
  }
  
  @media (max-width: 360px) {
    margin-bottom: 15px;
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
  background: #f8f9fa;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 10px;
    color: #003366;
    
    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
    
    @media (max-width: 360px) {
      font-size: 1.4rem;
    }
    
    @media (max-width: 320px) {
      font-size: 1.3rem;
    }
  }
  
  .form-description {
    color: #666;
    margin-bottom: 25px;
    font-size: 1rem;
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
      margin-bottom: 20px;
    }
    
    @media (max-width: 360px) {
      font-size: 0.85rem;
    }
  }
  
  @media (max-width: 992px) {
    padding: 35px;
  }
  
  @media (max-width: 768px) {
    padding: 30px;
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

export const FormGroup = styled.div`
  margin-bottom: 20px;
  
  input, textarea {
    width: 100%;
    padding: 14px 18px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-family: 'Laila', serif;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: white;
    
    &:focus {
      outline: none;
      border-color: #003366;
      box-shadow: 0 0 0 3px rgba(0, 51, 102, 0.1);
    }
    
    &::placeholder {
      color: #aaa;
    }
    
    @media (max-width: 768px) {
      padding: 12px 16px;
      font-size: 0.95rem;
    }
    
    @media (max-width: 480px) {
      padding: 12px 14px;
      font-size: 0.9rem;
    }
    
    @media (max-width: 360px) {
      padding: 10px 12px;
      font-size: 0.85rem;
    }
    
    @media (max-width: 320px) {
      padding: 8px 10px;
      font-size: 0.8rem;
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 120px;
    
    @media (max-width: 480px) {
      min-height: 100px;
    }
  }
`;

export const SubmitButton = styled.button`
  background: linear-gradient(135deg, #003366, #002244);
  color: #fff;
  border: none;
  padding: 14px 35px;
  border-radius: 50px;
  font-family: 'Laila', serif;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  width: 100%;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, #002244, #001a33);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 51, 102, 0.3);
    
    &::before {
      left: 100%;
    }
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
  
  svg {
    margin-left: 10px;
    transition: transform 0.3s ease;
    
    &.sending {
      animation: sendPulse 1s infinite;
    }
  }
  
  @keyframes sendPulse {
    0% { transform: translateX(0); }
    50% { transform: translateX(5px); }
    100% { transform: translateX(0); }
  }
  
  @media (max-width: 768px) {
    padding: 12px 30px;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 12px 25px;
    font-size: 0.95rem;
  }
  
  @media (max-width: 360px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
  
  @media (max-width: 320px) {
    padding: 8px 15px;
    font-size: 0.85rem;
  }
`;

export const SuccessMessage = styled.p`
  color: #155724;
  background: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 5px;
  padding: 12px 15px;
  margin-top: 20px;
  font-size: 0.95rem;
  text-align: center;
  animation: ${slideUp} 0.3s ease;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 10px 12px;
  }
  
  @media (max-width: 360px) {
    font-size: 0.85rem;
    padding: 8px 10px;
  }
`;

export const ErrorMessage = styled.p`
  color: #721c24;
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  padding: 12px 15px;
  margin-top: 20px;
  font-size: 0.95rem;
  text-align: center;
  animation: ${slideUp} 0.3s ease;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 10px 12px;
  }
  
  @media (max-width: 360px) {
    font-size: 0.85rem;
    padding: 8px 10px;
  }
`;