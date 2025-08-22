import React from 'react';
import DifferentialsSection from '@/components/DifferentialsSection';
import differentialsBg from '@/assets/differentials-bg.jpg';

const Differentials = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${differentialsBg})`,
          backgroundAttachment: 'fixed',
          filter: 'blur(3px)',
          transform: 'scale(1.1)',
          zIndex: 0
        }}
      />
      {/* Overlay */}
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm pointer-events-none" style={{ zIndex: 5 }} />
      
      {/* Content */}
      <div className="relative z-10 pt-20">
        <DifferentialsSection />
      </div>
    </div>
  );
};

export default Differentials;