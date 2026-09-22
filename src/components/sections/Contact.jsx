import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="px-4 w-full max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          {/* Grid Layout: Stacked on mobile, 2 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Direct Contact Details */}
            <div className="space-y-6 text-white">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Contact Information</h3>
              <p className="text-gray-400">
                Feel free to reach out through the form or directly via the channels below.
              </p>
              
              <div className="space-y-4 pt-4">
                {/* Email Link */}
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500">📧</span>
                  <a href="mailto:likhithsai96@gmail.com" className="hover:text-blue-400 transition">
                    likhithsai96@gmail.com
                  </a>
                </div>

                {/* Phone Link */}
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500">📞</span>
                  <a href="tel:+918985653096" className="hover:text-blue-400 transition">
                    +91 89856 53096
                  </a>
                </div>

                {/* WhatsApp Link */}
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">💬</span>
                  <a 
                    href="https://wa.me" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-green-400 transition font-medium"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Email Form */}
            <form className="space-y-6 bg-white/5 border border-white/10 rounded-xl p-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-500"
                  placeholder="Name..."
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-500"
                  placeholder="example@gmail.com"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-500"
                  placeholder="Your Message..."
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Send Message
              </button>
            </form>
            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
