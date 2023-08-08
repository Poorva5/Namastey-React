import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurant] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [searchText, setSearchText] = useState("")

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    //whenever state variable update, react tirggers a reconciliation cycle(re-renders the component)

    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        // Optional Channing 
        setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) 
    return (
        <h2>Looks like you are offline !! Please check your internet connection</h2>
    )

    const { setUserName, loggedInUser} = useContext(UserContext);

    //conditional rendering

    return listOfRestaurants?.length === 0 ? <Shimmer/> : (
    <div className='body'>
            <div className='filter flex'>
                <div className="search m-2 p-2">
                    <input type="text" 
                    className="border border-solid border-black"
                    value={searchText} 
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-4 py-2 bg-green-500 m-4 rounded-lg"
                        onClick={() => {
                            const filteredRestaurant = listOfRestaurants?.filter((res) => res.info.name.toLowerCase().includes(searchText))
                            setFilteredRestaurant(filteredRestaurant)
                        }}
                    >Search</button>
                </div>
                <div className="search m-2 p-2 flex items-center">
                <button className="px-4 py-2 bg-gray-50" 
                onClick={() => {
                    const filteredList = listOfRestaurants?.filter((res) => res.info.avgRating > 4.2);
                    setListOfRestaurant(filteredList);
                        }}
                    >
                    Top Rated Restaurants</button>
                </div>

                <div className="search m-2 p-2 flex items-center">
                    <label>User Name: </label>
                    <input className="border border-black m-2"
                        value ={loggedInUser}  
                        onChange={(e) => setUserName(e.target.value)}/>
                </div>

            </div>
            <div className='flex flex-wrap'>
                {
                   filteredRestaurant?.map((restaurant) => (
                   <Link  
                    key={restaurant.info.id}
                    to={"/restaurant/" + restaurant.info.id}>
                        {restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard resData={restaurant}/>}
                   </Link>
                   ))
                }
            </div>
        </div>
    )
}

export default Body;