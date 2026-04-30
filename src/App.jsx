import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Hero from './Hero';
import Submenu from './Submenu';
import { useGlobalContext } from './Context';

const App = () => {
  const { isSidebarOpen, isSubmenuOpen } = useGlobalContext();
  return (
    <main>
      <Navbar />
      <Sidebar />
      <Hero />
      {isSubmenuOpen && <Submenu />}
    </main>
  );
};
export default App;
