
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Mainlayout() {
  return (
    // The outer wrapper ensures the background color is consistent and prevents horizontal scrolling
    <div className="bg-gray-50 min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />

      
      <main className="max-w-[1536px] mx-auto w-full flex-grow px-2 sm:px-4 md:px-8 py-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Mainlayout;