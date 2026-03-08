import React, { useState } from "react";
import CardGrid from "../component/CardGrid";
import Footer from "../component/Footer";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import SEO from "../component/SEO";
import pagesSEO from "../seo/pagesSEO";
import { organizationSchema, breadcrumbSchema } from "../seo/schemas";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    message: "",
    projectType: "",
    hearAbout: "",
    details: "",
    privacy: false,
  });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          business: "",
          email: "",
          phone: "",
          message: "",
          projectType: "",
          hearAbout: "",
          details: "",
          privacy: false,
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen text-gray-900">
      <SEO
        {...pagesSEO['/getintouch']}
        jsonLd={[
          organizationSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/getintouch' },
          ]),
        ]}
      />

      {/* Hero */}
      <section id="hero" className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tell us about your project and one of our team will be in touch as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Column - Info Cards */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="bg-primary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Want to discuss a project?
                </h3>
                <p className="text-gray-400 mb-6">
                  Tell us a little about your project and one of our team will
                  be in touch with you as soon as possible.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+4407867374034"
                    className="inline-flex items-center gap-2 text-accent-light hover:text-white font-medium transition-colors"
                  >
                    <FaPhoneAlt />
                    07867 374034
                  </a>
                  <a
                    href="https://wa.me/447867374034"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium transition-colors"
                  >
                    <FaWhatsapp className="text-xl" />
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h6 className="text-lg font-semibold text-gray-900 mb-2">General Enquiries</h6>
                <a href="mailto:info@joroservices.org" className="text-accent hover:text-accent-dark block mb-5 transition-colors">
                  info@joroservices.org
                </a>
                <h6 className="text-lg font-semibold text-gray-900 mb-2">Support Enquiries</h6>
                <a href="mailto:info@joroservices.org" className="text-accent hover:text-accent-dark block mb-5 transition-colors">
                  info@joroservices.org
                </a>
                <h6 className="text-lg font-semibold text-gray-900 mb-2">Interested in joining?</h6>
                <a href="mailto:info@joroservices.org" className="text-accent hover:text-accent-dark block transition-colors">
                  info@joroservices.org
                </a>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-6">
                  What happens next?
                </h4>
                <div className="flex flex-col gap-4 relative">
                  <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gray-600" />
                  {[
                    'An expert contacts you after thoroughly reviewing your requirements.',
                    'If necessary, we provide an NDA and initiate the Discovery phase.',
                    'We provide a project proposal with estimates, scope, and timeline.',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-4 relative">
                      <span className="w-[15px] h-[15px] bg-accent rounded-full flex-shrink-0 mt-0.5 relative z-10" />
                      <p className="text-sm text-gray-300 leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 p-8 lg:p-10">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              {status === "success" && (
                <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-xl border border-green-200">
                  Thank you! Your message has been sent successfully. We will get back to you shortly.
                </div>
              )}
              {status === "error" && (
                <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-xl border border-red-200">
                  Something went wrong. Please try again or contact us directly at info@joroservices.org.
                </div>
              )}

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Business Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Type of Project <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    >
                      <option value="">Select a project type</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="seo">SEO & Marketing</option>
                      <option value="cloud-infrastructure">Cloud & Infrastructure</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="it-support">IT Support & Maintenance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      How did you hear about us <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="hearAbout"
                      value={formData.hearAbout}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    >
                      <option value="">Please select</option>
                      <option value="Friend/Colleague">Friend/Colleague</option>
                      <option value="Search Engine">Search Engine</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Printed Material">Printed Material</option>
                      <option value="Radio">Radio</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Tell us about your project <span className="text-red-500">*</span>
                  </label>
                  <p className="text-xs text-gray-500 mb-2">
                    Please include any details that would be beneficial for us to know.
                  </p>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent"
                  />
                  <label className="text-sm text-gray-600">
                    I agree to the{" "}
                    <Link to="/privacy" className="text-accent hover:text-accent-dark underline">
                      Privacy Policy
                    </Link>{" "}
                    and Data Protection terms.
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-accent hover:bg-accent-dark p-3.5 rounded-xl text-white font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md hover:shadow-accent/20"
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Find Us */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">Find Us</h3>
          <p className="text-gray-600 mb-8">
            <strong>Joro Services Ltd</strong> &middot; Kemp House, 152-160 City Road, London, EC1V 2NX, United Kingdom
          </p>
          <CardGrid />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
