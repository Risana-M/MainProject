
//product modal in the homepage


import { useNavigate } from "react-router-dom";

function ProductQuickView({ product, onClose }) { // PROPS: 'product' the data to show and 'onClose' the function to hide this popup
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white w-[90%] md:w-[700px] rounded-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2 gap-6 items-center"> {/* added items-center to align columns vertically */}
          <img
            src={product.image}
            alt={product.name || product.title}
            className="w-full h-64 object-contain"
          />

          {/* This div controls the right column content */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-2">
              {product.name || product.title}
            </h2>

            <p className="text-green-700 font-bold text-xl mb-2">
              {product.price}
            </p>

            {/* --- CENTERED DESCRIPTION --- */}
            <p className="text-gray-500 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductQuickView;