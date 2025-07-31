import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Monitor, Users, FileText, Shield, Headphones } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Payroll Services",
    description: "Comprehensive payroll management solutions to ensure accurate and timely employee compensation.",
    features: ["Payroll Processing", "Tax Compliance", "Benefits Administration"]
  },
  {
    icon: Monitor,
    title: "IT Consulting", 
    description: "Strategic technology consulting to optimize your IT infrastructure and digital transformation.",
    features: ["System Integration", "Cloud Migration", "Cybersecurity"]
  },
  {
    icon: Users,
    title: "Talent Acquisition",
    description: "Expert recruitment services to help you find and hire the best talent for your organization.",
    features: ["Executive Search", "Recruitment Strategy", "Candidate Assessment"]
  },
  {
    icon: FileText,
    title: "Business Process Consulting",
    description: "Streamline your business operations and improve efficiency through process optimization.",
    features: ["Process Mapping", "Workflow Automation", "Efficiency Analysis"]
  },
  {
    icon: Shield,
    title: "Compliance & Risk",
    description: "Ensure regulatory compliance and manage business risks with our expert guidance.",
    features: ["Regulatory Compliance", "Risk Assessment", "Audit Support"]
  },
  {
    icon: Headphones,
    title: "Customer Experience",
    description: "Enhance customer satisfaction and loyalty through strategic customer experience initiatives.",
    features: ["CX Strategy", "Service Design", "Customer Analytics"]
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-consulting-light/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-consulting-navy mb-6">
            Our Services
          </h2>
          <p className="text-xl text-consulting-gray max-w-3xl mx-auto">
            We offer comprehensive consulting services designed to address your unique business challenges 
            and accelerate your path to success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-consulting-blue to-primary rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-consulting-navy">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-consulting-gray mb-4 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-consulting-gray flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-consulting-blue rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-consulting-blue group-hover:text-white transition-colors duration-300">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;