

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

function AdminDashboard() {

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {

    const res = await fetch(`${API}/api/products`);
    const data = await res.json();
    setProducts(data);

  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {

    try {

      await axios.delete(`${API}/api/products/admin/delete/${id}`);
      alert("Product deleted");

      fetchProducts();

    } catch (error) {

      console.error(error);

    }

  };


  const updateStatus = async (id, status) => {

    try {

      const stockValue = status === "active" ? 10 : 0;

      await axios.put(
        `${API}/api/products/admin/update/${id}`,
        { stock: stockValue }
      );

      fetchProducts();

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-green-700 text-white p-6">

        <h2 className="text-2xl font-bold mb-10">
          FreshCo Admin
        </h2>

     
<ul className="space-y-3">
  <Link to="/freshco-admin">
    <li className="bg-green-600 p-3 rounded cursor-pointer">Products</li>
  </Link>

  {/* Make sure these paths match your App.js/main.js routes */}
  <Link to="/admin/orders">
    <li className="p-3 hover:bg-green-600 rounded cursor-pointer">Orders</li>
  </Link>

  <Link to="/admin/users">
    <li className="p-3 hover:bg-green-600 rounded cursor-pointer">Users</li>
  </Link>
</ul>

      </div>


      {/* Main */}
      <div className="flex-1 p-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">

          <h1 className="text-3xl font-bold text-gray-800">
            Products
          </h1>

          <div className="flex gap-3">

            <Link to="/freshco-admin/add-product">

              <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">

                <FaPlus /> Add Product

              </button>

            </Link>

            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
            >
              ← Back
            </button>

          </div>

        </div>


        {/* Table */}
        <div className="bg-white rounded-lg shadow">

          <table className="w-full">

            <thead className="bg-gray-100 text-gray-600 text-left">

              <tr>

                <th className="p-4">Product</th>
                <th className="p-4">Price</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>

              </tr>

            </thead>

            <tbody>

              {products.map((p) => (

                <tr key={p._id} className="border-t">

                  <td className="p-4 flex items-center gap-3">

                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-12 h-12 rounded object-cover"
                    />

                    <span className="font-medium">
                      {p.name}
                    </span>

                  </td>

                  <td className="p-4 font-medium">
                    ₹{p.price}
                  </td>

                  <td className="p-4">

                    <select
                      value={p.stock > 0 ? "active" : "outofstock"}
                      onChange={(e) => updateStatus(p._id, e.target.value)}
                      className={`px-3 py-1 rounded text-sm font-medium border cursor-pointer ${p.stock > 0
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                        }`}
                    >

                      <option value="active">Active</option>
                      <option value="outofstock">Out of Stock</option>

                    </select>

                  </td>

                  <td className="p-4 flex gap-3">

                    <Link to={`/freshco-admin/edit-product/${p._id}`}>

                      <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded">
                        <FaEdit />
                      </button>

                    </Link>

                    <button
                      onClick={() => deleteProduct(p._id)}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded"
                    >
                      <FaTrash />
                    </button>

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

export default AdminDashboard;