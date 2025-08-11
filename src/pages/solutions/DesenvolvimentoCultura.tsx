import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Lightbulb, CheckCircle } from 'lucide-react';
import desenvolvimentoCulturaHero from '@/assets/desenvolvimento-cultura-hero.jpg';

const DesenvolvimentoCultura = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="relative h-[500px] bg-gradient-to-r from-black/80 to-black/60 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${desenvolvimentoCulturaHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <p className="text-lg font-medium mb-2 text-white/80">Solução</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              DESENVOLVIMENTO DE CULTURA
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              Transformação cultural sustentável que engaja colaboradores e fortalece a identidade organizacional
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <Heart className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Diagnóstico Cultural</CardTitle>
              <CardDescription>
                Análise da cultura atual e identificação de gaps e oportunidades
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <Users className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Engajamento</CardTitle>
              <CardDescription>
                Estratégias para aumentar o engajamento e a satisfação dos colaboradores
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <Lightbulb className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Transformação Cultural</CardTitle>
              <CardDescription>
                Implementação de mudanças culturais sustentáveis e duradouras
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Process */}
        <div className="bg-muted rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Processo de Transformação</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Avaliação</h3>
              <p className="text-sm text-muted-foreground">Diagnóstico da cultura atual</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Design</h3>
              <p className="text-sm text-muted-foreground">Definição da cultura desejada</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Implementação</h3>
              <p className="text-sm text-muted-foreground">Execução do plano de transformação</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Sustentação</h3>
              <p className="text-sm text-muted-foreground">Manutenção e evolução contínua</p>
            </div>
          </div>
        </div>

        {/* Key Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Áreas de Atuação</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Valores Organizacionais</h3>
                <p className="text-muted-foreground">Definição e disseminação de valores que guiam comportamentos</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Comunicação Interna</h3>
                <p className="text-muted-foreground">Melhoria dos canais e processos de comunicação</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Liderança</h3>
                <p className="text-muted-foreground">Desenvolvimento de líderes alinhados à cultura</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Reconhecimento</h3>
                <p className="text-muted-foreground">Sistemas de reconhecimento e recompensas</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Rituais e Símbolos</h3>
                <p className="text-muted-foreground">Criação de elementos que fortalecem a identidade</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Clima Organizacional</h3>
                <p className="text-muted-foreground">Melhoria do ambiente de trabalho e bem-estar</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Transforme a Cultura da sua Empresa</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Construa uma cultura organizacional forte que inspire, engaje e gere resultados excepcionais
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-primary-foreground"
            onClick={() => window.open('https://wa.me/5567996442404', '_blank')}
          >
            Iniciar Transformação Cultural
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DesenvolvimentoCultura;