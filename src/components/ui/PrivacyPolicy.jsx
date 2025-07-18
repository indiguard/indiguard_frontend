import React from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import Footer from '../../components/ui/Footer';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 md:pt-20">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <Breadcrumb />
        </div>

        {/* Privacy Policy Content */}
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="max-w-4xl mx-auto bg-surface rounded-xl shadow-sm p-6 sm:p-8 md:p-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Privacy Policy
            </h1>
            
            <p className="text-sm text-text-secondary mb-6 italic">
              Last Updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
            
            <div className="prose prose-sm sm:prose max-w-none text-text-secondary">
              <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-heading font-semibold text-primary mb-4">
                  1. Introduction
                </h2>
                <p className="mb-4">
                  IndiGuard Security Limited ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our services or visit our website.
                </p>
                <p>
                  We comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-heading font-semibold text-primary mb-4">
                  2. Information We Collect
                </h2>
                <p className="mb-4">We may collect the following types of information:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li><strong>Personal Identification:</strong> Name, email address, phone number, postal address</li>
                  <li><strong>Business Information:</strong> Company name, job title, business contact details</li>
                  <li><strong>Service Data:</strong> Security service requirements, site details, access information</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, operating system, website usage data</li>
                  <li><strong>Employment Data:</strong> For job applicants (CVs, qualifications, references)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-heading font-semibold text-primary mb-4">
                  3. How We Use Your Information
                </h2>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>To provide and maintain our security services</li>
                  <li>To communicate with you about our services</li>
                  <li>To process employment applications</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal obligations and security industry regulations</li>
                  <li>To protect against fraudulent or unauthorized activity</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-heading font-semibold text-primary mb-4">
                  4. Legal Basis for Processing
                </h2>
                <p className="mb-4">We process your personal data on the following legal bases:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li><strong>Contractual necessity:</strong> When processing is necessary for the performance of a contract</li>
                  <li><strong>Legal obligation:</strong> When we need to comply with legal requirements</li>
                  <li><strong>Legitimate interests:</strong> For our legitimate business interests, provided your rights don't override these</li>
                  <li><strong>Consent:</strong> Where you have given clear consent for specific purposes</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-heading font-semibold text-primary mb-4">
                  5. Data Sharing and Disclosure
                </h2>
                <p className="mb-4">We may share your information with:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Subcontractors and security personnel (only as necessary for service provision)</li>
                  <li>Regulatory authorities when legally required</li>
                  <li>Professional advisors (lawyers, accountants)</li>
                  <li>Emergency services in critical situations</li>
                </ul>
                <p>
                  We never sell your personal data to third parties.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-heading font-semibold text-primary mb-4">
                  6. Data Security
                </h2>
                <p className="mb-4">
                  We implement appropriate technical and organizational measures to protect your personal data, including:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Encryption of sensitive data</li>
                  <li>Secure access controls to our systems</li>
                  <li>Regular security audits</li>
                  <li>Staff training on data protection</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-heading font-semibold text-primary mb-4">
                  7. Your Rights Under UK GDPR
                </h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data (subject to legal requirements)</li>
                  <li>Restrict or object to processing</li>
                  <li>Data portability (where applicable)</li>
                  <li>Withdraw consent (where processing is based on consent)</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the details below.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-heading font-semibold text-primary mb-4">
                  8. Data Retention
                </h2>
                <p className="mb-4">
                  We retain personal data only for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typical retention periods include:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Client data: 7 years after contract termination (for tax and legal compliance)</li>
                  <li>Employee records: 6 years after employment ends</li>
                  <li>Job applicant data: 12 months unless consent is given to keep longer</li>
                  <li>Website analytics: 26 months</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-heading font-semibold text-primary mb-4">
                  9. Cookies and Tracking Technologies
                </h2>
                <p className="mb-4">
                  Our website uses cookies to distinguish you from other users and improve your browsing experience. You can set your browser to refuse all or some browser cookies, but this may affect website functionality.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-heading font-semibold text-primary mb-4">
                  10. Changes to This Policy
                </h2>
                <p className="mb-4">
                  We may update this Privacy Policy periodically. The "Last Updated" date at the top indicates when revisions were made. We encourage you to review this policy regularly.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-heading font-semibold text-primary mb-4">
                  11. Contact Us
                </h2>
                <p className="mb-2">
                  If you have any questions about this Privacy Policy or our data practices:
                </p>
                <ul className="space-y-1">
                  <li>Email: <a href="mailto:info.indiguard@gmail.com" className="text-primary hover:underline">info.indiguard@gmail.com</a></li>
                  <li>Phone: (074) 3898-2366</li>
                </ul>
                <p className="mt-4">
                  You also have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) if you believe your data rights have been violated.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;