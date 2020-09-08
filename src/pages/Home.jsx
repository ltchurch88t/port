import React from 'react';
import Hero from '../components/hero/Hero';
import WorkSection from '../components/work/Work';
import Header from '../components/header/Header';

const Home = props => {
  return (
    <div className="Home w-100 vh-100">
      <Header />
      <section className="Hero">
        <Hero />
      </section>
      <section className="Work w-100">
        <WorkSection />
      </section>
              <section className="pa5">
                      </section>
    </div>
  );
};

export default Home;
