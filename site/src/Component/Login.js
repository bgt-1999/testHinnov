import React, { Component } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
//import decode from 'jwt-decode';

class Login extends Component{

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            token: ''
        };
    }

    change(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submit(e){
        console.log("click");
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/login_check', {
            username: this.state.username,
            password: this.state.password
        }).then(res => {
            localStorage.setItem('jwt', res.data.token);
            this.setState({
                token: res.data.token
            });
        });
        this.props.history.push('/User');
    }

    render(){
        return(
            <div className="container mt-4">
                <form className="form-group row">
                    <label className="col-sm-2 col-form-label">Pseudo: </label>
                    <input type="text"
                    onChange={this.change.bind(this)}
                    name="username"
                    value={this.state.username}
                    className="form-control"></input>
                    <label className="col-sm-2 col-form-label">Mot de passe: </label>
                    <input type="password"
                    onChange={this.change.bind(this)}
                    name="password"
                    value={this.state.password}
                    className="form-control"></input>
                    <button onClick={this.submit.bind(this)}
                    className="btn btn-success">Se connecter</button>
                </form>
            </div>
        );
    }

}

export default Login;