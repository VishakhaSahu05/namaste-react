import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";
import { FOOD_URL } from "../utils/constants";
const ItemList = ({ item , dummy }) => {
  if (!item || item.length === 0) return null;
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {item.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 mb-4 border-b border-gray-200 flex justify-between items-start"
        >
          {/* Left Section */}
          <div className="w-9/12 pr-4">
            <div className="mb-1">
              <h3 className="font-semibold">{item.card.info.name}</h3>
              <p className="text-sm text-gray-600">
                ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
              </p>
            </div>
            <p className="text-xs text-gray-500">
              {item.card.info.description}
            </p>
          </div>

          {/* Right Section */}
          <div className="w-3/12 relative">
            {item.card.info.imageId && (
              <img
                src={FOOD_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-full h-auto rounded-md shadow"
              />
            )}
            <button
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 text-sm rounded-lg bg-black text-white shadow-md cursor-pointer"
              onClick={()=>handleAddItem(item)}
            >
              Add+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
