import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import UseCases from "@/components/UseCases";
import About from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="use-cases">
        <UseCases />
      </div>
      <div id="about">
        <About />
      </div>
      
      {/* Vapi widget is now loaded directly in index.html */}
      {/* No additional code needed here */}
    </div>
  );
};

export default Index;