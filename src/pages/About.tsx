import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Award, TrendingUp, Mail, MapPin, Phone, MessageSquare, Send, Heart, Lightbulb, Globe } from 'lucide-react';

const About = () => {
  const [activeSection, setActiveSection] = useState('quem-somos');

  const sections = [
    { id: 'quem-somos', label: 'Quem Somos' },
    { id: 'nossa-expertise', label: 'Nossa Expertise' },
    { id: 'trabalhe-conosco', label: 'Trabalhe Conosco' },
    { id: 'fale-conosco', label: 'Fale Conosco' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Propósito',
      description: 'Transformar organizações através do desenvolvimento estratégico de pessoas e processos.'
    },
    {
      icon: Users,
      title: 'Pessoas',
      description: 'Acreditamos que as pessoas são o centro de toda transformação organizacional eficaz.'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Buscamos a excelência em cada projeto, entregando resultados mensuráveis e sustentáveis.'
    },
    {
      icon: TrendingUp,
      title: 'Resultados',
      description: 'Focamos em gerar impacto real e crescimento consistente para nossos clientes.'
    }
  ];

  const expertise = [
    {
      icon: Target,
      title: 'Consultoria Estratégica',
      description: 'Planejamento e implementação de estratégias que transformam visões em resultados concretos.'
    },
    {
      icon: Heart,
      title: 'Desenvolvimento de Cultura',
      description: 'Construção de culturas organizacionais fortes que engajam e inspiram colaboradores.'
    },
    {
      icon: Users,
      title: 'Gestão de Pessoas',
      description: 'Soluções completas em RH que potencializam talentos e otimizam performance.'
    },
    {
      icon: Lightbulb,
      title: 'Treinamentos e Capacitação',
      description: 'Programas de desenvolvimento que elevam competências e resultados organizacionais.'
    }
  ];

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

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre a <span className="text-primary">Alçar Humà</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Especialistas em gestão estratégica e desenvolvimento humano
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center mb-16">
            <div className="bg-card rounded-lg p-2 shadow-card">
              <div className="flex flex-wrap gap-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`px-6 py-3 rounded-md font-medium transition-all ${
                      activeSection === section.id
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Quem Somos */}
        {activeSection === 'quem-somos' && (
          <div className="animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Nossa História e Missão
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    A <strong className="text-foreground">Alçar Humà – Gestão e Pessoas</strong> nasceu 
                    da visão de transformar organizações através do desenvolvimento estratégico de pessoas 
                    e processos. Acreditamos que o sucesso empresarial sustentável está intrinsecamente 
                    ligado ao desenvolvimento humano e à criação de culturas organizacionais sólidas.
                  </p>
                  <p>
                    Nossa abordagem combina metodologias comprovadas com inovação, sempre focando 
                    nas necessidades específicas de cada cliente. Trabalhamos lado a lado com lideranças 
                    para implementar mudanças que geram resultados mensuráveis e duradouros.
                  </p>
                  <p>
                    Com expertise em diversos setores, nossa equipe desenvolve soluções personalizadas 
                    que alinham estratégia, cultura e performance, criando ambientes onde pessoas e 
                    organizações prosperam juntas.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-border">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">100+</div>
                    <div className="text-sm text-muted-foreground">Projetos Realizados</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Empresas Transformadas</div>
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-2">
                              {value.title}
                            </h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Nossa Expertise */}
        {activeSection === 'nossa-expertise' && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Nossas Áreas de <span className="text-primary">Expertise</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Oferecemos soluções estratégicas completas para transformar sua organização
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {expertise.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-4">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="bg-muted rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Metodologia Comprovada
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Nossa abordagem combina diagnóstico preciso, planejamento estratégico, 
                implementação cuidadosa e monitoramento contínuo para garantir resultados sustentáveis.
              </p>
              <Button 
                size="lg"
                onClick={() => window.open('https://wa.me/5567996442404', '_blank')}
              >
                Conhecer Nossa Metodologia
              </Button>
            </div>
          </div>
        )}

        {/* Trabalhe Conosco */}
        {activeSection === 'trabalhe-conosco' && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Trabalhe <span className="text-primary">Conosco</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Faça parte de uma equipe que transforma organizações e desenvolve pessoas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
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

            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Oportunidades de Carreira
              </h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Estamos sempre em busca de profissionais talentosos que compartilhem nossa paixão 
                por desenvolvimento humano e transformação organizacional.
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
        )}

        {/* Fale Conosco */}
        {activeSection === 'fale-conosco' && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Fale <span className="text-primary">Conosco</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Entre em contato e descubra como podemos transformar sua organização
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Telefone</h3>
                  <p className="text-muted-foreground mb-4">Fale diretamente conosco</p>
                  <Button 
                    variant="outline"
                    onClick={() => window.open('tel:+5567996442404', '_self')}
                  >
                    (67) 99644-2404
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">WhatsApp</h3>
                  <p className="text-muted-foreground mb-4">Atendimento rápido e direto</p>
                  <Button 
                    onClick={() => window.open('https://wa.me/5567996442404', '_blank')}
                  >
                    Conversar Agora
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">E-mail</h3>
                  <p className="text-muted-foreground mb-4">Envie sua mensagem</p>
                  <Button 
                    variant="outline"
                    onClick={() => window.open('mailto:contato@alcarhumana.com.br', '_blank')}
                  >
                    Enviar E-mail
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Agende uma Consulta Gratuita
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Converse com nossos especialistas e descubra como nossas soluções 
                  podem impulsionar os resultados da sua empresa.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => window.open('https://wa.me/5567996442404', '_blank')}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Agendar Consulta
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('mailto:contato@alcarhumana.com.br', '_blank')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Solicitar Proposta
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;