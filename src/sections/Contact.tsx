import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const initialFormData: FormData = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData(initialFormData);
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === contactRef.current) {
              entry.target.classList.add('opacity-100', 'translate-y-0');
            }
            if (entry.target === formRef.current) {
              entry.target.classList.add('opacity-100', 'translate-y-0');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) observer.observe(contactRef.current);
    if (formRef.current) observer.observe(formRef.current);

    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Get In Touch</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Ready to preserve your precious memories in a beautiful album? Let's discuss your project.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div 
            ref={contactRef}
            className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg opacity-0 -translate-y-8 transition-all duration-700 ease-out"
          >
            <h3 className="font-serif text-2xl font-bold mb-6 text-slate-900 dark:text-white">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-amber-600 dark:text-amber-500" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-1">Email</h4>
                  <a href="mailto:hello@photofolio.com" className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">
                    hello@photofolio.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-amber-600 dark:text-amber-500" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-1">Phone</h4>
                  <a href="tel:+15551234567" className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">
                    (555) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-amber-600 dark:text-amber-500" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-1">Studio Location</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    123 Photography Lane<br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-lg border border-amber-100 dark:border-amber-900/20">
              <h4 className="font-serif text-lg font-medium mb-3 text-slate-900 dark:text-white">Business Hours</h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300"
          >
            <h3 className="font-serif text-2xl font-bold mb-6 text-slate-900 dark:text-white">Send a Message</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none dark:bg-slate-800 dark:border-slate-700 dark:text-white ${
                    errors.name 
                      ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-800' 
                      : 'border-slate-300 focus:ring-amber-200 dark:focus:ring-amber-800 focus:border-amber-500 dark:focus:border-amber-500'
                  }`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none dark:bg-slate-800 dark:border-slate-700 dark:text-white ${
                    errors.email 
                      ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-800' 
                      : 'border-slate-300 focus:ring-amber-200 dark:focus:ring-amber-800 focus:border-amber-500 dark:focus:border-amber-500'
                  }`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-200 dark:focus:ring-amber-800 focus:outline-none focus:border-amber-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:focus:border-amber-500"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-200 dark:focus:ring-amber-800 focus:outline-none focus:border-amber-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:focus:border-amber-500"
                >
                  <option value="">Select a service</option>
                  <option value="wedding">Wedding Album</option>
                  <option value="family">Family Album</option>
                  <option value="travel">Travel Album</option>
                  <option value="baby">Baby's First Year</option>
                  <option value="anniversary">Anniversary Album</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none dark:bg-slate-800 dark:border-slate-700 dark:text-white ${
                  errors.message 
                    ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-800' 
                    : 'border-slate-300 focus:ring-amber-200 dark:focus:ring-amber-800 focus:border-amber-500 dark:focus:border-amber-500'
                }`}
                placeholder="Tell me about your project and what you're looking for..."
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full px-6 py-3 rounded-md text-white font-medium flex items-center justify-center transition-all ${
                isSubmitted
                  ? 'bg-green-600'
                  : isSubmitting
                  ? 'bg-amber-400 cursor-wait'
                  : 'bg-amber-600 hover:bg-amber-700 shadow-md hover:shadow-lg'
              }`}
            >
              {isSubmitted ? (
                'Message Sent!'
              ) : isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;