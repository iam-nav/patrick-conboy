import React from 'react'
import './register.css'
import Dropdowns from '../register/Dropdown'
import { Button,Checkbox } from 'antd';


function Register() {
    return (
        <div>
          <div className="container_Register">
                <div className="Patrick_Conboy_reg">
                <h1><span id="p">P</span>ATRIC <span id="c">C</span>ONBOY</h1>
                <h3 id="reg">REGISTERATION</h3>
                <p>Aloha, welcome to Hawai'i Auction Services</p>
                <p>Create and account today and benefit with the best services.</p>
                </div>
                <div style={{marginBottom:"40px"}}>
                <h3 id="personal">PERSONAL DETAILS</h3>
                </div>
              <div className="registration_form">
                  <span id="firstName">First Name</span>
                  <input placeholder="Enter your first name" className="inputs"></input>
                  <span id="lastName">Last Name</span>
                  <input placeholder="Enter your last name" className="lastName"></input><br />
                  <span id="business">Business Name</span>
                  <input placeholder="Enter your buisness name" className="buisness_name"></input>
                  <span id="email_address">Email Address</span>
                  <input placeholder="Enter your email address"className="email_address"></input><br />
                  <span id="phone_number">Phone Number</span>
                  <input placeholder="Enter your phone number" className="phone_number"></input>
                  <span id="password">Password</span>
                  <input placeholder="Enter your password" type="password" className="reg_password"></input><br />
                  <span id="confirm">Confirm Password</span>
                  <input placeholder="Enter your password" type="password" className="reg_confirm"></input>
                  <span id="country">Country</span>
                  <Dropdowns name="Select Your Country" top="94.5%" left="744px"></Dropdowns><br />
                  <span id="state">State</span>
                  <Dropdowns name="Select Your State" top="110%" left="400px" ></Dropdowns>
                  <span id="city">City</span>
                  <Dropdowns name="Select Your City" top="110%" left="745px" ></Dropdowns><br />
                  <span id="address_1">Address Line-1</span>
                  <input placeholder="Enter your address line-1" className="reg_address_1"></input>
                  <span id="address_2">Address Line-2</span>
                  <input placeholder="Enter your address line-2" className="reg_address_2"></input><br />
                  <span id="zip">Zip code</span>
                  <input placeholder="Enter your zip code" className="zip_code"></input>
                  <h3 className="tax" >GE Tax-exampt form</h3><Button type="primary" className="btn">Download</Button>
                  <p style={{marginLeft:"150px",marginTop:"10px"}}>(Optional)</p>
                  <Checkbox className="checkboxes"></Checkbox><h3 id="terms">I agree to the <span className="span_terms">Terms & Conditions.</span></h3>
                  <button className="register">REGISTER</button>
                  <h4 id="account">Already have an  account?</h4>
                  <h4 id="login">Login <a href="/">here</a></h4>
              </div>
        </div>
        <p style={{color:"white",marginTop:"20px",marginLeft:"20px"}}>© 2020 Patrick Conboy. All rights reserved.</p>
        </div>
    )
}

export default Register
