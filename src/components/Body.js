import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Restaurantcard, { withPromotedList } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredList, setfilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(listOfRestaurant);
  const RestaurantCardPromoted = withPromotedList(Restaurantcard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.365636633785982&lng=85.30080601572992&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    if (process.env.NODE_ENV !== "production") {
      console.log(json);
    }
    const restaurants =
      json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setListOfRestaurant(restaurants);
    setfilteredList(restaurants);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks Like youre offline !! Please check your Internet Connection</h1>
    );

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurant.filter((res) =>
                res.info?.name?.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.info?.avgRating > 4.2
              );
              setfilteredList(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredList.map((restaurant, index) => (
          <Link
            to={`/restaurants/${restaurant.info?.id}`}
            key={restaurant.info?.id || index}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <Restaurantcard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
