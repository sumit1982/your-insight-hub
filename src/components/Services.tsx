import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Bot, Briefcase, Shield, Workflow, ShoppingCart, Code } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: MessageCircle,
    title: "AI Chatbots",
    description: "24/7 customer support, lead generation, and automated conversations.",
    features: ["24/7 Customer Support", "Lead Generation", "Automated Conversations"],
    link: "/services/ai-chatbots"
  },
  {
    icon: Phone,
    title: "AI Call Agents", 
    description: "Automate phone calls to reduce costs, cut wait times, enhance customer service.",
    features: ["Cost Reduction", "Enhanced Service", "No Wait Times"],
    link: "/services/ai-call-agents"
  },
  {
    icon: Bot,
    title: "Custom AI Agents",
    description: "Custom-developed AI agents for task automation and customer interactions.",
    features: ["Task Automation", "Custom Solutions", "Advanced Integration"],
    link: "/services/custom-ai-agents"
  },
  {
    icon: Briefcase,
    title: "AI Agency Services",
    description: "Expert AI consulting, strategy, and development for your business.",
    features: ["AI Strategy", "Expert Consulting", "Business Development"],
    link: "/services/ai-agency-services"
  },
  {
    icon: Shield,
    title: "Private AI Setup",
    description: "Managed dedicated AI solution hosting for compliance and data protection.",
    features: ["Data Protection", "Compliance Ready", "Dedicated Hosting"],
    link: "/services/private-ai-setup"
  },
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    description: "Streamline workflows and automate business processes with AI automation.",
    features: ["Process Automation", "Workflow Optimization", "Efficiency Gains"],
    link: "/services/ai-workflow-automation"
  },
  {
    icon: ShoppingCart,
    title: "AI for eCommerce",
    description: "Add advanced AI features on your Shopify & WooCommerce stores.",
    features: ["Shopify Integration", "WooCommerce Support", "Advanced Features"],
    link: "/services/ai-ecommerce"
  },
  {
    icon: Code,
    title: "AI Development Platform",
    description: "Secure AI platform for fast, efficient deployment and automation.",
    features: ["Fast Deployment", "Secure Platform", "Automated Solutions"],
    link: "/services/ai-development-platform"
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-consulting-light/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-consulting-navy mb-6">
            Artificial Intelligence
          </h2>
          <p className="text-xl text-consulting-gray max-w-3xl mx-auto">
            Accelerate your business growth with AI-powered automation, customer engagement solutions, 
            and intelligent systems that streamline operations across healthcare, finance, e-commerce, and beyond.
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
                  <Link to={service.link}>
                    <Button variant="outline" className="w-full group-hover:bg-consulting-blue group-hover:text-white transition-colors duration-300">
                      Learn More
                    </Button>
                  </Link>
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