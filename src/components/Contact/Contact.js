import React, { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  ContactContainer, 
  ContactContent, 
  ContactInfo, 
  ContactForm,
  InfoItem,
  FormGroup,
  SubmitButton,
  PhoneNumbers,
  SuccessMessage,
  ErrorMessage,
  ContactHeading,
  ContactSubHeading
} from './ContactElements';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      setSubmitMessage('Message sent successfully! We will get back to you within 24 hours.');
      setMessageType('success');
      form.current.reset();
      setFormData({
        user_name: '',
        user_email: '',
        user_phone: '',
        message: ''
      });
      setIsSubmitting(false);
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    })
    .catch(() => {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact us directly via phone.');
      setMessageType('error');
      setIsSubmitting(false);
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    });
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254729228859?text=Hello%20Lafira%20Tours,%20I%27m%20interested%20in%20your%20services.', '_blank');
  };

  const handlePhoneCall = (number) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <ContactContainer id="contact" ref={ref}>
      <div className="container">
        <div className="section-title">
          <ContactHeading>Contact Us</ContactHeading>
          <ContactSubHeading>We'd love to hear from you</ContactSubHeading>
        </div>
        
        <ContactContent>
          <ContactInfo inView={inView}>
            <h3>Get In Touch</h3>
            <p className="info-description">
              We're here to help you plan your next adventure. Reach out to us through any of these channels:
            </p>
            
            <InfoItem onClick={() => handlePhoneCall('0729228859')}>
              <FaPhone />
              <div>
                <span className="info-label">Phone Numbers:</span>
                <PhoneNumbers>
                  <strong className="clickable">0729 228 859</strong>
                  <strong className="clickable">0704 100 229</strong>
                </PhoneNumbers>
                <small className="info-hint">Click to call</small>
              </div>
            </InfoItem>
            
            <InfoItem>
              <FaWhatsapp className="whatsapp-icon" onClick={handleWhatsAppClick} />
              <div>
                <span className="info-label">WhatsApp:</span>
                <strong className="clickable" onClick={handleWhatsAppClick}>0729 228 859</strong>
                <small className="info-hint">Click to chat</small>
              </div>
            </InfoItem>
            
            <InfoItem>
              <FaEnvelope />
              <div>
                <span className="info-label">Email:</span>
                <strong>lafiratoursandtravels@gmail.com</strong>
              </div>
            </InfoItem>
            
            <InfoItem>
              <FaMapMarkerAlt />
              <div>
                <span className="info-label">Address:</span>
                <strong>Nairobi, Kenya</strong>
                <span className="address-detail">CBD Area, along Moi Avenue</span>
              </div>
            </InfoItem>

            <div className="business-hours">
              <h4>Business Hours</h4>
              <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
              <p>Saturday: 9:00 AM - 6:00 PM</p>
              <p>Sunday: 10:00 AM - 4:00 PM</p>
            </div>
          </ContactInfo>
          
          <ContactForm 
            ref={form} 
            onSubmit={sendEmail}
            inView={inView}
            delay={0.2}
          >
            <h3>Send us a Message</h3>
            <p className="form-description">Fill out the form below and we'll get back to you as soon as possible.</p>
            
            <FormGroup>
              <input 
                type="text" 
                name="user_name" 
                placeholder="Your Full Name *" 
                value={formData.user_name}
                onChange={handleInputChange}
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <input 
                type="email" 
                name="user_email" 
                placeholder="Your Email Address *" 
                value={formData.user_email}
                onChange={handleInputChange}
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <input 
                type="tel" 
                name="user_phone" 
                placeholder="Your Phone Number" 
                value={formData.user_phone}
                onChange={handleInputChange}
              />
            </FormGroup>
            
            <FormGroup>
              <textarea 
                name="message" 
                placeholder="Your Message *" 
                rows="5" 
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'} 
              <FaPaperPlane className={isSubmitting ? 'sending' : ''} />
            </SubmitButton>
            
            {submitMessage && (
              messageType === 'success' ? (
                <SuccessMessage>{submitMessage}</SuccessMessage>
              ) : (
                <ErrorMessage>{submitMessage}</ErrorMessage>
              )
            )}
          </ContactForm>
        </ContactContent>
      </div>
    </ContactContainer>
  );
};

export default Contact;