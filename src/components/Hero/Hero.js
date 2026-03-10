import React from 'react';
import { 
  HeroContainer, 
  HeroContent, 
  HeroH1, 
  HeroP, 
  HeroBtnWrapper,
  Button
} from './HeroElements';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <div className="container">
        <HeroContent>
          <HeroH1>Discover the World with Lafira Tours</HeroH1>
          <HeroP>
            Experience unforgettable journeys to the most breathtaking destinations. 
            Your adventure of a lifetime starts here.
          </HeroP>
          <HeroBtnWrapper>
            <Button to="services" smooth={true} duration={500}>
              Explore Services <FaArrowRight />
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </div>
    </HeroContainer>
  );
};

export default Hero;