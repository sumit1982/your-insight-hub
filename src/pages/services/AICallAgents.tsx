import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, DollarSign, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AICallAgents = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-consulting-navy to-consulting-blue">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <Phone className="w-20 h-20 text-blue-300 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Call Agents
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Automate phone calls to reduce costs, cut wait times, and enhance customer service with intelligent voice agents.
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
              Transform Your Phone Operations
            </h2>
            <p className="text-xl text-consulting-gray max-w-3xl mx-auto">
              AI call agents handle routine calls, bookings, and customer inquiries with human-like conversation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle>Cost Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Significantly reduce operational costs by automating routine phone calls and customer interactions.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle>No Wait Times</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Eliminate customer wait times with instant call handling and immediate response capabilities.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle>Enhanced Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Provide consistent, professional service quality with AI agents that never have bad days.
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
            Ready to Deploy AI Call Agents?
          </h2>
          <p className="text-xl text-consulting-gray mb-8">
            Transform your phone operations with intelligent AI agents that handle calls professionally and efficiently.
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

export default AICallAgents;