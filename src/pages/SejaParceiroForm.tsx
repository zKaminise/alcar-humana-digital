import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Handshake, Mail, Phone, MapPin, Building } from 'lucide-react';

const SejaParceiroForm = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Handshake className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Seja Nosso Parceiro
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Juntos, podemos transformar mais organizações e desenvolver mais pessoas
            </p>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Informações sobre Parceria */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Por que Ser Nosso Parceiro?
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Building className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Rede de Oportunidades</h3>
                      <p className="text-muted-foreground">
                        Acesso a uma rede qualificada de clientes e projetos em diversos segmentos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Handshake className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Colaboração Estratégica</h3>
                      <p className="text-muted-foreground">
                        Parcerias estratégicas que potencializam competências e resultados.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Suporte Especializado</h3>
                      <p className="text-muted-foreground">
                        Equipe dedicada para apoiar o desenvolvimento da parceria.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-4">Entre em Contato</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">(67) 99644-2404</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">parceiros@alcarhuma.com.br</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Campo Grande, MS</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulário */}
              <Card>
                <CardHeader>
                  <CardTitle>Formulário de Parceria</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nome da Empresa *</label>
                      <Input placeholder="Digite o nome da sua empresa" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Setor de Atuação *</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o setor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tecnologia">Tecnologia</SelectItem>
                          <SelectItem value="saude">Saúde</SelectItem>
                          <SelectItem value="educacao">Educação</SelectItem>
                          <SelectItem value="financeiro">Financeiro</SelectItem>
                          <SelectItem value="varejo">Varejo</SelectItem>
                          <SelectItem value="industria">Indústria</SelectItem>
                          <SelectItem value="agronegocio">Agronegócio</SelectItem>
                          <SelectItem value="servicos">Serviços</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Nome do Contato *</label>
                        <Input placeholder="Seu nome completo" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Cargo *</label>
                        <Input placeholder="Seu cargo na empresa" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">E-mail *</label>
                        <Input type="email" placeholder="seu@email.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Telefone *</label>
                        <Input placeholder="(00) 00000-0000" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Tipo de Parceria</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo de parceria" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fornecedor">Fornecedor de Serviços</SelectItem>
                          <SelectItem value="consultor">Consultor Associado</SelectItem>
                          <SelectItem value="indicacao">Programa de Indicação</SelectItem>
                          <SelectItem value="estrategica">Parceria Estratégica</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Descrição da Proposta *</label>
                      <Textarea 
                        placeholder="Descreva como nossa parceria pode gerar valor mútuo, suas principais competências e expectativas..."
                        rows={5}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Experiência Relevante</label>
                      <Textarea 
                        placeholder="Conte sobre sua experiência em gestão de pessoas, consultoria ou áreas relacionadas..."
                        rows={3}
                      />
                    </div>

                    <Button className="w-full" size="lg">
                      <Mail className="w-4 h-4 mr-2" />
                      Enviar Proposta de Parceria
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      * Campos obrigatórios. Entraremos em contato em até 48 horas.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SejaParceiroForm;