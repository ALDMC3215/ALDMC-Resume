import React from 'react';

interface GlassmorphismCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({
  children,
  className = '',
  onClick,
}) => {
  return (
    <div
      className={`glassmorphism-card ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Background Persimmon Circles (defined with ALDMC Persimmon #E76338) */}
      <div className="glass-circle circle-top-left" aria-hidden="true" />
      <div className="glass-circle circle-bottom-right" aria-hidden="true" />

      {/* Frosted Glass Content Shell (8px radius from component specification) */}
      <div className="card-inner">
        {children}
      </div>
    </div>
  );
};

