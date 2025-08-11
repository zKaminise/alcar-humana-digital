import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, TrendingUp, Shield, CheckCircle } from 'lucide-react';

const Financeiro = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <DollarSign className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Consultoria para Setor <span className="text-primary">Financeiro</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soluções especializadas para instituições financeiras, com foco em compliance, gestão de riscos e inovação
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <Shield className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Gestão de Riscos</CardTitle>
              <CardDescription>
                Implementação de frameworks de gestão de riscos financeiros
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Compliance Bancário</CardTitle>
              <CardDescription>
                Adequação às normas do Banco Central e órgãos reguladores
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <DollarSign className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Transformação Digital</CardTitle>
              <CardDescription>
                Modernização de processos e implementação de fintechs
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Benefits */}
        <div className="bg-muted rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Diferenciais no Setor Financeiro</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Compliance Regulatório</h3>
                <p className="text-muted-foreground">Adequação completa às normas BACEN, CVM e órgãos reguladores</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Gestão de Riscos</h3>
                <p className="text-muted-foreground">Implementação de modelos avançados de análise de risco</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Eficiência Operacional</h3>
                <p className="text-muted-foreground">Otimização de processos e redução de custos operacionais</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Inovação Digital</h3>
                <p className="text-muted-foreground">Implementação de soluções tecnológicas inovadoras</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Potencialize sua Instituição Financeira</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Navegue com segurança no complexo ambiente regulatório financeiro
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-primary-foreground"
            onClick={() => window.open('https://wa.me/5567996442404', '_blank')}
          >
            Falar com Consultor
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Financeiro;