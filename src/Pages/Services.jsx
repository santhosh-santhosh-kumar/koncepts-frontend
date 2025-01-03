
import AboutService from "../Components/ServicesComp/aboutservice";
import Verticles from "../Components/ServicesComp/Verticles"
import WhatWeDo from "../Components/ServicesComp/WhatWeDo";
import { useState,useEffect } from "react";
import image1 from "../assets/Images/Services/branding.webp";
import image2 from "../assets/Images/Services/brochure.webp";
import image3 from "../assets/Images/Services/logo.webp";
import image4 from "../assets/Images/Services/website.webp";

const Services = ()=>{
    const whatwedodata = [
        {
            id:1,
            title:"Logo & Identity",
            details:[
                "A professional and effective logo design plays an important role in establishing trust and grabbing attention. It introduces prospective clients to the company and what it can offer them, even if they have never used the brand before. A proper logo conveys trust and leads to long-term cooperation. That is why at TejusDigi, we design professional logos that are high-quality, creative, and tailored to your brand specifically.",
                "Keeping all this in mind, TejusDigi creates professional logos providing high-quality, creative, and unique designs. Our creations help you show off your brand’s personality and function by being precise and accurate after thoroughly studying the business and its consumers"

            ],
            img:image3
        },
        {
            id:2,
            title:"Branding",
            details:[
                "Branding is one of the important aspects of any large or small business. In simple words a company’s brand tells its customer what they can expect from its products and services.",
                "Because defining a brand and developing a brand strategy can be a complex time-consuming process TejusDigi simplifies it for you by carefully selecting the branding components and distributing them evenly to meet the business goals to its end users.",
                "With detailed research, we understand the needs and preferences of your current and potential customers, designing a strategic plan that delivers meaningful and impactful outcomes."

            ],
            img:image1
        },
        {
            id:3,
            title:"Brochures",
            details:[
                "Brochures serve as your product catalog in digital form. Unlike physical print brochures, digital brochures are fully optimized for various digital platforms, including the web. Our skilled UI designers specialize in creating engaging user interactions, ensuring your digital brochures achieve maximum reach. We focus on crafting brochures with clean, minimalistic designs and optimal readability, placing the spotlight on your products to drive conversions.",
                "With TejusDigi, clients can choose between static PDF brochures or dynamic real-time animations, allowing their products to be presented in the most impactful and appealing way.",
            ],
            img:image2
        },
        {
            id:4,
            title:"Web Design & Development",
            details:[
                "Keeping up with evolving web standards can be challenging, and that’s where TejusDigi steps in. Our design & development team helps enable startups and big companies to envision their business goals. We make sure the user experience strikes a chord with its target audience by delivering the business vision, mission services and product roadmap.",
                "TejusDigi also specializes in custom software development, offering end-to-end solutions to tackle the challenges of scaling a business. Our approach enables clients to leverage strategic application development to drive organic traffic and conversions. Additionally, we deliver bespoke solutions tailored to meet your specific web application needs.",
            ],
            img:image4
        },
    ]
    const [activeId, setActiveId] = useState(null);
    const [previousId, setPreviousId] = useState(null);
    const [scrollDirection, setScrollDirection] = useState("down");

     useEffect(() => {
        let lastScrollTop = window.scrollY;

        const handleScroll = () => {
            let scrollTop = window.scrollY;
            setScrollDirection(scrollTop > lastScrollTop ? "down" : "up");
            lastScrollTop = scrollTop;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (scrollDirection === "down") {
            setPreviousId(activeId);
        } else {
            setPreviousId(null); // Clear previous blur when scrolling up
        }
    }, [activeId, scrollDirection]);
    return(
        <>
        <div>
            <AboutService/>
            <Verticles/>
            {
                whatwedodata.map((items,index)=>{
                    return <WhatWeDo key={items.id} {...items} activeId={activeId} setActiveId={setActiveId} previousId={previousId}/>
                })
            }
        </div>
        </>
    )
}
export default Services;