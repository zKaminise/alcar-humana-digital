import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, CheckCircle, Users, TrendingUp, Map, Lightbulb } from 'lucide-react';

const MapeamentoEstrategico = () => {
  const benefits = [
    "Clareza na direção estratégica da organização",
    "Alinhamento entre equipes e objetivos",
    "Identificação de oportunidades de melhoria",
    "Otimização de recursos e processos",
    "Melhoria na tomada de decisões",
    "Aumento da competitividade no mercado"
  ];

  const process = [
    {
      icon: Target,
      title: "Diagnóstico Organizacional",
      description: "Análise completa da situação atual da empresa, identificando pontos fortes e oportunidades."
    },
    {
      icon: Map,
      title: "Mapeamento de Processos",
      description: "Identificação e documentação dos principais processos organizacionais."
    },
    {
      icon: Lightbulb,
      title: "Definição Estratégica",
      description: "Estabelecimento de objetivos claros e estratégias para alcançá-los."
    },
    {
      icon: TrendingUp,
      title: "Plano de Implementação",
      description: "Criação de um roteiro detalhado para execução das estratégias definidas."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white">Serviços</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mapeamento Estratégico
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Planejamento estratégico e análise organizacional para impulsionar resultados
            </p>
            <Button size="lg" variant="secondary">
              Solicitar Consultoria
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre o Serviço */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                O que é Mapeamento Estratégico?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  O Mapeamento Estratégico é uma metodologia abrangente que ajuda organizações 
                  a visualizar, compreender e otimizar seus processos, estratégias e objetivos. 
                  É uma ferramenta fundamental para alinhar toda a empresa em direção aos mesmos goals.
                </p>
                <p>
                  Nossa abordagem combina análise técnica profunda com insights práticos, 
                  garantindo que cada estratégia seja não apenas viável, mas também sustentável 
                  e orientada para resultados concretos.
                </p>
                <p>
                  Através deste processo, sua organização ganha clareza sobre onde está, 
                  onde quer chegar e qual o melhor caminho para alcançar seus objetivos 
                  de forma eficiente e eficaz.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 flex items-center justify-center">
                <Target className="w-32 h-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossa Metodologia
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Um processo estruturado e comprovado para transformar a estratégia da sua organização
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="aspect-square w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 flex items-center justify-center">
                <TrendingUp className="w-32 h-32 text-primary" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Benefícios do Mapeamento
              </h2>
              <p className="text-muted-foreground mb-8">
                O Mapeamento Estratégico traz resultados tangíveis e duradouros para sua organização:
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Público-Alvo */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Para Quem é Este Serviço?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ideal para organizações que buscam clareza estratégica e resultados sustentáveis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Empresas em Crescimento</h3>
                <p className="text-muted-foreground">
                  Organizações que precisam estruturar seus processos e estratégias 
                  para sustentar o crescimento.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Empresas em Transição</h3>
                <p className="text-muted-foreground">
                  Companhias passando por mudanças significativas que precisam 
                  realinhar sua estratégia.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Lideranças Visionárias</h3>
                <p className="text-muted-foreground">
                  Líderes que buscam ferramentas para tomar decisões mais 
                  assertivas e estratégicas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pronto para Mapear o Futuro da Sua Empresa?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Entre em contato e descubra como nosso Mapeamento Estratégico pode 
              transformar os resultados da sua organização.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Solicitar Consultoria
              </Button>
              <Button size="lg" variant="outline">
                Agendar Reunião
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MapeamentoEstrategico;