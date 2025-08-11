import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Differentials from "./pages/Differentials";
import Cases from "./pages/Cases";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Solutions Pages
import ConsultoriaEstrategica from "./pages/solutions/ConsultoriaEstrategica";
import DesenvolvimentoCultura from "./pages/solutions/DesenvolvimentoCultura";
import TreinamentosCapacitacao from "./pages/solutions/TreinamentosCapacitacao";
import GestaoPessoas from "./pages/solutions/GestaoPessoas";

// Segments Pages
import Agronegocio from "./pages/segments/Agronegocio";
import AlimentosBebidas from "./pages/segments/AlimentosBebidas";
import Energia from "./pages/segments/Energia";
import Financeiro from "./pages/segments/Financeiro";
import VarejoFarma from "./pages/segments/VarejoFarma";
import Educacao from "./pages/segments/Educacao";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/solucoes" element={<Solutions />} />
            <Route path="/diferenciais" element={<Differentials />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contato" element={<Contact />} />
            
            {/* Solutions Routes */}
            <Route path="/solucoes/consultoria-estrategica" element={<ConsultoriaEstrategica />} />
            <Route path="/solucoes/desenvolvimento-cultura" element={<DesenvolvimentoCultura />} />
            <Route path="/solucoes/treinamentos-capacitacao" element={<TreinamentosCapacitacao />} />
            <Route path="/solucoes/gestao-pessoas" element={<GestaoPessoas />} />
            
            {/* Segments Routes */}
            <Route path="/segmentos/agronegocio" element={<Agronegocio />} />
            <Route path="/segmentos/alimentos-bebidas" element={<AlimentosBebidas />} />
            <Route path="/segmentos/energia" element={<Energia />} />
            <Route path="/segmentos/financeiro" element={<Financeiro />} />
            <Route path="/segmentos/varejo-farma" element={<VarejoFarma />} />
            <Route path="/segmentos/educacao" element={<Educacao />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
