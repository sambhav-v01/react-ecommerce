
import { useGetData } from "../Context/DataContext"

export const FilterSection=({search ,setSearch, category,setcategory,brand,setbrand,  priceRange,setPriceRange, handlebrand, handleCategory,setpage})=>{
     const {uniqeCatagory,brandOnlyCategory}=useGetData();
    return(
        <>
        {/* Search option */}
      <div className=" bg-gray-100 mt-16 p-4 rounded-md  h-max hidden md:block">
        <input type="text" 
         placeholder="search.." 
         className=" bg-white p-2 rounded-md border-gray-400  border-2"
         value={search}
         onChange={(e)=>setSearch(e.target.value)}/>

       {/* Catagory only data */}
       <h1 className=" mt-5 font-semibold text-xl">Categroy</h1>
       <div className="flex flex-col gap-2 mt-3">
      {
      uniqeCatagory?.map((item,index)=>{
        return <div key={index} className="flex gap-2" >
           <input type="checkbox" name={item}
            checked={category===item}
             value={item} 
             onChange={handleCategory}/>
           <button className="cursor-pointer uppercase">{item}</button>            
            </div>
      })
      }
       </div>



    {/* BrandOnlyData */}
       <h1 className=" mt-5 font-semibold text-xl">Brand</h1>
       <select name="" id="" className=" bg-white p-2 rounded-md border-gray-200  border-2 w-full"
        value={brand}
        onChange={handlebrand}>
      {
      brandOnlyCategory?.map((item,index)=>{
        // window.scrollTo(10,10);
        return <option key={index} value={item}>{item.toUpperCase()}</option>
      })
      }
      </select>
    

{/* Price Range */}
        <h1 className=" mt-5 font-semibold text-xl">Price Range</h1>
         <div className='flex flex-col gap-2'>
                <label htmlFor="">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
                <input type="range" min="0" max="2500" name="" id="" value={priceRange[1]} onChange={(e)=>setPriceRange([priceRange[0], Number(e.target.value)])} className='transition-all'/>
             </div>
             <button className='bg-red-500 text-white rounded-md px-3 py-1 mt-5 cursor-pointer'
             onClick={()=>{setSearch(''); setcategory('All'); setbrand('All'); setPriceRange([0,5000]); setpage(1)}}
             >Reset Filters</button>

      </div>
        </>
    )
}