import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-secondary rounded-md flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg">N</span>
              </div>
              <span className="text-2xl font-bold">nbit technology</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Leading technology solutions provider, delivering innovative software and hardware solutions 
              to businesses worldwide. We transform ideas into reality through cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@nbit-tech.com</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Products</Link></li>
              <li><Link to="/partners" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Partners</Link></li>
              <li><Link to="/career" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Career</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-foreground/80 text-sm">
            © 2024 nbit technology. All rights reserved.
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;