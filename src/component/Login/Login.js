import React from 'react'
import { Checkbox } from 'antd';
import 'antd/dist/antd.css'
import './login.css'

export default function Login() {
    return (
        <div>
            <div className="container">
                <div className="Patrick_Conboy">
                <h1><span>P</span>ATRIC <span>C</span>ONBOY</h1>
                <h3>LOGIN</h3>
                <p>Aloha, welcome to Hawai'i Auction Services</p>
                <p>Continue logging into your account.</p>
                <span id="email">Email Address</span>
                <input className="email_inpt" placeholder="Enter your email address"></input>
                <span id="passwords">Password</span>
                <input type="password" className="password"placeholder="Enter your Password"></input><br />
                <Checkbox className="checkboxs"></Checkbox>
                <span id="Remember">Remember me</span>
                <span id="forget_password"><a href="#" id="a_forget">Forget Password?</a></span>
                <button>LOGIN</button>
                <h4>Don't have an account</h4>
                <h4>Register <a href="register">here</a></h4>
                </div>
            </div>
            <h4 id="copy_rights">© 2020 Patrick Conboy. All rights reserved.</h4>
        </div>
    )
}
