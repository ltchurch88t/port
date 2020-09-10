import React, {useState} from 'react';
import {useScrollPosition} from '../../components/utilities/Scroll';

const InteriorHero = props => {
  const [heroStyle, setHeroStyle] = useState('initialLoad');

  useScrollPosition(
    ({prevPos, currPos}) => {
      const hasScrolled = currPos.y < 0;

      if (hasScrolled) {
        setHeroStyle('scrolledHero');
      } else {
        setHeroStyle('undoScrolledHero');
      }
    },
    [heroStyle],
  );
  return (
    <section
      className={heroStyle + ' w-100 vh-100 flex justify-center interiorHero'}>
      <h1 className="interiorTitle ma-auto relative">{props.title}</h1>
    </section>
  );
};

export default InteriorHero;
