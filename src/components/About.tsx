import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Globe, Users2 } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-consulting-navy mb-6">
              Why Choose Our Consulting Expertise?
            </h2>
            <p className="text-lg text-consulting-gray mb-8 leading-relaxed">
              With over 5 years of experience across diverse industries, we bring proven methodologies 
              and innovative solutions to every engagement. Our team of seasoned consultants has helped 
              hundreds of organizations achieve breakthrough results.
            </p>
            
            <div className="space-y-4">
              {[
                "Proven track record of delivering measurable results",
                "Industry-leading expertise across multiple sectors", 
                "Customized solutions tailored to your specific needs",
                "Ongoing support throughout the implementation process"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-consulting-blue mt-0.5 flex-shrink-0" />
                  <span className="text-consulting-gray">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-consulting-light to-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Globe className="w-10 h-10 text-consulting-blue" />
                <Users2 className="w-10 h-10 text-consulting-blue" />
              </div>
              <div className="text-3xl font-bold text-consulting-navy mb-2">10+ Industries</div>
              <div className="text-consulting-gray">50+ Expert Consultants</div>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-consulting-light to-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CheckCircle className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
              <div className="text-3xl font-bold text-consulting-navy mb-2">98%</div>
              <div className="text-consulting-gray">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;