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
      
      {/* Vapi Widget */}
      <div 
        dangerouslySetInnerHTML={{
          __html: `
            <vapi-widget
              public-key="0ee00415-e141-4d0e-aa47-7f560633361a"
              assistant-id="ef626e72-165b-4871-9c83-490dc9832dab"
              mode="voice"
              theme="light"
              base-bg-color="#ffffff"
              accent-color="#14B8A6"
              cta-button-color="#ffffff"
              cta-button-text-color="#000000"
              border-radius="large"
              size="full"
              position="bottom-right"
              title="Talk to US"
              start-button-text="Make a call"
              end-button-text="End Call"
              chat-first-message="Hey, How can I help you today?"
              chat-placeholder="Type your message..."
              voice-show-transcript="true"
              consent-required="true"
              consent-title="Terms and conditions"
              consent-content="By clicking "Agree," and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service."
              consent-storage-key="vapi_widget_consent"
            ></vapi-widget>
            <script src="https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js" async type="text/javascript"></script>
          `
        }}
      />
    </div>
  );
};

export default Index;
