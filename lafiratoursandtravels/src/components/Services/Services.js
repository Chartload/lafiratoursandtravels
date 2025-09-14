import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  ServicesContainer, 
  ServicesGrid, 
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription
} from './ServicesElements';
import { FaUmbrellaBeach, FaHiking, FaHotel, FaCar, FaPlane, FaPassport } from 'react-icons/fa';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: <FaUmbrellaBeach />,
      title: 'Beach Vacations',
      description: 'Relaxing getaways to the world\'s most beautiful beaches and resorts.'
    },
    {
      icon: <FaHiking />,
      title: 'Adventure Tours',
      description: 'Thrilling adventures for the bold traveler seeking excitement.'
    },
    {
      icon: <FaHotel />,
      title: 'Hotel Bookings',
      description: 'Luxurious accommodations at the best prices worldwide.'
    },
    {
      icon: <FaCar />,
      title: 'Transport Services',
      description: 'Comfortable and reliable transportation for all your travel needs.'
    },
    {
      icon: <FaPlane />,
      title: 'Flight Bookings',
      description: 'Convenient and affordable flight options to any destination.'
    },
    {
      icon: <FaPassport />,
      title: 'Visa Assistance',
      description: 'Expert guidance through the visa application process.'
    }
  ];

  return (
    <ServicesContainer id="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
        
        <ServicesGrid ref={ref}>
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              inView={inView} 
              delay={index * 0.1}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </div>
    </ServicesContainer>
  );
};

export default Services;