import { IoCartOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import { useCart } from "../Context/cartContext";

export const Productcard=({product})=>{
    const navigate=useNavigate();
    const {addToCart}=useCart();
    // console.log(cartitem); 
    
   
    return(
        <>
        <div className=" border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 transition-all ease-in duration-250 hover:shadow-2xl p-1 h-max">
            <img src={product.image} alt=""  className=" bg-grey-100 aspect-square" onClick={()=>navigate(`/products/${product.id}`)}/>
            <h1 className=" line-clamp-2 p-1 font-semibold"> {product.title}</h1>
              <p className='font-semibold flex justify items-center gap-1 md:text-lg text-sm'>
              <span className=' text-xl'>${product.price}</span>
               ({product.discount}% off)</p>
            <button onClick={()=>addToCart(product)} className=" bg-red-500 px-3 py-2 text-lg rounded-md text-white w-full cursor-pointer flex gap-1 items-center justify-center hover:shadow-2xs mt-1" ><IoCartOutline className='w-6 h-6'/> Add to cart</button>
        </div>
        </>
    )
}