import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Heart, Users, Lightbulb, TrendingUp, Award } from 'lucide-react';

const NossaExpertise = () => {
  const expertise = [
    {
      icon: Target,
      title: 'Consultoria Estratégica',
      description: 'Planejamento e implementação de estratégias que transformam visões em resultados concretos.',
      features: ['Diagnóstico organizacional', 'Planejamento estratégico', 'Análise de mercado', 'Implementação e monitoramento']
    },
    {
      icon: Heart,
      title: 'Desenvolvimento de Cultura',
      description: 'Construção de culturas organizacionais fortes que engajam e inspiram colaboradores.',
      features: ['Diagnóstico cultural', 'Engajamento de equipes', 'Transformação cultural', 'Sustentação de mudanças']
    },
    {
      icon: Users,
      title: 'Gestão de Pessoas',
      description: 'Soluções completas em RH que potencializam talentos e otimizam performance.',
      features: ['Recrutamento e seleção', 'Avaliação de desempenho', 'Gestão de talentos', 'Clima organizacional']
    },
    {
      icon: Lightbulb,
      title: 'Treinamentos e Capacitação',
      description: 'Programas de desenvolvimento que elevam competências e resultados organizacionais.',
      features: ['Treinamentos técnicos', 'Desenvolvimento de liderança', 'Soft skills', 'Metodologias ativas']
    }
  ];

  const methodology = [
    {
      step: '01',
      title: 'Diagnóstico',
      description: 'Análise completa da situação atual da organização'
    },
    {
      step: '02',
      title: 'Planejamento',
      description: 'Desenvolvimento de estratégias customizadas'
    },
    {
      step: '03',
      title: 'Implementação',
      description: 'Execução cuidadosa das soluções definidas'
    },
    {
      step: '04',
      title: 'Monitoramento',
      description: 'Acompanhamento contínuo e ajustes necessários'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossa <span className="text-primary">Expertise</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluções estratégicas completas para transformar sua organização
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Expertise Areas */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Áreas de <span className="text-primary">Atuação</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos soluções integradas que abordam todos os aspectos do desenvolvimento organizacional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {item.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Methodology */}
        <div className="bg-muted rounded-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Nossa <span className="text-primary">Metodologia</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Processo estruturado que garante resultados consistentes e mensuráveis
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {methodology.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-card hover:shadow-elegant transition-all duration-300 text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Resultados Mensuráveis</h3>
              <p className="text-muted-foreground">
                Acompanhamento de indicadores que comprovam o sucesso das implementações
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-all duration-300 text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Qualidade Comprovada</h3>
              <p className="text-muted-foreground">
                Metodologias testadas e aprovadas por mais de 100 projetos realizados
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-all duration-300 text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Foco em Pessoas</h3>
              <p className="text-muted-foreground">
                Abordagem centrada no desenvolvimento humano e sustentabilidade das mudanças
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Conheça Nossa Metodologia na Prática
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Agende uma consulta gratuita e descubra como nossa expertise pode transformar sua organização
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary"
              size="lg"
              onClick={() => window.open('https://wa.me/5567996442404', '_blank')}
            >
              Agendar Consulta Gratuita
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.open('https://wa.me/5567996442404', '_blank')}
            >
              Solicitar Proposta
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NossaExpertise;