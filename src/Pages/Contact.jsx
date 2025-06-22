import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import AOS from "aos";
import "aos/dist/aos.css";


export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
   window.scrollTo(0,0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_fqewps9",       // replace
        "template_3jnohib",      // replace
        form.current,
        "3gNhZ6nOX09Uoef5x"      // replace
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully! ✅");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("Failed to send. Please try again. ❌");
        }
      );
  };

  return (
    
    <div className="min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-4 py-10">
      <div
        className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-10 w-full max-w-5xl"
        data-aos="zoom-in"
      >
        <h2 className="text-4xl font-bold text-white text-center mb-10" data-aos="fade-down">
          Get in Touch with <span className="text-red-400">Nexte</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info Section */}
          <div className="text-white space-y-6" data-aos="fade-right">
            <div>
              <h3 className="text-2xl font-semibold">Contact Info</h3>
              <p className="text-gray-300">
                Have a question or need support? We're here to help you with your electronics journey.
              </p>
            </div>
            <div>
              <p><strong>📍 Address:</strong> 123 Tech Lane, Kolkata, India</p>
              <p><strong>📧 Email:</strong> support@Nexte.com</p>
              <p><strong>📞 Phone:</strong> +91 9917702550</p>
            </div>
          </div>

          {/* Form Section */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6" data-aos="fade-left">
            <div>
              <label className="block text-white mb-1">Your Name</label>
              <input type="text" name="from_name" required placeholder="John Doe" className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-white mb-1">Email Address</label>
              <input type="email" name="from_email" required placeholder="john@example.com" className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-white mb-1">Your Message</label>
              <textarea name="message" rows="4" required placeholder="Type your message..." className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-red-500 to-purple-500 text-white font-semibold py-2 rounded-xl hover:opacity-90 transition-all duration-300">
              Send Message 🚀
            </button>
            {status && <p className="text-sm text-white text-center mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};
