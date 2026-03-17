

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded-lg"
      />

      <h3 className="mt-3 font-semibold text-lg">{product.name}</h3>

      <p className="text-sm text-gray-600">{product.category}</p>

      <div className="flex items-center gap-1 mt-1">
      
        <span className="text-sm">{product.rating}</span>
      </div>

      <div className="flex justify-between items-center mt-3">
        <span className="font-bold text-primary">
          {product.price}
        </span>

        <button className="text-gray-500 hover:text-red-500">
        
        </button>
      </div>

      <button className="mt-4 bg-primary text-white py-2 rounded-lg hover:bg-green-700">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;