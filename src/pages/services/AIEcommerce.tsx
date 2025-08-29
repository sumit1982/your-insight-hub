import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Package, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const AIEcommerce = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-consulting-navy to-consulting-blue">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <ShoppingCart className="w-20 h-20 text-blue-300 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI for eCommerce
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Add advanced AI features to your Shopify & WooCommerce stores to boost sales and customer experience.
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
              Supercharge Your Online Store
            </h2>
            <p className="text-xl text-consulting-gray max-w-3xl mx-auto">
              Integrate powerful AI features into your e-commerce platform to increase conversions and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Package className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle>Shopify Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Seamlessly integrate AI chatbots and automation tools into your Shopify store for enhanced functionality.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Package className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle>WooCommerce Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Add intelligent features to your WooCommerce store with custom AI solutions and integrations.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle>Advanced Features</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Implement product recommendations, personalized shopping experiences, and intelligent customer support.
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
            Ready to Enhance Your Store?
          </h2>
          <p className="text-xl text-consulting-gray mb-8">
            Transform your e-commerce experience with AI-powered features that drive sales and customer satisfaction.
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

export default AIEcommerce;