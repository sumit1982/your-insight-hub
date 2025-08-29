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
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
    setIsServicesOpen(false);
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
            <button
              onClick={() => scrollToSection("home")}
              className="text-consulting-gray hover:text-consulting-blue transition-colors"
            >
              Home
            </button>

            {/* Our Services Dropdown */}
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
                    <button
                      onClick={() => scrollToSection("services")}
                      className="block w-full text-left px-4 py-2 text-consulting-gray hover:text-consulting-blue hover:bg-consulting-light transition-colors"
                    >
                      AI Chatbots
                    </button>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="block w-full text-left px-4 py-2 text-consulting-gray hover:text-consulting-blue hover:bg-consulting-light transition-colors"
                    >
                      AI Call Agents
                    </button>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="block w-full text-left px-4 py-2 text-consulting-gray hover:text-consulting-blue hover:bg-consulting-light transition-colors"
                    >
                      Custom AI Agents
                    </button>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="block w-full text-left px-4 py-2 text-consulting-gray hover:text-consulting-blue hover:bg-consulting-light transition-colors"
                    >
                      AI Agency Services
                    </button>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="block w-full text-left px-4 py-2 text-consulting-gray hover:text-consulting-blue hover:bg-consulting-light transition-colors"
                    >
                      Private AI Setup
                    </button>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="block w-full text-left px-4 py-2 text-consulting-gray hover:text-consulting-blue hover:bg-consulting-light transition-colors"
                    >
                      AI Workflow Automation
                    </button>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="block w-full text-left px-4 py-2 text-consulting-gray hover:text-consulting-blue hover:bg-consulting-light transition-colors"
                    >
                      AI for eCommerce
                    </button>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="block w-full text-left px-4 py-2 text-consulting-gray hover:text-consulting-blue hover:bg-consulting-light transition-colors"
                    >
                      AI Development Platform
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("about")}
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
                onClick={() => scrollToSection("home")}
                className="block w-full text-left text-consulting-gray hover:text-consulting-blue transition-colors py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left text-consulting-gray hover:text-consulting-blue transition-colors py-2"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
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
