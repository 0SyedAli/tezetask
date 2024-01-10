import { useState } from 'react';
import Sidebar from './components/Sidebar';
import UserForm from './components/UserForm';
import UserDetails from './components/UserDetails';
import './App.css'; // Import your CSS file

const App = () => {
  const [activeCategory, setActiveCategory] = useState('user-form');

  return (
    <div className="container">
      <div className="app-container">
        <Sidebar setActiveCategory={setActiveCategory} activeCategory={activeCategory} />
        <main className="main-container">
          {activeCategory === 'user-form' && <UserForm />}
          {activeCategory === 'user-details' && <UserDetails />}
        </main>
      </div>
    </div>
  );
};

export default App;