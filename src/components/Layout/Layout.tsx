import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"; // Import the new Footer component

function Layout() {
  return (
    <div className="flex flex-col min-h-screen"> {/* Added flex-col and min-h-screen for sticky footer */}
      <Header />
      <main className="flex-grow"> {/* Added flex-grow to push footer to bottom */}
        <Outlet />
      </main>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}

export default Layout;