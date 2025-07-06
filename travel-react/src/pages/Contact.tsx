import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setSubmitMessage('Thank you for your message. We will get back to you soon!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
        setSubmitStatus('');
      }, 5000);
    }, 1500);
  };

  return (
    <div>
      {/* Banner */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Contact <span className="text-secondary">Us</span></h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              We'd love to hear from you. Get in touch with us for any questions or inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6290413.804893654!2d-93.99620524741552!3d39.66116578737809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b2d386f6e2619%3A0x7f15825064115956!2sIllinois%2C+USA!5e0!3m2!1sen!2sin!4v1469954001005" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-gray-600">
              World's leading tour and travels booking website, over 30,000 packages worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4">The <span className="text-primary">Travel</span></h3>
                <p className="text-gray-600 mb-4">
                  We provide outsourced software development services to over 50 clients from 21 countries.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h4 className="text-lg font-bold mb-4 flex items-center">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary mr-2" />
                  Address
                </h4>
                <p className="text-gray-600">
                  28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.
                  <br />
                  Landmark: Next To Airport
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h4 className="text-lg font-bold mb-4 flex items-center">
                  <FontAwesomeIcon icon={faPhone} className="text-primary mr-2" />
                  Contact Info
                </h4>
                <p className="text-gray-600">
                  <a href="tel:01234874965478" className="hover:text-primary">Phone: 01 234874 965478</a>
                  <br />
                  <a href="tel:01654874965478" className="hover:text-primary">Mobile: 01 654874 965478</a>
                  <br />
                  <a href="mailto:info@company.com" className="hover:text-primary">Email: info@company.com</a>
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold mb-4 flex items-center">
                  <FontAwesomeIcon icon={faGlobe} className="text-primary mr-2" />
                  Website
                </h4>
                <p className="text-gray-600">
                  <a href="https://www.mycompany.com" className="hover:text-primary">Website: www.mycompany.com</a>
                  <br />
                  <a href="https://www.facebook.com/my" className="hover:text-primary">Facebook: www.facebook/my</a>
                  <br />
                  <a href="https://www.blog.mycompany.com" className="hover:text-primary">Blog: www.blog.mycompany.com</a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                
                {submitMessage && (
                  <div className={`p-4 mb-6 rounded-md ${submitStatus === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {submitMessage}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Your Email *
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Your Message *
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="bg-primary text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-all disabled:opacity-70"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;