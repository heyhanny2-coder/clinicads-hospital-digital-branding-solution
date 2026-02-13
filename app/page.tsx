
import React from 'react';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Proof from '../components/Proof';
import Services from '../components/Services';
import Process from '../components/Process';
import CTA from '../components/CTA';

const Page: React.FC = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Problem />
      <Solution />
      <Proof />
      <Services />
      <Process />
      <CTA />
    </div>
  );
};

export default Page;
