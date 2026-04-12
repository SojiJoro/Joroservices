import React, { useState } from "react";
import CardGrid from "../component/CardGrid";
import Footer from "../component/Footer";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import SEO from "../component/SEO";
import pagesSEO from "../seo/pagesSEO";
import { organizationSchema, localBusinessSchema, breadcrumbSchema, contactPageSchema } from "../seo/schemas";
import Breadcrumb from "../component/Breadcrumb";

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

  const inputClass = "w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all";

  return (
    <main className="bg-gray-50 min-h-screen text-gray-900">
      <SEO
        {...pagesSEO['/getintouch']}
        dateModified="2026-03-20"
        jsonLd={[
          organizationSchema,
          localBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/getintouch' },
          ]),
          contactPageSchema,
        ]}
      />

      {/* Hero */}
      <section id="hero" className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { name: 'Home', path: '/' },
            { name: 'Contact' },
          ]} />
          <div className="max-w-2xl">
            <p className="text-accent-light font-semibold text-sm uppercase tracking-widest mb-4">Contact</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">Get in Touch</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Tell us about your project and one of our team will be in touch as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="bg-primary rounded-2xl p-7 text-white">
                <h3 className="text-xl font-bold mb-3">Want to discuss a project?</h3>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  Tell us a little about your project and one of our team will be in touch with you as soon as possible.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+4407867374034"
                    className="inline-flex items-center gap-2 text-accent-light hover:text-white font-medium text-sm transition-colors"
                  >
                    <FaPhoneAlt size={12} />
                    07867 374034
                  </a>
                  <a
                    href="https://wa.me/447867374034"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium text-sm transition-colors"
                  >
                    <FaWhatsapp size={14} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-7">
                <h4 className="text-base font-bold text-gray-900 mb-2">General Enquiries</h4>
                <a href="mailto:info@joroservices.org" className="text-accent hover:text-accent-dark text-sm block mb-4 transition-colors">
                  info@joroservices.org
                </a>
                <h4 className="text-base font-bold text-gray-900 mb-2">Support Enquiries</h4>
                <a href="mailto:info@joroservices.org" className="text-accent hover:text-accent-dark text-sm block mb-4 transition-colors">
                  info@joroservices.org
                </a>
                <h4 className="text-base font-bold text-gray-900 mb-2">Interested in joining?</h4>
                <a href="mailto:info@joroservices.org" className="text-accent hover:text-accent-dark text-sm block transition-colors">
                  info@joroservices.org
                </a>
              </div>

              <div className="bg-primary rounded-2xl p-7 text-white">
                <h4 className="text-base font-bold mb-5">What happens next?</h4>
                <div className="flex flex-col gap-4 relative">
                  <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gray-700" />
                  {[
                    'We review what you need and get back to you quickly.',
                    'If needed, we sign an NDA before discussing anything sensitive.',
                    'You get a clear proposal with costs, scope, and timeline.',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-4 relative">
                      <span className="w-[15px] h-[15px] bg-accent rounded-full flex-shrink-0 mt-0.5 relative z-10" />
                      <p className="text-sm text-gray-400 leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 p-7 lg:p-9">
              <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>

              {status === "success" && (
                <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-xl border border-green-200 text-sm">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {status === "error" && (
                <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-xl border border-red-200 text-sm">
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Name <span className="text-red-500">*</span></label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Business Name <span className="text-red-500">*</span></label>
                    <input type="text" name="business" value={formData.business} onChange={handleChange} required className={inputClass} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Business Email <span className="text-red-500">*</span></label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Contact Number <span className="text-red-500">*</span></label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Message <span className="text-red-500">*</span></label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required className={`${inputClass} h-24 resize-none`} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Type of Project <span className="text-red-500">*</span></label>
                    <select name="projectType" value={formData.projectType} onChange={handleChange} required className={inputClass}>
                      <option value="">Select a project type</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="seo">SEO &amp; Marketing</option>
                      <option value="cloud-infrastructure">Cloud &amp; Infrastructure</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="it-support">IT Support &amp; Maintenance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">How did you hear about us <span className="text-red-500">*</span></label>
                    <select name="hearAbout" value={formData.hearAbout} onChange={handleChange} required className={inputClass}>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Tell us about your project <span className="text-red-500">*</span></label>
                  <p className="text-xs text-gray-500 mb-1.5">Include any details that would be beneficial for us to know.</p>
                  <textarea name="details" value={formData.details} onChange={handleChange} required className={`${inputClass} h-24 resize-none`} />
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" name="privacy" checked={formData.privacy} onChange={handleChange} required className="mt-1 w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent" />
                  <label className="text-sm text-gray-600">
                    I agree to the{" "}
                    <Link to="/privacy" className="text-accent hover:text-accent-dark underline">Privacy Policy</Link>
                    {" "}and Data Protection terms.
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-accent hover:bg-accent-dark p-3 rounded-xl text-white font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
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
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Location</p>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Find Us</h3>
          <p className="text-gray-600 text-sm mb-8">
            <strong>Joro Services Ltd</strong> &middot; Kemp House, 152-160 City Road, London, EC1V 2NX
          </p>
          <CardGrid />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
