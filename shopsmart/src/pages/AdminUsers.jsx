

// import { useEffect, useState } from "react";
// import { API } from "../services/api";

// function AdminUsers() {
//   const [users, setUsers] = useState([]);
//   const userInfo = JSON.parse(localStorage.getItem("userInfo"));

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await API.get("/users", {
//           headers: { Authorization: `Bearer ${userInfo.token}` },
//         });
//         setUsers(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchUsers();
//   }, [userInfo.token]);

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       <div className="flex-1 p-8">
//         <h1 className="text-2xl font-bold text-gray-800 mb-8">User Management</h1>
        
//         <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
//           <table className="w-full text-left">
//             <thead className="bg-gray-50 border-b border-gray-100">
//               <tr>
//                 <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Member Name</th>
//                 <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Email Address</th>
//                 <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Role / Status</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-50">
//               {users.map((user) => (
//                 <tr key={user._id} className="hover:bg-gray-50">
//                   <td className="p-4 flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">
//                       {user.name.charAt(0)}
//                     </div>
//                     <span className="text-sm font-medium text-gray-700">{user.name}</span>
//                   </td>
//                   <td className="p-4 text-sm text-gray-600">{user.email}</td>
//                   <td className="p-4">
//                     <span className={`px-3 py-1 rounded-md text-xs font-bold uppercase ${
//                       user.role === 'admin' ? "bg-purple-100 text-purple-700" : "bg-green-100 text-green-700"
//                     }`}>
//                       {user.role}
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
// export default AdminUsers;
import { useEffect, useState } from "react";
import { API } from "../services/api";
import { useNavigate } from "react-router-dom";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.get("/users", {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        setUsers(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  }, [userInfo.token]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar - FreshCo Theme */}
      <div className="w-64 bg-green-700 text-white p-6 shadow-xl">
        <h2 className="text-2xl font-bold mb-10">FreshCo Admin</h2>
        <ul className="space-y-3">
          <li onClick={() => navigate("/freshco-admin")} className="p-3 hover:bg-green-600 rounded cursor-pointer transition">Products</li>
          <li onClick={() => navigate("/admin/orders")} className="p-3 hover:bg-green-600 rounded cursor-pointer transition">Orders</li>
          <li className="bg-green-600 p-3 rounded cursor-pointer font-bold">Users</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Member Directory</h1>
        
        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Member</th>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</th>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status/Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50 transition">
                  <td className="p-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold shadow-sm border border-blue-200">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{user.name}</span>
                  </td>
                  <td className="p-4 text-sm text-gray-600 font-medium">{user.email}</td>
                  <td className="p-4">
                    <span className={`px-4 py-1 rounded text-xs font-black uppercase tracking-widest border ${
                      user.role === 'admin' ? "bg-purple-50 text-purple-600 border-purple-200" : "bg-green-50 text-green-600 border-green-200"
                    }`}>
                      {user.role}
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