import React from 'react';
import Header from '../components/header/Header';
import InteriorHero from '../components/hero/InteriorHero';
import Footer from '../components/footer/Footer';

const About = props => {
  return (
    <div className="About">
      <Header />
      <InteriorHero title="About" />
      <section className="flex justify-center w-100">
        <div className="ma-auto w-60-l w-90">
          <h3 className="tc">
            My name is LaForrest Church. I am based in Columbus, OH and I am
            currently the Creative Director and Head of Development at
            OppGenetix, a marketing agency here in Columbus.
          </h3>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
