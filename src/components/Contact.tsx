import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-consulting-navy to-consulting-blue">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Contact us today to discuss how we can help transform your business. 
            Our team is ready to provide the strategic guidance you need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Email Us */}
          <Card className="bg-white/10 border-white/20 text-white transform hover:scale-105 transition-transform duration-300 hover:bg-white/15">
            <CardHeader className="text-center">
              <CardTitle className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-blue-300/20 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-blue-300" />
                </div>
                <span>Email Us</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-100 mb-2">sales@everystepconsulting.com.au</p>
              <p className="text-blue-100">support@everystepconsulting.com.au</p>
            </CardContent>
          </Card>
          
          {/* Call Us */}
          <Card className="bg-white/10 border-white/20 text-white transform hover:scale-105 transition-transform duration-300 hover:bg-white/15">
            <CardHeader className="text-center">
              <CardTitle className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-green-300/20 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-green-300" />
                </div>
                <span>Call Us</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-100 mb-2">+61414267261</p>
            </CardContent>
          </Card>
          
          {/* Visit Us */}
          <Card className="bg-white/10 border-white/20 text-white transform hover:scale-105 transition-transform duration-300 hover:bg-white/15">
            <CardHeader className="text-center">
              <CardTitle className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-purple-300/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-purple-300" />
                </div>
                <span>Visit Us</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-100">
                Melbourne VIC 3000<br />
                Australia
              </p>
            </CardContent>
          </Card>
          
          {/* Business Hours */}
          <Card className="bg-white/10 border-white/20 text-white transform hover:scale-105 transition-transform duration-300 hover:bg-white/15">
            <CardHeader className="text-center">
              <CardTitle className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-orange-300/20 rounded-full flex items-center justify-center">
                  <Clock className="w-8 h-8 text-orange-300" />
                </div>
                <span>Business Hours</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-100 text-sm">
                Mon - Fri: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;