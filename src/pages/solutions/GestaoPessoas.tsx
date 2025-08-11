import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserCheck, TrendingUp, CheckCircle } from 'lucide-react';

const GestaoPessoas = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Users className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Gestão de Pessoas</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soluções completas para RH que transformam a gestão de pessoas em vantagem competitiva
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <UserCheck className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Recrutamento e Seleção</CardTitle>
              <CardDescription>
                Processos estruturados para atrair e selecionar os melhores talentos
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Avaliação de Desempenho</CardTitle>
              <CardDescription>
                Sistemas de avaliação que promovem desenvolvimento e resultados
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <Users className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Gestão de Talentos</CardTitle>
              <CardDescription>
                Identificação, desenvolvimento e retenção de talentos-chave
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* HR Solutions */}
        <div className="bg-muted rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Soluções Completas de RH</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-background rounded-lg">
              <h3 className="font-semibold mb-2">Descrição de Cargos</h3>
              <p className="text-sm text-muted-foreground">Definição clara de funções e responsabilidades</p>
            </div>
            <div className="text-center p-4 bg-background rounded-lg">
              <h3 className="font-semibold mb-2">Plano de Carreira</h3>
              <p className="text-sm text-muted-foreground">Trilhas de desenvolvimento profissional</p>
            </div>
            <div className="text-center p-4 bg-background rounded-lg">
              <h3 className="font-semibold mb-2">Remuneração Estratégica</h3>
              <p className="text-sm text-muted-foreground">Estruturas de remuneração competitivas</p>
            </div>
            <div className="text-center p-4 bg-background rounded-lg">
              <h3 className="font-semibold mb-2">Pesquisa de Clima</h3>
              <p className="text-sm text-muted-foreground">Medição e melhoria do ambiente organizacional</p>
            </div>
            <div className="text-center p-4 bg-background rounded-lg">
              <h3 className="font-semibold mb-2">Onboarding</h3>
              <p className="text-sm text-muted-foreground">Integração eficaz de novos colaboradores</p>
            </div>
            <div className="text-center p-4 bg-background rounded-lg">
              <h3 className="font-semibold mb-2">Gestão de Benefícios</h3>
              <p className="text-sm text-muted-foreground">Pacotes de benefícios atrativos</p>
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
                  <h3 className="font-semibold mb-1">Maior Produtividade</h3>
                  <p className="text-muted-foreground">Colaboradores mais engajados e produtivos</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Redução de Turnover</h3>
                  <p className="text-muted-foreground">Diminuição significativa da rotatividade</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Melhor Clima</h3>
                  <p className="text-muted-foreground">Ambiente de trabalho mais saudável e positivo</p>
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
                  <h3 className="font-semibold mb-1">Atração de Talentos</h3>
                  <p className="text-muted-foreground">Employer branding fortalecido</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Compliance Trabalhista</h3>
                  <p className="text-muted-foreground">Conformidade com legislação vigente</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">ROI Comprovado</h3>
                  <p className="text-muted-foreground">Retorno mensurável dos investimentos em pessoas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Transforme sua Gestão de Pessoas</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Desenvolva uma gestão de RH estratégica que impulsiona resultados e engaja colaboradores
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-primary-foreground"
            onClick={() => window.open('https://wa.me/5567996442404', '_blank')}
          >
            Consultoria em Gestão de Pessoas
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GestaoPessoas;