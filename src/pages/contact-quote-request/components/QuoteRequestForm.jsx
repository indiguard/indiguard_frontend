import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const QuoteRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: '',
    message: '',
    location: '',
    serviceDate: '',
    serviceDuration: '',
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    'Manned Guarding',
    'Mobile Patrols',
    'Keyholding & Alarm Response',
    'Event Security',
    'Construction Site Security',
    'Retail Security & corporate security'
  ];

  const durationOptions = [
    'One-time Event',
    'Short-Term (1-2 weeks)',
    'Long-Term / Ongoing'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.serviceInterest) newErrors.serviceInterest = 'Service interest is required';
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.consent) newErrors.consent = 'Consent is required';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://indiguard-backend.onrender.com/api/quote-request/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit quote request');
      }

      alert('Your quote request has been submitted successfully! We will contact you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceInterest: '',
        message: '',
        location: '',
        serviceDate: '',
        serviceDuration: '',
        consent: false
      });
    } catch (error) {
      console.error('Error submitting quote request:', error);
      alert('There was a problem submitting your quote request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-surface rounded-lg shadow-elevation-2 p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-heading font-semibold text-primary mb-2">
          Get Your Security Quote
        </h2>
        <p className="text-text-secondary">
          Complete this form and our security experts will provide a customized quote.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 1. Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4 border-b border-border pb-2">
            Contact Information
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Full Name *
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                error={errors.name}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={errors.email}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={errors.phone}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2. Service Details */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4 border-b border-border pb-2">
            Service Details
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Service Interest *
              </label>
              <select
                name="serviceInterest"
                value={formData.serviceInterest}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-smooth ${
                  errors.serviceInterest ? 'border-error' : 'border-border'
                }`}
              >
                <option value="">Select service</option>
                {serviceOptions.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
              {errors.serviceInterest && (
                <p className="text-error text-sm mt-2">{errors.serviceInterest}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Location Needed *
              </label>
              <Input
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                error={errors.location}
                placeholder="City or postcode"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Service Date
                </label>
                <Input
                  type="date"
                  name="serviceDate"
                  value={formData.serviceDate}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Service Duration
                </label>
                <select
                  name="serviceDuration"
                  value={formData.serviceDuration}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-smooth"
                >
                  <option value="">Select duration</option>
                  {durationOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Additional Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-smooth resize-vertical"
                placeholder="Any specific requirements or details"
              />
            </div>
          </div>
        </div>

        {/* 3. Consent */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4 border-b border-border pb-2">
             Consent
          </h3>
          
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
              className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-primary"
            />
            <span className="text-sm text-text-primary">
              I consent to my data being used for providing quotes *
            </span>
          </label>
          {errors.consent && (
            <p className="text-error text-sm mt-2">{errors.consent}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-6 border-t border-border">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            loading={isSubmitting}
            iconName="Send"
            iconPosition="right"
          >
            {isSubmitting ? 'Submitting...' : 'Request Quote'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default QuoteRequestForm;
