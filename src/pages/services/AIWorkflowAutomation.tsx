import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Workflow, Zap, BarChart, Cog } from "lucide-react";
import { Link } from "react-router-dom";

const AIWorkflowAutomation = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-consulting-navy to-consulting-blue">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <Workflow className="w-20 h-20 text-blue-300 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Workflow Automation
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Streamline workflows and automate business processes with intelligent AI automation solutions.
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
              Intelligent Process Automation
            </h2>
            <p className="text-xl text-consulting-gray max-w-3xl mx-auto">
              Transform your business operations with AI-powered workflow automation that learns and adapts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cog className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle>Process Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automate repetitive tasks and complex business processes with intelligent AI-driven workflows.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle>Workflow Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Optimize existing workflows for maximum efficiency and reduced manual intervention requirements.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle>Efficiency Gains</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Achieve significant efficiency improvements and cost savings through intelligent automation solutions.
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
            Ready to Automate Your Workflows?
          </h2>
          <p className="text-xl text-consulting-gray mb-8">
            Transform your business processes with intelligent AI automation that works seamlessly with your existing systems.
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

export default AIWorkflowAutomation;