import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, Award, CheckCircle } from 'lucide-react';

const TreinamentosCapacitacao = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <BookOpen className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Treinamentos e Capacitação</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Programas de desenvolvimento personalizados para potencializar o desempenho de pessoas e equipes
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Treinamentos Técnicos</CardTitle>
              <CardDescription>
                Capacitação em habilidades técnicas específicas para cada área
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <Users className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Desenvolvimento de Liderança</CardTitle>
              <CardDescription>
                Formação de líderes eficazes e inspiradores
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <Award className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Soft Skills</CardTitle>
              <CardDescription>
                Desenvolvimento de competências comportamentais e interpessoais
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Training Programs */}
        <div className="bg-muted rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Programas de Treinamento</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-background rounded-lg">
              <h3 className="font-semibold mb-2">Liderança Executiva</h3>
              <p className="text-sm text-muted-foreground">Para C-Level e alta gestão</p>
            </div>
            <div className="text-center p-4 bg-background rounded-lg">
              <h3 className="font-semibold mb-2">Gestão de Equipes</h3>
              <p className="text-sm text-muted-foreground">Para gerentes e supervisores</p>
            </div>
            <div className="text-center p-4 bg-background rounded-lg">
              <h3 className="font-semibold mb-2">Vendas e Negociação</h3>
              <p className="text-sm text-muted-foreground">Para equipes comerciais</p>
            </div>
            <div className="text-center p-4 bg-background rounded-lg">
              <h3 className="font-semibold mb-2">Atendimento ao Cliente</h3>
              <p className="text-sm text-muted-foreground">Para equipes de front-office</p>
            </div>
            <div className="text-center p-4 bg-background rounded-lg">
              <h3 className="font-semibold mb-2">Comunicação Eficaz</h3>
              <p className="text-sm text-muted-foreground">Para todos os níveis</p>
            </div>
            <div className="text-center p-4 bg-background rounded-lg">
              <h3 className="font-semibold mb-2">Gestão do Tempo</h3>
              <p className="text-sm text-muted-foreground">Produtividade e organização</p>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Nossa Metodologia</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Diagnóstico de Necessidades</h3>
                  <p className="text-muted-foreground">Identificação precisa das lacunas de competências</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Conteúdo Customizado</h3>
                  <p className="text-muted-foreground">Desenvolvimento de conteúdo específico para sua realidade</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Metodologias Ativas</h3>
                  <p className="text-muted-foreground">Uso de técnicas modernas e participativas de ensino</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Formatos Disponíveis</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Presencial</h3>
                  <p className="text-muted-foreground">Treinamentos in-company com máxima interação</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Online</h3>
                  <p className="text-muted-foreground">Plataforma digital para maior flexibilidade</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Híbrido</h3>
                  <p className="text-muted-foreground">Combinação do melhor dos dois mundos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Invista no Desenvolvimento da sua Equipe</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Capacite seus colaboradores com treinamentos de alta qualidade e impacto mensurável
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-primary-foreground"
            onClick={() => window.open('https://wa.me/5567996442404', '_blank')}
          >
            Solicitar Proposta de Treinamento
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TreinamentosCapacitacao;