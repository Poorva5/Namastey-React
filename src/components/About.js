import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component  {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <h1>About</h1>
                <p>This is about us page</p>
                <UserClass name={"Poorva classy"} phone={"9876543210"} location={"bangalore"}/>
            </div>
        )
    }
}

export default About;