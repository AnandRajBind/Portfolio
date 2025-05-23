import React from 'react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-6 h-6 border-2 border-purple-400/30 rotate-45 animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-8 h-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full animate-float-medium"></div>
      <div className="absolute bottom-32 left-20 w-4 h-4 bg-purple-300/40 transform rotate-12 animate-float-fast"></div>
      <div className="absolute top-60 left-1/2 w-10 h-1 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-12 h-12 border border-blue-400/30 rounded-full animate-spin-slow"></div>
      
      {/* Code snippets floating */}
      <div className="absolute top-32 right-32 text-purple-400/20 text-xs font-mono animate-float-slow">
        {'{ code }'}
      </div>
      <div className="absolute bottom-60 left-40 text-blue-400/20 text-xs font-mono animate-float-medium">
        {'</>'}
      </div>
      <div className="absolute top-1/2 right-40 text-purple-300/20 text-xs font-mono animate-float-fast">
        {'function()'}
      </div>
    </div>
  );
};

export default FloatingElements;
