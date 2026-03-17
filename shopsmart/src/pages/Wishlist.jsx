

import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../features/wishlistSlice";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.wishlist.items);

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 p-4 text-center">
        <p className="text-gray-500 text-lg">♥️ Your wishlist is empty</p>
        <button
          onClick={() => navigate("/products")}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Go Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 max-w-[1440px] mx-auto min-h-screen">
      <h1 className="text-xl md:text-2xl font-semibold mb-6">My Wishlist</h1>

      <div className="space-y-4">
        {wishlist.map((item) => (
          <div
            key={item._id}
            className="flex flex-col sm:flex-row items-center bg-white shadow rounded-lg p-4 border border-gray-100 gap-4"
          >

            {/* LEFT: Image + Name */}
            <div className="flex items-center gap-4 w-full sm:w-1/2 lg:w-1/3">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
              <div className="flex-1">
                <h2 className="font-semibold text-gray-800 text-sm md:text-base">
                  {item.name}
                </h2>
                <p className="text-xs text-gray-500">{item.category}</p>
                <p className="text-xs text-yellow-600">⭐ {item.rating}</p>
              </div>
            </div>

            {/* CENTER: Price */}
            <div className="w-full sm:w-1/4 lg:w-1/3 text-left sm:text-center font-bold text-green-700 text-lg">
              ₹{item.price}
            </div>

            {/* RIGHT: Actions */}
            <div className="w-full sm:w-1/4 lg:w-1/3 flex flex-row sm:justify-end gap-2 md:gap-3">

              {/* REMOVE */}
              <button
                onClick={() => dispatch(removeFromWishlist(item._id))}
                className="flex-1 sm:flex-none px-3 py-2 text-xs border border-green-700 text-green-700 rounded hover:bg-green-700 hover:text-white transition"
              >
                Remove
              </button>

              {/* ADD TO CART */}
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      _id: item._id,
                      name: item.name,
                      price: item.price,
                      image: item.image,
                      category: item.category,
                      rating: item.rating
                    })
                  )
                }
                className="flex-1 sm:flex-none px-4 py-2 text-xs bg-green-600 text-white rounded hover:bg-green-700 transition shadow-sm"
              >
                Add to Cart
              </button>

            </div>

          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={() => navigate("/products")}
          className="w-full sm:w-auto px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition"
        >
          ← Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default Wishlist;