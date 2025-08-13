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
          <span className="text-transparent bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text">
            everystepconsulting
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
          From payroll and IT consulting to talent acquisition, we provide comprehensive 
          business solutions that streamline operations and drive growth.
        </p>
        
        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-blue-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">5+</div>
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