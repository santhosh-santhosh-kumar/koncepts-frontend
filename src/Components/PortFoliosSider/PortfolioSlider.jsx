import { useInView } from "react-intersection-observer"; // Import Intersection Observer
import Flowimg1 from "../../assets/Images/showcase/amjad.webp";
import Flowimg2 from "../../assets/Images/showcase/jesus.webp";
import Flowimg5 from "../../assets/Images/showcase/nextyours.webp";
import Flowimg3 from "../../assets/Images/showcase/team16.webp";
import Flowimg4 from "../../assets/Images/showcase/theoasispublicschool.webp";
import {useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Portfolioslider = () => {
  const navigate = useNavigate();
  const Portfoliodata = [
    {
      id: 1,
      title: "Build Real Wealth in Real Estate.",
      img: Flowimg1,
      details: "",
      portal: "View Details",
      vision: "View Site",
      site: "https://amjadkhan.co.in/",
    },
    {
      id: 2,
      title: "Jesus Comforts is a prophetic ministry birthed in much prayer, intercession and service to people from all walks of life.",
      img: Flowimg2,
      details: "",
      portal: "View Details",
      vision: "View Site",
      site: "https://jesuscomfortsindia.com/",
    },
    {
      id: 3,
      title: "Team 16 thrive on pairing our love for bright ideas with our roots in distinguished details.",
      img: Flowimg3,
      details: "",
      portal: "View Details",
      vision: "View Site",
      site: "https://team6teen.com/",
    },
    {
      id: 4,
      title: "A professional Educational service provider.",
      img: Flowimg4,
      details: "",
      portal: "View Details",
      vision: "View Site",
      site: "https://theoasispublicschool.com/",
    },
    {
      id: 5,
      title: "",
      img: Flowimg5,
      details: "",
      portal: "View Details",
      vision: "View Site",
      site: "",
    },
  ];

  return (
    <div className="pb-20">
      <div className="container mx-auto px-4">
        <h1 className="font-Heading text-2xl md:text-4xl text-center mb-6">
          Showcase
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Portfoliodata.map(({ id, title, img, details, portal, site, vision }) => {
            const { ref, inView } = useInView({
              triggerOnce: false,
              threshold: 0.5, // Trigger when 50% of the element is in view
            });

            return (
              <div
                key={id}
                className="group border relative bg-cover bg-center object-cover rounded-lg overflow-hidden"
                ref={ref}
              >
                {/* Image */}
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Overlay (Hidden by default, shows on hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-darkblue via-[rgba(0,0,0,0.6)] to-transparent flex items-center justify-center flex-col text-sm transition-all duration-1000 ease-in-out transform translate-y-full group-hover:translate-y-0 p-5">
                  <h2 className="text-2xl font-semibold text-[#fffdff] w-full text-center">
                    {id === Portfoliodata.length ? "Next Yours" : title}
                  </h2>

                  <span
                      className="cursor-pointer pt-5 block text-[15px] hover:text-yellow-400 text-white"
                      onClick={() => {
                        if (id === Portfoliodata.length) {
                          navigate("/getaquote");
                        } else {
                          navigate(`/portfolio/${title}`, {
                            state: { id, title, img, details, portal },
                          });
                        }
                        window.scrollTo(0, 0);
                      }}
                      key={id}
                      ref={ref}
                    >
                      {portal}
                </span>


                  {site && (
                    <a
                      rel="noopener noreferrer"
                      href={site}
                      target="_blank"
                      className="group no-underline text-white text-left transition-all duration-500 border-2 border-dashed border-gray-400 hover:rounded-bl-2xl hover:rounded-tr-2xl hover:rounded-tl-md hover:rounded-br-md px-3 mt-5"
                    >
                      <button className="border-1 border-white px-3 py-1 text-md md:text-lg font-bold text-white rounded-lg hover:text-yellow-400 transition-all duration-500 hover:rounded-tr-2xl hover:rounded-bl-2xl font-ContentText">
                        {vision} <FaArrowRight className="inline ml-2" />
                      </button>
                    </a>
                  )}
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
