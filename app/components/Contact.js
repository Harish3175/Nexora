"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
  }

  return (
    <section id="contact" className="bg-white text-black px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
              Get In Touch
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Have a project in mind?
            </h2>

            <p className="text-gray-600 mt-6 max-w-md leading-relaxed">
              Tell us a little about your project and let&apos;s create
              something meaningful together.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full border-b border-gray-300 px-0 py-4 outline-none focus:border-black transition"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full border-b border-gray-300 px-0 py-4 outline-none focus:border-black transition"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Message
              </label>

              <textarea
                id="message"
                rows="5"
                placeholder="Tell us about your project..."
                required
                className="w-full border-b border-gray-300 px-0 py-4 outline-none focus:border-black transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition"
            >
              Send Message ↗
            </button>

            {submitted && (
              <p className="text-sm text-green-600">
                Thanks! Your message has been submitted.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}