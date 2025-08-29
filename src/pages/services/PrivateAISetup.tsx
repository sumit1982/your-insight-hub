import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Server, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PrivateAISetup = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-consulting-navy to-consulting-blue">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <Shield className="w-20 h-20 text-blue-300 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Private AI Setup
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Managed dedicated AI solution hosting designed for compliance and data protection requirements.
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
              Secure & Compliant AI Solutions
            </h2>
            <p className="text-xl text-consulting-gray max-w-3xl mx-auto">
              Get your own private AI infrastructure with enterprise-grade security and compliance features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lock className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle>Data Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Your data stays completely private with end-to-end encryption and isolated hosting environments.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle>Compliance Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Meet industry regulations and compliance requirements with certified infrastructure and security protocols.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Server className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle>Dedicated Hosting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Enjoy dedicated resources and infrastructure exclusively for your AI solutions and applications.
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
            Need Secure AI Infrastructure?
          </h2>
          <p className="text-xl text-consulting-gray mb-8">
            Get your private AI setup with enterprise-grade security, compliance, and dedicated hosting.
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

export default PrivateAISetup;