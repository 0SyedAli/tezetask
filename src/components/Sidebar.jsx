// import icon1 from '../assets/uf-icon.svg';
// import icon2 from '../assets/ut-icon.svg';
import { LuTable2 } from "react-icons/lu";
import { PiTableBold } from "react-icons/pi";

const Sidebar = ({ setActiveCategory, activeCategory }) => {
  return (
    <nav className="sidebar">
      <button
        onClick={() => setActiveCategory('user-form')}
        className={activeCategory === 'user-form' ? 'active' : ''}
      >
        <LuTable2 />
        User Form
      </button>
      <button
        onClick={() => setActiveCategory('user-details')}
        className={activeCategory === 'user-details' ? 'active' : ''}
      >
        <PiTableBold />
        User Details
      </button>
    </nav>
  );
};

export default Sidebar;