// src/components/Payment/Payment.js
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  PaymentContainer,
  PaymentWrapper,
  PaymentHeader,
  PaymentTitle,
  PaymentSubtitle,
  PaymentMethods,
  MethodCard,
  MethodIcon,
  MethodName,
  FormContainer,
  FormGroup,
  Input,
  FormRow,
  PaymentButton,
  CardPreview,
  PreviewNumber,
  PreviewDetails,
  PreviewName,
  PreviewExpiry,
  CardBrands,
  ChipIcon,
  SecurityNote,
  LockIcon,
  BackButton,
  SuccessMessage,
  ErrorMessage,
  LoadingSpinner
} from './PaymentElements';
import { FaCcVisa, FaCcMastercard, FaLock, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';

const Payment = () => {
  const navigate = useNavigate();
  const params = useParams(); // Fixed: using params instead of unused service
  const [selectedMethod, setSelectedMethod] = useState('visa');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: ''
  });

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'cardNumber') {
      // Format card number with spaces
      const formatted = value
        .replace(/\s/g, '')
        .replace(/(\d{4})/g, '$1 ')
        .trim()
        .slice(0, 19);
      setFormData({ ...formData, [name]: formatted });
    } else if (name === 'expiryMonth' || name === 'expiryYear') {
      // Only allow numbers
      const numeric = value.replace(/[^0-9]/g, '').slice(0, 2);
      setFormData({ ...formData, [name]: numeric });
    } else if (name === 'cvv') {
      // Only allow numbers, max 3 digits
      const numeric = value.replace(/[^0-9]/g, '').slice(0, 3);
      setFormData({ ...formData, [name]: numeric });
    } else {
      setFormData({ ...formData, [name]: value.toUpperCase() });
    }
  };

  const validateForm = () => {
    const cleanNumber = formData.cardNumber.replace(/\s/g, '');
    if (cleanNumber.length < 16) {
      setError('Please enter a valid 16-digit card number');
      return false;
    }
    if (formData.cardName.length < 3) {
      setError('Please enter the full cardholder name');
      return false;
    }
    if (!formData.expiryMonth || !formData.expiryYear) {
      setError('Please enter expiry date');
      return false;
    }
    if (formData.cvv.length < 3) {
      setError('Please enter a valid CVV');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      // Redirect after success
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 2000);
  };

  const formatCardNumber = (number) => {
    if (!number) return '**** **** **** ****';
    const cleaned = number.replace(/\s/g, '');
    const parts = [];
    
    for (let i = 0; i < cleaned.length && i < 16; i += 4) {
      parts.push(cleaned.substring(i, i + 4));
    }
    
    return parts.join(' ');
  };

  return (
    <PaymentContainer>
      <PaymentWrapper>
        <BackButton onClick={() => navigate('/')}>
          <FaArrowLeft /> Back to Home
        </BackButton>

        <PaymentHeader>
          <PaymentTitle>Secure Payment</PaymentTitle>
          <PaymentSubtitle>Complete your booking with confidence</PaymentSubtitle>
        </PaymentHeader>

        <PaymentMethods>
          <MethodCard 
            active={selectedMethod === 'visa'} 
            onClick={() => handleMethodSelect('visa')}
          >
            <MethodIcon active={selectedMethod === 'visa'}>
              <FaCcVisa />
            </MethodIcon>
            <MethodName>Visa</MethodName>
          </MethodCard>

          <MethodCard 
            active={selectedMethod === 'mastercard'} 
            onClick={() => handleMethodSelect('mastercard')}
          >
            <MethodIcon active={selectedMethod === 'mastercard'}>
              <FaCcMastercard />
            </MethodIcon>
            <MethodName>Mastercard</MethodName>
          </MethodCard>
        </PaymentMethods>

        <CardPreview method={selectedMethod}>
          <ChipIcon />
          <CardBrands>
            {selectedMethod === 'visa' ? <FaCcVisa /> : <FaCcMastercard />}
          </CardBrands>
          <PreviewNumber>
            {formatCardNumber(formData.cardNumber)}
          </PreviewNumber>
          <PreviewDetails>
            <PreviewName>
              <span>Card Holder</span>
              <strong>{formData.cardName || 'YOUR NAME'}</strong>
            </PreviewName>
            <PreviewExpiry>
              <span>Expires</span>
              <strong>{formData.expiryMonth || 'MM'}/{formData.expiryYear || 'YY'}</strong>
            </PreviewExpiry>
          </PreviewDetails>
        </CardPreview>

        {success ? (
          <SuccessMessage>
            <FaCheckCircle />
            <h3>Payment Successful!</h3>
            <p>Thank you for your payment. You will be redirected shortly.</p>
          </SuccessMessage>
        ) : (
          <FormContainer onSubmit={handleSubmit}>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            
            <FormGroup>
              <Input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleInputChange}
                maxLength="19"
                required
              />
            </FormGroup>

            <FormGroup>
              <Input
                type="text"
                name="cardName"
                placeholder="Card Holder Name"
                value={formData.cardName}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormRow>
              <Input
                type="text"
                name="expiryMonth"
                placeholder="MM"
                value={formData.expiryMonth}
                onChange={handleInputChange}
                maxLength="2"
                required
              />
              <Input
                type="text"
                name="expiryYear"
                placeholder="YY"
                value={formData.expiryYear}
                onChange={handleInputChange}
                maxLength="2"
                required
              />
              <Input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleInputChange}
                maxLength="3"
                required
              />
            </FormRow>

            <SecurityNote>
              <LockIcon>
                <FaLock />
              </LockIcon>
              <span>Your payment information is encrypted and secure</span>
            </SecurityNote>

            <PaymentButton type="submit" disabled={loading}>
              {loading ? <LoadingSpinner /> : 'Pay Securely'}
            </PaymentButton>
          </FormContainer>
        )}
      </PaymentWrapper>
    </PaymentContainer>
  );
};

export default Payment;