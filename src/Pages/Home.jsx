
import BackgroundSlider from "../Components/BackgroundSlider/BackgroundSlider";
import PriceDetails from "../Components/PriceDetails/PriceDetails";
import DesignPreviewSlider from "../Components/Projectviewer.jsx/ProjectViewer";
import Verticles from "../Components/ServicesComp/Verticles";
import Flowimg1 from "../assets/Images/homepage-projects/01DrAshokkumar.webp";
import Flowimg2 from "../assets/Images/homepage-projects/02IaasAcademy.webp";
import Flowimg3 from "../assets/Images/homepage-projects/03JandJTrading.webp";
import Flowimg4 from "../assets/Images/homepage-projects/04sangumark.webp";
import Flowimg5 from "../assets/Images/homepage-projects/05Shazab.webp";
import Cards from "../Components/StackingCards/Cards";
import React, { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

const Home = () => {
  const projects = [
    {
      id: 1,
      title: "Card 1",
      description1:
        "Dr. Ashok kumar, as the top healthcare provider, is dedicated to the well-being of all patients via exceptional medical treatment and the access of information whenever the people in need of them at any time.",
      description2:
        "The website that we, TejusDigi  designed for SIMS Hospital has been a cornerstone in their transition to the digital arena. Our meticulous approach to designing and developing the website has assured SIMS Hospital's dedication to excellence in providing user-friendly and informative features that meet the specific demands of patients, doctors, and staff. ",
      site:"https://drashokkumarps.com/",
      img: Flowimg1,
      tags: ["wordpress", "ui/ux design", "website"],
      name: "Dr.Ashok Kumar PS",
      prof: "Senior Consultant Orthopedic",
    },
    {
      id: 1,
      title: "Card 1",
      description1:
        "IAAS Academy, a pioneer in WS and Microsoft certification training, is dedicated to providing individuals and companies with the skills needed to flourish in the cloud era. ",
      description2:
        "Websites created, built, and maintained by TejusDigi  convey a strong, focused message that not only expresses attention but also builds trust and engagement among users, demonstrating how clarity of purpose of a website can lead to successful learning and progress, including all course and exam details, as well as blog pages that convey messages to users. ",
        site:"https://iaasacademy.com/",
      img: Flowimg2,
      tags: ["teachable", "website", "ui/ux design","posters","e-commerce"],
      name: "Rajesh Daswani",
      prof: "IaaS Academy",
    },
    {
      id: 1,
      title: "Card 1",
      description1:
        "J&J Trading (UK) Ltd focuses in giving high-quality logistics solutions all over the world by providing global supply-chain services to aid and enable sustainable trade and commerce in major markets.",
      description2:
        "TejusDigi 's innovative website design and functional approach have allowed them to better serve their clients and expand their digital presence in the logistics and transportation sectors, driving logistic operations and connecting with clients and partners all over the world.",
        site:"https://jandjtrading.co.uk/",
      img: Flowimg3,
      tags: ["wordpress", "divi theme", "ui/ux design"],
      prof: "Jerad Jegaraj and Jyoti Patel",
      name: "J&J trading (UK) Ltd",
    },
    {
      id: 1,
      title: "Card 1",
      description1:
        "The Madras Palayakat Coy, Pvt. Ltd., a leading manufacturer of Sangumark Lungies and Kerchiefs, is proud to continue the textile industry's tradition of quality and workmanship. ",
      description2:
        "Our newly built website has altered the way Sangumark Lungies and Kerchiefs, exhibit their products and communicate with their consumers throughout the world. TejusDigi 's bespoke website blends creativity, functionality, and cutting-edge technology. Excelling in creating visually appealing platforms and commerce functionality that highlight the Sangumark brand identity while providing a seamless user experience.",
        site:"https://www.sangumark.in/",
      img: Flowimg4,
      tags: ["e-commerce", "ui/ux design", "wordpress"],
      prof: "Panchasaram",
      name: "Palayakat's Sangumark",
    },
    {
      id: 1,
      title: "Card 1",
      description1:
        "Shazab has over 30 years of experience in the technology industry. Their expertise ensures comprehensive and reliable services, from IT-engineering solutions and product deployment to support and maintenance.",
      description2:
        "TejusDigi has been instrumental in increasing Shazab's web exposure as part of this extraordinary collaboration. TejusDigi took on the job of managing their website, and they methodically handled every element, from wireframing to providing a fully working site that matches Shazab's ideas and skills. This partnership emphasizes the necessity of competent individuals working together to produce seamless experiences that resonate with people while also demonstrating Shazab's technological ability.",
        site:"https://shazab.in/",
      img: Flowimg5,
      tags: ["wordpress", "divi theme", "website"],
      prof: "Mohammed Aleemullah",
      name: "Shazab",
    },
  ];
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <div className="">
        <BackgroundSlider />
        <div className="hidden md:block lg:block">
          <DesignPreviewSlider />
        </div>

        <PriceDetails />
        <div className="pb-20">
          <Verticles />
        </div>
        <div className="container">
        <div ref={container}>
          {projects.map((items, index) => {
            const start = index * 0.25; // Adjust as per your scroll length
            const end = start + 0.25; // Each card spans 0.25 scroll length
            const targetscale = 1 - (projects.length - index) * 0.1;

            return (
              <Cards
                key={index}
                {...items}
                progress={scrollYProgress}
                range={[start, end]}
                targetscale={targetscale}
              />
            );
          })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
