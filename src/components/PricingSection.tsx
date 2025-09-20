import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Phone, Info } from "lucide-react";

const PricingSection = () => {
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
    <section className="py-24 bg-consulting-light">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-gradient-to-br from-consulting-blue to-primary rounded-2xl mx-auto mb-8 flex items-center justify-center">
            <Phone className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-consulting-navy mb-6">
            AI Call Starter
          </h2>
          
          <p className="text-xl text-consulting-gray max-w-2xl mx-auto mb-8">
            For essential features to automate your customer calls
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-white shadow-lg border-0">
          <CardHeader className="text-center pb-6">
            <div className="mb-6">
              <div className="text-6xl font-bold text-primary mb-2">
                59¢ 
                <span className="text-2xl text-consulting-gray font-normal ml-2">per minute onwards</span>
              </div>
            </div>
            
            <div className="bg-consulting-light rounded-lg p-4 mb-6">
              <p className="text-consulting-navy text-lg">
                Plus a <span className="font-bold text-primary">$1,500 onwards</span> one-off setup for an AI agent 
                trained on a custom knowledge base of your business
              </p>
            </div>
            
            <p className="text-consulting-blue text-lg font-medium">
              Save 30-40% versus human staff costs, plus get 24/7 service with no office overheads, sick leave, or training.
            </p>
          </CardHeader>
          
          <CardContent className="pt-0">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-consulting-navy">{feature}</span>
                  <Info className="w-4 h-4 text-consulting-gray ml-auto" />
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                size="lg"
                className="bg-consulting-blue hover:bg-primary-hover text-white px-8 py-3 text-lg font-semibold"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Started Today
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PricingSection;