import { useEffect, useState } from "react";

const User = ({name, location, phone}) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        
    }, [])


    return <div className="user-card">
        <h1>Count = {count}</h1>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h4>Contact: {phone}</h4>
    </div>
}

export default User;