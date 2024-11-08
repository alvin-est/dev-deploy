import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="header bg-white dark:bg-gray-800 text-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-lg font-bold"><h1>Header</h1></div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;