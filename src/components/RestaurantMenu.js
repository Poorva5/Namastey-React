import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./ResCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const dummy = "Dummy data"

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return ( <Shimmer/> );

    const {name, cuisines, costForTwoMessage } = resInfo?.data?.cards[0]?.card?.card?.info; 

    const {itemCards} = resInfo?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = 
        resInfo?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) => 
                c.card?.card?.['@type'] ===
                    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                    )
    console.log(categories, 'cat')

    return  (

        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h3 className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</h3>

            {categories.map((category, index) => (
            <RestaurantCategory 
            index={index}
            key={category?.card?.card.title} 
            data={category?.card?.card} 
            dummy={dummy}
            />
            ))}
        </div>
    );
}

export default RestaurantMenu;