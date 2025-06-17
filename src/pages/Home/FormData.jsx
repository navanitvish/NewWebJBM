import { useState } from "react";
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("Message sent successfully!");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
<div style={{ background: "linear-gradient(90deg, #040003 0%, #1A141B 100%)" }} className="bg-black  flex items-center justify-center p-4">
      <div className="w-full max-w-7xl  p-8 lg:p-12  border-gray-800 shadow-2xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          
          <p className="text-gray-400 text-4xl font-medium max-w-2xl mx-auto">
           Need to talk anything about?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <div className="space-y-6">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Send us a Message
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-300 hover:border-gray-600"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-300 hover:border-gray-600"
                  />
                </div>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-300 hover:border-gray-600"
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Tell us about your query or feedback..."
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-300 resize-none hover:border-gray-600"
                />
              </div>

              <button
              style={{ 
              fontFamily: "Anton, sans-serif" }}
                type="submit"
                className="w-72  text-2xl bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white  px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-6">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Contact Information
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
              <p className="text-gray-400 mt-4">
                Reach out to us through any of the following methods. We're
                always ready to assist you.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="group flex items-start space-x-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50 hover:border-red-500/30">
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-lg shadow-lg group-hover:shadow-red-500/25 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-2 text-lg">
                    Our Address
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    Gwalior, Madhya Pradesh, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-start space-x-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50 hover:border-red-500/30">
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-lg shadow-lg group-hover:shadow-red-500/25 transition-all duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-2 text-lg">
                    Our Contact Number
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    <a
                      href="tel:+918969292140"
                      className="hover:text-red-400 transition-colors duration-300"
                    >
                      +91 8969292140
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="group flex items-start space-x-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50 hover:border-red-500/30">
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-lg shadow-lg group-hover:shadow-red-500/25 transition-all duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-2 text-lg">
                    Our Mail Address
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    <a
                      href="mailto:jintosh@gmail.com"
                      className="hover:text-red-400 transition-colors duration-300"
                    >
                      jintosh@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

           
          </div>
        </div>

      </div>
    </div>
  );
}
