import React from 'react';
import { Camera, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="h-6 w-6 text-amber-500" />
              <span className="font-serif font-bold text-xl">PhotoFolio</span>
            </div>
            <p className="text-slate-400 mb-4">
              Creating beautiful, custom photo albums to preserve your precious memories for generations to come.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate-400 hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-amber-500 transition-colors">About Me</a></li>
              <li><a href="#gallery" className="text-slate-400 hover:text-amber-500 transition-colors">Portfolio</a></li>
              <li><a href="#process" className="text-slate-400 hover:text-amber-500 transition-colors">Order Process</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Contact Info</h3>
            <address className="not-italic text-slate-400">
              <p className="mb-2">123 Photography Lane</p>
              <p className="mb-2">San Francisco, CA 94103</p>
              <p className="mb-2">Phone: (555) 123-4567</p>
              <p className="mb-2">Email: hello@photofolio.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} PhotoFolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;