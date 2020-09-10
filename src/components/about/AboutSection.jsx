import React, {useState} from 'react';

const AboutSection = props => {
  const [tab, setTab] = useState('tech');
  return (
    <div className="AboutSection mv5">
      <div className="flex flex-wrap tl-l w-100 tc">
        <a
          href="#tech"
          onClick={() => setTab('tech')}
          className={
            tab === 'tech' ? 'outlined-text activePane' : 'outlined-text'
          }>
          Vintage Tech Enthusiast
        </a>
        <span className="seperator ph2">|</span>
        <a
          href="#creative"
          onClick={() => setTab('creative')}
          className={
            tab === 'creative' ? 'outlined-text activePane' : 'outlined-text'
          }>
          Creative Director
        </a>
        <span className="seperator ph2">|</span>
        <a
          href="#developer"
          onClick={() => setTab('developer')}
          className={
            tab === 'developer' ? 'outlined-text activePane' : 'outlined-text'
          }>
          Full Stack Developer
        </a>
        <span className="seperator ph2">|</span>
        <a
          href="#artist"
          onClick={() => setTab('artist')}
          className={
            tab === 'artist' ? 'outlined-text activePane' : 'outlined-text'
          }>
          Artist
        </a>
      </div>
      <div className="relative tabContainer">
        <div className={tab === 'tech' ? 'tab activeTab' : 'tab hiddenTab'}>
          Tech
        </div>
        <div className={tab === 'creative' ? 'tab activeTab' : 'tab hiddenTab'}>
          Creative
        </div>
        <div
          className={tab === 'developer' ? 'tab activeTab' : 'tab hiddenTab'}>
          Developer
        </div>
        <div className={tab === 'artist' ? 'tab activeTab' : 'tab hiddenTab'}>
          Artist
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
