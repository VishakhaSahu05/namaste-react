import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex , setShowIndex] = useState(0);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const categories = resInfo?.cards
    ?.find((c) => c.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">{cuisines?.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>

      <h2 className="font-bold text-xl my-4">Menu</h2>
      <ul>
        {categories.map((category, index) => (
          //controlled component
          <RestaurantCategory
            key={category?.card?.card?.title || index}
            info={category?.card}
            showItems = {index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
