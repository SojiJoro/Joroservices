import React from "react";
import CardGrid from "../component/CardGrid";
import Footer from "../component/Footer";
import LinkBtn from "../component/socialLinkBtn";

const Contact = () => {
  return (
    <main className="bg-gray-100 flex flex-col items-center justify-center pt-40 min-h-screen w-screen text-gray-900">
      <div className="container">
        {/* First Section */}
        <section className="mb-12">
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
              </div>

              <div className="bg-[#664b25] backdrop-blur-[10px] p-6 flex flex-col justify-around rounded-2xl shadow-md flex-1 min-w-[200px]">
                <div>
                  <h6 className="text-xl font-semibold text-white">General Enquiries</h6>
                  <p className="text-lg underline text-white mb-2">
                    info@joroservices.org
                  </p>
                </div>
                <div>
                  <h6 className="text-xl font-semibold text-white">Support Enquiries</h6>
                  <p className="text-lg underline text-white mb-2">
                    enquiry@joroservices.org
                  </p>
                </div>
                <div>
                  <h6 className="text-xl font-semibold text-white">Interested in joining the team?</h6>
                  <p className="text-lg underline text-white mb-2">
                    careers@joroservices.org
                  </p>
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
              <form className="space-y-4">
                <div>
                  <label className="block font-medium mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" required className="w-full p-3 bg-white border rounded-xl" />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Business Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" required className="w-full p-3 border bg-white rounded-xl" />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input type="email" required className="w-full p-3 border bg-white rounded-xl" />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input type="number" required className="w-full p-3 border bg-white rounded-xl" />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea required className="w-full p-3 border bg-white rounded-xl h-32"></textarea>
                </div>
                <div className="relative">
                  <label className="block font-medium mb-1">
                    Type of Project <span className="text-red-500">*</span>
                  </label>
                  <select required className="w-full p-3 pr-10 border rounded-xl appearance-none">
                    <option value="">Select a project type</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="seo">SEO & Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="block font-medium mb-1">
                    How did you hear about us <span className="text-red-500">*</span>
                  </label>
                  <select required className="w-full p-3 pr-10 border rounded-xl appearance-none">
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
                  <textarea required className="w-full p-3 border rounded-xl h-32"></textarea>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" required className="mt-1" />
                  <label className="text-sm text-gray-700">
                    I agree to the <a href="#" className="text-blue-600 underline">Privacy Policy</a> and Data Protection terms.
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full before:bg-accent hover:bg-accent-dark p-3 rounded-xl bg-accent text-white transition duration-300 ease-in-out font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Message
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
