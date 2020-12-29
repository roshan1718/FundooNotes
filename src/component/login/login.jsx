import React from "react";
import { Input } from 'antd';
import { Link } from 'react-router-dom';

import "./login.scss";
import user_service from '../../services/userService';


export default class Login extends React.Component {

    constructor(props)
    {
        super(props)
        this.state={
            email:'',
            password:''
        }
    }

    ChangeEmail = (e) => {
        this.setState({
            email:e.target.value
        },() => {console.log(this.state);})         
      }

      ChangePassword = (e) => {
        this.setState({
            password:e.target.value
        },() => {console.log(this.state);})         
      }

      onLogin = () =>{
        let userData = {
            email: this.state.email,
            password: this.state.password
          };
          user_service.login(userData).then((data) =>{
                console.log('data after login',data);
          }).catch(error=>{
          })
      }


    render() {
        const{email,password} = this.state;
    return(   
        <div className="body">
            <div className="frame">
            <div className="fundoo">
                <span className="f">F</span>
                <span className="u">u</span>
                <span className="n">n</span>
                <span className="d">d</span>
                <span className="o">o</span>
                <span className="u">o</span>
            </div> 
                <span className="sign-in">
                    Sign in
                </span>
                <Input 
                    className="input" 
                    label="Email" 
                    placeholder="Email" 
                    value={email}
                    onChange={this.ChangeEmail}/>
                <Input
                    className="input"
                    label="Password"
                    placeholder="Password" 
                    autoComplete="current-password"
                    value={password}
                    onChange={this.ChangePassword}/>
                <div className="create-account">
                <Link to="/signUp">Create account</Link>
                </div>
                <button 
                className="login"
                onClick={this.onLogin}>
                    Login
                </button>
            </div>
        </div>   
        )
    }
}