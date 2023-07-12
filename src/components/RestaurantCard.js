import { CDN_URL } from '../utils/constants'

const styleCard = {
    backgroundColor: '#f0f0f0'
}

const RestaurantCard = (props) => {
     
    const {resData} = props;

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.data
    return (
        <div className='res-card' style={styleCard}>
            <img className='res-logo' alt="res-logo" src={CDN_URL + resData.data.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h5>{cuisines.join(', ')}</h5>
            <h5>{avgRating}</h5>
            <h5>{costForTwo/ 100}</h5>
            <h5>{deliveryTime} minutes</h5>
        </div>
    )
}


export default RestaurantCard;