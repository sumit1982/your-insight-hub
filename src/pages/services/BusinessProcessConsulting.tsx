import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Workflow, TrendingUp, Settings, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessProcessConsulting = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-consulting-light to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-consulting-navy mb-6">
              Business Process Consulting
            </h1>
            <p className="text-xl text-consulting-gray max-w-3xl mx-auto leading-relaxed">
              Optimize your operations and drive efficiency with our comprehensive business process improvement solutions.
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
                <Workflow className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle className="text-consulting-navy">Process Mapping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-consulting-gray text-center">
                  Visualize and analyze current business processes for optimization.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <TrendingUp className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle className="text-consulting-navy">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-consulting-gray text-center">
                  Establish KPIs and performance measurement systems.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Settings className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle className="text-consulting-navy">Process Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-consulting-gray text-center">
                  Redesign workflows for maximum efficiency and effectiveness.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Zap className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle className="text-consulting-navy">Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-consulting-gray text-center">
                  Implement automation solutions to streamline operations.
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
            Process Excellence Solutions
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-consulting-navy mb-6">Core Consulting Services</h3>
              <div className="space-y-4">
                {[
                  "Business process analysis and mapping",
                  "Workflow optimization and redesign",
                  "Lean Six Sigma implementation",
                  "Change management strategies",
                  "Performance measurement frameworks",
                  "Standard operating procedures development"
                ].map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-consulting-blue mt-0.5 flex-shrink-0" />
                    <span className="text-consulting-gray">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-consulting-navy mb-6">Advanced Solutions</h3>
              <div className="space-y-4">
                {[
                  "Digital transformation initiatives",
                  "Robotic process automation (RPA)",
                  "Business intelligence implementation",
                  "Quality management systems",
                  "Supply chain optimization",
                  "Continuous improvement programs"
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
                Start Process Assessment
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

export default BusinessProcessConsulting;