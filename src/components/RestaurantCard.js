import { useContext } from "react";
import { FOOD_URL } from "../utils/constants";
import UserContext from "./UserContext";

const Restaurantcard = (props) => {
  const { resData } = props;
  const {loggedUser} = useContext(UserContext);
  const info = resData.info ? resData.info : resData;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={FOOD_URL + info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-xl">{info.name}</h3>
      <h4>{info.cuisines?.join(", ")}</h4>
      <h4>{info.avgRating}</h4>
      <h4>{info.costForTwo}</h4>
      <h4>{info.sla?.deliveryTime} mins</h4>
      <h4>User: {loggedUser}</h4>
    </div>
  );
};

export const withPromotedList = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default Restaurantcard;
