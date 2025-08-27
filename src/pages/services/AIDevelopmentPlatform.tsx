import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Shield, Zap, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const AIDevelopmentPlatform = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-consulting-navy to-consulting-blue">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <Code className="w-20 h-20 text-blue-300 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Development Platform
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Secure AI platform designed for fast, efficient deployment and automation of intelligent solutions.
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
              Enterprise AI Development
            </h2>
            <p className="text-xl text-consulting-gray max-w-3xl mx-auto">
              Build, deploy, and manage AI solutions with our comprehensive development platform and tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle>Fast Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Rapidly deploy AI solutions with streamlined development processes and automated deployment pipelines.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle>Secure Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Enterprise-grade security with encrypted data handling, secure APIs, and compliance-ready infrastructure.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Settings className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle>Automated Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Leverage automated tools and frameworks for efficient AI development, testing, and maintenance.
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
            Ready to Build on Our Platform?
          </h2>
          <p className="text-xl text-consulting-gray mb-8">
            Access our secure AI development platform for fast, efficient deployment of your intelligent solutions.
          </p>
          <Link to="/contact">
            <Button size="lg" className="px-8 py-4">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AIDevelopmentPlatform;