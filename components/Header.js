
import React from "react";
import {useState} from "react";



const HeaderComp =() =>
    {
    const [btnLogin, setbtnLogin]= useState('Login');
    // const toggle =() =>
    //     {
    //         btnLogin == "Login" ? setbtnLogin("LogOut") : setbtnLogin("Login");
    //     }
    return    (
    <div className ="headercm" style={{backgroundColor:"#f0f0f0"}}>
            <img  className="headerlogo" alt="Fruits" src ="https://www.eatright.org/-/media/images/eatright-articles/eatright-article-feature-images/discoverthehealthbenefitsofproduce_600x450.jpg?as=0&w=967&rev=ee66bf64d4c347fd9031b67002054317&hash=EB94D5B63642F4DE1A752666C6A84366"></img>
            <div className ="nav-items">
                <ul>
                    <li className="lgnBtn">Home</li>
                    <li className="lgnBtn">About Us</li>
                    <li className="lgnBtn">Contact</li>
                    <li className="lgnBtn">Cart</li>
                    <li>
                        <button className ="lgnBtn1" onClick={() =>{
                            console.log(btnLogin)
                            btnLogin == "Login" ? setbtnLogin("LogOut") : setbtnLogin("Login")}}>{btnLogin}</button>
                    </li>
                </ul>
            </div>
           
    </div>  
   );
};
export default HeaderComp;