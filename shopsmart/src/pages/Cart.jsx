
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty
} from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 p-6">
        <p className="text-gray-500 text-lg">🛒 Your Cart is empty</p>
        <button
          onClick={() => navigate("/products")}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Go Shopping
        </button>
      </div>
    );
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 md:p-6 space-y-4 max-w-5xl mx-auto">
      {cart.map((item) => (
        <div
          key={item._id}
          className="flex flex-col sm:flex-row items-center bg-white rounded-lg shadow p-4 gap-4"
        >
          {/* LEFT */}
          <div className="flex items-center gap-4 w-full sm:w-1/2">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
            />
            <div>
              <h3 className="font-semibold text-base sm:text-lg">
                {item.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                {item.category}
              </p>
            </div>
          </div>

          {/* PRICE */}
          <div className="w-full sm:w-1/4 text-left sm:text-center font-semibold text-green-700 text-lg">
            ₹{item.price * item.quantity}
          </div>

          {/* QTY + REMOVE */}
          <div className="w-full sm:w-1/4 flex flex-row sm:justify-end items-center justify-between gap-4">
            <div className="flex items-center border rounded bg-white">
              <button
                onClick={() => dispatch(decreaseQty(item._id))}
                className="px-3 py-1 hover:bg-gray-100"
              >
                −
              </button>

              <span className="px-3 font-semibold text-sm">
                {item.quantity}
              </span>

              <button
                onClick={() => dispatch(increaseQty(item._id))}
                className="px-3 py-1 hover:bg-gray-100"
              >
                +
              </button>
            </div>

            <button
              onClick={() => dispatch(removeFromCart(item._id))}
              className="px-3 py-1 text-sm border border-green-700 text-green-700 rounded hover:bg-green-700 hover:text-white transition"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* TOTAL */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-lg shadow mt-6 gap-4">
        <h2 className="text-xl font-bold text-gray-800">
          Total: ₹{total}
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <button
            onClick={() => navigate("/products")}
            className="order-2 sm:order-1 px-6 py-2 border border-green-700 text-green-700 rounded font-semibold hover:bg-green-50 transition text-center"
          >
            Back
          </button>

          <button
            onClick={() => navigate("/checkout")}
            className="order-1 sm:order-2 px-6 py-2 bg-green-700 text-white rounded font-semibold hover:bg-green-800 transition text-center shadow-md"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;