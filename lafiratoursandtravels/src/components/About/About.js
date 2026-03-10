import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  AboutContainer, 
  AboutContent, 
  AboutText, 
  AboutImage,
  StatsContainer,
  StatItem,
  SectionTitle,
  SectionSubTitle,
  AboutHeading,
  StatNumber,
  StatLabel
} from './AboutElements';
import { FaUsers, FaGlobe, FaClock, FaHeadset } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <AboutContainer id="about">
      <div className="container">
        <div className="section-title">
          <SectionTitle>About Us</SectionTitle>
          <SectionSubTitle>Discover Your Next Adventure With Us</SectionSubTitle>
        </div>
        
        <AboutContent>
          <AboutText inView={inView}>
            <AboutHeading>Your Trusted Travel Partner</AboutHeading>
            <p className="highlight-text">
              With over 15 years of excellence in the travel industry, we've helped thousands 
              of travelers discover the beauty of the world.
            </p>
            <p>
              Lafira Tours and Travels has been providing exceptional travel experiences 
              for over a decade. We specialize in creating customized itineraries that 
              cater to your unique preferences and ensure memorable journeys.
            </p>
            <p className="feature-text">
              <span className="feature-badge">✓ Expert Local Guides</span>
              <span className="feature-badge">✓ Customized Packages</span>
              <span className="feature-badge">✓ Best Price Guarantee</span>
              <span className="feature-badge">✓ 24/7 Customer Support</span>
            </p>
          </AboutText>
          
          <AboutImage ref={ref} inView={inView}>
            <img 
              src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Travel Experience" 
              loading="lazy"
            />
            <div className="experience-badge">
              <span className="years">15+</span>
              <span className="text">Years of Excellence</span>
            </div>
          </AboutImage>
        </AboutContent>
        
        <StatsContainer>
          <StatItem inView={inView} delay={0}>
            <FaUsers className="stat-icon" />
            <StatNumber>5000+</StatNumber>
            <StatLabel>Happy Travelers</StatLabel>
          </StatItem>
          <StatItem inView={inView} delay={0.2}>
            <FaGlobe className="stat-icon" />
            <StatNumber>100+</StatNumber>
            <StatLabel>Destinations</StatLabel>
          </StatItem>
          <StatItem inView={inView} delay={0.4}>
            <FaClock className="stat-icon" />
            <StatNumber>15</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatItem>
          <StatItem inView={inView} delay={0.6}>
            <FaHeadset className="stat-icon" />
            <StatNumber>24/7</StatNumber>
            <StatLabel>Support</StatLabel>
          </StatItem>
        </StatsContainer>
      </div>
    </AboutContainer>
  );
};

export default About;