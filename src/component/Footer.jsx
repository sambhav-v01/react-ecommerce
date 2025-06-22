import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <footer className='bg-gray-900 text-gray-200 py-10'>
      <div className='max-w-7xl mx-auto px-4 md:flex md:justify-between'>
        {/* Info */}
        <div className='mb-6 md:mb-0' data-aos="fade-right">
          <Link to='/'>
            <h1 className='text-red-500 text-4xl font-bold'>Nexte</h1>
          </Link>
          <p className='mt-2 text-sm'>Powering Your World with the Best in Electronics.</p>
          <p className='mt-2 text-sm'>Nexte Electronics: Muzaffarnagar,UttarPradesh(251001)</p>
          <p className='text-sm'>Email: support@Nexte.com</p>
          <p className='text-sm'>Phone: +91 9917702550</p>
        </div>

        {/* Customer Service */}
        <div className='mb-6 md:mb-0' data-aos="fade-up">
          <h3 className='text-xl font-semibold'>Customer Service</h3>
          <ul className='mt-2 text-sm space-y-2'>
            <li onClick={()=>navigate(`/products`)} className='cursor-pointer'>Our Products</li>
            <li onClick={()=>navigate(`/Contact`)} className='cursor-pointer'>Contact Us</li>
            <li onClick={()=>navigate(`/about`)} className='cursor-pointer'>FAQs</li>
            
         
          </ul>
        </div>

        {/* Social Links */}
        <div className='mb-6 md:mb-0' data-aos="fade-up">
          <h3 className='text-xl font-semibold'>Follow Us</h3>
          <div className='flex space-x-4 mt-2 text-xl'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitterSquare />
            <FaPinterest />
          </div>
        </div>

        {/* Newsletter */}
        <div data-aos="fade-left">
          <h3 className='text-xl font-semibold'>Stay in the Loop</h3>
          <p className='mt-2 text-sm'>Subscribe to get special offers, free giveaways, and more</p>
          <form action="" className='mt-4 flex'>
            <input
              type="email"
              placeholder='Your email address'
              className='bg-amber-100 w-full p-2 rounded-l-md text-black focus:outline-none focus:ring-2 focus:ring-gray-500'
            />
            <button type='submit' className='bg-red-600 text-white px-4 rounded-r-md hover:bg-red-700'>Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='mt-8 border-t border-gray-700 pt-6 text-center text-sm' data-aos="zoom-in">
        <p>&copy; {new Date().getFullYear()} <span className='text-red-500' onClick={()=>navigate(`/`)}>Nexte</span>. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer;
