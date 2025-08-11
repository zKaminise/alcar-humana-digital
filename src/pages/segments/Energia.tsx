import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Leaf, BarChart3, CheckCircle } from 'lucide-react';
import energiaHero from '@/assets/energia-hero.jpg';

const Energia = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="relative h-[500px] bg-gradient-to-r from-black/80 to-black/60 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${energiaHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <p className="text-lg font-medium mb-2 text-primary">Segmento</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              ENERGIA
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              Liderança em sustentabilidade e eficiência energética para o futuro do setor
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <BarChart3 className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Eficiência Energética</CardTitle>
              <CardDescription>
                Otimização do consumo e redução de custos operacionais
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <Leaf className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Energias Renováveis</CardTitle>
              <CardDescription>
                Transição para fontes sustentáveis e limpas de energia
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <Zap className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Gestão de Projetos</CardTitle>
              <CardDescription>
                Gerenciamento completo de projetos energéticos
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Benefits */}
        <div className="bg-muted rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Vantagens Competitivas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Redução de Custos</h3>
                <p className="text-muted-foreground">Otimização do consumo energético e redução de despesas</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Sustentabilidade</h3>
                <p className="text-muted-foreground">Implementação de práticas ambientalmente responsáveis</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Compliance Regulatório</h3>
                <p className="text-muted-foreground">Adequação às normas da ANEEL e órgãos reguladores</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Inovação Tecnológica</h3>
                <p className="text-muted-foreground">Implementação de tecnologias avançadas no setor</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Energize seu Negócio</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Maximize a eficiência energética da sua empresa com nossas soluções especializadas
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-primary-foreground"
            onClick={() => window.open('https://wa.me/5567996442404', '_blank')}
          >
            Consultar Especialista
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Energia;