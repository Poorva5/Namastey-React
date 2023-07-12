import React from 'react';
import ReactDOM from 'react-dom/client';

const styleCard = {
    backgroundColor: '#f0f0f0'
}

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
            <img className='logo' src="https://cdn.dribbble.com/users/3055978/screenshots/11864513/1_4x.jpg"/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className='res-card' style={styleCard}>
            <img className='res-logo' alt="res-logo" src="https://cookingfromheart.com/wp-content/uploads/2017/09/Veg-Biryani-in-Pressure-Cooker-6.jpg"/>
            <h3>Meghna Foods</h3>
        </div>
    )
}


const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}

const root  = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)

