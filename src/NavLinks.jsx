import React from 'react'
import sublinks from './data'
import { useGlobalContext } from './Context'

const NavLinks = ({ handleSubmenu }) => {
  const {setPage}= useGlobalContext()
  return (
    <div className='nav-links'>
      {sublinks.map((link) => {
        const { pageId, page, links } = link;
        return (
          <button
            key={pageId}
            className='nav-link'
            onMouseEnter={() => setPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks