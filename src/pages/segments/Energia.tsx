import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Leaf, BarChart3, CheckCircle } from 'lucide-react';

const Energia = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Zap className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Consultoria para Setor de <span className="text-primary">Energia</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soluções estratégicas para empresas do setor energético, com foco em eficiência e sustentabilidade
          </p>
        </div>

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