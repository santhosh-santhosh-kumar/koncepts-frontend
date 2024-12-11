import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer"; // Import Intersection Observer
import Flowimg1 from "../../assets/Images/showcase/amjad.jpg";
import Flowimg2 from "../../assets/Images/showcase/jesus.jpg";
import Flowimg5 from "../../assets/Images/showcase/nextyours.jpg";
import Flowimg3 from "../../assets/Images/showcase/team16.jpg";
import Flowimg4 from "../../assets/Images/showcase/theoasispublicschool.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Portfolioslider = () => {
  const navigate = useNavigate();
  const Portfoliodata = [
    {
      id: 1,
      title: "Build Real Wealth in Real Estate.",
      img: Flowimg1,
      details: "",
      portal:"View Details",
      vision:"View Site",
      site:"https://amjadkhan.co.in/"
    },
    {
      id: 2,
      title: "Jesus Comforts is a prophetic ministry birthed in much prayer, intercession and service to people from all walks of life.",
      img: Flowimg2,
      details: "",
      portal:"View Details",
      vision:"View Site",
      site:"https://jesuscomfortsindia.com/"
    },
    {
      id: 3,
      title: "Team 16 thrive on pairing our love for bright ideas with our roots in distinguished details.",
      img: Flowimg3,
      details: "",
      portal:"View Details",
      vision:"View Site",
      site:"https://team6teen.com/"
    },
    {
      id: 4,
      title: "A professional Educational service provider.",
      img: Flowimg4,
      details: "",
      portal:"View Details",
      vision:"View Site",
      site:"https://theoasispublicschool.com/"
    },
    {
      id: 5,
      title: "",
      img: Flowimg5,
      details: "",
      portal:"View Details",
      vision:"View Site",
      site:" "
    },
    
  ];

  return (
    <div className="pb-20">
      <div className="container">
        <h1 className="font-Heading text-2xl md:text-4xl text-center">
          Showcase
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {Portfoliodata.map(({ id, title, img, details,portal,site,vision }) => {
            const { ref, inView } = useInView({
              triggerOnce: false, // Allow animation to trigger each time it comes into view
              threshold: 0.5, // Trigger when 50% of the element is in view
            });

            return (
              <div
                 // Attach the ref to the div
                className="group  border relative bg-cover bg-center object-cover rounded-lg overflow-hidden"
              >
                <img src={img} alt="" className="w-full group transform transition-transform duration-500 hover:transform hover:scale-110"/>
                {/* Overlay with Animation */}
                <div class="w-full h-0 bg-gradient-to-t from-darkblue via-[rgba(0,0,0,0.6)] to-transparent rounded-lg absolute left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col px-10 text-sm transition-[height] duration-500 text-center group-hover:h-full">
                <h2 className="text-2xl font-semibold text-[#fffdff] w-full">
                    {id == Portfoliodata.length ? "Next Yours" : title}
                  </h2>
                  <div className="absolute bottom-20 right-[50px] text-[#fffdff] text-left">
                  <span className="block text-sm hover:text-darkblue" onClick={() => {
                  navigate(`/portfolio/${title}`, {
                    state: { id, title, img, details,portal },
                  });
                  window.scrollTo(0, 0);
                }}
                key={id}
                ref={ref}>{portal}</span>
                  <a rel='noopener noreferrer' href={site} target="_blank" className="no-underline text-white "><span className="text-lg hover:text-darkblue">{vision}</span></a>
                  <FaArrowRight className="mt-2"/>
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
