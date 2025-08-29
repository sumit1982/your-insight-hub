import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Settings, Zap, Puzzle } from "lucide-react";
import { Link } from "react-router-dom";

const CustomAIAgents = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-consulting-navy to-consulting-blue">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <Bot className="w-20 h-20 text-blue-300 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Custom AI Agents
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Custom-developed AI agents tailored for your specific task automation and customer interaction needs.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-consulting-navy hover:bg-blue-50">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-consulting-navy mb-6">
              Tailored AI Solutions
            </h2>
            <p className="text-xl text-consulting-gray max-w-3xl mx-auto">
              Get AI agents built specifically for your business processes and unique requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Settings className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle>Task Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automate complex business tasks and workflows with AI agents designed for your specific processes.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Puzzle className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle>Custom Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Receive AI solutions built from the ground up to match your exact business requirements and goals.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle>Advanced Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Seamlessly integrate with your existing systems and tools for maximum efficiency and effectiveness.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-consulting-light/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-consulting-navy mb-6">
            Need a Custom AI Solution?
          </h2>
          <p className="text-xl text-consulting-gray mb-8">
            Let's build the perfect AI agent tailored to your specific business needs and requirements.
          </p>
          <Link to="/">
            <Button size="lg" className="px-8 py-4">
              Back to Home
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CustomAIAgents;