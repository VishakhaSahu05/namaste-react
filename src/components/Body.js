import Restaurantcard from "./Restaurantcard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredList , setfilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.365636633785982&lng=85.30080601572992&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredList(
      json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional Rendering
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = listOfRestaurant.filter((res) =>
                res.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setfilteredList(filteredList);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
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

      <div className="res-container">
        {filteredList.map((restaurant, index) => (
          <Restaurantcard
            key={restaurant.info?.id || index}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
