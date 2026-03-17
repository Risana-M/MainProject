
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { setSearchQuery } from "../features/searchSlice";
import { logout } from "../features/authSlice";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // EXISTING SELECTORS
  const wishlistCount = useSelector((state) => state.wishlist.items.length);
  const cartCount = useSelector((state) => state.cart.items.length);
  const searchQuery = useSelector((state) => state.search.query);

  // AUTH SELECTOR
  const { userInfo } = useSelector((state) => state.auth);
console.log(userInfo);
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      {/* TOP NAVBAR */}
      <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-green-700">
          FreshCo 🌱
        </Link>

        {/* SEARCH BAR */}
        <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-md w-1/2">
          <img
            src="https://img.icons8.com/ios-glyphs/50/search.png"
            className="w-5 h-5 opacity-60"
            alt="search"
          />
          <input
            type="text"
            placeholder="Search organic vegetables..."
            value={searchQuery}
            onChange={(e) => {
              dispatch(setSearchQuery(e.target.value));
              navigate("/products");
            }}
            className="w-full bg-transparent outline-none ml-3 text-sm"
          />
        </div>

        {/* ICONS */}
        <div className="flex gap-6 items-center">

          <NavLink to="/products" className="flex flex-row items-center cursor-pointer">
            <img
              src="https://img.icons8.com/fluency-systems-regular/50/bag-front-view.png"
              className="w-6 h-6"
              alt="shop"
            />
            <span className="text-xs">Shop</span>
          </NavLink>

          <NavLink to="/cart" className="flex flex-row items-center cursor-pointer gap-1">
            <img
              src="https://img.icons8.com/parakeet-line/50/shopping-cart.png"
              className="w-6 h-6"
              alt="cart"
            />
            <span className="text-xs">Cart</span>({cartCount})
          </NavLink>

          <NavLink to="/wishlist" className="flex flex-row items-center cursor-pointer gap-1">
            <img
              src="https://img.icons8.com/windows/32/like--v1.png"
              className="w-6 h-6"
              alt="wishlist"
            />
            <span className="text-xs">Wishlist</span>({wishlistCount})
          </NavLink>

          {/* AUTH SECTION */}
          {userInfo ? (
            <>
              <NavLink
                to="/orders"
                className="text-sm hover:text-green-600"
              >
                My Orders
              </NavLink>

              {/* ADMIN DASHBOARD LINK */}
              {userInfo?.role === "admin" && (
                <NavLink
                  to="/freshco-admin"
                  className="text-sm font-semibold text-green-700 hover:underline"
                >
                  Admin Dashboard
                </NavLink>
              )}

              <button
                onClick={logoutHandler}
                className="text-sm text-red-500 hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="flex flex-row items-center cursor-pointer"
              >
                <img
                  src="https://img.icons8.com/windows/32/checked-user-male--v1.png"
                  className="w-6 h-6"
                  alt="Login"
                />
                <span className="text-xs">Login</span>
              </NavLink>

              <NavLink
                to="/signup"
                className="flex flex-row items-center cursor-pointer"
              >
                <img
                  src="https://img.icons8.com/puffy/50/add-user-male--v2.png"
                  className="w-6 h-6"
                  alt="Signup"
                />
                <span className="text-xs">SignUp</span>
              </NavLink>
            </>
          )}
        </div>
      </nav>

      {/* SECOND NAVBAR */}
      <nav className="bg-green-800 text-white px-6 py-3 flex gap-8">
        <NavLink to="/" className="hover:text-green-300">
          Home
        </NavLink>

        <NavLink to="/products" className="hover:text-green-300">
          Items
        </NavLink>

        <NavLink to="/about" className="hover:text-green-300">
          About
        </NavLink>

        <NavLink to="/checkout" className="hover:text-green-300">
          Checkout
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;