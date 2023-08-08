import React, { useEffect } from "react"
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [butnName, setbutnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    // selector is hook, subscribing to the store using selector

    const cartItems = useSelector((store) => store.cart.items);

    console.log(cartItems)

    // if no dependency array then use effect will called on every render 


    return (
        <div className='flex justify-between bg-gray-50 shadow-md px-8 sm:bg-yellow-50 lg:bg-green-50'>
            <div className='logo-container'>
            <img className='w-24' src={LOGO_URL}/>
            </div>
            <div className='flex item-center'>
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "Online" : "Offline"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-xl">
                        <Link to="/cart" className=" cursor-pointer">
                            Cart ({cartItems.length} items)
                        </Link>
                    </li>
                    
                    <li><button className="login" onClick={() => { 
                        butnName === "Login" 
                        ? setbutnName("Logout")
                        : setbutnName("Login")
                    }}
                >{butnName}</button></li>

                <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header

