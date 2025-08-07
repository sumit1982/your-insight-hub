import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PayrollServices from "./pages/services/PayrollServices";
import ITConsulting from "./pages/services/ITConsulting";
import TalentAcquisition from "./pages/services/TalentAcquisition";
import BusinessProcessConsulting from "./pages/services/BusinessProcessConsulting";
import ComplianceRisk from "./pages/services/ComplianceRisk";
import CustomerServices from "./pages/services/CustomerServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/payroll" element={<PayrollServices />} />
          <Route path="/services/it-consulting" element={<ITConsulting />} />
          <Route path="/services/talent-acquisition" element={<TalentAcquisition />} />
          <Route path="/services/business-process" element={<BusinessProcessConsulting />} />
          <Route path="/services/compliance-risk" element={<ComplianceRisk />} />
          <Route path="/services/customer-services" element={<CustomerServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
