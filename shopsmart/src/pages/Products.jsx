
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../features/wishlistSlice";
import { addToCart } from "../features/cartSlice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

function Products() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.wishlist.items);
  const searchQuery = useSelector((state) => state.search.query);

  // PRODUCTS FROM DATABASE
  const [productsData, setProductsData] = useState([]);

  // FILTER STATES
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [priceRange, setPriceRange] = useState(1000);
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState("default");

  // FETCH PRODUCTS FROM BACKEND
  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const res = await axios.get(`${API}/api/products`);

        setProductsData(res.data);

      } catch (error) {

        console.error("Error fetching products:", error);

      }

    };

    fetchProducts();

  }, []);

  const isInWishlist = (id) => wishlist.some((item) => item._id === id);

  // FILTERING
  const filteredProducts = productsData.filter((item) => {

    if (
      searchQuery &&
      !item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.category.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    if (selectedCategories.length > 0 && !selectedCategories.includes(item.category)) {
      return false;
    }

    if (selectedRating && item.rating < selectedRating) {
      return false;
    }

    if (item.price > priceRange) {
      return false;
    }

    if (selectedTags.length > 0 && !item.tags?.some(tag => selectedTags.includes(tag))) {
      return false;
    }

    return true;

  });

  // SORTING
  const sortedProducts = [...filteredProducts].sort((a, b) => {

    switch (sortBy) {

      case "price-low":
        return a.price - b.price;

      case "price-high":
        return b.price - a.price;

      case "rating":
        return b.rating - a.rating;

      case "newest":
        return new Date(b.createdAt) - new Date(a.createdAt);

      default:
        return 0;

    }

  });

  return (

    <div className="flex flex-col md:flex-row gap-6 p-6">

      <Sidebar
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />

      <section className="flex-1">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">

          <h1 className="text-3xl font-bold text-green-800">
            🥦 FreshCo Products
          </h1>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border-2 border-green-600 text-green-800 px-4 py-2 rounded-lg bg-white shadow-sm"
          >

            <option value="default">Sort By: Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
            <option value="newest">New Arrivals</option>

          </select>

        </div>

        {/* NO PRODUCTS */}
        {sortedProducts.length === 0 ? (

          <div className="text-center py-20">

            <p className="text-xl text-gray-500">
              No products found matching your filters 🔍
            </p>

            <button
              onClick={() => {
                setSelectedCategories([]);
                setPriceRange(1000);
                setSelectedRating(null);
                setSelectedTags([]);
              }}
              className="mt-4 text-green-600 font-semibold hover:underline"
            >
              Clear all filters
            </button>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">

            {sortedProducts.map((item) => (

              <div
                key={item._id}
                className="group relative bg-white p-4 border border-gray-100 rounded-xl shadow-sm hover:shadow-xl hover:border-green-400 transition-all duration-300"
              >

                {/* WISHLIST */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();

                    isInWishlist(item._id)
                      ? dispatch(removeFromWishlist(item._id))
                      : dispatch(addToWishlist(item));
                  }}
                  className="absolute top-2 right-2 z-10 p-1"
                >

                  <span
                    className={`text-4xl ${isInWishlist(item._id)
                        ? "text-red-500"
                        : "text-gray-400"
                      }`}
                  >
                    ♥
                  </span>

                </button>

                {/* CLICKABLE AREA */}
                <div
                  onClick={() => navigate(`/product/${item._id}`)}
                  className="cursor-pointer"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-contain mb-2"
                  />

                  <p className="font-semibold text-sm">
                    {item.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    {item.category}
                  </p>

                  <div className="flex justify-between items-center mt-1">

                    <p className="text-green-700 font-bold">
                      ₹{item.price}
                    </p>

                    <p className="text-yellow-500 text-sm">
                      ⭐ {item.rating}
                    </p>

                  </div>

                  <p className="text-xs text-gray-400 mt-1">
                    {item.freshness}
                  </p>

                </div>

                {/* ADD TO CART */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(addToCart(item));
                  }}
                  className="mt-4 w-full bg-green-600 text-white py-2.5 rounded-lg font-semibold hover:bg-green-700 transition shadow-md active:scale-95"
                >
                  Add to Cart
                </button>

              </div>

            ))}

          </div>

        )}

      </section>

    </div>

  );
}

export default Products;
