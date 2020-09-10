import React from 'react';
import Hero from '../components/hero/Hero';
import Header from '../components/header/Header';
import WorkSection from '../components/work/Work';
import AboutSection from '../components/about/AboutSection';
import Footer from '../components/footer/Footer';

const Home = props => {
  return (
    <div className="Home w-100 vh-100">
      <Header />
      <section className="Hero">
        <Hero />
      </section>
      <section className="Work mt7 w-100">
        <WorkSection />
      </section>
      <section className="pa5">
        <AboutSection />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
