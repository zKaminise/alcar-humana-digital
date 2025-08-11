import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'O Futuro da Gestão de Pessoas: Tendências para 2025',
      excerpt: 'Descubra as principais tendências que vão moldar a gestão de pessoas nos próximos anos e como se preparar para essas mudanças.',
      category: 'Gestão de Pessoas',
      author: 'Equipe Alçar Humà',
      date: '2024-11-15',
      readTime: '8 min',
      image: '/placeholder-blog-1.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Como Construir uma Cultura Organizacional de Alto Desempenho',
      excerpt: 'Estratégias práticas para desenvolver uma cultura que impulsiona resultados e engaja colaboradores.',
      category: 'Cultura Organizacional',
      author: 'Especialista em RH',
      date: '2024-11-08',
      readTime: '6 min',
      image: '/placeholder-blog-2.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Liderança Estratégica: Desenvolvendo Líderes para o Futuro',
      excerpt: 'Como identificar, desenvolver e reter líderes que serão essenciais para o crescimento da sua organização.',
      category: 'Liderança',
      author: 'Consultor Sênior',
      date: '2024-11-01',
      readTime: '10 min',
      image: '/placeholder-blog-3.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Metodologias Ágeis na Gestão de Pessoas',
      excerpt: 'Como aplicar conceitos de agilidade na gestão de pessoas para aumentar a produtividade e satisfação das equipes.',
      category: 'Metodologias',
      author: 'Consultor Ágil',
      date: '2024-10-25',
      readTime: '7 min',
      image: '/placeholder-blog-4.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'ROI em Treinamento: Como Medir o Retorno dos Investimentos',
      excerpt: 'Métricas e metodologias para avaliar o impacto real dos programas de capacitação na sua organização.',
      category: 'Treinamento',
      author: 'Analista de Dados',
      date: '2024-10-18',
      readTime: '9 min',
      image: '/placeholder-blog-5.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Transformação Digital e Gestão de Mudanças',
      excerpt: 'Estratégias para conduzir processos de transformação digital mantendo o engajamento das equipes.',
      category: 'Transformação Digital',
      author: 'Especialista em Mudanças',
      date: '2024-10-11',
      readTime: '12 min',
      image: '/placeholder-blog-6.jpg',
      featured: false
    }
  ];

  const categories = [
    'Todos',
    'Gestão de Pessoas',
    'Cultura Organizacional',
    'Liderança',
    'Metodologias',
    'Treinamento',
    'Transformação Digital'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('Todos');
  const [visiblePosts, setVisiblePosts] = React.useState(6);

  const filteredPosts = selectedCategory === 'Todos' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            Blog & Conteúdos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Conhecimento que <span className="text-primary">Transforma</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Acompanhe nossos insights sobre gestão, liderança e cultura organizacional. 
            Conteúdo especializado para impulsionar o crescimento da sua organização.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-primary text-primary-foreground" 
                : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {selectedCategory === 'Todos' && (
          <div className="mb-16">
            {blogPosts.filter(post => post.featured).map((post) => (
              <Card key={post.id} className="overflow-hidden shadow-elegant border-border">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Tag className="w-12 h-12 text-primary" />
                      </div>
                      <span className="text-lg font-semibold text-primary">Post em Destaque</span>
                    </div>
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(post.date)}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-muted-foreground mr-2" />
                        <span className="text-sm text-muted-foreground">{post.author}</span>
                        <span className="mx-2 text-muted-foreground">•</span>
                        <Clock className="w-4 h-4 text-muted-foreground mr-1" />
                        <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      </div>
                      
                      <Button className="bg-primary hover:bg-primary-dark text-primary-foreground group">
                        Ler Artigo
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts
            .filter(post => !post.featured || selectedCategory !== 'Todos')
            .slice(0, visiblePosts)
            .map((post) => (
            <Card key={post.id} className="overflow-hidden shadow-card border-border hover:shadow-elegant transition-all duration-300 group">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Tag className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary">{post.category}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  {formatDate(post.date)}
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="w-4 h-4 text-muted-foreground mr-1" />
                    <span className="text-xs text-muted-foreground">{post.author}</span>
                  </div>
                  
                  <Button size="sm" variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary group">
                    Ler Mais
                    <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {filteredPosts.length > visiblePosts && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setVisiblePosts(prev => prev + 6)}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Carregar Mais Artigos
            </Button>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Receba Nossos Insights Diretamente no seu E-mail
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Inscreva-se em nossa newsletter e receba conteúdos exclusivos sobre 
              gestão, liderança e desenvolvimento organizacional.
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary-dark text-primary-foreground px-6">
                Inscrever
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Não enviamos spam. Cancele a qualquer momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;