
// import { useSelector, useDispatch } from "react-redux";
// import { clearCart, removeFromCart } from "../features/cartSlice";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// const API = import.meta.env.VITE_API_URL;

// function Checkout() {
//   const cart = useSelector((state) => state.cart.items);
//   const { userInfo } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const buyNowProduct = location.state?.product;
//   const [addressSaved, setAddressSaved] = useState(false);

//   const checkoutItems = buyNowProduct
//     ? [{ ...buyNowProduct, quantity: 1 }]
//     : cart;

//   const total = checkoutItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   if (checkoutItems.length === 0) {
//     return (
//       <div className="min-h-[60vh] flex items-center justify-center">
//         🧾 No items to checkout
//       </div>
//     );
//   }

//   const saveAddress = () => {
//     setAddressSaved(true);
//     alert("Delivery details saved ✅");
//   };

// // //
//   const placeOrder = async () => {
//     if (!addressSaved) {
//       alert("Please save delivery details first 📦");
//       return;
//     }

//     try {
//       await axios.post(
//         `${API}/api/orders`,
//         {
//           items: checkoutItems,
//           totalAmount: total,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${userInfo.token}`,
//           },
//         }
//       );

//       alert("Order placed successfully 🎉");

//       if (!buyNowProduct) {
//         dispatch(clearCart());
//       }

//       navigate("/orders");

//     } catch (error) {
//       console.error(error);
//       alert("Order failed ❌");
//     }
//   };

//   return (
//     <div className="p-6 grid md:grid-cols-2 gap-6">
//       <div className="bg-white p-6 rounded shadow flex flex-col">
//         <h2 className="text-xl font-semibold mb-4">
//           Delivery Details
//         </h2>

//         <input className="w-full border p-2 mb-3" placeholder="Name" />
//         <input className="w-full border p-2 mb-3" placeholder="Phone" />
//         <input className="w-full border p-2 mb-3" placeholder="Address" />
//         <input className="w-full border p-2 mb-3" placeholder="City" />
//         <input className="w-full border p-2 mb-3" placeholder="Pincode" />

//         <button
//           onClick={saveAddress}
//           className={`mt-auto py-2 rounded text-white ${addressSaved
//               ? "bg-green-500"
//               : "bg-green-700 hover:bg-green-800"
//             }`}
//         >
//           {addressSaved ? "Address Saved ✓" : "Save Delivery Details"}
//         </button>
//       </div>

//       <div className="bg-white p-6 rounded shadow">
//         <h2 className="text-xl font-semibold mb-4">
//           Order Summary
//         </h2>

//         {checkoutItems.map((item) => (
//           <div
//             key={item.id}
//             className="flex justify-between items-center mb-3"
//           >
//             <p>
//               {item.name} × {item.quantity}
//             </p>

//             {!buyNowProduct && (
//               <button
//                 onClick={() => dispatch(removeFromCart(item.id))}
//                 className="text-red-500 text-sm"
//               >
//                 Remove
//               </button>
//             )}
//           </div>
//         ))}

//         <hr className="my-4" />

//         <h3 className="text-lg font-bold mb-4">
//           Total: ₹{total}
//         </h3>

//         <button
//           onClick={placeOrder}
//           className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
//         >
//           Place Order
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Checkout;

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
    (sum, item) => sum + item.price * (item.quantity || item.qty || 1),
    0
  );

  if (checkoutItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center font-bold text-gray-500">
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
      // CLEAN DATA: Map items to match the Order Model exactly
      const formattedItems = checkoutItems.map((item) => ({
        name: item.name,
        price: Number(item.price),
        quantity: Number(item.quantity || item.qty || 1),
      }));

      await axios.post(
        `${API}/api/orders`,
        {
          items: formattedItems,
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
      console.error("ORDER FAIL:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Order failed ❌");
    }
  };

  return (
    <div className="p-6 grid md:grid-cols-2 gap-6 bg-gray-50 min-h-screen">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
        <h2 className="text-xl font-bold mb-4 text-green-800">Delivery Details</h2>
        <div className="space-y-3">
          <input className="w-full border p-2 rounded focus:outline-green-500" placeholder="Full Name" />
          <input className="w-full border p-2 rounded focus:outline-green-500" placeholder="Phone Number" />
          <textarea className="w-full border p-2 rounded focus:outline-green-500" placeholder="Full Address" rows="3" />
          <div className="grid grid-cols-2 gap-3">
            <input className="border p-2 rounded focus:outline-green-500" placeholder="City" />
            <input className="border p-2 rounded focus:outline-green-500" placeholder="Pincode" />
          </div>
        </div>

        <button
          onClick={saveAddress}
          className={`mt-6 py-2 rounded font-bold text-white transition ${
            addressSaved ? "bg-green-500" : "bg-green-700 hover:bg-green-800"
          }`}
        >
          {addressSaved ? "Address Saved ✓" : "Save Delivery Details"}
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold mb-4 text-green-800">Order Summary</h2>
        <div className="max-h-60 overflow-y-auto pr-2">
          {checkoutItems.map((item) => (
            <div key={item._id || item.id} className="flex justify-between items-center mb-4 pb-2 border-b border-gray-50">
              <div>
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity || item.qty || 1}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-700">₹{item.price * (item.quantity || item.qty || 1)}</p>
                {!buyNowProduct && (
                  <button onClick={() => dispatch(removeFromCart(item._id || item.id))} className="text-red-400 text-xs hover:underline">
                    Remove
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t-2 border-dashed border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-600 font-medium">Grand Total</span>
            <span className="text-2xl font-black text-green-800">₹{total}</span>
          </div>

          <button
            onClick={placeOrder}
            className="w-full bg-green-700 text-white py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-green-800 active:scale-95 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;