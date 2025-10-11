import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Phone, Info, CheckCircle, Globe, Users2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PricingSection = () => {
  const navigate = useNavigate();
  const features = [
    "Choice of Australian AI voices",
    "FAQ automation", 
    "Intelligent call routing",
    "Seamless human handoff",
    "Sentiment analysis",
    "Performance dashboard",
    "30-day transcript history",
    "Secure Australian hosting",
    "Managed updates & security"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: AI Call Starter */}
          <div>
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-consulting-blue to-primary rounded-2xl mb-6 flex items-center justify-center">
                <Phone className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-consulting-navy mb-4">
                AI Call Starter
              </h2>
              
              <p className="text-lg text-consulting-gray mb-6">
                For essential features to automate your customer calls
              </p>
            </div>

            <Card className="bg-white shadow-lg border-0">
              <CardHeader className="text-center pb-6">
                <div className="mb-6">
                  <div className="text-5xl font-bold text-primary mb-2">
                    59¢ 
                    <span className="text-xl text-consulting-gray font-normal ml-2">per minute onwards</span>
                  </div>
                </div>
                
                <div className="bg-consulting-light rounded-lg p-4 mb-6">
                  <p className="text-consulting-navy text-base">
                    Plus a <span className="font-bold text-primary">$1,500 onwards</span> one-off setup for an AI agent 
                    trained on a custom knowledge base of your business
                  </p>
                </div>
                
                <p className="text-consulting-blue text-base font-medium">
                  Save 30-40% versus human staff costs, plus get 24/7 service with no office overheads, sick leave, or training.
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-consulting-navy text-sm">{feature}</span>
                      <Info className="w-4 h-4 text-consulting-gray ml-auto" />
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Button 
                    size="lg"
                    className="bg-consulting-blue hover:bg-primary-hover text-white px-8 py-3 text-lg font-semibold w-full"
                    onClick={() => navigate('/contact')}
                  >
                    Get Started Today
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Why Choose Our Consulting Expertise */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-consulting-navy mb-6">
              Why Choose Our Consulting Expertise?
            </h2>
            <p className="text-lg text-consulting-gray mb-8 leading-relaxed">
              With over 5 years of experience across diverse industries, we bring proven methodologies 
              and innovative solutions to every engagement. Our team of seasoned consultants has helped 
              hundreds of organizations achieve breakthrough results.
            </p>
            
            <div className="space-y-4 mb-12">
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

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-consulting-light to-white shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Globe className="w-8 h-8 text-consulting-blue" />
                  <Users2 className="w-8 h-8 text-consulting-blue" />
                </div>
                <div className="text-2xl font-bold text-consulting-navy mb-1">10+ Industries</div>
                <div className="text-sm text-consulting-gray">50+ Expert Consultants</div>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-consulting-light to-white shadow-md hover:shadow-lg transition-shadow duration-300">
                <CheckCircle className="w-10 h-10 text-consulting-blue mx-auto mb-3" />
                <div className="text-2xl font-bold text-consulting-navy mb-1">98%</div>
                <div className="text-sm text-consulting-gray">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;