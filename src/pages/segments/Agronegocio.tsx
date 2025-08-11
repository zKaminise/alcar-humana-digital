import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sprout, TrendingUp, Users, CheckCircle } from 'lucide-react';
import agronegocioHero from '@/assets/agronegocio-hero.jpg';

const Agronegocio = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="relative h-[500px] bg-gradient-to-r from-black/80 to-black/60 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${agronegocioHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <p className="text-lg font-medium mb-2 text-primary">Segmento</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AGRONEGÓCIO
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              Maturidade na gestão dos negócios para um setor robusto e preparado frente às tendências e volatilidades do mercado
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Gestão da Produção</CardTitle>
              <CardDescription>
                Otimização de processos produtivos e melhoria da eficiência operacional
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <Users className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Gestão de Pessoas</CardTitle>
              <CardDescription>
                Desenvolvimento de equipes rurais e liderança no campo
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Sustentabilidade</CardTitle>
              <CardDescription>
                Práticas sustentáveis e certificações ambientais
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Benefits */}
        <div className="bg-muted rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Benefícios para o Agronegócio</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Aumento da Produtividade</h3>
                <p className="text-muted-foreground">Implementação de processos otimizados para maximizar resultados</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Redução de Custos</h3>
                <p className="text-muted-foreground">Análise e otimização de custos operacionais</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Gestão Profissional</h3>
                <p className="text-muted-foreground">Profissionalização da gestão rural e familiar</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Sustentabilidade</h3>
                <p className="text-muted-foreground">Práticas ambientalmente responsáveis</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para Transformar seu Agronegócio?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato e descubra como podemos ajudar a maximizar seus resultados no campo
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-primary-foreground"
            onClick={() => window.open('https://wa.me/5567996442404', '_blank')}
          >
            Falar com Especialista
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Agronegocio;