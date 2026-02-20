import React from 'react';
import Footer from '../component/Footer';

const Terms = () => {
  return (
    <main className="bg-white text-gray-900 min-h-screen flex flex-col">
      <section id="hero" className="bg-gradient-to-r from-accent-dark to-blue-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Please read these terms carefully before using our services.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 space-y-8 flex-1">
        <p className="text-sm text-gray-500 mb-6">Last updated: 1 January 2026</p>

        <div>
          <h2 className="text-2xl font-bold mb-3">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the website and services provided by Joro Services Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), a company registered in England and Wales with its registered office at Kemp House, 152&ndash;160 City Road, London, EC1V 2NX, United Kingdom. By accessing our website or engaging our services, you agree to be bound by these Terms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">2. Services</h2>
          <p className="text-gray-700 leading-relaxed">
            Joro Services Ltd provides technology consulting, software development, digital marketing, creative design, IT support, cybersecurity, and cloud infrastructure services. The specific scope, deliverables, and timeline of any engagement will be outlined in a separate project proposal or statement of work agreed between both parties.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">3. Engagement Process</h2>
          <p className="text-gray-700 leading-relaxed">
            Upon receiving your enquiry, we will review your requirements and arrange a consultation. If both parties agree to proceed, we will provide a formal proposal outlining the project scope, estimated costs, and timeline. Work will commence only after written acceptance of the proposal. Where appropriate, a Non-Disclosure Agreement (NDA) will be provided before any confidential information is exchanged.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">4. Payment Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            Payment terms will be set out in the project proposal. Unless otherwise agreed, invoices are payable within 30 days of issue. We reserve the right to suspend work if invoices remain unpaid beyond the agreed period. All prices are quoted in GBP and are exclusive of VAT unless stated otherwise.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">5. Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            Upon full payment, all intellectual property rights in the deliverables created specifically for your project will be transferred to you, unless otherwise stated in the project agreement. We retain the right to use generic, non-client-specific code, frameworks, and methodologies across other projects. We may also reference completed projects in our portfolio, with your prior consent.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">6. Client Responsibilities</h2>
          <p className="text-gray-700 leading-relaxed">
            You agree to provide timely access to information, materials, and approvals necessary for us to deliver the agreed services. Delays caused by late provision of materials or approvals may result in revised timelines and additional costs, which will be communicated in advance.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">7. Confidentiality</h2>
          <p className="text-gray-700 leading-relaxed">
            Both parties agree to keep confidential any proprietary or sensitive information shared during the engagement. This obligation survives the termination of any agreement between the parties and remains in effect for a period of two years thereafter.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">8. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            To the maximum extent permitted by law, Joro Services Ltd shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website. Our total liability for any claim shall not exceed the total fees paid by you for the specific service giving rise to the claim.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">9. Termination</h2>
          <p className="text-gray-700 leading-relaxed">
            Either party may terminate an engagement by providing 30 days written notice. In the event of termination, you will be liable for payment for all work completed up to the date of termination. We reserve the right to terminate immediately if payment obligations are not met.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">10. Website Use</h2>
          <p className="text-gray-700 leading-relaxed">
            The content on this website is provided for general information purposes only. While we endeavour to keep the information up to date and accurate, we make no warranties about the completeness, reliability, or suitability of the information. You may not reproduce, distribute, or use any content from this website without our prior written consent.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">11. Governing Law</h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">12. Contact</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about these Terms, please contact us:
          </p>
          <div className="mt-3 text-gray-700">
            <p><strong>Joro Services Ltd</strong></p>
            <p>Kemp House, 152&ndash;160 City Road, London, EC1V 2NX</p>
            <p className="mt-2">
              Email: <a href="mailto:info@joroservices.org" className="text-accent-dark underline">info@joroservices.org</a>
            </p>
            <p>
              Phone: <a href="tel:+4407345019824" className="text-accent-dark underline">07345 019824</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Terms;
