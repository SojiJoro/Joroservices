import React from 'react';
import Footer from '../component/Footer';

const Privacy = () => {
  return (
    <main className="bg-white text-gray-900 min-h-screen flex flex-col">
      <section id="hero" className="bg-gradient-to-r from-accent-dark to-blue-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg max-w-3xl mx-auto">
          How Joro Services Ltd collects, uses, and protects your personal data.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 space-y-8 flex-1">
        <div>
          <p className="text-sm text-gray-500 mb-6">Last updated: 1 January 2026</p>

          <h2 className="text-2xl font-bold mb-3">1. Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            Joro Services Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a technology services company registered in England and Wales. Our registered office is at Kemp House, 152&ndash;160 City Road, London, EC1V 2NX, United Kingdom. We are committed to protecting your privacy and handling your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">2. Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed mb-3">We may collect the following types of personal information:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Contact details:</strong> Name, email address, phone number, and business name when you submit our contact form or enquire about our services.</li>
            <li><strong>Communication data:</strong> Records of correspondence when you contact us by email, phone, or WhatsApp.</li>
            <li><strong>Technical data:</strong> IP address, browser type, device information, and browsing patterns collected automatically when you visit our website.</li>
            <li><strong>Cookie data:</strong> Information collected through cookies and similar technologies (see Section 7).</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">3. How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed mb-3">We use your personal data for the following purposes:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>To respond to your enquiries and provide quotes for our services</li>
            <li>To deliver and manage the services you have engaged us for</li>
            <li>To send you relevant updates about our services (only with your consent)</li>
            <li>To improve our website and user experience</li>
            <li>To comply with legal and regulatory obligations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">4. Legal Basis for Processing</h2>
          <p className="text-gray-700 leading-relaxed">
            We process your data under the following legal bases: (a) your consent, where you have given clear permission; (b) contractual necessity, where processing is required to fulfil a contract with you; (c) legitimate interests, where processing is necessary for our business operations provided it does not override your rights; and (d) legal obligation, where we are required to process data by law.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">5. Data Sharing</h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell your personal data to third parties. We may share your data with trusted service providers who assist us in operating our business (such as hosting providers and email services), but only where necessary and under appropriate data processing agreements. We may also disclose your data if required to do so by law.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">6. Data Retention</h2>
          <p className="text-gray-700 leading-relaxed">
            We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Contact form submissions are retained for up to 24 months. Project-related data is retained for the duration of the engagement plus 6 years in line with UK statutory requirements.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">7. Cookies</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website uses essential cookies to ensure proper functionality. We may also use analytics cookies to understand how visitors interact with our site. You can manage your cookie preferences through your browser settings. For more information, please see our cookie consent notice displayed when you first visit our website.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">8. Your Rights</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Under the UK GDPR, you have the following rights:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>The right to access your personal data</li>
            <li>The right to rectification of inaccurate data</li>
            <li>The right to erasure (&ldquo;right to be forgotten&rdquo;)</li>
            <li>The right to restrict processing</li>
            <li>The right to data portability</li>
            <li>The right to object to processing</li>
            <li>The right to withdraw consent at any time</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-3">
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:info@joroservices.org" className="text-accent-dark underline">info@joroservices.org</a>.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">9. Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or destruction. These include encrypted data transmission (SSL/TLS), secure hosting, and access controls.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">10. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy or how we handle your data, please contact us:
          </p>
          <div className="mt-3 text-gray-700">
            <p><strong>Joro Services Ltd</strong></p>
            <p>Kemp House, 152&ndash;160 City Road</p>
            <p>London, EC1V 2NX, United Kingdom</p>
            <p className="mt-2">
              Email: <a href="mailto:info@joroservices.org" className="text-accent-dark underline">info@joroservices.org</a>
            </p>
            <p>
              Phone: <a href="tel:+4407345019824" className="text-accent-dark underline">07345 019824</a>
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) if you believe your data has been handled improperly.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Privacy;
