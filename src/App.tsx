import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Hero from './sections/Hero';
import About from './sections/About';
import Gallery from './sections/Gallery';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <About />
        <Gallery />
        <Process />
        <Testimonials />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;