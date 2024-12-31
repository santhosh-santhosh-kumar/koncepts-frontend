import banner_01 from "../../assets/Images/home/banner01.png";
import banner_02 from "../../assets/Images/home/banner02.jpg";
import banner_03 from "../../assets/Images/home/banner03.jpg";
import {Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { GrNext, GrPrevious } from "react-icons/gr";


function BackgroundSlider() {
  const bgimages = [
    {id:1,img:banner_01},
    {id:2,img:banner_02},
    {id:3,img:banner_03},
  ]
  return (
    <section className="pt-20 md:pt-10 w-full h-auto md:h-screen">
      <Swiper
        className="w-full h-full relative"
        modules={[Autoplay,Pagination,Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={
          {
            delay:2000,
            disableOnInteraction:false
          }
        }
        speed={1000}
        navigation={
          {
            nextEl:".herosliderNext",
            prevEl:".herosliderPrev"
          }
        }
        pagination={{
          el: '.pagination-hero',
          clickable: true,
          bulletClass: 'bullet-hero',
          bulletActiveClass: 'bullet-hero-active'
      }}
      >
         {
              bgimages.map(({id,img})=>(
                <SwiperSlide className="w-full h-full">
                  <img className="w-full h-full object-contain" key={id} src={img} alt="" />
                </SwiperSlide>
              ))
            }
          <button className="herosliderNext absolute right-2 md:right-5 top-1/2 z-10 text-2xl md:text-4xl text-gray-600"><GrNext/></button>
          <button className="herosliderPrev absolute left-2 md:left-5 top-1/2 z-10 text-2xl md:text-4xl text-gray-600"><GrPrevious/></button>
          <div className="pagination-hero flex gap-3 justify-center pb-2 md:pb-5 cursor-pointer absolute z-10"></div>
      </Swiper>
    </section>
  );
};

export default BackgroundSlider


