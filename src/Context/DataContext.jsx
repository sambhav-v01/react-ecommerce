import { createContext, useContext, useEffect, useState } from "react";
import { getProduct } from "../api/getProduct";

 const DataContext=createContext(null);

export const DataProvider=({children})=>{
     const [data,setData]=useState();
    
    useEffect(()=>{
        ( async()=>{
            const data=await getProduct();
            setData(data);
        })();
        getProduct();
    },[]);

    const getUnique=(data,property)=>{
        let newVal=data?.map((currele)=>{
            return currele[property];
        })
        newVal=["All",...new Set(newVal)]
        return newVal;
    }
   const uniqeCatagory=getUnique(data,"category"); 
   const brandOnlyCategory=getUnique(data,"brand");

    return <DataContext.Provider  value={{data,setData,uniqeCatagory,brandOnlyCategory}}>
        {children}
    </DataContext.Provider>
}

 export const useGetData=()=>useContext(DataContext);

export default DataContext;