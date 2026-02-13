
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}

const Container: React.FC<ContainerProps> = ({ children, className = '', size = 'default' }) => {
  const maxWidth = {
    default: 'max-w-[1200px]',
    narrow: 'max-w-[800px]',
    wide: 'max-w-[1400px]',
  };

  return (
    <div className={`w-full ${maxWidth[size]} mx-auto px-8 md:px-12 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
