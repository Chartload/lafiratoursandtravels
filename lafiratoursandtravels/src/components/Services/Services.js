import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  ServicesContainer, 
  ServicesGrid, 
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  SectionTitle,
  SectionSubTitle,
  ServiceBadge
} from './ServicesElements';
import { 
  FaUmbrellaBeach, 
  FaHiking, 
  FaHotel, 
  FaCar, 
  FaPlane, 
  FaPassport,
  FaShip,
  FaCamera,
  FaUtensils
} from 'react-icons/fa';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: <FaUmbrellaBeach />,
      title: 'Beach Vacations',
      description: 'Relaxing getaways to the world\'s most beautiful beaches and resorts.',
      badge: 'Popular',
      color: '#FF6B6B'
    },
    {
      icon: <FaHiking />,
      title: 'Adventure Tours',
      description: 'Thrilling adventures for the bold traveler seeking excitement and challenges.',
      badge: 'Adventure',
      color: '#4ECDC4'
    },
    {
      icon: <FaHotel />,
      title: 'Hotel Bookings',
      description: 'Luxurious accommodations at the best prices worldwide with exclusive deals.',
      badge: 'Best Deals',
      color: '#45B7D1'
    },
    {
      icon: <FaCar />,
      title: 'Transport Services',
      description: 'Comfortable and reliable transportation for all your travel needs.',
      badge: '24/7',
      color: '#96CEB4'
    },
    {
      icon: <FaPlane />,
      title: 'Flight Bookings',
      description: 'Convenient and affordable flight options to any destination worldwide.',
      badge: 'Save up to 40%',
      color: '#FFEAA7'
    },
    {
      icon: <FaPassport />,
      title: 'Visa Assistance',
      description: 'Expert guidance through the visa application process with high success rate.',
      badge: 'Expert Help',
      color: '#DDA0DD'
    },
    {
      icon: <FaShip />,
      title: 'Cruise Packages',
      description: 'Luxurious cruise experiences to exotic destinations around the world.',
      badge: 'Luxury',
      color: '#FFB347'
    },
    {
      icon: <FaCamera />,
      title: 'Photography Tours',
      description: 'Capture stunning moments with guided photography tours.',
      badge: 'New',
      color: '#6495ED'
    },
    {
      icon: <FaUtensils />,
      title: 'Culinary Tours',
      description: 'Experience local cuisines and cooking classes worldwide.',
      badge: 'Gourmet',
      color: '#E9748D'
    }
  ];

  return (
    <ServicesContainer id="services">
      <div className="container">
        <div className="section-title">
          <SectionTitle>Our Services</SectionTitle>
          <SectionSubTitle>Comprehensive Travel Solutions For Every Journey</SectionSubTitle>
        </div>
        
        <ServicesGrid ref={ref}>
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              inView={inView} 
              delay={index * 0.1}
              color={service.color}
            >
              {service.badge && (
                <ServiceBadge color={service.color}>
                  {service.badge}
                </ServiceBadge>
              )}
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <div className="card-footer">
                <span className="learn-more">Learn More →</span>
              </div>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </div>
    </ServicesContainer>
  );
};

export default Services;