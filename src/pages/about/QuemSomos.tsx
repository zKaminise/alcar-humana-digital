import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const QuemSomos = () => {
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

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Quem <span className="text-primary">Somos</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça a história, missão e valores da Alçar Humà
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-slide-up">
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

            {/* Metrics */}
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

          {/* Values Grid */}
          <div className="grid gap-6 animate-fade-in">
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

        {/* Vision and Values Section */}
        <div className="bg-muted rounded-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Nossa <span className="text-primary">Visão</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ser a consultoria de referência em gestão estratégica e desenvolvimento humano, 
              reconhecida pela transformação sustentável de organizações.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Missão</h3>
              <p className="text-muted-foreground">
                Desenvolver soluções estratégicas que transformam organizações e potencializam pessoas.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Valores</h3>
              <p className="text-muted-foreground">
                Integridade, inovação, excelência e foco no desenvolvimento humano sustentável.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Compromisso</h3>
              <p className="text-muted-foreground">
                Entregar resultados mensuráveis e sustentáveis que geram valor real para clientes.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Pronto para Transformar sua Organização?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Descubra como nossas soluções estratégicas podem impulsionar 
            o crescimento e a performance da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://wa.me/5567996442404', '_blank')}
              className="bg-white text-primary hover:bg-neutral-light transition-colors px-8 py-3 rounded-lg font-semibold"
            >
              Conhecer Soluções
            </button>
            <button
              onClick={() => window.open('https://wa.me/5567996442404', '_blank')}
              className="border-2 border-white text-white hover:bg-white hover:text-primary transition-colors px-8 py-3 rounded-lg font-semibold"
            >
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuemSomos;