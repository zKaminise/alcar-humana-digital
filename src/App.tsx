import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// New Pages
import QuemSomos from "./pages/QuemSomos";
import Parceiros from "./pages/Parceiros";
import Artigos from "./pages/Artigos";
import ArticleView from "./pages/ArticleView";
import SejaParceiroForm from "./pages/SejaParceiroForm";
import Solutions from "./pages/Solutions";
import Cases from "./pages/Cases";
import Differentials from "./pages/Differentials";

// Services Pages
import MapeamentoEstrategico from "./pages/services/MapeamentoEstrategico";
import DesenvolvimentoPessoal from "./pages/services/DesenvolvimentoPessoal";
import MentoriasConsultorias from "./pages/services/MentoriasConsultorias";
import PalestrasWorkshops from "./pages/services/PalestrasWorkshops";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-background">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/parceiros" element={<Parceiros />} />
            <Route path="/artigos" element={<Artigos />} />
            <Route path="/artigos/:id" element={<ArticleView />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/seja-parceiro" element={<SejaParceiroForm />} />
            <Route path="/solucoes" element={<Solutions />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/diferenciais" element={<Differentials />} />
            
            {/* Services Routes */}
            <Route path="/servicos/mapeamento-estrategico" element={<MapeamentoEstrategico />} />
            <Route path="/servicos/desenvolvimento-pessoal" element={<DesenvolvimentoPessoal />} />
            <Route path="/servicos/mentorias-consultorias" element={<MentoriasConsultorias />} />
            <Route path="/servicos/palestras-workshops" element={<PalestrasWorkshops />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
