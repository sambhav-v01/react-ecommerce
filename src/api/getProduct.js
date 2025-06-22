import axios from "axios";

export const getProduct=async()=>{
        try{
            const response= await axios.get('https://fakestoreapi.in/api/products?limit=150');
           const ProductData=response.data.products;
           return ProductData;
         
        }
        catch(error){
            console.log(error);
        }
    }
