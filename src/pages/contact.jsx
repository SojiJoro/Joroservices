import React, { useState } from "react";
import CardGrid from "../component/CardGrid";
import Footer from "../component/Footer";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

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
    <main className="bg-gray-100 flex flex-col items-center justify-center pt-40 min-h-screen w-screen text-gray-900">
      <div className="container">
        {/* First Section */}
        <section id="hero" className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* First Column */}
            <div className="flex flex-col justify-between gap-1 w-full lg:w-1/2">
              <div className="bg-[#25221d] backdrop-blur-[10px] p-6 flex flex-col gap-3 rounded-2xl shadow-md flex-1 min-w-[200px]">
                <h3 className="text-4xl lg:text-5xl mb-8 font-bold text-white">
                  Want to discuss a project?
                </h3>
                <p className="text-lg mt-4 text-gray-50">
                  Tell us a little about your project and one of our team will
                  be in touch with you as soon as possible.
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href="tel:+4407345019824"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-medium"
                  >
                    <FaPhoneAlt />
                    07345 019824
                  </a>
                  <a
                    href="https://wa.me/447345019824"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium"
                  >
                    <FaWhatsapp className="text-xl" />
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>

              <div className="bg-[#664b25] backdrop-blur-[10px] p-6 flex flex-col justify-around rounded-2xl shadow-md flex-1 min-w-[200px]">
                <div>
                  <h6 className="text-xl font-semibold text-white">General Enquiries</h6>
                  <a href="mailto:info@joroservices.org" className="text-lg underline text-white mb-2 block hover:text-accent">
                    info@joroservices.org
                  </a>
                </div>
                <div>
                  <h6 className="text-xl font-semibold text-white">Support Enquiries</h6>
                  <a href="mailto:enquiry@joroservices.org" className="text-lg underline text-white mb-2 block hover:text-accent">
                    enquiry@joroservices.org
                  </a>
                </div>
                <div>
                  <h6 className="text-xl font-semibold text-white">Interested in joining the team?</h6>
                  <a href="mailto:careers@joroservices.org" className="text-lg underline text-white mb-2 block hover:text-accent">
                    careers@joroservices.org
                  </a>
                </div>
              </div>

              <div className="bg-[#1e1e1e] backdrop-blur-[10px] p-6 flex flex-col justify-around rounded-2xl shadow-md flex-1 min-w-[200px]">
                <h4 className="text-3xl lg:text-4xl mb-8 font-bold text-white">
                  What happens next?
                </h4>
                <div className="flex flex-col gap-4 p-2 relative">
                  <div className="absolute left-3 top-0 h-full w-0.5 bg-gray-400"></div>
                  <p className="text-sm md:text-base text-gray-50 relative pl-6">
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-400 rounded-full"></span>
                    An expert contacts you after thoroughly reviewing your requirements.
                  </p>
                  <p className="text-sm md:text-base text-gray-50 relative pl-6">
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-400 rounded-full"></span>
                    If necessary, we provide you with a Non-Disclosure Agreement (NDA) and initiate the Discovery phase.
                  </p>
                  <p className="text-sm md:text-base text-gray-50 relative pl-6">
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-400 rounded-full"></span>
                    We provide a project proposal, including estimates, scope analysis, and timeline.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Column - Contact Form */}
            <div className="p-8 rounded-2xl shadow-lg w-full lg:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

              {status === "success" && (
                <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-xl">
                  Thank you! Your message has been sent successfully. We will get back to you shortly.
                </div>
              )}
              {status === "error" && (
                <div className="mb-4 p-4 bg-red-100 text-red-800 rounded-xl">
                  Something went wrong. Please try again or contact us directly at info@joroservices.org.
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block font-medium mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-white border rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Business Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border bg-white rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border bg-white rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border bg-white rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border bg-white rounded-xl h-32"
                  ></textarea>
                </div>
                <div className="relative">
                  <label className="block font-medium mb-1">
                    Type of Project <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full p-3 pr-10 border rounded-xl appearance-none"
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
                <div className="relative">
                  <label className="block font-medium mb-1">
                    How did you hear about us <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleChange}
                    required
                    className="w-full p-3 pr-10 border rounded-xl appearance-none"
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
                <div>
                  <label className="block font-medium mb-1">
                    Tell us about your project <span className="text-red-500">*</span>
                  </label>
                  <p className="text-sm text-gray-500 mb-2">
                    Please include any details that would be beneficial for us to know.
                  </p>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-xl h-32"
                  ></textarea>
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                  <label className="text-sm text-gray-700">
                    I agree to the{" "}
                    <Link to="/privacy" className="text-blue-600 underline">
                      Privacy Policy
                    </Link>{" "}
                    and Data Protection terms.
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full before:bg-accent hover:bg-accent-dark p-3 rounded-xl bg-accent text-white transition duration-300 ease-in-out font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      <div className="container">
        <section className="mb-12">
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-5xl mb-8">Find Us</h3>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Joro Services Ltd</strong><br />
              Kemp House, 152–160 City Road<br />
              London, EC1V 2NX<br />
              United Kingdom
            </p>
            <CardGrid />
          </div>
        </section>
      </div>

      <div className="bg-slate-950 w-full rounded-t-2xl p-10">
        <section className="mb-12">
          <footer>
            <Footer />
          </footer>
        </section>
      </div>
    </main>
  );
};

export default Contact;
