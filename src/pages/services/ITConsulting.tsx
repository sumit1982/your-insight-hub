import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Monitor, Database, Cloud, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const ITConsulting = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-consulting-light to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-consulting-navy mb-6">
              IT Consulting
            </h1>
            <p className="text-xl text-consulting-gray max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge technology solutions and strategic IT guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Monitor className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle className="text-consulting-navy">System Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-consulting-gray text-center">
                  Seamlessly connect your existing systems for optimal performance.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Database className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle className="text-consulting-navy">Data Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-consulting-gray text-center">
                  Optimize data storage, processing, and analytics capabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Cloud className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle className="text-consulting-navy">Cloud Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-consulting-gray text-center">
                  Migrate to cloud platforms for scalability and cost efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle className="text-consulting-navy">Cybersecurity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-consulting-gray text-center">
                  Protect your digital assets with comprehensive security solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-consulting-navy text-center mb-16">
            Technology Solutions
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-consulting-navy mb-6">Strategic IT Services</h3>
              <div className="space-y-4">
                {[
                  "IT strategy and roadmap development",
                  "Digital transformation consulting",
                  "Technology stack optimization",
                  "Software architecture design",
                  "Legacy system modernization",
                  "IT governance and compliance"
                ].map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-consulting-blue mt-0.5 flex-shrink-0" />
                    <span className="text-consulting-gray">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-consulting-navy mb-6">Implementation Services</h3>
              <div className="space-y-4">
                {[
                  "Custom software development",
                  "Cloud migration and management",
                  "Network infrastructure setup",
                  "Cybersecurity implementation",
                  "Data analytics and BI solutions",
                  "24/7 technical support and maintenance"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-consulting-blue mt-0.5 flex-shrink-0" />
                    <span className="text-consulting-gray">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/#contact">
              <Button size="lg" className="px-8 py-4">
                Schedule IT Assessment
              </Button>
            </Link>
            <div className="mt-4">
              <Link to="/" className="text-consulting-blue hover:underline">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITConsulting;