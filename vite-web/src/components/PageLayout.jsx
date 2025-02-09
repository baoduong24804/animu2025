const PageLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 text-center">
        <div className="container mx-auto flex justify-center bg-amber-700 p-4">
          {/* Logo - Chiếm 20% */}
          <div className="w-1/5 hidden md:flex text-xl font-bold">
            <a >MyLogo</a>
          </div>

          {/* Menu - Chiếm 50% (trung tâm) */}
          <div className="w-3/5 hidden md:flex justify-center space-x-6">
            <a className="hover:text-gray-400">
              Home
            </a>
            <a className="hover:text-gray-400">
              About
            </a>
            <a className="hover:text-gray-400">
              Services
            </a>
            <a className="hover:text-gray-400">
              Contact
            </a>
          </div>

          {/* Hành động - Chiếm 30% */}
          <div className="w-1/5 hidden md:flex justify-end space-x-4">
            <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
              Login
            </button>
            <button className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700">
              Sign Up
            </button>
          </div>
        </div>
      </header>
      {/* Main Layout */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Main Content */}
        <main className="flex-grow bg-gray-400 p-4">Nội dung chính</main>

        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-gray-800 text-white p-4">
          Sidebar
        </aside>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-4 text-center">Footer</footer>
    </div>
  );
};

export default PageLayout;
