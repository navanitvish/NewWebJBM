import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Message sent successfully!');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className=" bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-7xl bg-black rounded-lg p-8">
        <h2 className="text-white text-2xl font-semibold text-center mb-8">
          Need to talk anything about?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div>
            <div onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message..."
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors resize-none"
                />
              </div>
              
              <button
                onClick={handleSubmit}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </div>
          
          {/* Contact Info Section */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-red-500 p-3 rounded">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Our Address</h3>
                <p className="text-gray-400">
                  Gwalior, Madhya Pradesh, India
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-red-500 p-3 rounded">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Our Contact Number</h3>
                <p className="text-gray-400">
                  +91 8969292140
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-red-500 p-3 rounded">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Our Mail Address</h3>
                <p className="text-gray-400">
                  jintosh@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">JBIM Matha game</p>
        </div>
      </div>
    </div>
  );
}