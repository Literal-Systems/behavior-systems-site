import React from 'react';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { Experience } from '../components/Experience';
import { Testimonials } from '../components/Testimonials';
import { Blog } from '../components/Blog';
import { About } from '../components/About';
import { Contact } from '../components/Contact';

export function Portfolio() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Testimonials />
      <Blog />
      <About />
      <Contact />
    </Layout>
  );
}
