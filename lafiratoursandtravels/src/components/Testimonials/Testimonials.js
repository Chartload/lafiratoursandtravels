import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  TestimonialsContainer, 
  TestimonialSlider, 
  TestimonialSlide,
  TestimonialContent,
  TestimonialText,
  TestimonialAuthor,
  SliderControls,
  SliderButton
} from './TestimonialsElements';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      text: "Lafira Tours made our honeymoon absolutely magical. Every detail was perfect, and their recommendations were spot on. We'll definitely be using their services again!",
      author: "Sarah & James",
      location: "Nairobi"
    },
    {
      text: "The adventure tour to Mount Kenya was beyond our expectations. The guides were knowledgeable and the accommodations were excellent. Highly recommended!",
      author: "Michael Chen",
      location: "Mombasa"
    },
    {
      text: "I've traveled with many agencies, but Lafira stands out for their professionalism and attention to detail. They truly care about creating memorable experiences.",
      author: "Dr. Amina Okonjo",
      location: "Kisumu"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <TestimonialsContainer id="testimonials" ref={ref}>
      <div className="container">
        <div className="section-title">
          <h2>What Our Clients Say</h2>
        </div>
        
        <TestimonialSlider>
          {testimonials.map((testimonial, index) => (
            <TestimonialSlide 
              key={index} 
              active={index === currentSlide}
              inView={inView}
            >
              <TestimonialContent>
                <FaQuoteLeft />
                <TestimonialText>{testimonial.text}</TestimonialText>
                <TestimonialAuthor>
                  <strong>{testimonial.author}</strong>, {testimonial.location}
                </TestimonialAuthor>
              </TestimonialContent>
            </TestimonialSlide>
          ))}
          
          <SliderControls>
            <SliderButton onClick={prevSlide}>
              <FaChevronLeft />
            </SliderButton>
            <SliderButton onClick={nextSlide}>
              <FaChevronRight />
            </SliderButton>
          </SliderControls>
        </TestimonialSlider>
      </div>
    </TestimonialsContainer>
  );
};

export default Testimonials;