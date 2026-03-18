

// import { useEffect, useState } from "react";
// import { API } from "../services/api";

// function AdminOrders() {
//   const [orders, setOrders] = useState([]);
//   const userInfo = JSON.parse(localStorage.getItem("userInfo"));

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const res = await API.get("/orders/all", {
//           headers: { Authorization: `Bearer ${userInfo.token}` },
//         });
//         setOrders(res.data);
//       } catch (err) {
//         console.error("Fetch error", err);
//       }
//     };
//     fetchOrders();
//   }, [userInfo.token]);

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       <div className="flex-1 p-8">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-2xl font-bold text-gray-800">Order History</h1>
//           <div className="text-sm text-gray-500">Total Orders: {orders.length}</div>
//         </div>

//         <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
//           <table className="w-full text-left border-collapse">
//             <thead className="bg-gray-50 border-b border-gray-100">
//               <tr>
//                 <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Order ID</th>
//                 <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Customer</th>
//                 <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Total Price</th>
//                 <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Payment</th>
//                 <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Status</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-50">
//               {orders.map((order) => (
//                 <tr key={order._id} className="hover:bg-gray-50 transition-colors">
//                   <td className="p-4 text-sm font-medium text-green-700">#{order._id.slice(-6)}</td>
//                   <td className="p-4 text-sm text-gray-700">{order.user?.name || "Guest"}</td>
//                   <td className="p-4 text-sm font-bold text-gray-900">${order.totalAmount}</td>
//                   <td className="p-4 text-sm text-gray-600">
//                     <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-medium">
//                       {order.paymentMethod || "Online"}
//                     </span>
//                   </td>
//                   <td className="p-4">
//                     <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                       order.isPaid ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
//                     }`}>
//                       {order.isPaid ? "Delivered" : "Pending"}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default AdminOrders;
import { useEffect, useState } from "react";
import { API } from "../services/api";
import { useNavigate } from "react-router-dom";

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await API.get("/orders/all", {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        setOrders(res.data);
      } catch (err) {
        console.error("Fetch error", err);
      }
    };
    fetchOrders();
  }, [userInfo.token]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar - FreshCo Theme */}
      <div className="w-64 bg-green-700 text-white p-6 shadow-xl">
        <h2 className="text-2xl font-bold mb-10">FreshCo Admin</h2>
        <ul className="space-y-3">
          <li onClick={() => navigate("/freshco-admin")} className="p-3 hover:bg-green-600 rounded cursor-pointer transition">Products</li>
          <li className="bg-green-600 p-3 rounded cursor-pointer font-bold">Orders</li>
          <li onClick={() => navigate("/admin/users")} className="p-3 hover:bg-green-600 rounded cursor-pointer transition">Users</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Order Management</h1>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Total Amount</th>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Payment</th>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-50 transition">
                  <td className="p-4 flex items-center gap-3">
                    {/* Alphabet Profile Icon */}
                    <div className="w-9 h-9 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold shadow-sm">
                      {(order.user?.name || "G").charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{order.user?.name || "Guest User"}</span>
                  </td>
                  <td className="p-4 text-sm text-blue-600 font-mono">#{order._id.slice(-6)}</td>
                  <td className="p-4 text-sm font-bold text-gray-900">${order.totalAmount}</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium border">
                      {order.paymentMethod || "COD"}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      order.isPaid ? "bg-green-100 text-green-700 border border-green-200" : "bg-yellow-100 text-yellow-700 border border-yellow-200"
                    }`}>
                      {order.isPaid ? "Delivered" : "Processing"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default AdminOrders;