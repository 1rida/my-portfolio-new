import React from "react";
import { Mail, Phone } from "lucide-react";
import Header from "@/components/Header";

const Contact = () => {
  return (
    <section className="py-20 bg-black from-gray-100 via-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <Header />
        <div className="text-center">
        <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 ease-in-out">
            Contact Me
          </span>          <p className="text-lg text-white mb-12">I'd love to hear from you! Whether you have a question or just want to say hi.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-10 shadow-2xl rounded-3xl border border-gray-200">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="relative">
                <label htmlFor="name" className="text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-4 mt-2 bg-gray-50 rounded-xl border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-400"
                  placeholder="Enter your name"
                />
              </div>
              <div className="relative">
                <label htmlFor="email" className="text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-4 mt-2 bg-gray-50 rounded-xl border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-400"
                  placeholder="Enter your email"
                />
              </div>
              <div className="relative">
                <label htmlFor="message" className="text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-4 mt-2 bg-gray-50 rounded-xl border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-400"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-600 text-white p-10 shadow-2xl rounded-3xl flex flex-col justify-center items-center space-y-8">
            <h3 className="text-3xl font-semibold mb-6">Reach Out</h3>
            <p className="text-lg mb-4 text-center">Feel free to get in touch with me via WhatsApp or Email. I'm always open to new opportunities and collaborations!</p>
            <div className="space-y-6 text-lg">
              {/* WhatsApp */}
              <div className="flex items-center space-x-4">
                <Phone className="w-8 h-8 text-white" />
                <a
                  href="https://wa.me/03131040410"
                  className="hover:underline hover:text-gray-200"
                >
                  +92 313 1040410
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <Mail className="w-8 h-8 text-white" />
                <a
                  href="mailto:ridarasheed58@gmail.com"
                  className="hover:underline hover:text-gray-200"
                >
                  ridarasheed58@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
