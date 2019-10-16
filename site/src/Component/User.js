import React, {Component} from 'react';

class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            token: null
        };
    }

    componentDidUpdate(){
        this.setState({
            token: localStorage.getItem('jwt')
        });
    }

    render(){
        return <h1>On peut remarquer que le token est stocké dans le localStorage au nom de jwt</h1>;
    }
}

export default User;