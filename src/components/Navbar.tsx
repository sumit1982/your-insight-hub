import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-consulting-navy">
              EveryStepConsulting
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className="text-consulting-gray hover:text-consulting-blue transition-colors"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 text-consulting-gray hover:text-consulting-blue transition-colors"
              >
                <span>Our Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-consulting-light z-50">
                  <div className="py-2">
                    <Link 
                      to="/services/ai-chatbots"
                      className="block px-4 py-2 text-consulting-gray hover:text-consulting-blue hover:bg-consulting-light transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      AI Chatbots
                    </Link>
                    <Link 
                      to="/services/ai-call-agents"
                      className="block px-4 py-2 text-consulting-gray hover:text-consulting-blue hover:bg-consulting-light transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      AI Call Agents
                    </Link>
                    <Link 
                      to="/services/custom-ai-agents"
                      className="block px-4 py-2 text-consulting-gray hover:text-consulting-blue hover:bg-consulting-light transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Custom AI Agents
                    </Link>
                    <Link 
                      to="/services/ai-agency-services"
                      className="block px-4 py-2 text-consulting-gray hover:text-consulting-blue hover:bg-consulting-light transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      AI Agency Services
                    </Link>
                    <Link 
                      to="/services/private-ai-setup"
                      className="block px-4 py-2 text-consulting-gray hover:text-consulting-blue hover:bg-consulting-light transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Private AI Setup
                    </Link>
                    <Link 
                      to="/services/ai-workflow-automation"
                      className="block px-4 py-2 text-consulting-gray hover:text-consulting-blue hover:bg-consulting-light transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      AI Workflow Automation
                    </Link>
                    <Link 
                      to="/services/ai-ecommerce"
                      className="block px-4 py-2 text-consulting-gray hover:text-consulting-blue hover:bg-consulting-light transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      AI for eCommerce
                    </Link>
                    <Link 
                      to="/services/ai-development-platform"
                      className="block px-4 py-2 text-consulting-gray hover:text-consulting-blue hover:bg-consulting-light transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      AI Development Platform
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => scrollToSection('about')}
              className="text-consulting-gray hover:text-consulting-blue transition-colors"
            >
              About
            </button>
            <Link 
              to="/contact"
              className="text-consulting-gray hover:text-consulting-blue transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-consulting-gray hover:text-consulting-blue"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-consulting-light">
            <div className="space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-consulting-gray hover:text-consulting-blue transition-colors py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-consulting-gray hover:text-consulting-blue transition-colors py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-consulting-gray hover:text-consulting-blue transition-colors py-2"
              >
                About
              </button>
              <Link 
                to="/contact"
                className="block w-full text-left text-consulting-gray hover:text-consulting-blue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button variant="hero" size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;