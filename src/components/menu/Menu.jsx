import React, {useLayoutEffect} from 'react';
import {Link} from 'react-router-dom';

const Menu = ({hideMenu}) => {
  // Hook
  function useLockBodyScroll() {
    useLayoutEffect(() => {
      // Get original body overflow
      const originalStyle = window.getComputedStyle(document.body).overflow;
      // Prevent scrolling on mount
      document.body.style.overflow = 'hidden';
      // Re-enable scrolling when component unmounts
      return () => (document.body.style.overflow = originalStyle);
    }, []); // Empty array ensures effect is only run on mount and unmount
  }

  useLockBodyScroll();

  return (
    <div className="h-100 w-100 menu-container">
      <ul className="menu-list">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
