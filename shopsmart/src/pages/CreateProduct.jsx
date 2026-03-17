
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function CreateProduct() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    rating: "",
    freshness: ""
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", formData.name);
    data.append("category", formData.category);
    data.append("price", formData.price);
    data.append("rating", formData.rating);
    data.append("freshness", formData.freshness);
    data.append("image", image);

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    try {

      const res = await axios.post(
        `${API}/api/products/admin/add`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      console.log(res.data);

      alert("Product created successfully ✅");

    } catch (error) {

      console.error(error);

      alert("Error creating product ❌");

    }
  };

  const imageHandler = (e) => {

    const file = e.target.files[0];

    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">

        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Add New Product
        </h2>

        <form onSubmit={submitHandler} className="space-y-4">

          <input
            type="text"
            placeholder="Product Name"
            className="border p-3 w-full rounded"
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <input
            type="text"
            placeholder="Category"
            className="border p-3 w-full rounded"
            required
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          />

          <input
            type="number"
            placeholder="Price"
            className="border p-3 w-full rounded"
            required
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          />

          <input
            type="number"
            step="0.1"
            placeholder="Rating"
            className="border p-3 w-full rounded"
            onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
          />

          <input
            type="text"
            placeholder="Freshness (ex: New Harvest)"
            className="border p-3 w-full rounded"
            onChange={(e) => setFormData({ ...formData, freshness: e.target.value })}
          />

          <input
            type="file"
            accept="image/*"
            className="border p-3 w-full rounded"
            onChange={imageHandler}
            required
          />

          {preview && (
            <img
              src={preview}
              alt="preview"
              className="w-32 h-32 object-cover rounded"
            />
          )}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
          >
            Create Product
          </button>

        </form>

      </div>

    </div>
  );
}

export default CreateProduct;