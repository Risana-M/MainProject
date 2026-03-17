

function HomeDealCard({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="min-w-[150px] bg-white p-3 rounded shadow cursor-pointer hover:shadow-lg transition hover:scale-110 hover:bg-gray-100"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-28 object-contain"
      />

      <p className="text-sm mt-2 text-gray-700 font-medium">
        {item.name}
      </p>

      <p className="text-green-700 font-semibold">
        ₹{item.price}
      </p>
    </div>
  );
}

export default HomeDealCard;
