import { useState } from "react";

import { Outlet } from "react-router-dom";

function Shoplayout() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [priceRange, setPriceRange] = useState(500);

  return (
    <div className="flex gap-6 px-6">


      <div className="flex-1">
        <Outlet
          context={{
            selectedCategories,
            selectedRating,
            priceRange,
          }}
        />
      </div>
    </div>
  );
}

export default Shoplayout;



