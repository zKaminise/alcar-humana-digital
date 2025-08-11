import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MessageSquare, ChevronDown } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutionsMenu = [
    { label: 'Consultoria Estratégica', href: '/solucoes/consultoria-estrategica', description: 'Planejamento e implementação estratégica' },
    { label: 'Desenvolvimento de Cultura', href: '/solucoes/desenvolvimento-cultura', description: 'Construção de culturas organizacionais' },
    { label: 'Treinamentos e Capacitação', href: '/solucoes/treinamentos-capacitacao', description: 'Programas de desenvolvimento' },
    { label: 'Gestão de Pessoas', href: '/solucoes/gestao-pessoas', description: 'Soluções completas para RH' }
  ];

  const segmentosMenu = [
    { label: 'Agronegócio', href: '/segmentos/agronegocio', description: 'Soluções para o setor agropecuário' },
    { label: 'Alimentos e Bebidas', href: '/segmentos/alimentos-bebidas', description: 'Especialização em indústria alimentícia' },
    { label: 'Energia', href: '/segmentos/energia', description: 'Consultoria para setor energético' },
    { label: 'Financeiro', href: '/segmentos/financeiro', description: 'Soluções para instituições financeiras' },
    { label: 'Varejo Farma', href: '/segmentos/varejo-farma', description: 'Especialização em farmácias' },
    { label: 'Educação', href: '/segmentos/educacao', description: 'Consultoria para instituições de ensino' }
  ];

  const conteudoMenu = [
    { label: 'Blog', href: '/blog', description: 'Artigos e insights' },
    { label: 'Cases de Sucesso', href: '/cases', description: 'Projetos realizados' },
    { label: 'Metodologia', href: '/diferenciais', description: 'Nossa abordagem exclusiva' },
    { label: 'Recursos', href: '/blog', description: 'Materials e downloads' }
  ];

  const sobreMenu = [
    { label: 'Quem Somos', href: '/sobre/quem-somos', description: 'Nossa história e missão' },
    { label: 'Nossa Expertise', href: '/sobre/nossa-expertise', description: 'Áreas de atuação e metodologia' },
    { label: 'Trabalhe Conosco', href: '/sobre/trabalhe-conosco', description: 'Oportunidades de carreira' },
    { label: 'Fale Conosco', href: '/sobre/fale-conosco', description: 'Entre em contato conosco' }
  ];

  const handleDropdownEnter = (menu: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Delay de 150ms antes de fechar
    setDropdownTimeout(timeout);
  };

  const closeDropdowns = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(null);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-lg shadow-card border-b border-border' 
          : 'bg-gradient-to-b from-black/70 via-black/50 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/"
              className={`text-2xl font-bold transition-colors drop-shadow-lg ${
                isScrolled ? 'text-primary hover:text-primary-light' : 'text-white hover:text-white/80'
              }`}
            >
              Alçar Humà
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">

            {/* Soluções Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownEnter('solucoes')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`flex items-center transition-colors font-medium relative group drop-shadow-md ${
                  isScrolled 
                    ? `text-foreground hover:text-primary ${location.pathname === '/solucoes' ? 'text-primary' : ''}`
                    : `text-white hover:text-white/80 ${location.pathname === '/solucoes' ? 'text-white' : ''}`
                }`}
              >
                Soluções
                <ChevronDown className="w-4 h-4 ml-1" />
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {activeDropdown === 'solucoes' && (
                <div 
                  className="absolute top-full left-0 mt-1 w-80 bg-card rounded-lg shadow-elegant border border-border p-6 animate-fade-in z-50"
                  onMouseEnter={() => handleDropdownEnter('solucoes')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="space-y-3">
                    {solutionsMenu.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block p-3 rounded-lg hover:bg-muted transition-colors"
                        onClick={closeDropdowns}
                      >
                        <div className="font-medium text-foreground">{item.label}</div>
                        <div className="text-sm text-muted-foreground">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Segmentos Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownEnter('segmentos')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`flex items-center transition-colors font-medium relative group drop-shadow-md ${
                  isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
                }`}
              >
                Segmentos
                <ChevronDown className="w-4 h-4 ml-1" />
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {activeDropdown === 'segmentos' && (
                <div 
                  className="absolute top-full left-0 mt-1 w-80 bg-card rounded-lg shadow-elegant border border-border p-6 animate-fade-in z-50"
                  onMouseEnter={() => handleDropdownEnter('segmentos')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="space-y-3">
                    {segmentosMenu.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block p-3 rounded-lg hover:bg-muted transition-colors"
                        onClick={closeDropdowns}
                      >
                        <div className="font-medium text-foreground">{item.label}</div>
                        <div className="text-sm text-muted-foreground">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Conteúdo Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownEnter('conteudo')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`flex items-center transition-colors font-medium relative group drop-shadow-md ${
                  isScrolled 
                    ? `text-foreground hover:text-primary ${['/blog', '/cases', '/diferenciais'].includes(location.pathname) ? 'text-primary' : ''}`
                    : `text-white hover:text-white/80 ${['/blog', '/cases', '/diferenciais'].includes(location.pathname) ? 'text-white' : ''}`
                }`}
              >
                Conteúdo
                <ChevronDown className="w-4 h-4 ml-1" />
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {activeDropdown === 'conteudo' && (
                <div 
                  className="absolute top-full left-0 mt-1 w-80 bg-card rounded-lg shadow-elegant border border-border p-6 animate-fade-in z-50"
                  onMouseEnter={() => handleDropdownEnter('conteudo')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="space-y-3">
                    {conteudoMenu.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block p-3 rounded-lg hover:bg-muted transition-colors"
                        onClick={closeDropdowns}
                      >
                        <div className="font-medium text-foreground">{item.label}</div>
                        <div className="text-sm text-muted-foreground">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sobre Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownEnter('sobre')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`flex items-center transition-colors font-medium relative group drop-shadow-md ${
                  isScrolled 
                    ? `text-foreground hover:text-primary ${['/sobre', '/sobre/quem-somos', '/sobre/nossa-expertise', '/sobre/trabalhe-conosco', '/sobre/fale-conosco'].includes(location.pathname) ? 'text-primary' : ''}`
                    : `text-white hover:text-white/80 ${['/sobre', '/sobre/quem-somos', '/sobre/nossa-expertise', '/sobre/trabalhe-conosco', '/sobre/fale-conosco'].includes(location.pathname) ? 'text-white' : ''}`
                }`}
              >
                Sobre
                <ChevronDown className="w-4 h-4 ml-1" />
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {activeDropdown === 'sobre' && (
                <div 
                  className="absolute top-full left-0 mt-1 w-80 bg-card rounded-lg shadow-elegant border border-border p-6 animate-fade-in z-50"
                  onMouseEnter={() => handleDropdownEnter('sobre')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="space-y-3">
                    {sobreMenu.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block p-3 rounded-lg hover:bg-muted transition-colors"
                        onClick={closeDropdowns}
                      >
                        <div className="font-medium text-foreground">{item.label}</div>
                        <div className="text-sm text-muted-foreground">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link
              to="/contato"
              className={`transition-colors font-medium relative group drop-shadow-md ${
                isScrolled 
                  ? `text-foreground hover:text-primary ${location.pathname === '/contato' ? 'text-primary' : ''}`
                  : `text-white hover:text-white/80 ${location.pathname === '/contato' ? 'text-white' : ''}`
              }`}
            >
              Contato
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('tel:+5567996442404', '_self')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Phone className="w-4 h-4 mr-2" />
              (67) 99644-2404
            </Button>
            <Button
              onClick={() => window.open('https://wa.me/5567996442404', '_blank')}
              className="bg-primary hover:bg-primary-dark text-primary-foreground"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <nav className="py-4 space-y-2">
              
              {/* Soluções - Mobile */}
              <div className="px-4 py-2">
                <div className="font-medium text-foreground mb-2">Soluções</div>
                <div className="pl-4 space-y-1">
                  {solutionsMenu.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded px-2 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Segmentos - Mobile */}
              <div className="px-4 py-2">
                <div className="font-medium text-foreground mb-2">Segmentos</div>
                <div className="pl-4 space-y-1">
                  {segmentosMenu.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded px-2 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Conteúdo - Mobile */}
              <div className="px-4 py-2">
                <div className="font-medium text-foreground mb-2">Conteúdo</div>
                <div className="pl-4 space-y-1">
                  {conteudoMenu.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded px-2 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sobre - Mobile */}
              <div className="px-4 py-2">
                <div className="font-medium text-foreground mb-2">Sobre</div>
                <div className="pl-4 space-y-1">
                  {sobreMenu.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded px-2 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/contato"
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <div className="px-4 pt-4 space-y-3 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('tel:+5567996442404', '_self')}
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (67) 99644-2404
                </Button>
                <Button
                  onClick={() => window.open('https://wa.me/5567996442404', '_blank')}
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;