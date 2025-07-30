import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-consulting.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional consulting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-consulting-navy/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transform Your Business
          <span className="block text-transparent bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text">
            With Expert Consulting
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
          We deliver strategic insights and practical solutions that drive growth, 
          optimize operations, and unlock your organization's full potential.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Get Started Today
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/20 text-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-blue-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">500+</div>
            <div className="text-sm">Clients Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">15+</div>
            <div className="text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">98%</div>
            <div className="text-sm">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;