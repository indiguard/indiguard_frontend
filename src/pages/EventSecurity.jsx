import React from 'react';
import Icon from '@/components/AppIcon';

const EventSecurity = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Icon name="CalendarCheck" size={28} color="#1B365D" />
          <h1 className="text-4xl lg:text-5xl font-bold text-primary">
            Events & Festival Security
          </h1>
        </div>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto mt-4">
          Ensure a safe, seamless experience for your guests with professional event and festival security tailored to your venue and crowd.
        </p>
      </div>

      <div className="max-w-4xl mx-auto text-text-secondary text-lg leading-relaxed space-y-6 mb-12">
        <p>
          From concerts and cultural festivals to private parties and public events, crowd safety is non-negotiable. Our experienced team ensures every entry, exit, and emergency is handled professionally—so your event runs without incident.
        </p>
        <p>
          We provide trained security personnel who specialize in crowd control, access monitoring, conflict resolution, and emergency response. Every plan is tailored to your event size, location, and risk profile.
        </p>
        <p>
          Focus on the success of your event while we handle the safety of your guests, staff, and performers.
        </p>
      </div>

      <div className="bg-surface rounded-xl shadow-elevation-1 p-8 max-w-4xl mx-auto border border-border">
        <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center space-x-2">
          <Icon name="Users" size={22} className="text-primary" />
          <span>Event Security Features</span>
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <Icon name="Check" size={20} color="#38A169" />
            <span><strong>Crowd Management:</strong> Expert handling of large crowds to maintain flow, safety, and order.</span>
          </li>
          <li className="flex items-start space-x-3">
            <Icon name="Check" size={20} color="#38A169" />
            <span><strong>Access Control:</strong> Secure entry points, guest list checks, and wristband/ticket verification.</span>
          </li>
          <li className="flex items-start space-x-3">
            <Icon name="Check" size={20} color="#38A169" />
            <span><strong>VIP & Performer Protection:</strong> Dedicated personnel to secure backstage and restricted areas.</span>
          </li>
          <li className="flex items-start space-x-3">
            <Icon name="Check" size={20} color="#38A169" />
            <span><strong>Emergency Handling:</strong> Trained to respond to medical, fire, or security incidents with calm precision.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EventSecurity;
