import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Search, UserPlus, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";

const TalentAcquisition = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-consulting-light to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-consulting-navy mb-6">
              Talent Acquisition
            </h1>
            <p className="text-xl text-consulting-gray max-w-3xl mx-auto leading-relaxed">
              Find and attract top talent with our strategic recruitment and talent acquisition solutions.
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
                <Search className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle className="text-consulting-navy">Talent Sourcing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-consulting-gray text-center">
                  Comprehensive candidate search across multiple channels and networks.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <UserPlus className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle className="text-consulting-navy">Executive Search</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-consulting-gray text-center">
                  Specialized recruitment for C-level and senior management positions.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Target className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle className="text-consulting-navy">Skills Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-consulting-gray text-center">
                  Comprehensive evaluation of technical and soft skills.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Award className="w-12 h-12 text-consulting-blue mx-auto mb-4" />
                <CardTitle className="text-consulting-navy">Onboarding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-consulting-gray text-center">
                  Streamlined onboarding process for new hires.
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
            Recruitment Excellence
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-consulting-navy mb-6">Recruitment Services</h3>
              <div className="space-y-4">
                {[
                  "Strategic workforce planning",
                  "Job description optimization",
                  "Multi-channel candidate sourcing",
                  "Behavioral and technical interviews",
                  "Reference and background checks",
                  "Salary benchmarking and negotiation"
                ].map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-consulting-blue mt-0.5 flex-shrink-0" />
                    <span className="text-consulting-gray">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-consulting-navy mb-6">Specialized Solutions</h3>
              <div className="space-y-4">
                {[
                  "Executive search and headhunting",
                  "Contract and temporary staffing",
                  "Diversity and inclusion recruiting",
                  "Campus recruitment programs",
                  "Employer branding strategies",
                  "Talent pipeline development"
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
            <Link to="/contact">
              <Button size="lg" className="px-8 py-4">
                Start Talent Search
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

export default TalentAcquisition;