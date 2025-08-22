import React from 'react';
import CasesSection from '@/components/CasesSection';
import casesBg from '@/assets/cases-bg.jpg';

const Cases = () => {
  return (
    <div className="relative">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${casesBg})`,
          filter: 'blur(3px)',
          transform: 'scale(1.1)',
          zIndex: 0,
          minHeight: '100vh'
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm pointer-events-none" style={{ zIndex: 5, minHeight: '100vh' }} />
      
      {/* Content */}
      <div className="relative z-10 pt-20 min-h-screen">
        <CasesSection />
      </div>
    </div>
  );
};

export default Cases;