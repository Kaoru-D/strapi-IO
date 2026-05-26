import React from 'react'
import sublinks from './data'
import { useGlobalContext } from './Context'

const Submenu = () => {
  const {page:currentPage,isSubmenuOpen}=useGlobalContext()
  return (
    <div className={isSubmenuOpen? 'submenu show-submenu': 'submenu'}>
      <h5>{currentPage?.page}</h5>
      <div className='submenu-links' style={{gridTemplateColumns: currentPage?.links.length > 3 ? '1fr 1fr':'1fr'}}>
        {currentPage?.links?.map((link)=>{
          const {id, url, label, icon} = link
          return <a key={id} href={url}>
            {icon}
            {label}
          </a>
        })}
      </div>
    </div>
  )
}

export default Submenu