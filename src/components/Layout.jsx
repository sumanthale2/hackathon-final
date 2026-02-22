import Navbar from './Navbar';

function Layout({ children, userName, showGreeting = false }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <Navbar userName={userName} showGreeting={showGreeting} />
      <div className="container mx-auto px-4 py-6">
        {children}
      </div>
    </div>
  );
}

export default Layout;
