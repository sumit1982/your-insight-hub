import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import UseCases from "@/components/UseCases";
import About from "@/components/About";

const Index = () => {
  console.log("🚀 Index component is rendering");

  return (
    <div className="min-h-screen">
      {/* Debug indicator */}
      <div className="fixed top-4 left-4 bg-green-600 text-white px-3 py-1 rounded text-sm z-50">
        Index Loaded ✅
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div id="home">
        <Hero />
      </div>

      {/* Services Section */}
      <div id="services">
        <Services />
      </div>

      {/* Use Cases Section */}
      <div id="use-cases">
        <UseCases />
      </div>

      {/* About Section */}
      <div id="about">
        <About />
      </div>

      {/* Vapi widget loads separately in index.html */}
    </div>
  );
};

export default Index;