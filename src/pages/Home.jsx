import React from 'react';
import Hero from '../components/hero/Hero';
import Header from '../components/header/Header';

const Home = props => {
  return (
    <div className="Home w-100 vh-100">
      <Header />
      <section className="Hero">
        <Hero />
      </section>
    </div>
  );
};

export default Home;
