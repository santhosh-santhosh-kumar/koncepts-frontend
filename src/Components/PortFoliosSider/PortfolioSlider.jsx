import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer"; // Import Intersection Observer
import Flowimg1 from "../../assets/Images/showcase/amjad.jpg";
import Flowimg2 from "../../assets/Images/showcase/jesus.jpg";
import Flowimg5 from "../../assets/Images/showcase/nextyours.jpg";
import Flowimg3 from "../../assets/Images/showcase/team16.jpg";
import Flowimg4 from "../../assets/Images/showcase/theoasispublicschool.jpg";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Portfolioslider = () => {
  const navigate = useNavigate();
  const Portfoliodata = [
    { id: 1, title: "A professional photo editing & retouching service provider.", img: Flowimg1, details:  "" },
    { id: 2, title: "A professional photo editing & retouching service provider.", img: Flowimg2, details:  "" },
    { id: 3, title: "A professional photo editing & retouching service provider.", img: Flowimg3, details:"" },
    { id: 4, title: "A professional photo editing & retouching service provider.", img: Flowimg4, details: "" },
    { id: 5, title: "A professional photo editing & retouching service provider.", img: Flowimg5, details: "" },
    // { id: 6, title: "Project six", img: Flowimg6, details: "Project 6" },
  ];
  

  
  return (
    <div className="pb-20">
      <div className="container">
        <h1 className="font-Heading text-2xl md:text-4xl text-center">Showcase</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {Portfoliodata.map(({ id, title, img, details }) => {
            const { ref, inView } = useInView({
              triggerOnce: false, // Allow animation to trigger each time it comes into view
              threshold: 0.5, // Trigger when 50% of the element is in view
            });

            return (
              <div
                onClick={() => {navigate(`/portfolio/${title}`, { state: { id, title, img, details } });window.scrollTo(0,0)}}
                key={id}
                ref={ref} // Attach the ref to the div
                
                className="relative bg-cover bg-center object-cover rounded-lg overflow-hidden"
                
              >
                <img src={img} alt="" />
                {/* Overlay with Animation */}
                <div
                  className={`absolute bottom-0 left-0 w-5/12 h-full bg-black/15 bg-opacity-30 flex items-center justify-center p-4 transform transition-transform duration-700 ease-in-out ${
                    inView ? "translate-x-0" : "-translate-x-full"
                  }`}
                >
                  
                  
                </div>
                <div className="text-white text-center absolute top-1/2  w-8/12 text-wrap flex items-center justify-center">
                    
                    <h2 className="text-2xl font-semibold text-[#fffdff] w-full">{id==5?"Next Yours":title}</h2>
                    
                  </div>
                  
              </div>
            );
          })} 
        </div>
      </div>
    </div>
  );
};



export default Portfolioslider;