
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [freshness, setFreshness] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {

    const fetchProduct = async () => {

      const res = await fetch(`http://localhost:5000/api/products/${id}`);
      const data = await res.json();

      setName(data.name);
      setCategory(data.category);
      setPrice(data.price);
      setRating(data.rating);
      setFreshness(data.freshness);
      setImage(data.image);

    };

    fetchProduct();

  }, [id]);


  const updateProduct = async (e) => {

    e.preventDefault();

    await fetch(`http://localhost:5000/api/products/admin/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        category,
        price,
        rating,
        freshness,
        image
      })
    });

    alert("Product updated successfully");

    navigate("/freshco-admin");

  };


  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">

        {/* Header */}

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold text-green-700">
            Edit Product
          </h2>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
          >
            ← Back
          </button>

        </div>

        {/* Form */}

        <form onSubmit={updateProduct} className="space-y-4">

          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="number"
            step="0.1"
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="text"
            placeholder="Freshness"
            value={freshness}
            onChange={(e) => setFreshness(e.target.value)}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="text"
            placeholder="Main Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />

          {/* Image Preview */}

          {image && (
            <img
              src={image}
              alt="preview"
              className="w-32 rounded-lg border"
            />
          )}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Update Product
          </button>

        </form>

      </div>

    </div>

  );
}

export default EditProduct;