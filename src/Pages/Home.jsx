import FaqAccordian from "../Components/FAQ/Accordian";
import BackgroundSlider from "../Components/BackgroundSlider/BackgroundSlider";
import PriceDetails from "../Components/PriceDetails/PriceDetails";
import EmailandQuote from "../Components/Contents/EmailandQuote";
import DesignPreviewSlider from "../Components/Projectviewer.jsx/ProjectViewer";
import Slide from "../Pages/Slide";
import Verticles from "../Components/ServicesComp/Verticles";
import Flowimg1 from "../assets/Images/homepage-projects/01DrAshokkumar.png"
import Flowimg2 from "../assets/Images/homepage-projects/02IaasAcademy.png"
import Flowimg3 from "../assets/Images/homepage-projects/03JandJTrading.png"
import Flowimg4 from "../assets/Images/homepage-projects/04sangumark.png"
import Flowimg5 from "../assets/Images/homepage-projects/05Shazab.png"
import Cards from '../Components/StackingCards/Cards';
import React, { useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion';


const Home = () => {
  const projects=[
    {id:1,title:"Card 1",description1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae obcaecati ex. Accusamus, reiciendis. Ducimus amet voluptatem tenetur porro? Quod et minus facere in, velit accusamus sit ratione? Consequatur, id.",description2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae obcaecati ex. Accusamus, reiciendis. Ducimus amet voluptatem tenetur porro? Quod et minus facere in, velit accusamus sit ratione? Consequatur, id. Ducimus amet voluptatem tenetur porro? Quod et minus facere in, velit accusamus sit ratione? Consequatur, id.",img:Flowimg1, tags:["figma","e-commerce","landing page"],
      name:"Dr.Ashok Kumar PS",
      prof:"Senior Consultant Orthopedic",
    },
    {id:1,title:"Card 1",description1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae obcaecati ex. Accusamus, reiciendis. Ducimus amet voluptatem tenetur porro? Quod et minus facere in, velit accusamus sit ratione? Consequatur, id.",description2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae obcaecati ex. Accusamus, reiciendis. Ducimus amet voluptatem tenetur porro? Quod et minus facere in, velit accusamus sit ratione? Consequatur, id. Ducimus amet voluptatem tenetur porro? Quod et minus facere in, velit accusamus sit ratione? Consequatur, id.",img:Flowimg2, tags:["figma","e-commerce","landing page"],
      name:"Rajesh Daswani",
      prof:"IaaS Academy"
    },
    {id:1,title:"Card 1",description1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae obcaecati ex. Accusamus, reiciendis. Ducimus amet voluptatem tenetur porro? Quod et minus facere in, velit accusamus sit ratione? Consequatur, id.",description2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae obcaecati ex. Accusamus, reiciendis. Ducimus amet voluptatem tenetur porro? Quod et minus facere in, velit accusamus sit ratione? Consequatur, id. Ducimus amet voluptatem tenetur porro? Quod et minus facere in, velit accusamus sit ratione? Consequatur, id.",img:Flowimg3, tags:["figma","e-commerce","landing page"],
    prof:"Jerad Jegaraj and Jyoti Patel",
    name:"J&J trading (UK) Ltd",
    },
    {id:1,title:"Card 1",description1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae obcaecati ex. Accusamus, reiciendis. Ducimus amet voluptatem tenetur porro? Quod et minus facere in, velit accusamus sit ratione? Consequatur, id. Ducimus amet voluptatem tenetur porro? Quod et minus facere in, velit accusamus sit ratione? Consequatur, id.",description2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae obcaecati ex. Accusamus, reiciendis. Ducimus amet voluptatem tenetur porro? Quod et minus facere in, velit accusamus sit ratione? Consequatur, id.",img:Flowimg4, tags:["figma","e-commerce","landing page"],
      prof:"Panchasaram",
      name:"Palayakat Sangumark"
    },
    {id:1,title:"Card 1",description1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae obcaecati ex. Accusamus, reiciendis. Ducimus amet voluptatem tenetur porro? Quod et minus facere in, velit accusamus sit ratione? Consequatur, id. Ducimus amet voluptatem tenetur porro? Quod et minus facere in, velit accusamus sit ratione? Consequatur, id.",description2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae obcaecati ex. Accusamus, reiciendis. Ducimus amet voluptatem tenetur porro? Quod et minus facere in, velit accusamus sit ratione? Consequatur, id.",img:Flowimg5, tags:["figma","e-commerce","landing page"],
      prof:"Mohammed Aleemullah",
      name:"Shazab"
    },
   ]
       const container = useRef(null)
       const {scrollYProgress} = useScroll({
        target:container,
        offset:['start start','end end']
      })

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
        <div className='container'>
                <div ref={container}>
                {
                   projects.map((items,index)=>{
                    const targetscale = 1 - ((projects.length - index) * 0.1);
                    return <Cards key={index} {...items} progress={scrollYProgress} range={[index * 0.25,1]} targetscale={targetscale}/>
                   })
                }
                </div>
            </div>
                
      </div>
    </>
  );
};
export default Home;
