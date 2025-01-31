const PageLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Header */}
      <header className="bg-blue-600 text-white p-4 text-center">
      <div className="container mx-auto bg-amber-700 p-4">
        <h1 className="text-xl font-bold">Container Mặc Định</h1>
        <p>Đây là một container với chiều rộng giới hạn tự động.</p>
      </div>
      </header>
      {/* Main Layout */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Main Content */}
        <main className="flex-grow bg-gray-200 p-4">Nội dung chính</main>

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
