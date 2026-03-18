import { useEffect, useState } from "react";
import { API } from "../services/api"; 
import { useNavigate } from "react-router-dom";

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const rawData = localStorage.getItem("user") || localStorage.getItem("userInfo");
  const userInfo = rawData ? JSON.parse(rawData) : null;

  const fetchOrders = async () => {
    try {
      if (!userInfo?.token) {
        setError("Admin Token Not Found.");
        setLoading(false);
        return;
      }

      const res = await API.get("/orders/all", {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      setOrders(res.data);
    } catch (err) {
      setError("Failed to load orders.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchOrders(); }, []);

  if (loading) return <div className="p-20 text-center">Loading Orders...</div>;
  if (error) return <div className="p-20 text-center text-red-500">{error}</div>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-green-700 text-white p-6">
        <h2 className="text-2xl font-bold mb-10 text-center">FreshCo</h2>
        <ul className="space-y-4">
           <li onClick={() => navigate("/freshco-admin")} className="p-3 hover:bg-green-600 rounded cursor-pointer">Products</li>
           <li className="bg-green-600 p-3 rounded cursor-pointer font-bold">Orders</li>
           <li onClick={() => navigate("/admin/users")} className="p-3 hover:bg-green-600 rounded cursor-pointer">Users</li>
        </ul>
      </div>

      <div className="flex-1 p-10">
        <h1 className="text-4xl font-extrabold mb-8 text-gray-800">Order History</h1>
        <div className="bg-white rounded-xl shadow-lg">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-5 text-gray-600">Customer</th>
                <th className="p-5 text-gray-600">Total Price</th>
                <th className="p-5 text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o._id} className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold text-gray-700">{o.user?.name || "Deleted User"}</td>
                  <td className="p-5 text-green-600 font-bold">₹{o.totalAmount}</td>
                  <td className="p-5">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">Processing</span>
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