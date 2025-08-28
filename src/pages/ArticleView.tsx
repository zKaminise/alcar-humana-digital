import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, User, Clock, BookOpen } from 'lucide-react';
import { getArticleById } from '@/data/articlesData';

const ArticleView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const article = getArticleById(Number(id));

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Artigo não encontrado</h1>
          <p className="text-muted-foreground mb-6">O artigo que você procura não existe.</p>
          <Button onClick={() => navigate('/artigos')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Artigos
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="bg-muted/50 border-b border-border pt-20">
        <div className="container mx-auto px-4 py-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/artigos')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Artigos
          </Button>
        </div>
      </div>

      {/* Article content */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Article header */}
          <header className="mb-12 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Badge variant="secondary" className="text-sm">
                {article.category}
              </Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} de leitura</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
            </div>
          </header>

          {/* Article image placeholder */}
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-12">
            <BookOpen className="w-24 h-24 text-primary" />
          </div>

          {/* Article content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Call to action */}
          <div className="mt-16 p-8 bg-muted/50 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Gostou deste artigo?
            </h3>
            <p className="text-muted-foreground mb-6">
              Descubra como nossos serviços podem transformar sua organização
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/contato')}>
                Entre em Contato
              </Button>
              <Button variant="outline" onClick={() => navigate('/artigos')}>
                Ver Mais Artigos
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleView;