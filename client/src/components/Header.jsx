// src/components/Header.jsx
import { useLocation } from 'react-router-dom';

function Header({ toggleTheme, isDarkMode }) {
  const currentPage = useLocation().pathname;

  return (
    <header className="custom-header w-full flex justify-between items-center p-4 border-b shadow-md bg-white dark:bg-gray-800">
      <div className="flex items-center space-x-2">
        {/* Update logo path to use absolute path since images should be in the public folder */}
        <img
          src="/assets/Devdeploy.jpg" // Changed path to use public folder
          alt="Logo"
          style={{ height: '40px', width: '40px' }}
        />
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">DevDeploy</h1>
      </div>
      <nav>
        {/* TODO: create a search bar to search for Developers */}
      </nav>
      <button
        onClick={toggleTheme} // Toggle theme on button click
        className="custom-theme-toggle border p-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
}

export default Header;
