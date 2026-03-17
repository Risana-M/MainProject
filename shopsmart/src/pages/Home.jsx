import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductQuickView from "../components/ProductQuickView";
import HomeDealCard from "../components/HomeDealCard";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

function Home() {
  const navigate = useNavigate();
  const [homeDeals, setHomeDeals] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const { data } = await axios.get(`${API}/api/products`);

        // take first 10 products for deals
      setHomeDeals(Array.isArray(data) ? data.slice(0, 5) : []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDeals();
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto w-full pb-10">

      {/* HERO BANNER */}
      <section className="mt-4 mb-10 mx-2 sm:mx-4 h-[45vh] md:h-[60vh] bg-white rounded-md overflow-hidden relative shadow-sm">
        <img
          src="https://img.pikbest.com/backgrounds/20241223/a-basket-of-vegetables-and-fruits-on-a-table-with-green-background_11290096.jpg!bw700"
          alt="Farm Fresh Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 text-white">

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Farm Fresh <br /> Vegetables
          </h1>

          <p className="text-base md:text-xl mb-8 max-w-lg opacity-90">
            Fresh • Organic • Healthy <br />
            Directly from local farmers to your kitchen.
          </p>

          <Link to="/products">
            <button className="bg-green-600 px-10 py-3.5 rounded-md font-bold hover:bg-green-500 transition-all active:scale-95 shadow-xl">
              Shop Now
            </button>
          </Link>

        </div>
      </section>

      {/* DEAL SECTION */}
      <section className="mb-10 mx-2 sm:mx-4">

        <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden">

          <div className="flex justify-between items-center p-6 border-b border-gray-50">

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-green-800">
                🌱 Fresh Deals
              </h2>

              <p className="text-sm text-gray-500">
                Handpicked items for you
              </p>
            </div>

            <Link
              to="/products"
              className="bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-100 transition"
            >
              View All Products
            </Link>

          </div>

          {/* CARD GRID WITH HORIZONTAL SCROLL */}

          <div className="flex overflow-x-auto gap-6 p-6 no-scrollbar scroll-smooth">

            {Array.isArray(homeDeals) &&
homeDeals.map((item) => (//homeDeals.map((item) => (

              <div
                key={item._id}
                className="min-w-[180px] sm:min-w-[240px] md:min-w-[280px] transition-transform hover:-translate-y-1"
              >

                <HomeDealCard
                  item={item}
                  onClick={() => setSelectedProduct(item)}
                />

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* QUICK VIEW MODAL */}

      {selectedProduct && (
        <ProductQuickView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

    </div>
  );
}

export default Home;
