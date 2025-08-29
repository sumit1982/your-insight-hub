import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Target, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const AIAgencyServices = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-consulting-navy to-consulting-blue">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <Briefcase className="w-20 h-20 text-blue-300 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Agency Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Expert AI consulting, strategy, and development services to transform your business with artificial intelligence.
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
              Comprehensive AI Services
            </h2>
            <p className="text-xl text-consulting-gray max-w-3xl mx-auto">
              From strategy to implementation, we provide end-to-end AI solutions for your business transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle>AI Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Develop comprehensive AI strategies aligned with your business goals and market opportunities.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle>Expert Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access our team of AI experts for guidance on technology selection, implementation, and optimization.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle>Business Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Drive business growth through strategic AI implementation and digital transformation initiatives.
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
            Ready to Transform with AI?
          </h2>
          <p className="text-xl text-consulting-gray mb-8">
            Partner with our AI experts to develop and implement a comprehensive AI strategy for your business.
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

export default AIAgencyServices;