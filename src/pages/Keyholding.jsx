import React from 'react';
import Icon from '@/components/AppIcon';

const Keyholding = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Icon name="Key" size={28} color="#1B365D" />
          <h1 className="text-4xl lg:text-5xl font-bold text-primary">
            Keyholding & Alarm Response
          </h1>
        </div>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto mt-4">
          Reliable, 24/7 protection for your property — even when you can't be there. Let our trained security professionals handle alarm responses quickly and safely.
        </p>
      </div>

      {/* Service Explanation */}
      <div className="max-w-4xl mx-auto text-text-secondary text-lg leading-relaxed space-y-6 mb-12">
        <p>
          Your peace of mind is our priority. Our Keyholding & Alarm Response service ensures your premises are protected around the clock. Whether you're away on holiday, asleep at home, or running a business, we're here to take the pressure off.
        </p>
        <p>
          When your alarm is triggered, our trained officers are dispatched immediately to investigate and respond—eliminating the need for you to put yourself or your staff in potentially dangerous situations. We securely hold your keys, giving us quick and authorized access to the property when needed.
        </p>
        <p>
          With us, you don’t just get security—you gain a reliable partner dedicated to safeguarding your property and reputation.
        </p>
      </div>

      {/* Key Features */}
      <div className="bg-surface rounded-xl shadow-elevation-1 p-8 max-w-4xl mx-auto border border-border">
        <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center space-x-2">
          <Icon name="ShieldCheck" size={22} className="text-primary" />
          <span>Why Choose Our Service?</span>
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <Icon name="Check" size={20} color="#38A169" />
            <span>✅ <strong>Immediate Response:</strong> We attend to alarms swiftly and professionally, day or night.</span>
          </li>
          <li className="flex items-start space-x-3">
            <Icon name="Check" size={20} color="#38A169" />
            <span>✅ <strong>Secure Keyholding:</strong> Your keys are stored in secure, monitored facilities with limited access.</span>
          </li>
          <li className="flex items-start space-x-3">
            <Icon name="Check" size={20} color="#38A169" />
            <span>✅ <strong>Verified Alarm Handling:</strong> We assess the situation, reduce false alarms, and take appropriate action if needed.</span>
          </li>
          <li className="flex items-start space-x-3">
            <Icon name="Check" size={20} color="#38A169" />
            <span>✅ <strong>Emergency Coordination:</strong> We liaise with police, fire, or medical services when necessary, acting on your behalf.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Keyholding;
