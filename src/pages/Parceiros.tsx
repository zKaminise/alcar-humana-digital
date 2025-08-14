import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Handshake, Star, Users, TrendingUp, Mail, Building } from 'lucide-react';

const Parceiros = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nossos Parceiros
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Construindo relacionamentos sólidos e gerando valor mútuo
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios da Parceria */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que Ser Nosso Parceiro?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Juntos, criamos soluções mais robustas e geramos resultados extraordinários
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Relacionamentos Sólidos</h3>
                <p className="text-muted-foreground text-sm">
                  Construímos parcerias duradouras baseadas em confiança e resultados mútuos
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Excelência</h3>
                <p className="text-muted-foreground text-sm">
                  Padrão de qualidade elevado em todos os projetos e entregas
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Rede Colaborativa</h3>
                <p className="text-muted-foreground text-sm">
                  Acesso a uma rede qualificada de profissionais e oportunidades
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Crescimento Mútuo</h3>
                <p className="text-muted-foreground text-sm">
                  Oportunidades de desenvolvimento e expansão de negócios
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lista de Parceiros */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Empresas Parceiras
            </h2>
            <p className="text-xl text-muted-foreground">
              Organizações que confiam em nossa expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Card key={item} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center mb-4">
                    <Building className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Empresa Parceira {item}</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Setor de atuação
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seja um Parceiro */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Seja um Parceiro Alçar
              </h2>
              <p className="text-xl text-muted-foreground">
                Vamos construir algo extraordinário juntos
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Formulário de Parceria</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nome da Empresa</label>
                      <Input placeholder="Digite o nome da sua empresa" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Setor de Atuação</label>
                      <Input placeholder="Ex: Tecnologia, Saúde, Educação..." />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nome do Contato</label>
                      <Input placeholder="Seu nome completo" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Cargo</label>
                      <Input placeholder="Seu cargo na empresa" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">E-mail</label>
                      <Input type="email" placeholder="seu@email.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Telefone</label>
                      <Input placeholder="(00) 00000-0000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Como podemos colaborar?</label>
                    <Textarea 
                      placeholder="Descreva como nossa parceria pode gerar valor mútuo..."
                      rows={5}
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Proposta de Parceria
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parceiros;