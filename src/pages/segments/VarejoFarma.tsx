import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Pill, Users, BarChart3, CheckCircle } from 'lucide-react';
import varejoFarmaHero from '@/assets/varejo-farma-hero.jpg';

const VarejoFarma = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="relative h-[500px] bg-gradient-to-r from-black/80 to-black/60 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${varejoFarmaHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <p className="text-lg font-medium mb-2 text-primary">Segmento</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              VAREJO FARMACÊUTICO
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              Excelência operacional e compliance rigoroso para o cuidado com a saúde da população
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
              <CardTitle>Gestão Farmacêutica</CardTitle>
              <CardDescription>
                Otimização de estoque, vendas e gestão farmacêutica especializada
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <Users className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Atendimento ao Cliente</CardTitle>
              <CardDescription>
                Treinamento especializado em atendimento farmacêutico
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <Pill className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Compliance Sanitário</CardTitle>
              <CardDescription>
                Adequação às normas da ANVISA e vigilância sanitária
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
                <h3 className="font-semibold mb-2">Gestão de Estoque</h3>
                <p className="text-muted-foreground">Otimização do giro de estoque e redução de perdas</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Compliance ANVISA</h3>
                <p className="text-muted-foreground">Adequação completa às normas sanitárias</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Atendimento Especializado</h3>
                <p className="text-muted-foreground">Treinamento em atendimento farmacêutico humanizado</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Gestão Financeira</h3>
                <p className="text-muted-foreground">Controle financeiro especializado para farmácias</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Fortaleça sua Farmácia</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Eleve o nível da sua farmácia com gestão profissional e atendimento de excelência
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

export default VarejoFarma;