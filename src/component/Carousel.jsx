import { useEffect } from 'react';
import { useGetData } from '../Context/DataContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loading from "../assets/Loading4.webm";

export const Carousel = () => {
  const { data } = useGetData();
  const navigate = useNavigate();
  window.scrollTo(0,0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  // ✅ Handle loading (returns nothing until data is available)
  if (!data || data.length === 0) {
    return (
      <div className="h-[600px] flex justify-center items-center text-white text-lg ">
       <div className="flex items-center justify-center h-[400px] ">
                    <video muted autoPlay loop>
                       <source src={Loading} type=""/>
                    </video>
                   </div>
      </div>
    );
  }

  return (
    <div>
      <Slider {...settings}>
        {
          data?.slice(0, 7)?.map((item, index) => {
            return (
              <div key={index} className='bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10 '>
                <div className='flex flex-col md:flex-row gap-10 justify-center h-[600px] my-20 md:my-0 items-center px-4'>

                  {/* Text Content Animation */}
                  <div
                    className='md:space-y-6 space-y-1 py-3'
                    data-aos="fade-right"
                  >
                    <h3 className='text-red-500 font-semibold font-sans text-sm'>
                      Powering Your World with the Best in Electronics
                    </h3>
                    <h1 className='md:text-4xl text-xl font-bold uppercase line-clamp-2 md:line-clamp-3 md:w-[500px] text-white'>
                      {item.title}
                    </h1>
                    <p className='md:w-[500px] line-clamp-3 text-gray-400 pr-7'>
                      {item.description}
                    </p>
                    <button
                      onClick={() => navigate(`/products`)}
                      className='bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2'
                    >
                      Shop Now
                    </button>
                  </div>

                  {/* Image Animation */}
                  <div data-aos="fade-left">
                    <img
                      onClick={() => navigate(`/products/${item.id}`)}
                      src={item.image}
                      alt={item.title}
                      className='rounded-full w-[520px] hover:scale-104 transition-all shadow-2xl shadow-red-400'
                    />
                  </div>
                </div>
              </div>
            );
          })
        }
      </Slider>
    </div>
  );
};
