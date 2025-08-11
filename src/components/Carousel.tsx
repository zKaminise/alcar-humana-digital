import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle, Users, Target, TrendingUp } from 'lucide-react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Gestão de Pessoas com Propósito, Estratégia e Resultados",
      subtitle: "Transformando Organizações",
      description: "Desenvolvemos soluções estratégicas que alinham pessoas, processos e resultados para impulsionar o crescimento sustentável da sua organização.",
      buttonText: "Conheça Nossas Soluções",
      buttonLink: "/solucoes",
      background: "from-primary to-primary-dark",
      icon: Target,
      stats: { number: "15+", label: "Anos de Experiência" }
    },
    {
      id: 2,
      title: "Cultura Organizacional que Engaja e Transforma",
      subtitle: "Desenvolvimento Corporativo",
      description: "Criamos culturas organizacionais sólidas que engajam colaboradores e impulsionam a performance, gerando resultados excepcionais e crescimento sustentável.",
      buttonText: "Ver Cases de Sucesso",
      buttonLink: "/cases",
      background: "from-secondary to-secondary-light",
      icon: Users,
      stats: { number: "100+", label: "Empresas Transformadas" }
    },
    {
      id: 3,
      title: "Metodologia Própria com Resultados Comprovados",
      subtitle: "Excelência em Consultoria",
      description: "Nossa metodologia exclusiva combina diagnóstico organizacional, planejamento estratégico e implementação focada em resultados mensuráveis.",
      buttonText: "Conheça a Metodologia",
      buttonLink: "/diferenciais",
      background: "from-primary-dark to-secondary",
      icon: TrendingUp,
      stats: { number: "95%", label: "Taxa de Sucesso" }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animation */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].background} transition-all duration-1000`} />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content */}
          <div className="text-white animate-fade-in" key={currentSlide}>
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6 backdrop-blur-sm">
              <CheckCircle className="w-4 h-4 mr-2" />
              {slides[currentSlide].subtitle}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            
            <p className="text-xl mb-8 leading-relaxed opacity-90 max-w-2xl">
              {slides[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                asChild
                className="bg-white text-primary hover:bg-neutral-light group"
              >
                <a href={slides[currentSlide].buttonLink}>
                  {slides[currentSlide].buttonText}
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <a href="/contato">
                  Fale Conosco
                </a>
              </Button>
            </div>

            {/* Current slide stat */}
            <div className="flex items-center space-x-4 pt-8 border-t border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                {React.createElement(slides[currentSlide].icon, {
                  className: "w-6 h-6 text-white"
                })}
              </div>
              <div>
                <div className="text-2xl font-bold">{slides[currentSlide].stats.number}</div>
                <div className="text-sm opacity-80">{slides[currentSlide].stats.label}</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-slide-up" key={`visual-${currentSlide}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto backdrop-blur-sm">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      {React.createElement(slides[currentSlide].icon, {
                        className: "w-8 h-8 text-primary"
                      })}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {slides[currentSlide].subtitle}
                  </h3>
                  <p className="text-white/80">
                    {slides[currentSlide].stats.label}
                  </p>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white/20 backdrop-blur-sm rounded-lg shadow-xl p-4 border border-white/30">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-white">Consultoria Ativa</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white/20 backdrop-blur-sm rounded-lg shadow-xl p-4 border border-white/30">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">24/7</div>
                  <div className="text-xs text-white/80">Suporte</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all z-20"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all z-20"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-white transition-all duration-8000 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Carousel;