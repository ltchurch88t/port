import React from 'react';
import Hero from '../components/hero/Hero';

const Home = props => {
  return (
    <div className="Home w-100 vh-100">
      <section className="Hero">
        <Hero />
      </section>
    </div>
  );
};

export default Home;
