import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AIChatbots from "./pages/services/AIChatbots";
import AICallAgents from "./pages/services/AICallAgents";
import CustomAIAgents from "./pages/services/CustomAIAgents";
import AIAgencyServices from "./pages/services/AIAgencyServices";
import PrivateAISetup from "./pages/services/PrivateAISetup";
import AIWorkflowAutomation from "./pages/services/AIWorkflowAutomation";
import AIEcommerce from "./pages/services/AIEcommerce";
import AIDevelopmentPlatform from "./pages/services/AIDevelopmentPlatform";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();



const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/ai-chatbots" element={<AIChatbots />} />
          <Route path="/services/ai-call-agents" element={<AICallAgents />} />
          <Route path="/services/custom-ai-agents" element={<CustomAIAgents />} />
          <Route path="/services/ai-agency-services" element={<AIAgencyServices />} />
          <Route path="/services/private-ai-setup" element={<PrivateAISetup />} />
          <Route path="/services/ai-workflow-automation" element={<AIWorkflowAutomation />} />
          <Route path="/services/ai-ecommerce" element={<AIEcommerce />} />
          <Route path="/services/ai-development-platform" element={<AIDevelopmentPlatform />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
