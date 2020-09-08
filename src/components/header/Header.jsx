import React, {useState} from 'react';
import Menu from '../menu/Menu';
import {Link} from 'react-router-dom';

const Header = props => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="w-100 headerBar flex absolute top-0 left-0">
      <div className="w-100 z-9999 flex justify-between">
        <div className="name-logo">
          <span>
            <Link to="/">LaForrest Church</Link>
          </span>
        </div>
        <div className="flex justify-center">
          <button
            className="white bg-transparent ttu menu-toggle"
            onClick={() => (menu === true ? setMenu(false) : setMenu(true))}>
            {menu === true ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      <div
        className={
          menu === true
            ? 'flex justify-center Menu absolute top-0 left-0 w-100 vh-100'
            : 'dn'
        }>
        {menu === true ? <Menu /> : ''}
      </div>
    </div>
  );
};

export default Header;
