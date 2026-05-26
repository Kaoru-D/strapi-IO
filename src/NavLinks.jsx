import React from 'react'
import sublinks from './data'

const NavLinks = ({ handleSubmenu }) => {
  return (
    <div className='nav-links'>
      {sublinks.map((link) => {
        const { pageId, page } = link;
        return (
          <button
            key={pageId}
            className='nav-link'
            onMouseEnter={(e) => handleSubmenu(e,page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks