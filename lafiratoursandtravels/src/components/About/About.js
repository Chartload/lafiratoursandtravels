import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  AboutContainer, 
  AboutContent, 
  AboutText, 
  AboutImage,
  StatsContainer,
  StatItem
} from './AboutElements';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <AboutContainer id="about">
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
        </div>
        
        <AboutContent>
          <AboutText>
            <h3>Your Trusted Travel Partner</h3>
            <p>
              Lafira Tours and Travels has been providing exceptional travel experiences 
              for over a decade. We specialize in creating customized itineraries that 
              cater to your unique preferences and ensure memorable journeys.
            </p>
            <p>
              Our team of experienced travel experts is dedicated to making your dream 
              vacation a reality. From exotic beach getaways to adventurous mountain treks, 
              we handle all the details so you can focus on creating lasting memories.
            </p>
          </AboutText>
          
          <AboutImage ref={ref} inView={inView}>
            <img 
              src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Travel Experience" 
            />
          </AboutImage>
        </AboutContent>
        
        <StatsContainer>
          <StatItem inView={inView} delay={0}>
            <h4>5000+</h4>
            <p>Happy Travelers</p>
          </StatItem>
          <StatItem inView={inView} delay={0.2}>
            <h4>100+</h4>
            <p>Destinations</p>
          </StatItem>
          <StatItem inView={inView} delay={0.4}>
            <h4>15</h4>
            <p>Years Experience</p>
          </StatItem>
          <StatItem inView={inView} delay={0.6}>
            <h4>24/7</h4>
            <p>Support</p>
          </StatItem>
        </StatsContainer>
      </div>
    </AboutContainer>
  );
};

export default About;