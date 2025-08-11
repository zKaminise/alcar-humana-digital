import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, TrendingUp, Users, Award, Send, MessageSquare, Heart, Lightbulb } from 'lucide-react';

const TrabalheConosco = () => {
  const benefits = [
    {
      icon: Globe,
      title: 'Ambiente Inovador',
      description: 'Trabalhe em projetos desafiadores que transformam organizações de diversos setores.'
    },
    {
      icon: TrendingUp,
      title: 'Crescimento Profissional',
      description: 'Oportunidades de desenvolvimento contínuo e progressão na carreira.'
    },
    {
      icon: Users,
      title: 'Equipe Colaborativa',
      description: 'Faça parte de uma equipe experiente e apaixonada por desenvolvimento humano.'
    },
    {
      icon: Award,
      title: 'Projetos de Impacto',
      description: 'Participe de transformações reais que geram resultados mensuráveis para clientes.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Paixão pelo Desenvolvimento',
      description: 'Buscamos pessoas que compartilham nossa paixão por desenvolver pessoas e organizações.'
    },
    {
      icon: Lightbulb,
      title: 'Mentalidade Inovadora',
      description: 'Valorizamos profissionais que trazem ideias criativas e soluções inovadoras.'
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Priorizamos o trabalho em equipe e a capacidade de construir relacionamentos sólidos.'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Buscamos profissionais comprometidos com a entrega de resultados de alta qualidade.'
    }
  ];

  const positions = [
    {
      title: 'Consultor(a) Sênior',
      type: 'Presencial/Híbrido',
      description: 'Experiência em consultoria organizacional e gestão de projetos estratégicos.',
      requirements: ['Graduação em Administração, Psicologia ou áreas afins', 'Experiência mínima de 5 anos em consultoria', 'Conhecimento em metodologias ágeis']
    },
    {
      title: 'Analista de RH',
      type: 'Presencial',
      description: 'Suporte em projetos de gestão de pessoas e desenvolvimento organizacional.',
      requirements: ['Graduação em Psicologia ou RH', 'Experiência em recrutamento e seleção', 'Conhecimento em avaliação de desempenho']
    },
    {
      title: 'Coordenador(a) de Treinamentos',
      type: 'Híbrido',
      description: 'Desenvolvimento e coordenação de programas de capacitação e treinamento.',
      requirements: ['Graduação em áreas correlatas', 'Experiência em educação corporativa', 'Habilidades de facilitação']
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Trabalhe <span className="text-primary">Conosco</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Faça parte de uma equipe que transforma organizações e desenvolve pessoas
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Why Join Us */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Por que trabalhar na <span className="text-primary">Alçar Humà?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos um ambiente de crescimento, desafios estimulantes e a oportunidade de fazer a diferença
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-muted rounded-2xl p-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              O que <span className="text-primary">Valorizamos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Buscamos profissionais que se identifiquem com nossos valores e cultura
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center p-6 bg-background rounded-lg">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Oportunidades <span className="text-primary">Abertas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Confira nossas vagas atuais e candidate-se à que melhor se adequa ao seu perfil
            </p>
          </div>

          <div className="grid gap-6">
            {positions.map((position, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="mb-6 lg:mb-0">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-xl font-semibold text-foreground">
                          {position.title}
                        </h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {position.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {position.description}
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">Requisitos:</p>
                        <ul className="space-y-1">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Button 
                        onClick={() => window.open('mailto:carreiras@alcarhumana.com.br', '_blank')}
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Candidatar-se
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => window.open('https://wa.me/5567996442404', '_blank')}
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Saber Mais
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Não encontrou a vaga ideal?
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Estamos sempre em busca de profissionais talentosos. Envie seu currículo e 
            entraremos em contato quando surgir uma oportunidade que combine com seu perfil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary"
              size="lg"
              onClick={() => window.open('mailto:carreiras@alcarhumana.com.br', '_blank')}
            >
              <Send className="w-4 h-4 mr-2" />
              Enviar Currículo
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.open('https://wa.me/5567996442404', '_blank')}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Falar com RH
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrabalheConosco;