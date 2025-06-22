import React from "react";
import { Carousel } from "../component/Carousel";
import MidBanner from "../component/MidBanner";
import Features from "../component/Features";
import { Category } from "../component/Catagory";
import { UserFeedback } from '../component/UserFeedback';
window.scrollTo(0,0);

 const Home=()=>{
    return(
<>

<div className="overflow-x-hidden">
<Carousel/>
<MidBanner/>
<Category/>


<Features/>
<UserFeedback />

</div>


</>
    )
}
export default Home;
