
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

// Make sure your .env has VITE_API_URL=https://freshco-backend.onrender.com (no /api at end)
const API_BASE = import.meta.env.VITE_API_URL;

function Orders() {
  const { userInfo } = useSelector((state) => state.auth);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${API_BASE}/api/orders/myorders`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        setOrders(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userInfo) fetchOrders();
  }, [userInfo]);

  if (!userInfo) return <div className="p-20 text-center text-gray-500">Please login to view orders.</div>;
  if (loading) return <div className="p-20 text-center text-green-600 font-bold">Loading your orders...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-[70vh]">
      <h2 className="text-3xl font-bold text-green-800 mb-8">My Order History</h2>

      {orders.length === 0 ? (
        <div className="bg-white p-10 rounded-xl shadow-sm border text-center">
          <p className="text-gray-500 text-lg">You haven't placed any orders yet 🧾</p>
          <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="grid gap-6">
          {orders.map((order) => (
            <div key={order._id} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-center hover:shadow-md transition">
              <div className="flex items-center gap-4">
                {/* Alphabet Profile for the Customer */}
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xl border border-green-200">
                  {userInfo.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-mono">ID: #{order._id.slice(-6)}</p>
                  <p className="font-bold text-gray-800">{userInfo.name}</p>
                  <p className="text-sm text-gray-500">{order.items.length} Items purchased</p>
                </div>
              </div>

              <div className="mt-4 md:mt-0 text-right">
                <p className="text-2xl font-black text-green-700">₹{order.totalAmount}</p>
                <div className="flex gap-2 mt-1">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase rounded border border-blue-100">
                    {order.paymentMethod || "Online"}
                  </span>
                  <span className={`px-3 py-1 text-[10px] font-bold uppercase rounded border ${
                    order.isPaid ? "bg-green-50 text-green-600 border-green-100" : "bg-orange-50 text-orange-600 border-orange-100"
                  }`}>
                    {order.isPaid ? "Paid" : "Pending"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;










// import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const API = import.meta.env.VITE_API_URL;

// function Orders() {
//   const { userInfo } = useSelector((state) => state.auth);
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const { data } = await axios.get(
//           `${API}/api/orders`,
//           {
//             headers: {
//               Authorization: `Bearer ${userInfo.token}`,
//             },
//           }
//         );
//         console.log("ORDERS RESPONSE:", data);
//         setOrders(Array.isArray(data) ? data : []);  // setOrders(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     if (userInfo) {
//       fetchOrders();
//     }
//   }, [userInfo]);

//   if (!userInfo) {
//     return (
//       <div className="min-h-[60vh] flex items-center justify-center">
//         Please login to view your orders.
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 min-h-[60vh]">
//       <h2 className="text-2xl font-bold text-green-800 mb-6">
//         My Orders
//       </h2>

//       {orders.length === 0 ? (
//         <p>No orders yet 🧾</p>
//       ) : (
//         Array.isArray(orders) &&
//         orders.map((order) => ( //orders.map((order) => (
//           <div key={order._id} className="bg-white p-4 rounded shadow mb-4">
//             <p className="font-semibold">
//               Order ID: {order._id}
//             </p>
//             <p>Total: ₹{order.totalAmount}</p>
//             <p>
//               Items: {order.items.length}
//             </p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Orders;