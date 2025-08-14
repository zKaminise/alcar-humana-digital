import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Handshake, BarChart3, Users, Award, Mail, Building, ArrowRight } from 'lucide-react';
import logoEmpresa1 from '@/assets/logo-empresa-1.jpg';
import logoEmpresa2 from '@/assets/logo-empresa-2.jpg';
import logoEmpresa3 from '@/assets/logo-empresa-3.jpg';
import logoEmpresa4 from '@/assets/logo-empresa-4.jpg';

const Parceiros = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-black/80 to-black/60 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/src/assets/parceiros-hero.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative text-white">
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
        </div>
      </section>

      {/* Por que ser um Parceiro Alçar */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Por que ser um Parceiro Alçar?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Oferecemos uma parceria estratégica que vai além do tradicional, criando
              oportunidades de crescimento mútuo e impacto conjunto.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="text-center space-y-4 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto">
                  <Handshake className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mt-4">Parcerias Estratégicas</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Construímos relacionamentos duradouros baseados em confiança mútua e resultados compartilhados.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center space-y-4 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-300/10 rounded-full flex items-center justify-center mx-auto">
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mt-4">Crescimento Conjunto</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Nossos parceiros crescem conosco através de oportunidades exclusivas e projetos colaborativos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center space-y-4 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-300/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mt-4">Rede Especializada</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Acesso a uma rede qualificada de profissionais e empresas do setor de desenvolvimento humano.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center space-y-4 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-emerald-300/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mt-4">Certificações e Reconhecimento</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Oferecemos certificações e reconhecimento oficial para parceiros qualificados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Parceiros Atuais */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Parceiros Atuais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça as organizações que já fazem parte da nossa rede de parceiros.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={logoEmpresa1} 
                    alt="Instituto de Liderança"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Instituto de Liderança Empresarial
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Parceria estratégica em programas de desenvolvimento de liderança.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={logoEmpresa2} 
                    alt="Consultoria Estratégica"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Consultoria Estratégica Brasil
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Colaboração em projetos de mapeamento estratégico empresarial.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={logoEmpresa3} 
                    alt="Centro de Desenvolvimento"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Centro de Desenvolvimento Profissional
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Parceria em cursos e workshops de capacitação profissional.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={logoEmpresa4} 
                    alt="Grupo Inovação"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Grupo Inovação Corporativa
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Projetos conjuntos em transformação digital e inovação.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seja um Parceiro Alçar */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Seja um Parceiro Alçar
              </h2>
              <p className="text-lg text-muted-foreground">
                Interessado em fazer parte da nossa rede? Preencha o formulário abaixo e entraremos em contato para discutir oportunidades de parceria.
              </p>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Nome Completo <span className="text-destructive">*</span>
                      </label>
                      <Input placeholder="Seu nome completo" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Empresa <span className="text-destructive">*</span>
                      </label>
                      <Input placeholder="Nome da sua empresa" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        E-mail <span className="text-destructive">*</span>
                      </label>
                      <Input type="email" placeholder="seu@email.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Telefone <span className="text-destructive">*</span>
                      </label>
                      <Input placeholder="(11) 99999-9999" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Cargo/Função
                    </label>
                    <Input placeholder="Seu cargo na empresa" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Área de Interesse para Parceria <span className="text-destructive">*</span>
                    </label>
                    <Textarea 
                      placeholder="Descreva qual área de parceria mais lhe interessa e como podemos trabalhar juntos..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Informações da Empresa
                    </label>
                    <Textarea 
                      placeholder="Conte-nos mais sobre sua empresa, área de atuação, número de funcionários, etc."
                      rows={4}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Button className="w-full" size="lg">
                      <Mail className="w-4 h-4 mr-2" />
                      Enviar Proposta de Parceria
                    </Button>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white" size="lg">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Agendar Reunião
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    * Campos obrigatórios. Retornaremos em até 24 horas.
                  </p>
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