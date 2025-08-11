import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, TrendingUp, Users, CheckCircle } from 'lucide-react';

const ConsultoriaEstrategica = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Target className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Consultoria Estratégica</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Planejamento e implementação estratégica para transformar sua visão em resultados concretos
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <Target className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Planejamento Estratégico</CardTitle>
              <CardDescription>
                Definição de missão, visão, valores e objetivos estratégicos
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Análise de Mercado</CardTitle>
              <CardDescription>
                Estudos de mercado e análise de concorrência para posicionamento estratégico
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <Users className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Implementação</CardTitle>
              <CardDescription>
                Execução e acompanhamento de planos estratégicos com foco em resultados
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Process */}
        <div className="bg-muted rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Nossa Metodologia</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Diagnóstico</h3>
              <p className="text-sm text-muted-foreground">Análise completa da situação atual</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Planejamento</h3>
              <p className="text-sm text-muted-foreground">Desenvolvimento do plano estratégico</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Implementação</h3>
              <p className="text-sm text-muted-foreground">Execução das estratégias definidas</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Monitoramento</h3>
              <p className="text-sm text-muted-foreground">Acompanhamento e ajustes contínuos</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Benefícios</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Visão Clara do Futuro</h3>
                  <p className="text-muted-foreground">Definição de direcionamento estratégico alinhado aos objetivos</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Melhores Decisões</h3>
                  <p className="text-muted-foreground">Tomada de decisão baseada em dados e análises consistentes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Vantagem Competitiva</h3>
                  <p className="text-muted-foreground">Posicionamento diferenciado no mercado</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Resultados</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Crescimento Sustentável</h3>
                  <p className="text-muted-foreground">Expansão controlada e planejada dos negócios</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Otimização de Recursos</h3>
                  <p className="text-muted-foreground">Uso eficiente de recursos humanos e financeiros</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Maior Rentabilidade</h3>
                  <p className="text-muted-foreground">Aumento significativo dos resultados financeiros</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para Transformar sua Estratégia?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Vamos construir juntos o futuro da sua empresa com planejamento estratégico de excelência
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-primary-foreground"
            onClick={() => window.open('https://wa.me/5567996442404', '_blank')}
          >
            Iniciar Consultoria Estratégica
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConsultoriaEstrategica;