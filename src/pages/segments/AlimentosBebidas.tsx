import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Coffee, Award, Shield, CheckCircle } from 'lucide-react';

const AlimentosBebidas = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Coffee className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Consultoria para <span className="text-primary">Alimentos e Bebidas</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soluções especializadas para a indústria alimentícia, com foco em qualidade, segurança e inovação
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <Shield className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Segurança Alimentar</CardTitle>
              <CardDescription>
                Implementação de sistemas HACCP e certificações de qualidade
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <Award className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Certificações</CardTitle>
              <CardDescription>
                ISO 22000, BRC, IFS e outras certificações do setor
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <Coffee className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Inovação de Produtos</CardTitle>
              <CardDescription>
                Desenvolvimento de novos produtos e melhoria contínua
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Benefits */}
        <div className="bg-muted rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Benefícios Específicos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Compliance Regulatório</h3>
                <p className="text-muted-foreground">Adequação às normas da ANVISA e órgãos reguladores</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Otimização de Processos</h3>
                <p className="text-muted-foreground">Melhoria da eficiência produtiva e redução de desperdícios</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Gestão de Qualidade</h3>
                <p className="text-muted-foreground">Implementação de sistemas robustos de controle de qualidade</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Rastreabilidade</h3>
                <p className="text-muted-foreground">Sistemas completos de rastreabilidade da cadeia produtiva</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Transforme sua Indústria Alimentícia</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Conte com nossa expertise para elevar a qualidade e segurança dos seus produtos
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-primary-foreground"
            onClick={() => window.open('https://wa.me/5567996442404', '_blank')}
          >
            Solicitar Consultoria
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlimentosBebidas;