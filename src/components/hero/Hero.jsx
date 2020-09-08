import React from 'react';

const Hero = props => {
  return (
    <div className="tc w-100 h-100 db-l flex flex-column justify-center title-container">
      <h1 className="mainTitle">Bonjour</h1>
      <div className="flex flex-row-l flex-column justify-center w-90-l w-100 ml-auto mr-auto">
        <div className="w-50-l tr-l w-100 tc">
          <h3 className="subTitle">My name is LaForrest,</h3>
        </div>
        <div className="flex flex-column w-50-l tl-l w-100 tc">
          <span className="outlined-text pl3">
            {' '}
            Vintage Tech Enthusiast<span className="period">.</span>
          </span>
          <span className="outlined-text pl3">
            Creative Director<span className="period">.</span>
          </span>
          <span className="outlined-text pl3">
            {' '}
            Full Stack Developer<span className="period">.</span>
          </span>
          <span className="outlined-text pl3">
            Artist<span className="period">.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
