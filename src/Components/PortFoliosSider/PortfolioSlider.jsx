import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer"; // Import Intersection Observer
import Flowimg1 from "../../assets/Images/showcase/amjad.jpg";
import Flowimg2 from "../../assets/Images/showcase/jesus.jpg";
import Flowimg5 from "../../assets/Images/showcase/nextyours.jpg";
import Flowimg3 from "../../assets/Images/showcase/team16.jpg";
import Flowimg4 from "../../assets/Images/showcase/theoasispublicschool.jpg";
import { useNavigate } from "react-router-dom";


const Portfolioslider = () => {
  const navigate = useNavigate();
  const Portfoliodata = [
    { id: 1, title: "Project one", img: Flowimg1, details: "Project 1" },
    { id: 2, title: "Project two", img: Flowimg2, details: "Project 2" },
    { id: 3, title: "Project three", img: Flowimg3, details: "Project 3" },
    { id: 4, title: "Project four", img: Flowimg4, details: "Project 4" },
    { id: 5, title: "Project five", img: Flowimg5, details: "Project 5" },
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
                  <div className="text-white text-center">
                    <h2 className="text-3xl font-semibold text-[#fffdff]">{id==5?"Next Yours":title}</h2>
                    <p className="text-sm">{details}</p>
                  </div>
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