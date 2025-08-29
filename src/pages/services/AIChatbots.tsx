import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Clock, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const AIChatbots = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-consulting-navy to-consulting-blue">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <MessageCircle className="w-20 h-20 text-blue-300 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Chatbots
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              24/7 customer support, lead generation, and automated conversations that never sleep.
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
              Why Choose AI Chatbots?
            </h2>
            <p className="text-xl text-consulting-gray max-w-3xl mx-auto">
              Transform your customer interactions with intelligent chatbots that work around the clock.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle>24/7 Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Provide instant customer support at any time of day, ensuring your customers never wait for answers.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle>Lead Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automatically qualify leads and collect customer information while engaging visitors on your website.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle>Instant Responses</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Eliminate wait times with immediate responses to common questions and automated conversation flows.
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
            Ready to Implement AI Chatbots?
          </h2>
          <p className="text-xl text-consulting-gray mb-8">
            Let's discuss how AI chatbots can transform your customer experience and boost your business efficiency.
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

export default AIChatbots;