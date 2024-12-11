import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { useRef } from 'react';

import stivejobs from "../../assets/Images/about/stive_jobs.jpg";
import billgates from "../../assets/Images/about/bill_gates.jpg";
import joel from "../../assets/Images/about/joel_spolsky.jpeg";
import neil from "../../assets/Images/about/neil_amstrong.jpg";
import jim from "../../assets/Images/about/jim_highsmith.jpg";

const SliderReview = [
  { id: 1, review: 'The best way to get a project done faster is to start sooner.', pic: jim, author: "Jim Highsmith", des: "software engineer, agile software development advocate" },
  { id: 2, review: 'Design adds value faster than it adds costs.                  ', pic: joel, author: "Joel Spolsky", des: "co-founder of Stack Overflow, software engineer" },
  { id: 3, review: 'Your most unhappy customers are your greatest source of learning.', pic: billgates, author: "Bill Gates", des: "co-founder of Microsoft Corporation, software developer" },
  { id: 4, review: 'Research is creating new knowledge.                           ', pic: neil, author: "Neil Armstrong", des: "American astronaut, aeronautical engineer" },
  { id: 5, review: 'Design is not just what it looks like and feels like. Design is how it works.', pic: stivejobs, author: "Steve Jobs", des: "Apple founder, business magnate" },
];

const ReviewSlider = () => {
  const swiperRef = useRef(null);
  const handleClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <Swiper
      ref={swiperRef}
      onClick={handleClick}
      className='w-full h-full cursor-pointer slidercontainer'
      modules={[FreeMode, Pagination, Autoplay, Navigation]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      loop={true}
      navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {SliderReview.map((item, index) => (
        <SwiperSlide className="w-full h-full flex justify-center items-center px-20" key={index}>
          <div className='flex gap-y-6 flex-col justify-between '>
            <div className='w-full'>
              <h1 className='text-sm md:text-2xl lg:text-2xl  md:px-10 md:mt-0 mt-4'>{item.review}</h1>
            </div>
            <div className='flex md:gap-3 px-10 flex-wrap items-center pb-4'>
              <div className='md:w-14 md:h-14'>
                <img src={item.pic} className='md:w-full  md:h-full  object-cover' alt={item.author} />
              </div>
              <div className='mt-4 md:mt-0'>
                <p className='mb-0 font-bold'>{item.author}</p>
                <p className=''>{item.des}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSlider;
