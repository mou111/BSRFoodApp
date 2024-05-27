import React from "react";
import ReactDOM from 'react-dom/client';

const HeaderComp =() =>
    {
    return    (
    <div className ="headercm">
            <div className="headerlogo"><img alt="Fruits" src ="./images/ab.png"></img></div>
            <div className ="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
           
    </div>  
   );
};

const Applayout =() =>{ 
    return     (
    <div className="container">
{/* <div className ="Header"> */}
    <HeaderComp/>
{/* </div> */}
<div className ="Body">ABC</div>
<div className ="Footer">footer </div>
</div>
);
};
const Abc = () =>{
    return (
    <div>ABC</div>
)};

const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(<Applayout/>);