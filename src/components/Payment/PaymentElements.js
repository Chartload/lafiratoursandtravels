// src/components/Payment/PaymentElements.js
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

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

export const PaymentContainer = styled.section`
  padding: 120px 0 80px;
  background: linear-gradient(135deg, #003366 0%, #002244 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  
  @media (max-width: 968px) {
    padding: 100px 0 60px;
  }
  
  @media (max-width: 768px) {
    padding: 90px 0 50px;
  }
  
  @media (max-width: 480px) {
    padding: 80px 0 40px;
  }
  
  @media (max-width: 360px) {
    padding: 70px 0 30px;
  }
`;

export const PaymentWrapper = styled.div`
  max-width: 600px;
  width: 90%;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 20px;
  padding: 50px;
  box-shadow: 0 30px 60px rgba(0, 51, 102, 0.3);
  position: relative;
  animation: ${fadeIn} 0.6s ease;
  
  @media (max-width: 768px) {
    padding: 40px 30px;
    width: 95%;
  }
  
  @media (max-width: 480px) {
    padding: 30px 20px;
  }
  
  @media (max-width: 360px) {
    padding: 25px 15px;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  color: #003366;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 15px;
  border-radius: 50px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 51, 102, 0.1);
    transform: translateX(-5px);
  }
  
  svg {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 6px 12px;
  }
`;

export const PaymentHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const PaymentTitle = styled.h2`
  font-size: 2.2rem;
  color: #003366;
  margin-bottom: 10px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
  
  @media (max-width: 360px) {
    font-size: 1.6rem;
  }
`;

export const PaymentSubtitle = styled.p`
  color: #666;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

export const PaymentMethods = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 30px;
  
  @media (max-width: 480px) {
    gap: 15px;
  }
`;

export const MethodCard = styled.div`
  flex: 1;
  max-width: 150px;
  padding: 20px;
  border: 2px solid ${props => props.active ? '#66ccff' : '#e0e0e0'};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.active ? 'rgba(102, 204, 255, 0.1)' : 'transparent'};
  
  &:hover {
    border-color: #66ccff;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(102, 204, 255, 0.2);
  }
  
  @media (max-width: 480px) {
    padding: 15px;
  }
  
  @media (max-width: 360px) {
    padding: 12px;
  }
`;

export const MethodIcon = styled.div`
  font-size: 3rem;
  
  svg {
    color: ${props => props.active ? '#003366' : '#999'};
    transition: color 0.3s ease;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const MethodName = styled.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
  
  @media (max-width: 360px) {
    font-size: 0.9rem;
  }
`;

export const CardPreview = styled.div`
  background: linear-gradient(135deg, #003366 0%, #1a4d8c 100%);
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 30px;
  color: white;
  position: relative;
  min-height: 200px;
  box-shadow: 0 15px 30px rgba(0, 51, 102, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 480px) {
    padding: 20px;
    min-height: 180px;
  }
`;

export const ChipIcon = styled.div`
  width: 45px;
  height: 35px;
  background: linear-gradient(135deg, #ffd700, #ffed8a);
  border-radius: 8px;
  margin-bottom: 20px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 20px;
    background: linear-gradient(135deg, #ffed8a, #ffd700);
    border-radius: 4px;
  }
  
  @media (max-width: 480px) {
    width: 40px;
    height: 30px;
  }
`;

export const CardBrands = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 3rem;
  
  svg {
    filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.2));
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
    top: 15px;
    right: 15px;
  }
`;

export const PreviewNumber = styled.div`
  font-size: 1.5rem;
  letter-spacing: 3px;
  margin-bottom: 20px;
  font-family: 'Courier New', monospace;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    letter-spacing: 2px;
    margin-bottom: 15px;
  }
`;

export const PreviewDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const PreviewName = styled.div`
  span {
    display: block;
    font-size: 0.7rem;
    opacity: 0.8;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
  
  strong {
    font-size: 1rem;
    text-transform: uppercase;
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

export const PreviewExpiry = styled.div`
  span {
    display: block;
    font-size: 0.7rem;
    opacity: 0.8;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
  
  strong {
    font-size: 1rem;
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 18px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  
  &:focus {
    outline: none;
    border-color: #66ccff;
    box-shadow: 0 0 0 4px rgba(102, 204, 255, 0.2);
  }
  
  &::placeholder {
    color: #999;
  }
  
  @media (max-width: 768px) {
    padding: 14px 16px;
    font-size: 0.95rem;
  }
  
  @media (max-width: 480px) {
    padding: 12px 14px;
    font-size: 0.9rem;
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const SecurityNote = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #666;
  font-size: 0.9rem;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 8px;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 8px;
  }
`;

export const LockIcon = styled.div`
  color: #66ccff;
  font-size: 1.2rem;
`;

export const PaymentButton = styled.button`
  background: linear-gradient(135deg, #003366 0%, #1a4d8c 100%);
  color: white;
  border: none;
  padding: 16px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(0, 51, 102, 0.3);
    background: linear-gradient(135deg, #1a4d8c 0%, #003366 100%);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    padding: 14px;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 12px;
    font-size: 0.95rem;
  }
`;

export const LoadingSpinner = styled.div`
  width: 24px;
  height: 24px;
  border: 3px solid #ffffff;
  border-top: 3px solid #66ccff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const SuccessMessage = styled.div`
  text-align: center;
  padding: 30px;
  animation: ${fadeIn} 0.6s ease;
  
  svg {
    font-size: 4rem;
    color: #4CAF50;
    margin-bottom: 20px;
  }
  
  h3 {
    color: #003366;
    font-size: 1.8rem;
    margin-bottom: 10px;
    
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
  
  p {
    color: #666;
    font-size: 1rem;
  }
`;

export const ErrorMessage = styled.div`
  background: #ffebee;
  color: #c62828;
  padding: 12px 15px;
  border-radius: 8px;
  font-size: 0.9rem;
  text-align: center;
  border-left: 4px solid #c62828;
`;