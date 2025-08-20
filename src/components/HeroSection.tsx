import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-elegant" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 animate-bounce-in">
              <CheckCircle className="w-4 h-4 mr-2" />
              Especialistas em Gestão Estratégica
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-slide-up animate-stagger-1">
              Gestão de Pessoas com{' '}
              <span className="text-primary">Propósito</span>,{' '}
              <span className="text-secondary">Estratégia</span>{' '}
              e <span className="text-primary">Resultados</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in animate-stagger-2">
              Transformamos organizações através de soluções estratégicas em gestão de negócios e pessoas. 
              Desenvolvimento corporativo focado em cultura, performance e crescimento sustentável.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-scale-in animate-stagger-3">
              <Button
                size="lg"
                onClick={() => scrollToSection('#solucoes')}
                className="bg-primary hover:bg-primary-dark text-primary-foreground group btn-hover btn-primary-animated"
              >
                Conheça Nossas Soluções
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('#contato')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground btn-hover"
              >
                Fale Conosco
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border animate-fade-in animate-stagger-4">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-secondary">100+</div>
                <div className="text-sm text-muted-foreground">Empresas Atendidas</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Satisfação dos Clientes</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-right">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant animate-scale-in">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto animate-bounce-in animate-stagger-1">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 animate-fade-in animate-stagger-2">Liderança Estratégica</h3>
                  <p className="text-muted-foreground animate-fade-in animate-stagger-3">Desenvolvendo pessoas e transformando organizações</p>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-card rounded-lg shadow-card p-4 border border-border animate-slide-left animate-stagger-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Consultoria Ativa</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-card rounded-lg shadow-card p-4 border border-border animate-slide-right animate-stagger-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">24/7</div>
                  <div className="text-xs text-muted-foreground">Suporte</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <button
            onClick={() => scrollToSection('#sobre')}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;