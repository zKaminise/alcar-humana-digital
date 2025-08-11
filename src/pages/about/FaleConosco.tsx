import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MessageSquare, Mail, MapPin, Clock, Send } from 'lucide-react';

const FaleConosco = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefone',
      description: 'Fale diretamente conosco',
      contact: '(67) 99644-2404',
      action: () => window.open('tel:+5567996442404', '_self')
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      description: 'Atendimento rápido e direto',
      contact: 'Conversar Agora',
      action: () => window.open('https://wa.me/5567996442404', '_blank')
    },
    {
      icon: Mail,
      title: 'E-mail',
      description: 'Envie sua mensagem',
      contact: 'contato@alcarhumana.com.br',
      action: () => window.open('mailto:contato@alcarhumana.com.br', '_blank')
    }
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: 'Localização',
      info: 'Campo Grande, MS\nBrasil'
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      info: 'Segunda a Sexta\n08:00 às 18:00'
    }
  ];

  const services = [
    {
      title: 'Consultoria Estratégica',
      description: 'Planejamento e implementação de estratégias organizacionais'
    },
    {
      title: 'Desenvolvimento de Cultura',
      description: 'Transformação e fortalecimento da cultura organizacional'
    },
    {
      title: 'Gestão de Pessoas',
      description: 'Soluções completas para gestão de recursos humanos'
    },
    {
      title: 'Treinamentos',
      description: 'Programas de capacitação e desenvolvimento profissional'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Fale <span className="text-primary">Conosco</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Entre em contato e descubra como podemos transformar sua organização
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Contact Methods */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Como <span className="text-primary">Entrar em Contato</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Escolha a forma de contato que for mais conveniente para você
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{method.title}</h3>
                    <p className="text-muted-foreground mb-4">{method.description}</p>
                    <Button 
                      onClick={method.action}
                      className={method.title === 'WhatsApp' ? 'w-full' : 'w-full'}
                      variant={method.title === 'WhatsApp' ? 'default' : 'outline'}
                    >
                      {method.contact}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Office Info */}
          <div className="grid md:grid-cols-2 gap-8">
            {officeInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {info.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                          {info.info}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Services Overview */}
        <div className="bg-muted rounded-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça as principais soluções que oferecemos para sua organização
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation CTA */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">
            Agende uma Consulta Gratuita
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Converse com nossos especialistas e descubra como nossas soluções 
            podem impulsionar os resultados da sua empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary"
              size="lg"
              onClick={() => window.open('https://wa.me/5567996442404', '_blank')}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Agendar Consulta
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.open('mailto:contato@alcarhumana.com.br', '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Solicitar Proposta
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Como funciona a primeira consulta?
              </h3>
              <p className="text-muted-foreground mb-6">
                A primeira consulta é gratuita e tem como objetivo entender suas necessidades 
                e apresentar como nossas soluções podem ajudar sua organização.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Qual o prazo para retorno?
              </h3>
              <p className="text-muted-foreground mb-6">
                Respondemos todos os contatos em até 24 horas. Para WhatsApp, 
                o atendimento é ainda mais rápido, geralmente em poucas horas.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Atendem empresas de que porte?
              </h3>
              <p className="text-muted-foreground">
                Atendemos desde pequenas empresas até grandes corporações, 
                adaptando nossas soluções ao porte e necessidades específicas de cada cliente.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Fazem projetos remotos?
              </h3>
              <p className="text-muted-foreground">
                Sim, oferecemos projetos presenciais, remotos e híbridos, 
                adaptando-nos às necessidades e preferências de cada cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaleConosco;