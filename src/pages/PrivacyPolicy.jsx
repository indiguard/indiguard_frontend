import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="w-full max-w-7xl mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">
              Your Logo
            </Link>
            <div className="flex space-x-4">
              <Link to="/" className="hover:text-blue-600">Home</Link>
              <Link to="/privacy-policy" className="hover:text-blue-600">Privacy</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4 text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to [Your Company Name] ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
          <p className="mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2"><strong>Personal Data:</strong> Name, email, phone number, etc.</li>
            <li className="mb-2"><strong>Usage Data:</strong> IP address, browser type, pages visited.</li>
            <li className="mb-2"><strong>Cookies:</strong> We use cookies to enhance your experience.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use your data to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Provide and maintain our services.</li>
            <li className="mb-2">Improve user experience.</li>
            <li className="mb-2">Send updates and marketing communications (if consented).</li>
            <li className="mb-2">Comply with legal obligations.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Data Sharing & Disclosure</h2>
          <p className="mb-4">We do not sell your data. However, we may share it with:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Service providers (e.g., hosting, analytics).</li>
            <li className="mb-2">Legal authorities if required by law.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Your Rights</h2>
          <p className="mb-4">Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Access, correct, or delete your data.</li>
            <li className="mb-2">Opt out of marketing emails.</li>
            <li className="mb-2">Request data portability.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">6. Security Measures</h2>
          <p className="mb-4">
            We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">7. Changes to This Policy</h2>
          <p className="mb-4">
            We may update this policy periodically. We will notify you of significant changes via email or a notice on our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">8. Contact Us</h2>
          <p className="mb-4">
            If you have questions, contact us at:
            <br />
            <strong>Email:</strong> privacy@yourcompany.com
            <br />
            <strong>Address:</strong> [Your Company Address]
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
