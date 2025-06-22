// components/UserFeedback.jsx
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import Tilt from 'react-parallax-tilt'; // ✅ added import
import 'aos/dist/aos.css';

const feedbacks = [
  {
    name: "Aarav Sharma",
    location: "Delhi, India",
    message: "Amazing shopping experience! The delivery was super fast and the product quality is top-notch.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Priya Verma",
    location: "Mumbai, India",
    message: "I love Nexte's collection of electronics! Reliable service and great support.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Rahul Joshi",
    location: "Bangalore, India",
    message: "One of the best electronics stores online. Great deals and quick returns!",
    image: "https://randomuser.me/api/portraits/men/76.jpg"
  },
  {
    name: "Ananya Singh",
    location: "Chennai, India",
    message: "Super happy with my purchase. High-quality products and seamless delivery process.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Karan Mehta",
    location: "Ahmedabad, India",
    message: "Exceptional service! Will definitely recommend to my friends and family.",
    image: "https://randomuser.me/api/portraits/men/84.jpg"
  },
  {
    name: "Isha Kapoor",
    location: "Pune, India",
    message: "Great customer support and smooth checkout. Nexte is my go-to electronics store!",
    image: "https://randomuser.me/api/portraits/women/20.jpg"
  }
];

export const UserFeedback = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8 mt-4" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        What Our Customers Say ❤️
      </h2>
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {feedbacks.map((user, index) => (
            <div key={index} className="px-4">
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={250}>
                <div className="bg-gray-100 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-xl transition-all duration-300 hover:bg-gray-200 h-full">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-red-500 mb-4"
                  />
                  <h3 className="text-lg font-semibold text-red-500">{user.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{user.location}</p>
                  <p className="text-gray-700 text-sm italic">“{user.message}”</p>
                </div>
              </Tilt>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
