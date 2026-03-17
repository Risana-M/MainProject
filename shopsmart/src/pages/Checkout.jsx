
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "../features/cartSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

function Checkout() {
  const cart = useSelector((state) => state.cart.items);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const buyNowProduct = location.state?.product;
  const [addressSaved, setAddressSaved] = useState(false);

  const checkoutItems = buyNowProduct
    ? [{ ...buyNowProduct, quantity: 1 }]
    : cart;

  const total = checkoutItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (checkoutItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        🧾 No items to checkout
      </div>
    );
  }

  const saveAddress = () => {
    setAddressSaved(true);
    alert("Delivery details saved ✅");
  };

  const placeOrder = async () => {
    if (!addressSaved) {
      alert("Please save delivery details first 📦");
      return;
    }

    try {
      await axios.post(
        `${API}/api/orders`,
        {
          items: checkoutItems,
          totalAmount: total,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      alert("Order placed successfully 🎉");

      if (!buyNowProduct) {
        dispatch(clearCart());
      }

      navigate("/orders");

    } catch (error) {
      console.error(error);
      alert("Order failed ❌");
    }
  };

  return (
    <div className="p-6 grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded shadow flex flex-col">
        <h2 className="text-xl font-semibold mb-4">
          Delivery Details
        </h2>

        <input className="w-full border p-2 mb-3" placeholder="Name" />
        <input className="w-full border p-2 mb-3" placeholder="Phone" />
        <input className="w-full border p-2 mb-3" placeholder="Address" />
        <input className="w-full border p-2 mb-3" placeholder="City" />
        <input className="w-full border p-2 mb-3" placeholder="Pincode" />

        <button
          onClick={saveAddress}
          className={`mt-auto py-2 rounded text-white ${addressSaved
              ? "bg-green-500"
              : "bg-green-700 hover:bg-green-800"
            }`}
        >
          {addressSaved ? "Address Saved ✓" : "Save Delivery Details"}
        </button>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">
          Order Summary
        </h2>

        {checkoutItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center mb-3"
          >
            <p>
              {item.name} × {item.quantity}
            </p>

            {!buyNowProduct && (
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <hr className="my-4" />

        <h3 className="text-lg font-bold mb-4">
          Total: ₹{total}
        </h3>

        <button
          onClick={placeOrder}
          className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;