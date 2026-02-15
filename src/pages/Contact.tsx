import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const SuccessBanner = ({ message }: { message: string }) => (
  <div className="bg-green-500 text-white text-center py-2 rounded-md mb-4">
    <p>{message}</p>
  </div>
);

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const fd = new FormData(form);

    const firstName = String(fd.get("firstName") || "");
    const lastName = String(fd.get("lastName") || "");
    const email = String(fd.get("email") || "");
    const phone = String(fd.get("phone") || "");
    const message = String(fd.get("message") || "");
    const subject = `There is a new inquiry sumitted on your website by ${firstName} ${lastName}`;
    
    // Replace with your actual webhook URL
    const webhookUrl = "https://hook.eu2.make.com/wrwvbn6ba7xkmwtfw2x6k4wl678amk5s"; 

    const fallbackToMailto = () => {
      const to = "everystepconsultingau@gmail.com";
      const body = `New website inquiry:\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message}`;
      const params = new URLSearchParams();
      params.set("subject", subject);
      params.set("body", body);
      window.location.href = `mailto:${to}?${params.toString()}`;
    };

    setSubmitting(true);
    setSuccessMessage("");

    if (!webhookUrl) {
      fallbackToMailto();
      return;
    }

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          message,
          subject,
        }),
      });

      if (!res.ok) {
        fallbackToMailto();
        return;
      }

      setSuccessMessage("Thank you! Your message has been sent. Someone will get in touch with you soon to capture further details on your needs.");
      form.reset();
    } catch (err) {
      console.error(err);
      fallbackToMailto();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-consulting-navy to-consulting-blue">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
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
                <p className="text-blue-100 mb-2">+61 414 267 261</p>
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
                <p className="text-blue-100 mb-4">
                  Melbourne VIC 3000<br />
                  Australia
                </p>
                <div className="flex items-center justify-center gap-4 pt-2 border-t border-white/20">
                  <a
                    href="https://www.facebook.com/EveryStepConsulting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/everystepconsulting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
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

      {/* Success Banner */}
      {successMessage && <SuccessBanner message={successMessage} />}

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-consulting-navy mb-6">Send Us a Message</h2>
            <p className="text-xl text-consulting-gray">Fill out the form below and we'll get back to you within 24 hours.</p>
          </div>
          
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-consulting-navy font-medium">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      className="mt-2"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-consulting-navy font-medium">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      className="mt-2"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-consulting-navy font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-2"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-consulting-navy font-medium">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="mt-2"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-consulting-navy font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="mt-2"
                    placeholder="Please provide details about the reason for connecting..."
                  />
                </div>
                
                {/* Optional honeypot field to reduce spam */}
                <input type="text" name="honeypot" className="hidden" autoComplete="off" />

                <div className="text-center">
                  <Button size="lg" className="px-8 py-4" type="submit" disabled={submitting}>
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <div className="text-center mt-8">
            <Link to="/" className="text-consulting-blue hover:underline">← Back to Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;