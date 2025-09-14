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
  PhoneNumbers
} from './ContactElements';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then((result) => {
      setSubmitMessage('Message sent successfully! We will get back to you soon.');
      form.current.reset();
      setIsSubmitting(false);
    })
    .catch((error) => {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
      setIsSubmitting(false);
    });
  };

  return (
    <ContactContainer id="contact" ref={ref}>
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
        </div>
        
        <ContactContent>
          <ContactInfo inView={inView}>
            <h3>Get In Touch</h3>
            <p>We're here to help you plan your next adventure. Reach out to us through any of these channels:</p>
            
            <InfoItem>
              <FaPhone />
              <div>
                <span>Phone Numbers:</span>
                <PhoneNumbers>
                  <strong>0729 228 859</strong>
                  <strong>0704 100 229</strong>
                </PhoneNumbers>
              </div>
            </InfoItem>
            
            <InfoItem>
              <FaEnvelope />
              <div>
                <span>Email:</span>
                <strong>lafiratoursandtravels@gmail.com</strong>
              </div>
            </InfoItem>
            
            <InfoItem>
              <FaMapMarkerAlt />
              <div>
                <span>Address:</span>
                <strong>Nairobi, Kenya</strong>
              </div>
            </InfoItem>
          </ContactInfo>
          
          <ContactForm 
            ref={form} 
            onSubmit={sendEmail}
            inView={inView}
            delay={0.2}
          >
            <h3>Send us a Message</h3>
            <FormGroup>
              <input type="text" name="user_name" placeholder="Your Name" required />
            </FormGroup>
            <FormGroup>
              <input type="email" name="user_email" placeholder="Your Email" required />
            </FormGroup>
            <FormGroup>
              <input type="tel" name="user_phone" placeholder="Your Phone" />
            </FormGroup>
            <FormGroup>
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </FormGroup>
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'} <FaPaperPlane />
            </SubmitButton>
            {submitMessage && <p>{submitMessage}</p>}
          </ContactForm>
        </ContactContent>
      </div>
    </ContactContainer>
  );
};

export default Contact;