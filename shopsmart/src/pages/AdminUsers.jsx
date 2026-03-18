import { useEffect, useState } from "react";
import { API } from "../services/api"; 
import { useNavigate } from "react-router-dom";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // FIX: Checking BOTH common names for local storage
  const rawData = localStorage.getItem("user") || localStorage.getItem("userInfo");
  const userInfo = rawData ? JSON.parse(rawData) : null;

  const fetchUsers = async () => {
    try {
      if (!userInfo?.token) {
        setError("You are not logged in. Please log in as an Admin.");
        setLoading(false);
        return;
      }

      const res = await API.get("/users", {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      setUsers(res.data);
    } catch (err) {
      console.error("Fetch Error:", err.response?.data || err.message);
      setError("Failed to fetch users. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div className="p-10 text-center text-green-700 font-bold">Connecting to Database...</div>;

  if (error) return (
    <div className="p-10 text-center">
      <p className="text-red-500 mb-4">{error}</p>
      <button onClick={() => navigate("/login")} className="bg-green-600 text-white px-4 py-2 rounded">Go to Login</button>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-green-700 text-white p-6">
        <h2 className="text-2xl font-bold mb-10">FreshCo Admin</h2>
        <ul className="space-y-3">
          <li onClick={() => navigate("/freshco-admin")} className="p-3 hover:bg-green-600 rounded cursor-pointer">Products</li>
          <li onClick={() => navigate("/admin/orders")} className="p-3 hover:bg-green-600 rounded cursor-pointer">Orders</li>
          <li className="bg-green-600 p-3 rounded cursor-pointer">Users</li>
        </ul>
      </div>

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6">Users List ({users.length})</h1>
        <div className="bg-white rounded shadow overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u._id} className="border-t">
                  <td className="p-4 font-medium">{u.name}</td>
                  <td className="p-4">{u.email}</td>
                  <td className="p-4 capitalize">
                    <span className={`px-2 py-1 rounded text-xs ${u.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                      {u.role}
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

export default AdminUsers;