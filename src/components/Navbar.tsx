import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Use useLayoutEffect for immediate execution before paint
  useLayoutEffect(() => {
    const checkScreenSize = () => {
      const isDesktopSize = window.innerWidth >= 768;
      setIsDesktop(isDesktopSize);
      setIsMounted(true);
    };

    checkScreenSize(); // Check initial size immediately
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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

          {/* Show loading state until mounted */}
          {!isMounted ? (
            <div className="w-6 h-6 animate-pulse bg-consulting-light rounded"></div>
          ) : (
            <>
              {/* Desktop Menu - Force visibility after mount */}
              <div
                className={`navbar-desktop-menu items-center space-x-8 transition-all duration-200 ${
                  isMounted ? (isDesktop ? "flex" : "hidden") : ""
                }`}
              >
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
                        <Link
                          to="/services/ai-chatbots"
                          onClick={() => setIsServicesOpen(false)}
                          className="block w-full text-left px-4 py-2 text-consulting-gray hover:text-consulting-blue hover:bg-consulting-light transition-colors"
                        >
                          AI Chatbots
                        </Link>
                        <Link
                          to="/services/ai-call-agents"
                          onClick={() => setIsServicesOpen(false)}
                          className="block w-full text-left px-4 py-2 text-consulting-gray hover:text-consulting-blue hover:bg-consulting-light transition-colors"
                        >
                          AI Call Agents
                        </Link>
                        <Link
                          to="/services/custom-ai-agents"
                          onClick={() => setIsServicesOpen(false)}
                          className="block w-full text-left px-4 py-2 text-consulting-gray hover:text-consulting-blue hover:bg-consulting-light transition-colors"
                        >
                          Custom AI Agents
                        </Link>
                        <Link
                          to="/services/ai-agency-services"
                          onClick={() => setIsServicesOpen(false)}
                          className="block w-full text-left px-4 py-2 text-consulting-gray hover:text-consulting-blue hover:bg-consulting-light transition-colors"
                        >
                          AI Agency Services
                        </Link>
                        <Link
                          to="/services/private-ai-setup"
                          onClick={() => setIsServicesOpen(false)}
                          className="block w-full text-left px-4 py-2 text-consulting-gray hover:text-consulting-blue hover:bg-consulting-light transition-colors"
                        >
                          Private AI Setup
                        </Link>
                        <Link
                          to="/services/ai-workflow-automation"
                          onClick={() => setIsServicesOpen(false)}
                          className="block w-full text-left px-4 py-2 text-consulting-gray hover:text-consulting-blue hover:bg-consulting-light transition-colors"
                        >
                          AI Workflow Automation
                        </Link>
                        <Link
                          to="/services/ai-ecommerce"
                          onClick={() => setIsServicesOpen(false)}
                          className="block w-full text-left px-4 py-2 text-consulting-gray hover:text-consulting-blue hover:bg-consulting-light transition-colors"
                        >
                          AI for eCommerce
                        </Link>
                        <Link
                          to="/services/ai-development-platform"
                          onClick={() => setIsServicesOpen(false)}
                          className="block w-full text-left px-4 py-2 text-consulting-gray hover:text-consulting-blue hover:bg-consulting-light transition-colors"
                        >
                          AI Development Platform
                        </Link>
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
              <div
                className={`navbar-mobile-btn ${
                  isMounted ? (!isDesktop ? "block" : "hidden") : ""
                }`}
              >
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-consulting-gray hover:text-consulting-blue"
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && isMounted && !isDesktop && (
          <div className="py-4 border-t border-consulting-light">
            <div className="space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left text-consulting-gray hover:text-consulting-blue transition-colors py-2"
              >
                Home
              </button>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex w-full items-center justify-between text-left text-consulting-gray hover:text-consulting-blue transition-colors py-2"
              >
                <span>Our Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileServicesOpen && (
                <div className="pl-4 space-y-1">
                  <Link
                    to="/services/ai-chatbots"
                    className="block w-full text-left text-consulting-gray hover:text-consulting-blue transition-colors py-2"
                    onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}
                  >
                    AI Chatbots
                  </Link>
                  <Link
                    to="/services/ai-call-agents"
                    className="block w-full text-left text-consulting-gray hover:text-consulting-blue transition-colors py-2"
                    onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}
                  >
                    AI Call Agents
                  </Link>
                  <Link
                    to="/services/custom-ai-agents"
                    className="block w-full text-left text-consulting-gray hover:text-consulting-blue transition-colors py-2"
                    onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}
                  >
                    Custom AI Agents
                  </Link>
                  <Link
                    to="/services/ai-agency-services"
                    className="block w-full text-left text-consulting-gray hover:text-consulting-blue transition-colors py-2"
                    onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}
                  >
                    AI Agency Services
                  </Link>
                  <Link
                    to="/services/private-ai-setup"
                    className="block w-full text-left text-consulting-gray hover:text-consulting-blue transition-colors py-2"
                    onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}
                  >
                    Private AI Setup
                  </Link>
                  <Link
                    to="/services/ai-workflow-automation"
                    className="block w-full text-left text-consulting-gray hover:text-consulting-blue transition-colors py-2"
                    onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}
                  >
                    AI Workflow Automation
                  </Link>
                  <Link
                    to="/services/ai-ecommerce"
                    className="block w-full text-left text-consulting-gray hover:text-consulting-blue transition-colors py-2"
                    onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}
                  >
                    AI for eCommerce
                  </Link>
                  <Link
                    to="/services/ai-development-platform"
                    className="block w-full text-left text-consulting-gray hover:text-consulting-blue transition-colors py-2"
                    onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}
                  >
                    AI Development Platform
                  </Link>
                </div>
              )}
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
