import React from 'react';
import CasesSection from '@/components/CasesSection';
import casesBg from '@/assets/cases-bg.jpg';

const Cases = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${casesBg})`,
          backgroundAttachment: 'fixed',
          filter: 'blur(3px)',
          transform: 'scale(1.1)',
          zIndex: -2
        }}
      />
      {/* Overlay */}
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" style={{ zIndex: -1 }} />
      
      {/* Content */}
      <div className="relative z-10 pt-20">
        <CasesSection />
      </div>
    </div>
  );
};

export default Cases;