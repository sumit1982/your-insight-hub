import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Cog, Target, BarChart3, Shield } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Strategic Planning",
    description: "Develop comprehensive strategies that align with your business objectives and drive sustainable growth.",
    features: ["Market Analysis", "Competitive Intelligence", "Growth Roadmaps"]
  },
  {
    icon: Users,
    title: "Organizational Development", 
    description: "Build high-performing teams and optimize organizational structure for maximum efficiency.",
    features: ["Team Building", "Leadership Development", "Culture Transformation"]
  },
  {
    icon: Cog,
    title: "Process Optimization",
    description: "Streamline operations and eliminate inefficiencies to reduce costs and improve productivity.",
    features: ["Workflow Analysis", "Automation Strategy", "Quality Improvement"]
  },
  {
    icon: Target,
    title: "Performance Management",
    description: "Implement data-driven performance systems that track progress and drive accountability.",
    features: ["KPI Development", "Dashboard Creation", "Performance Reviews"]
  },
  {
    icon: BarChart3,
    title: "Financial Analysis",
    description: "Gain deep insights into your financial performance and identify opportunities for improvement.",
    features: ["Financial Modeling", "Cost Analysis", "Investment Planning"]
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Identify, assess, and mitigate risks to protect your business and ensure continuity.",
    features: ["Risk Assessment", "Compliance", "Business Continuity"]
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