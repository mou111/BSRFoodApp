import {LOGO_URL} from '../utility/constants';

const RestaurantCard =(props) =>{
    const {resData} = props;   
    return (
      
        <div className="res-card" style ={{backgroundColor :"#f0f0f0"}}>     
         <img className="res-img" alt ="image" src ={LOGO_URL + resData.cloudinaryImageId}></img> 
       <h3>{resData.name}</h3>
       <h4>
        {
         resData.cuisines.join(" ,")  
        }</h4>
       <h4>{resData.avgRating}</h4>
       <h4>{resData.deliveryTime}</h4>
       <h4>{resData.costForTwo}</h4>
        </div>
    )
    };
export default RestaurantCard;