import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, AlertTriangle, FileCheck, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const ComplianceRisk = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-consulting-light to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-consulting-navy mb-6">
              Compliance & Risk
            </h1>
            <p className="text-xl text-consulting-gray max-w-3xl mx-auto leading-relaxed">
              Protect your organization with comprehensive compliance and risk management solutions.
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
                <Shield className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle className="text-consulting-navy">Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-consulting-gray text-center">
                  Comprehensive evaluation of operational and strategic risks.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <AlertTriangle className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle className="text-consulting-navy">Risk Mitigation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-consulting-gray text-center">
                  Develop strategies to minimize and manage identified risks.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <FileCheck className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle className="text-consulting-navy">Compliance Audits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-consulting-gray text-center">
                  Regular audits to ensure regulatory compliance across all areas.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Scale className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle className="text-consulting-navy">Regulatory Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-consulting-gray text-center">
                  Stay updated with changing regulations and requirements.
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
            Comprehensive Risk & Compliance Management
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-consulting-navy mb-6">Risk Management Services</h3>
              <div className="space-y-4">
                {[
                  "Enterprise risk assessment and analysis",
                  "Risk register development and maintenance",
                  "Business continuity planning",
                  "Crisis management protocols",
                  "Insurance and coverage analysis",
                  "Risk monitoring and reporting"
                ].map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-consulting-blue mt-0.5 flex-shrink-0" />
                    <span className="text-consulting-gray">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-consulting-navy mb-6">Compliance Solutions</h3>
              <div className="space-y-4">
                {[
                  "Regulatory compliance audits",
                  "Policy and procedure development",
                  "Training and awareness programs",
                  "Compliance monitoring systems",
                  "Incident investigation and response",
                  "Regulatory reporting and documentation"
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
                Schedule Risk Assessment
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

export default ComplianceRisk;