import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon'; // Make sure this path is correct for your project structure

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Static testimonials defined here
  const staticTestimonials = [
  {
    id: 1,
    name: "James Rowley",
    position: "Retail Manager",
    company: "UrbanMart UK",
    rating: 3,
    content: "IndiGuard Security provided us with outstanding service. Their patrol teams are professional, punctual, and highly responsive. Highly recommend for any retail premises!",
    service: "Event Security"
  },
  {
    id: 2,
    name: "Sofia Mendes",
    position: "Property Manager",
    company: "PrimeLettings Cardiff",
    rating: 5,
    content: "I was impressed with their alarm response times and vacant property inspections. Very reliable and communication was excellent throughout.",
        service: "Vacant property"

  },
  {
    id: 3,
    name: "Harpreet Kaur",
    position: "Director",
    company: "Kaur Events & Decor",
    rating: 4,
    content: "Their mobile patrol service gave us peace of mind during our large event. Staff were courteous and extremely well-trained. We will definitely use IndiGuard again.",
        service: "Mobile Patrol Security"

  },
  {
    id: 4,
    name: "Thomas Nolan",
    position: "Operations Head",
    company: "Midlands Haulage Ltd",
    rating: 4,
    content: "From keyholding to night patrols, IndiGuard has exceeded our expectations. Very professional and committed to quality.",
        service: "Keyholding and alarm response"

  },
  {
    id: 5,
    name: "Fatima Begum",
    position: "Facilities Coordinator",
    company: "TechHaven Offices",
    rating: 5,
    content: "The IndiGuard team provided 24/7 cover at our office building in Cardiff. Always alert and approachable – great service overall.",
        service: "Construction Site Security"

  }
];

  // testimonials state will now be initialized with static testimonials
  const [testimonials, setTestimonials] = useState(staticTestimonials);

  // Removed useEffect for API call and form related states.
  // showForm, submitted, formData, handleInputChange, handleSubmit states are removed.

  // Effect for auto-playing the carousel (this logic remains the same)
  useEffect(() => {
    // Only auto-play if there are testimonials to display AND auto-playing is enabled
    // Also, ensure there are more than 3 testimonials to enable actual scrolling.
    if (isAutoPlaying && testimonials.length > 0) {
      let interval;
      if (testimonials.length > 3) {
        interval = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
          );
        }, 5000); // Rotate every 5 seconds
      } else {
        setCurrentIndex(0); // If 3 or fewer, no rotation needed, keep index at 0
      }
      return () => clearInterval(interval); // Cleanup interval when component unmounts or dependencies change
    }
  }, [isAutoPlaying, testimonials.length]); // Re-run effect if auto-play status or number of testimonials changes

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-accent fill-current" : "text-border"}
      />
    ));
  };

  const goToPrev = () => {
    // Only allow navigation if there are more than 3 testimonials
    if (testimonials.length <= 3) return;
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
    setIsAutoPlaying(false); // Stop auto-play on manual navigation
  };

  const goToNext = () => {
    // Only allow navigation if there are more than 3 testimonials
    if (testimonials.length <= 3) return;
    setCurrentIndex(prevIndex =>
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false); // Stop auto-play on manual navigation
  };

  // Function to get the testimonials currently visible in the carousel
  const getVisibleTestimonials = () => {
    // If there are 3 or fewer testimonials, just display all of them without scrolling
    if (testimonials.length <= 3) {
      return testimonials;
    }

    let visible = [];
    for (let i = 0; i < 3; i++) {
      // Use modulo operator to loop back to the beginning of the testimonials array
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="MessageSquare" size={24} color="#1B365D" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Client Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the businesses and individuals who trust IndiGuard Security Limited.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto mb-12">
          {/* Carousel Navigation Buttons */}
          {/* Only display navigation if there are more than 3 testimonials to scroll */}
          {testimonials.length > 3 && (
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={goToPrev}
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                aria-label="Previous Testimonial"
              >
                <Icon name="ChevronLeft" size={24} className="text-primary" />
              </button>
              <button
                onClick={goToNext}
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                aria-label="Next Testimonial"
              >
                <Icon name="ChevronRight" size={24} className="text-primary" />
              </button>
            </div>
          )}

          {/* Carousel Items Display */}
          <div className="relative overflow-hidden">
            {/* Loading/Error states removed, testimonials will be displayed directly */}
            {testimonials.length === 0 ? (
              <p className="text-center text-text-secondary text-lg">
                No testimonials available.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {getVisibleTestimonials().map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full"
                  >
                    <div className="bg-surface rounded-2xl shadow-elevation-2 p-8 border border-border h-full flex flex-col justify-between">
                      <div className="space-y-6">
                        {/* Quote Icon */}
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name="Quote" size={24} color="#1B365D" />
                        </div>

                        {/* Rating Stars */}
                        <div className="flex space-x-1">
                          {renderStars(testimonial.rating)}
                        </div>

                        {/* Testimonial Content */}
                        <blockquote className="text-text-primary leading-relaxed italic text-lg">
                          "{testimonial.content}"
                        </blockquote>

                        {/* Service Badge (only render if service value is present) */}
                        {testimonial.service && (
                          <div>
                            <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                              {testimonial.service}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Client Info */}
                      <div className="flex items-center space-x-4 pt-4 mt-auto"> {/* mt-auto pushes client info to bottom */}
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon name="User" size={24} className="text-primary" />
                        </div>
                        <div className="text-left">
                          <h4 className="font-semibold text-primary">
                            {testimonial.name}
                          </h4>
                          {/* Display position and company if either exists, with a comma if both */}
                          {(testimonial.position || testimonial.company) && (
                            <p className="text-sm text-text-secondary">
                              {testimonial.position}{testimonial.position && testimonial.company && ", "}
                              {testimonial.company}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* "Share Your Experience" Section and form are removed */}
        
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
