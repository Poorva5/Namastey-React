import { useContext } from 'react';
import { CDN_URL } from '../utils/constants';
import UserContext from '../utils/UserContext';

const RestaurantCard = (props) => {
     
    const {resData} = props;

    const {loggedInUser} = useContext(UserContext);

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.info
    return (
        <div className='m-4 p-2 w-[250px] rounded-sm bg-gray-100 hover:bg-gray-200'>
            <img alt="res-logo" src={CDN_URL + resData.info.cloudinaryImageId}/>
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h5>{cuisines}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo/ 100} FOR TWO</h5>
            <h5>{deliveryTime} minutes</h5>
            <h5>User: {loggedInUser}</h5>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className='absolute bg-black text-white m-2 p-2 rounded-lg'>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

// higher order component

// input - RestaurantCard => RestaurantCardPromoted

export default RestaurantCard;