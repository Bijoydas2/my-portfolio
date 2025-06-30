import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaFacebook,
  FaWhatsapp,
  FaGithub
} from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gs6314t",
        "template_xyz123",
        formRef.current,
        "user_abc456"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message! " + error.text);
        }
      );
  };

  return (
    <section id="contact" className="w-11/12 max-w-7xl mx-auto py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">Contact</h2>

      <div className="grid md:grid-cols-2 gap-8 border border-indigo-200 rounded-xl p-8 shadow-lg">
        {/* Contact Info */}
        <div className="bg-indigo-100 border border-indigo-300 rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-700">Contact Information</h3>

            <div className="flex items-center gap-3 mb-3 text-indigo-700">
              <FaEnvelope className="text-indigo-600" />
              <a href="mailto:bijoydas5680@gmail.com" className="hover:underline">
                bijoydas5680@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 mb-3 text-indigo-700">
              <FaPhoneAlt className="text-indigo-600" />
              <a href="tel:+8801704689521" className="hover:underline">
                +8801704689521
              </a>
            </div>

            <div className="flex items-center gap-3 mb-6 text-indigo-700">
              <FaMapMarkerAlt className="text-indigo-600" />
              <p>Moulvibazar, Sylhet</p>
            </div>
          </div>

        

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-indigo-700">Connect with me</h4>
            <div className="flex gap-4 text-indigo-600 text-xl">
              <a
                href="https://www.facebook.com/bijoy.d.l.2024"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-800 transition flex items-center gap-1"
              >
                <FaFacebook />
                <span className="text-sm hidden sm:inline">Facebook</span>
              </a>
              <a
                href="https://wa.me/8801704689521"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-800 transition flex items-center gap-1"
              >
                <FaWhatsapp />
                <span className="text-sm hidden sm:inline">WhatsApp</span>
              </a>
              <a
                href="https://github.com/Bijoydas2"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-800 transition flex items-center gap-1"
              >
                <FaGithub />
                <span className="text-sm hidden sm:inline">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-indigo-100 border border-indigo-300 rounded-lg p-6 flex flex-col gap-4"
        >
          <div className="flex items-center gap-3">
            <FaUser className="text-indigo-600" />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="flex-1 p-3 border border-indigo-200 rounded focus:outline-none focus:ring-2 focus:ring-indigo-300 text-indigo-600"
              required
            />
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-indigo-600" />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="flex-1 p-3 border border-indigo-200 rounded focus:outline-none focus:ring-2 focus:ring-indigo-300 text-indigo-600"
              required
            />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="p-3 border border-indigo-200 rounded focus:outline-none focus:ring-2 focus:ring-indigo-300 text-indigo-600"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded font-semibold transition duration-300"
          >
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
