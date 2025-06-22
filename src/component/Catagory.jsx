import { useGetData } from '../Context/DataContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tilt from 'react-parallax-tilt';

export const Category = () => {
  const { data } = useGetData();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const getExactlyThirdItemsPerCategory = (data) => {
    const categoryMap = new Map();
    data?.forEach((item) => {
      const list = categoryMap.get(item.category) || [];
      list.push(item);
      categoryMap.set(item.category, list);
    });

    const result = [];
    for (let [category, items] of categoryMap.entries()) {
      if (items.length >= 3) {
        result.push(items[2]); // 3rd item
      }
    }

    return result;
  };

  const thirdImageCategories = getExactlyThirdItemsPerCategory(data);

  return (
    <div className="bg-gray-100 mt-15 p-10">
      <h1
        className='text-center md:text-5xl text-white font-semibold'
        data-aos="fade-down"
      >
        <span className='text-blue-400'>Products</span>{" "}
        <span className='text-red-500'>Category</span>
      </h1>
<br />
      <div
        className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 items-center"
        data-aos="fade-up"
      >
        {thirdImageCategories?.map((item, index) => (
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.3}
            scale={1.05}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            className="cursor-pointer"
            key={index}
          >
            <div
              onClick={() => navigate(`/category/${item.category}`)}
              className="text-center group mt-4 bg-white rounded-xl p-2 shadow-md hover:shadow-xl transition duration-300"
              data-aos="zoom-in"
            >
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-40 md:h-60 rounded-lg object-cover border-2 border-transparent transition-all duration-300"
              />
              <p className="mt-2 text-gray-800 uppercase text-sm sm:text-base group-hover:text-blue-400">
                {item.category}
              </p>
            </div>
          </Tilt>
        ))}
      </div>
      <br />
    </div>
  );
};
