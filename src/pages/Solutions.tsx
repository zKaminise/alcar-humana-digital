import React from 'react';
import SolutionsSection from '@/components/SolutionsSection';
import solutionsBg from '@/assets/solutions-bg.jpg';

const Solutions = () => {
  return (
    <div className="relative">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${solutionsBg})`,
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
        <SolutionsSection />
      </div>
    </div>
  );
};

export default Solutions;