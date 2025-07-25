import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ info, showItems,setShowIndex}) => {
  const handleClick = () => {
     setShowIndex();
  };
  return (
    <div className="w-6/12 m-auto my-6 bg-gray-50 shadow-lg p-6 rounded-md">
      {/* Title and Arrow */}
      <div
        className="flex justify-between items-center mb-4"
        onClick={handleClick}
      >
        <span className="font-bold text-lg text-gray-800 cursor-pointer">
          {info?.card?.title} ({info?.card?.itemCards?.length || 0})
        </span>
        <span className="text-xl text-blue-600 cursor-pointer">🔽</span>
      </div>

      {/* Item List */}
      {showItems && <ItemList item={info?.card?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
