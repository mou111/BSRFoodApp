import React from "react";
import ReactDOM from 'react-dom/client';
import HeaderComp  from "./Header";
import Body  from "./Body";
import Footer  from "./Footer";
    

const Applayout =() =>{ 
    return     (
    <div className="container">
<div className ="Header"> 
    <HeaderComp/>
</div>
<div className ="Body"><Body/></div>
<div className ="Footer"><Footer/> </div>
</div>
);
};

const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(<Applayout/>);