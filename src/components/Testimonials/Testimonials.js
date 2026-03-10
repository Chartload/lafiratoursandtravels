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
  SliderButton,
  SectionTitle,
  SectionSubTitle,
  SlideIndicator,
  SlideDots,
  SlideDot,
  RatingStars
} from './TestimonialsElements';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const testimonials = [
    {
      text: "Lafira Tours made our honeymoon absolutely magical. Every detail was perfect, and their recommendations were spot on. We'll definitely be using their services again!",
      author: "Sarah & James",
      location: "Nairobi",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "March 2024"
    },
    {
      text: "The adventure tour to Mount Kenya was beyond our expectations. The guides were knowledgeable and the accommodations were excellent. Highly recommended!",
      author: "Michael Chen",
      location: "Mombasa",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "February 2024"
    },
    {
      text: "I've traveled with many agencies, but Lafira stands out for their professionalism and attention to detail. They truly care about creating memorable experiences.",
      author: "Dr. Amina Okonjo",
      location: "Kisumu",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      date: "January 2024"
    },
    {
      text: "Excellent service from start to finish. The team went above and beyond to ensure our family vacation was unforgettable. Thank you Lafira Tours!",
      author: "Robert Omondi",
      location: "Nakuru",
      rating: 4.5,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      date: "December 2023"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right
      prevSlide();
    }
  };
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" />);
    }

    return stars;
  };

  return (
    <TestimonialsContainer id="testimonials" ref={ref}>
      <div className="container">
        <div className="section-title">
          <SectionTitle>What Our Clients Say</SectionTitle>
          <SectionSubTitle>Real Experiences from Happy Travelers</SectionSubTitle>
        </div>
        
        <TestimonialSlider
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialSlide 
              key={index} 
              active={index === currentSlide}
              inView={inView}
            >
              <TestimonialContent>
                <FaQuoteLeft className="quote-icon" />
                
                {testimonial.image && (
                  <div className="client-image">
                    <img src={testimonial.image} alt={testimonial.author} />
                  </div>
                )}
                
                <RatingStars>
                  {renderStars(testimonial.rating)}
                </RatingStars>
                
                <TestimonialText>"{testimonial.text}"</TestimonialText>
                
                <TestimonialAuthor>
                  <strong>{testimonial.author}</strong>
                  <span className="location">{testimonial.location}</span>
                  <span className="date">{testimonial.date}</span>
                </TestimonialAuthor>
              </TestimonialContent>
            </TestimonialSlide>
          ))}
          
          <SlideDots>
            {testimonials.map((_, index) => (
              <SlideDot 
                key={index}
                active={index === currentSlide}
                onClick={() => goToSlide(index)}
              />
            ))}
          </SlideDots>
          
          <SliderControls>
            <SliderButton onClick={prevSlide} aria-label="Previous testimonial">
              <FaChevronLeft />
            </SliderButton>
            <SlideIndicator>
              {currentSlide + 1} / {testimonials.length}
            </SlideIndicator>
            <SliderButton onClick={nextSlide} aria-label="Next testimonial">
              <FaChevronRight />
            </SliderButton>
          </SliderControls>
        </TestimonialSlider>
      </div>
    </TestimonialsContainer>
  );
};

export default Testimonials;