
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /** Max-width of inner container */
  containerSize?: 'default' | 'narrow' | 'wide';
  /** Vertical padding - default py-24 */
  padding?: 'default' | 'large' | 'none';
  /** Center-align content (text-center) */
  centered?: boolean;
  /** Background color */
  background?: 'white' | 'slate' | 'transparent';
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  containerSize = 'default',
  padding = 'default',
  centered = false,
  background = 'white',
}) => {
  const maxWidth = {
    default: 'max-w-[1200px]',
    narrow: 'max-w-[800px]',
    wide: 'max-w-[1400px]',
  };

  const bgClass = {
    white: 'bg-white',
    slate: 'bg-slate-100',
    blue: 'bg-blue-50/70',
    transparent: 'bg-transparent',
  }[background];

  const paddingClass =
    padding === 'none' ? '' : padding === 'default' ? 'py-24' : 'py-32 md:py-40';

  return (
    <section className={`${bgClass} ${paddingClass} ${className}`}>
      <div
        className={`w-full ${maxWidth[containerSize]} mx-auto px-5 md:px-8 ${centered ? 'text-center' : ''}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
