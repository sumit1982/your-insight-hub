import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, DollarSign, Clock, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const PayrollServices = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-consulting-light to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-consulting-navy mb-6">
              Payroll Services
            </h1>
            <p className="text-xl text-consulting-gray max-w-3xl mx-auto leading-relaxed">
              Streamline your payroll operations with our comprehensive, compliant, and secure payroll management solutions.
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
                <DollarSign className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle className="text-consulting-navy">Accurate Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-consulting-gray text-center">
                  99.9% accuracy rate with automated calculations and error-checking systems.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Clock className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle className="text-consulting-navy">Timely Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-consulting-gray text-center">
                  On-time payroll processing with flexible scheduling options.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle className="text-consulting-navy">Full Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-consulting-gray text-center">
                  Stay compliant with federal, state, and local tax regulations.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle className="text-consulting-navy">Employee Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-consulting-gray text-center">
                  Self-service portals and dedicated support for your employees.
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
            Comprehensive Payroll Solutions
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-consulting-navy mb-6">Core Services</h3>
              <div className="space-y-4">
                {[
                  "Payroll processing and direct deposits",
                  "Tax withholding and filing",
                  "Benefits administration integration",
                  "Time and attendance tracking",
                  "Garnishment processing",
                  "Year-end reporting (W-2s, 1099s)"
                ].map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-consulting-blue mt-0.5 flex-shrink-0" />
                    <span className="text-consulting-gray">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-consulting-navy mb-6">Advanced Features</h3>
              <div className="space-y-4">
                {[
                  "Multi-state payroll processing",
                  "Custom reporting and analytics",
                  "API integrations with existing systems",
                  "Mobile access for employees",
                  "Audit trail and security controls",
                  "Dedicated payroll specialist support"
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
                Request Payroll Consultation
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

export default PayrollServices;