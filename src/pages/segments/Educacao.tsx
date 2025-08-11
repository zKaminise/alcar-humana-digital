import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, BookOpen, Users, CheckCircle } from 'lucide-react';
import educacaoHero from '@/assets/educacao-hero.jpg';

const Educacao = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="relative h-[500px] bg-gradient-to-r from-black/80 to-black/60 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${educacaoHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <p className="text-lg font-medium mb-2 text-primary">Segmento</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              EDUCAÇÃO
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              Transformação educacional através de gestão estratégica e metodologias inovadoras para o futuro
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Gestão Pedagógica</CardTitle>
              <CardDescription>
                Desenvolvimento de currículos e metodologias de ensino inovadoras
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <Users className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Gestão de Pessoas</CardTitle>
              <CardDescription>
                Desenvolvimento de equipes docentes e administrativas
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <GraduationCap className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Gestão Administrativa</CardTitle>
              <CardDescription>
                Otimização de processos administrativos e financeiros
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Benefits */}
        <div className="bg-muted rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Benefícios para Instituições de Ensino</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Qualidade do Ensino</h3>
                <p className="text-muted-foreground">Melhoria contínua dos processos pedagógicos</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Gestão Eficiente</h3>
                <p className="text-muted-foreground">Otimização de recursos e processos administrativos</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Desenvolvimento Docente</h3>
                <p className="text-muted-foreground">Capacitação contínua do corpo docente</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Satisfação do Aluno</h3>
                <p className="text-muted-foreground">Melhoria da experiência educacional</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Transforme sua Instituição de Ensino</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Eleve o padrão educacional com gestão profissional e metodologias inovadoras
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

export default Educacao;