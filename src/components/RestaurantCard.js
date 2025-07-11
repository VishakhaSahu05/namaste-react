import { FOOD_URL } from "../utils/constants";

const Restaurantcard = (props) => {
  const { resData } = props;
  const info = resData.info ? resData.info : resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={FOOD_URL
           +
          info.cloudinaryImageId
        }
      />
      <h3>{info.name}</h3>
      <h4>{info.cuisines?.join(", ")}</h4>
      <h4>{info.avgRating}</h4>
      <h4>{info.costForTwo}</h4>
      <h4>{info.sla?.deliveryTime} mins</h4>
    </div>
  );
};
export default Restaurantcard;
