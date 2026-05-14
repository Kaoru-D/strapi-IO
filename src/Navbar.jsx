import sublinks from './data';
import { useGlobalContext } from './Context';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const handleSubmenu = (e, page) => {
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const coordinates = {
      center: (tempBtn.left + tempBtn.right) / 2,
      bottom: tempBtn.bottom,
    };
    openSubmenu(page, coordinates);
  };

  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
          <h1 className='logo'>Strapi</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
