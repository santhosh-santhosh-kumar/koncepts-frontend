'use client'
import React, { useEffect, useRef } from 'react';
import Rellax from "rellax";
import Lenis from 'lenis';
import Flowimg1 from "../assets/Images/homepage-projects/01DrAshokkumar.webp"
import Flowimg2 from "../assets/Images/homepage-projects/02IaasAcademy.webp"
import Flowimg3 from "../assets/Images/homepage-projects/03JandJTrading.webp"
import Flowimg4 from "../assets/Images/homepage-projects/04sangumark.webp"
import Flowimg5 from "../assets/Images/homepage-projects/05Shazab.webp"
import RunningImg1 from "../assets/Images/portfolio/Archivite-Architecture.webp";
import RunningImg2 from "../assets/Images/portfolio/brochure.webp";
import RunningImg3 from "../assets/Images/portfolio/ecogroup.webp";
import RunningImg4 from "../assets/Images/portfolio/iaasacademy.webp";
import RunningImg5 from "../assets/Images/portfolio/infinitepotentials.webp";
import RunningImg6 from "../assets/Images/portfolio/jesuscomfortindia.webp";
import RunningImg7 from "../assets/Images/portfolio/logo.webp";
import RunningImg8 from "../assets/Images/portfolio/pscs.webp";
import RunningImg9 from "../assets/Images/portfolio/shazab.webp";
import RunningImg10 from "../assets/Images/portfolio/team16.webp";

import Cards from '../Components/StackingCards/Cards';
import { useScroll } from 'framer-motion';
import Portfolioslider from '../Components/PortFoliosSider/PortfolioSlider';

const Portfolio=()=>{
   const projects=[
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
  
   ]

    useEffect(() => {
        const rellax = new Rellax('.rellax', {
      // Customize speed as needed
          center: false,
          wrapper: null,
          round: true,
          vertical: true,
          horizontal: false,
        });
        const lenis = new Lenis({
            easing: (t) => t,
            duration:1,  
            direction: 'vertical',
            smooth: true,
            smoothTouch: true,   
            gestureDirection: 'vertical',
            wheelMultiplier: 2.0,  
          });
          function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
          }
        
          requestAnimationFrame(raf);
        // Cleanup Rellax on component unmount
        return () => {
          rellax.destroy();
          lenis.destroy();
        };
      }, []);
      
      const container = useRef(null)
      const {scrollYProgress} = useScroll({
        target:container,
        offset:['start start','end end']
      })
   
    return(
        <>
        <div>
            <div className='container'>
            <div className='flex justify-center items-start h-screen w-full top-60 sticky'>
                <div>
                    <p className='text-xl font-semibold text-center text-darkblue'>Create, Connect, Celebrate</p>
                    <h1 className='font-Heading leading-tight text-center text-2xl md:text-4xl font-bold text-gray-800'>We have thougtfully shaped innumerable websites over the years <span className='block pt-2'>and successfully launched the same for</span> <span className='text-gray-500 block pt-2'> many satisfied clients.</span></h1> 
                </div>
            </div>
            <div className='h-[400vh] flex flex-col'>
                <div className='grid grid-cols-3 absolute gap-2 md:gap-40'>
                    <img src={RunningImg1} className='object-contain h-[100px] md:h-[250px] w-[400px] mr-[200px] -z-[9] rellax' data-rellax-speed="1"/>
                    <img src={RunningImg5} className='object-contain h-[100px] md:h-[250px] w-[400px] rellax -z-[9]' data-rellax-speed="2"/>
                    <img src={RunningImg3} className='object-contain h-[100px] md:h-[250px] w-[400px] rellax' data-rellax-speed="4"/>
                    <img src={RunningImg4} className='object-contain h-[100px] md:h-[250px] w-[400px] rellax' data-rellax-speed="-1"/>
                    <img src={RunningImg2} className='object-contain h-[100px] md:h-[250px] w-[400px] rellax' data-rellax-speed="-2"/>
                    <img src={RunningImg8} className='object-contain h-[100px] md:h-[250px] w-[400px] rellax' data-rellax-speed="-1"/>
                    <img src={RunningImg7} className='object-contain h-[100px] md:h-[250px] w-[400px] rellax' data-rellax-speed="-2"/>
                    <img src={RunningImg6} className='object-contain h-[100px] md:h-[250px] w-[400px] rellax' data-rellax-speed="-4"/>
                    <img src={RunningImg9} className='object-contain h-[100px] md:h-[250px] w-[400px] rellax' data-rellax-speed="-3"/>
                    <img src={RunningImg10} className='object-contain h-[100px] md:h-[250px] w-[400px] rellax' data-rellax-speed="-3"/>
                </div>
            </div>
            </div>
            <div className='container'>
            <div ref={container}>
          {projects.map((items, index) => {
            const start = index * 0.25;
            const end = start + 0.25;
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
            <div>
                <Portfolioslider/>
            </div>
        </div>
        </>
         
      
    )
}
export default Portfolio;