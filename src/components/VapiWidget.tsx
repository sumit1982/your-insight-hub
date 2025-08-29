import React, { useEffect, useRef, useState } from 'react';

// Method 1: Hook-based Vapi Widget Component
const useVapiWidget = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isWidgetCreated, setIsWidgetCreated] = useState(false);
  const scriptLoadAttempts = useRef(0);
  const maxAttempts = 3;

  useEffect(() => {
    const loadScript = () => {
      // Check if script already exists
      const existingScript = document.querySelector('script[src*="@vapi-ai/client-sdk-react"]');
      if (existingScript) {
        console.log('Vapi script already exists');
        checkAndCreateWidget();
        return;
      }

      console.log(`Loading Vapi script (attempt ${scriptLoadAttempts.current + 1}/${maxAttempts})`);

      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js';
      script.async = true;
      script.type = 'text/javascript';
      
      script.onload = () => {
        console.log('✅ Vapi script loaded successfully');
        setIsScriptLoaded(true);
        // Wait a bit for the script to initialize
        setTimeout(checkAndCreateWidget, 500);
      };

      script.onerror = () => {
        console.error(`❌ Failed to load Vapi script (attempt ${scriptLoadAttempts.current + 1})`);
        scriptLoadAttempts.current++;
        
        if (scriptLoadAttempts.current < maxAttempts) {
          console.log('Retrying script load...');
          setTimeout(loadScript, 2000);
        }
      };

      document.head.appendChild(script);
    };

    const checkAndCreateWidget = () => {
      // Remove any existing widgets first
      const existingWidgets = document.querySelectorAll('vapi-widget');
      existingWidgets.forEach(widget => {
        console.log('Removing existing widget');
        widget.remove();
      });

      console.log('Creating new Vapi widget...');
      
      const widget = document.createElement('vapi-widget');
      
      // Set all attributes
      widget.setAttribute('public-key', 'ba6a58f4-e2fd-4f3a-8f23-38420787f9cb');
      widget.setAttribute('assistant-id', '3ac2b742-fdef-4ea4-b7be-4d996327c9cc');
      widget.setAttribute('mode', 'voice');
      widget.setAttribute('theme', 'light');
      widget.setAttribute('base-bg-color', '#000000');
      widget.setAttribute('accent-color', '#14B8A6');
      widget.setAttribute('cta-button-color', '#000000');
      widget.setAttribute('cta-button-text-color', '#ffffff');
      widget.setAttribute('border-radius', 'large');
      widget.setAttribute('size', 'full');
      widget.setAttribute('position', 'bottom-right');
      widget.setAttribute('title', 'Talk to US');
      widget.setAttribute('start-button-text', 'Make a call');
      widget.setAttribute('end-button-text', 'End Call');
      widget.setAttribute('chat-first-message', 'Hey, How can I help you today?');
      widget.setAttribute('chat-placeholder', 'Type your message...');
      widget.setAttribute('voice-show-transcript', 'true');
      widget.setAttribute('consent-required', 'true');
      widget.setAttribute('consent-title', 'Terms and conditions');
      widget.setAttribute('consent-content', 'By clicking "Agree," and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service.');
      widget.setAttribute('consent-storage-key', 'vapi_widget_consent');

      // Append to body (more reliable than containers)
      document.body.appendChild(widget);
      
      console.log('✅ Vapi widget created and appended to body');
      setIsWidgetCreated(true);

      // Double-check after a delay
      setTimeout(() => {
        const widgetCheck = document.querySelector('vapi-widget');
        if (widgetCheck) {
          console.log('✅ Widget confirmed in DOM');
        } else {
          console.log('⚠️ Widget not found in DOM, retrying...');
          checkAndCreateWidget();
        }
      }, 1000);
    };

    // Start the process
    loadScript();

    // Cleanup
    return () => {
      const widgets = document.querySelectorAll('vapi-widget');
      widgets.forEach(widget => widget.remove());
    };
  }, []);

  return { isScriptLoaded, isWidgetCreated };
};

// Method 2: Alternative approach using useEffect with script in HTML
const VapiWidgetAlternative: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initWidget = () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = `
          <vapi-widget
            public-key="ba6a58f4-e2fd-4f3a-8f23-38420787f9cb"
            assistant-id="3ac2b742-fdef-4ea4-b7be-4d996327c9cc"
            mode="voice"
            theme="dark"
            base-bg-color="#000000"
            accent-color="#14B8A6"
            cta-button-color="#000000"
            cta-button-text-color="#ffffff"
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
            consent-content="By clicking &quot;Agree,&quot; and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service."
            consent-storage-key="vapi_widget_consent"
          ></vapi-widget>
        `;
      }
    };

    // Try multiple times with different delays
    setTimeout(initWidget, 1000);
    setTimeout(initWidget, 3000);
    setTimeout(initWidget, 5000);

  }, []);

  return <div ref={containerRef} style={{ position: 'fixed', zIndex: 9999 }} />;
};

// Main Vapi Widget Component
const VapiWidget: React.FC = () => {
  const { isScriptLoaded, isWidgetCreated } = useVapiWidget();

  return (
    <>
      {/* Debug info - remove in production */}
      <div style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        background: 'rgba(0,0,0,0.8)',
        color: 'white',
        padding: '8px',
        borderRadius: '4px',
        fontSize: '12px',
        zIndex: 10000
      }}>
        Script: {isScriptLoaded ? '✅' : '⏳'} | Widget: {isWidgetCreated ? '✅' : '⏳'}
      </div>
      
      {/* Alternative widget as fallback */}
      <VapiWidgetAlternative />
    </>
  );
};