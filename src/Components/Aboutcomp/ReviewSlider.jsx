import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, FreeMode, Navigation, EffectCoverflow} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { useRef } from 'react';
import { GrNext,GrPrevious } from 'react-icons/gr';
import stivejobs from "../../assets/Images/about/stive_jobs.webp";
import billgates from "../../assets/Images/about/bill_gates.webp";
import joel from "../../assets/Images/about/joel_spolsky.webp";
import neil from "../../assets/Images/about/neil_amstrong.webp";
import jim from "../../assets/Images/about/jim_highsmith.webp";

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
    className="w-full h-full cursor-pointer slidercontainer relative bg-white"
    modules={[FreeMode, Pagination, Autoplay, Navigation,EffectCoverflow]}
    pagination={{
      el: ".pagination-review",
      clickable: true,
      bulletClass: "bullet-review",
      bulletActiveClass: "bullet-hero-review",
    }}
    slidesPerView={1}
    effect="coverflow" // Change effect to "coverflow"
    coverflowEffect={{
      rotate: 100, // Rotate angle for adjacent slides
      stretch: 0, // Space between slides
      depth: 200, // Perspective depth
      modifier: 1, // Effect intensity
      slideShadows: false, // Disable shadows
    }}
    loop={true}
    navigation={{
      nextEl: ".reviewsliderNext",
      prevEl: ".reviewsliderPrev",
    }}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    speed={1000}
  >
    {SliderReview.map((item, index) => (
      <SwiperSlide
        className="w-full h-full flex justify-center items-center bg-gray-50 shadow-lg shadow-gray-400"
        key={index}
      >
        <div className="w-full flex gap-y-6 flex-col px-4 md:px-10">
          <div className="w-full">
            <h1 className="text-xs md:text-lg lg:text-2xl md:px-10 md:mt-0 mt-4 font-bold">
              {item.review}
            </h1>
          </div>
          <div className="flex gap-3 items-center px-10 pb-4">
            <div className="w-14 h-14">
              <img
                src={item.pic}
                className="w-full h-full rounded-full object-cover"
                alt={item.author}
              />
            </div>
            <div className="mt-4 md:mt-0 md:text-left">
              <p className="mb-0 font-bold text-sm md:text-base">{item.author}</p>
              <p className="text-xs md:text-sm">{item.des}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
    <div className="pagination-review flex gap-2 md:gap-3 justify-center pb-4 md:pb-5 cursor-pointer absolute z-10"></div>
    <button className="reviewsliderNext absolute right-2 md:right-5 top-1/2 z-10 text-lg md:text-2xl lg:text-4xl text-darkblue">
      <GrNext />
    </button>
    <button className="reviewsliderPrev absolute left-2 md:left-5 top-1/2 z-10 text-lg md:text-2xl lg:text-4xl text-darkblue">
      <GrPrevious />
    </button>
  </Swiper>

  );
};

export default ReviewSlider;
