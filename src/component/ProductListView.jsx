import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context/cartContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductListView = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className='mt-4 p-2 animate-fade-in' data-aos="fade-up">
      <div className='bg-gray-100 flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start p-4 rounded-md hover:shadow-md transition-all hover:scale-105 duration-300'>
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className='w-full md:w-48 h-auto object-cover rounded-md cursor-pointer hover:scale-105 transition-transform duration-300'
          onClick={() => navigate(`/products/${product.id}`)}
        />

        {/* Product Details */}
        <div className='flex-1 space-y-2 text-center md:text-left'>
          <h1 className='font-bold text-lg md:text-xl text-gray-800 line-clamp-2 hover:text-red-400'>
            {product.title}
          </h1>
          <p className='font-semibold text-sm md:text-base text-gray-700'>
            $<span className='text-xl md:text-3xl'>{product.price}</span> ({product.discount}% off)
          </p>
          <p className='text-xs md:text-sm text-gray-600'>
            FREE delivery <span className='font-semibold'>Fri, 18 Apr</span> <br />
            Or fastest delivery <span className='font-semibold'>Tomorrow, 17 Apr</span>
          </p>
          <button
            onClick={() => addToCart(product)}
            className='mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-300'
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListView;
