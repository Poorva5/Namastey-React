import React from "react";


class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "dummy",
                location: "Default"
            }
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/poorva5")
        const json = await data.json()

        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate() {
        console.log("component updated")
    }



    render() {
        return (
            <div className="user-card">
                <img src={this.state.userInfo.avatar_url}/>
                <h2>Name: {this.state.userInfo.login}</h2>
                <h3>Location: {this.state.userInfo.location}</h3>
            </div>
        )
    }
}


export default UserClass;