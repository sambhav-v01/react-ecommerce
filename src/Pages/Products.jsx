
import { useGetData } from "../Context/DataContext";
import { useEffect } from "react";
import { FilterSection } from "../component/FilterSection";
import Loading from "../assets/Loading4.webm";
import { Productcard } from "../component/ProductCard";
import { useState } from "react";
import { Pagination } from "../component/Pagination";
import Lottie from 'lottie-react';
import notfound from "../assets/notfound.json"
import { MobileFilter } from "../component/Mobilefilter";
// import { useCart } from "../Context/cartContext";


export const Products=()=>{ 
 





    const {data}=useGetData();
    window.scrollTo(0,0);

    const[search,setSearch]=useState("");
       const[category,setcategory]=useState("All");
          const[brand,setbrand]=useState("All");
             const[priceRange,setPriceRange]=useState([0,2500]);
             const[page,setpage]=useState(1);
             const[openFilter,setOpenFilter]=useState(false)

   const handleCategory=(e)=>{
   setcategory(e.target.value);
   setpage(1);
   setOpenFilter(false);
   }
   const handlebrand=(e)=>{
    setbrand(e.target.value);
    setpage(1);
    setOpenFilter(false);
   }
   const pageHandler=(selectedPage)=>{
    setpage(selectedPage);
    
   }


 const filterdata = data?.filter((item) =>
   item.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || item.category === category) &&
    (brand === "All" || item.brand === brand) &&
    item.price >= priceRange[0] && item.price <= priceRange[1]
);

const dynamicPage=Math.ceil(filterdata?.length/8);


    return(
        <>
        <div className="max-w-6xl mx-auto px-5 mb-10">
          <MobileFilter openFilter={openFilter} setOpenFilter={setOpenFilter} search={search} setSearch={setSearch} category={category} setcategory={setcategory} brand={brand} setbrand={setbrand} priceRange={priceRange} setPriceRange={setPriceRange} handlebrand={handlebrand}  handleCategory={handleCategory}/>
            {
    data?.length>0?(
          <div className="flex gap-10">
           <FilterSection search={search} setSearch={setSearch} category={category} setcategory={setcategory} brand={brand} setbrand={setbrand} priceRange={priceRange} setPriceRange={setPriceRange} handlebrand={handlebrand}  handleCategory={handleCategory} setpage={setpage}/>

            {
              filterdata?.length>0 ?(
             <div className=" flex flex-col justify-center items-center">
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10 mt-15">
                   {
                    filterdata?.slice(page*8-8,page*8).map((product,index)=>{
                      return <Productcard key={index}  product={product}/>
                     })
                   }
                 </div>
             <Pagination pageHandler={pageHandler} page={page} dynamicPage={dynamicPage}/>
             </div>
              ) :
               (
                    <div className='flex justify-center items-center md:h-[600px] md:w-[900px] mt-10'>
                           <Lottie animationData={notfound} classID='w-[500px]'/>
                    </div>
                  )
                }
           
          </div>
             
          ):(
            <div className="flex items-center justify-center h-[400px]">
             <video muted autoPlay loop>
                <source src={Loading} type=""/>
             </video>
            </div>
          ) 
            }
        </div>
        </>
    )
}