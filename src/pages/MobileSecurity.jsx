import React from 'react';
import Icon from '@/components/AppIcon';

const MobileSecurity = () => {
  return (
    <section className="py-20 bg-background text-text-primary">
      <div className="container mx-auto px-6">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Icon name="Shield" size={40} color="#1B365D" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Mobile Security Patrols
          </h1>
          <p className="text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto">
            A fast, flexible, and cost-effective solution to secure your premises — day and night.
            Our mobile patrol units are fully equipped to deter threats and respond to incidents swiftly.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">What We Offer</h2>
            <ul className="space-y-3 text-text-secondary">
              <li>✔️ Highly visible, branded patrol vehicles</li>
              <li>✔️ GPS-tracked movements and electronic reporting</li>
              <li>✔️ Tailored patrol schedules — hourly, daily, or random</li>
              <li>✔️ Lock and unlock services, gate control</li>
              <li>✔️ External and internal premise checks</li>
              <li>✔️ Emergency response and incident handling</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Why Choose Our Mobile Patrols?</h2>
            <ul className="space-y-3 text-text-secondary">
              <li>✔️ Cost-effective alternative to full-time guards</li>
              <li>✔️ Prevent vandalism, theft, and unauthorized access</li>
              <li>✔️ Visible deterrent that discourages criminal activity</li>
              <li>✔️ Peace of mind with 24/7 availability</li>
              <li>✔️ Trusted by residential, commercial, and industrial clients</li>
            </ul>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-primary text-center mb-6">Who Needs Mobile Patrol Services?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-text-secondary text-center">
            <div className="p-6 bg-surface rounded-lg shadow">
              <Icon name="Building" size={32} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Commercial Properties</h3>
              <p>Monitor warehouses, offices, and retail spaces after hours to prevent intrusions and damage.</p>
            </div>
            <div className="p-6 bg-surface rounded-lg shadow">
              <Icon name="Home" size={32} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Gated Communities</h3>
              <p>Enhance neighborhood safety and reassure residents with regular mobile patrols.</p>
            </div>
            <div className="p-6 bg-surface rounded-lg shadow">
              <Icon name="Construction" size={32} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Construction Sites</h3>
              <p>Protect high-value equipment and materials from theft or sabotage outside of working hours.</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-primary text-center mb-6">How It Works</h2>
          <div className="max-w-4xl mx-auto space-y-4 text-text-secondary text-center">
            <p>✅ You choose the schedule — daily, nightly, or random patrols based on your risk level.</p>
            <p>✅ Our trained patrol officers conduct inspections of entry points, windows, fences, and outdoor assets.</p>
            <p>✅ We provide real-time alerts in case of suspicious activity, along with electronic incident reports.</p>
            <p>✅ For emergencies, our team will contact local authorities and remain on-site until the issue is resolved.</p>
          </div>
        </div>

        

        
      </div>
    </section>
  );
};

export default MobileSecurity;
