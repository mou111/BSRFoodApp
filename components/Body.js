import RestaurantCard from "./RestaurantCard";
import mockData from "./mockData";
import { useState,useEffect } from "react";
import Shimmer  from "./Shimmer";


const Body = () =>{
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [listOfRestaurantsCopy,setListOfRestaurantsCopy] = useState(listOfRestaurants);
    const [searchtext,setsearchtext] = useState("");
   
    const fetchData = async () => {
     
    //      const url =  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    //    try{
    //      const dt = await fetch(url);
    //      console.log(dt)
    //    }
    //    catch(err)
    //    {
    //     console.log(err)
    //    }
         const response= await mockData;
        let res = response.card.card.gridElements.infoWithStyle.restaurants;
         //console.log(resData );
        setListOfRestaurants(res);
        setListOfRestaurantsCopy(res);
    }
    useEffect(()=>{
        fetchData();
    },[]);
   

   return listOfRestaurantsCopy.length === 0 ?  (<div><Shimmer/></div>):  (
    <div className="body">
        <div className="search-container">
            <input type ="text" value={searchtext} onChange={(e)=>{
                console.log(e.target.value)
                setsearchtext(e.target.value)

            }}></input>
            <button className="searchbutton" onClick={() =>{
                console.log(searchtext)
                let listOfRestaurantsCopy1 = listOfRestaurants.filter(x =>{
                    console.log(x)
                    let b = x.info.name.toLowerCase();
                    if(b.includes(searchtext.toLowerCase()))
                    return b;
                }
                )
                console.log(listOfRestaurantsCopy1)
                setListOfRestaurantsCopy(listOfRestaurantsCopy1)
                
            }}>
            Search Restaurants
            </button>
           
            <button className="searchbutton" onClick={() =>{
                console.log(searchtext)
                let listOfRestaurantsCopy1 = listOfRestaurants.filter(x =>{
                    console.log(x)
                    if(x.info.avgRating > 4.5)
                        return x;
                }
                )
                console.log(listOfRestaurantsCopy1)
                setListOfRestaurantsCopy(listOfRestaurantsCopy1)
                
            }}>
            Top Rated Restaurants
            </button>
        </div>
        <div className="rest-container">
       
         { listOfRestaurantsCopy.map(x => <RestaurantCard key={x.info.id} resData={x.info}/>) }
           
        </div>
    </div>
     ) 

};
export default Body;