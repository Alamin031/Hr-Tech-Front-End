
const Header = () => {
  return (
    <header className="header flex items-center justify-between bg-gray-800 text-white py-4 px-6">
      <div className="logo">
        <img src="/logo.png" alt="Logo" className="w-20 h-15" />

      </div>
      <nav className="navigation py-1">
        <ul className="flex">
          <li className="px-20 py-1">
            <a href="/" className="hover:text-gray-300 font-bold">Home</a>
          </li>
          <li className="px-20 py-1">
            <a href="/Offer" className="hover:text-gray-300 font-bold">Offer</a>
          </li>
          <li className="px-20 py-1">
            <a href="/desktop-deal" className="hover:text-gray-300 font-bold">Desktop Deal</a>
          </li>
          <li className="px-20 py-1">
            <a href="/Component/LoginForm" className="hover:text-gray-300 font-bold">Account</a>
          </li>
        </ul>
      </nav>
      <div className="search-box flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 border border-gray-400 rounded"
        />
        <button className="search-button px-4 py-1 bg-blue-500 text-white rounded">
          Search
        </button>
      </div>
      <button className="pc-builder-button px-4 py-1 bg-purple-600 text-white rounded">
        PC Builder
      </button>
    </header>
  );
};

export default Header;
