import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <section className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <label className="block font-medium mb-1">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full py-[8px]  px-3 text-sm border bg-gray-200 outline-none rounded-xl"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              Business Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full py-[8px]  px-3 text-sm border bg-gray-200 outline-none rounded-xl"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              Business Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              className="w-full py-[8px]  px-3 text-sm border bg-gray-200 outline-none rounded-xl"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full py-[8px]  px-3 text-sm border bg-gray-200 outline-none rounded-xl"
            />
          </div>

          <div className="relative">
            <label className="block font-medium mb-1">
              Type of Project <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                required
                className="w-full py-[8px]  px-3  pr-10 border bg-gray-200 outline-none text-sm rounded-xl appearance-none"
              >
                <option value="">Select a project type</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-app">Mobile App Development</option>
                <option value="ui-ux">UI/UX Design</option>
                <option value="seo">SEO & Marketing</option>
                <option value="other">Other</option>
              </select>
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                ▼
              </span>
            </div>
          </div>
          <div>
            <label className="block font-medium mb-1">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              className="w-full py-[8px]  px-3 text-sm border bg-gray-200 outline-none rounded-xl h-32"
            ></textarea>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" required className="mt-1" />
            <label className="text-sm text-gray-700">
              I agree to the{" "}
              <a href="#" className="text-blue-600 underline">
                Privacy Policy
              </a>{" "}
              and Data Protection terms.
            </label>
          </div>
          <button
            type="submit"
            className="w-full before:bg-accent hover:bg-accent-dark p-3 rounded-xl bg-accent text-white transition duration-300 ease-in-out font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send Message
          </button>
        </section>
      </form>
    </div>
  );
};

export default ContactForm;
