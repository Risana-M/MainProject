

import { Link } from "react-router-dom"; 

function Footer() {
  return (
    <footer className="bg-green-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold mb-2">FreshCo 🌱 </h2>
          <p className="text-sm text-green-200">
            Fresh organic vegetables directly from local farms to your home.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-green-200">
            {/*  Wrap list items with Link component */}
            <li>
              <Link to="/" className="hover:text-white transition">Home</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white transition">Products</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div>
          <h3 className="font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm text-green-200">
            <li>Leafy Greens</li>
            <li>Root Vegetables</li>
            <li>Seasonal Fruits</li>
            <li>Organic Staples</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          {/*  Also make the email clickable to navigate to contact page */}
          <p className="text-sm text-green-200 leading-relaxed">
            📍 Kerala <br />
            <Link to="/contact" className="hover:text-white underline decoration-green-700">
              support@freshco.com
            </Link> <br />
            📞 +91 00000 00000
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-green-700 text-center py-4 text-sm text-green-300"> {/* Dynamic Year: Automatically updates to the current year */}
        © {new Date().getFullYear()} FreshCo. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;