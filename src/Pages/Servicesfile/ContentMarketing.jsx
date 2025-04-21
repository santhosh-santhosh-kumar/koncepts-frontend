import { Services } from "../../Components/Navbar/ResponsiveNavbar";
import build from "../../assets/Images/footer/build.webp";
const ContentMarketing = ()=>{
    const CMdate = [
        {
            id:1,
            title:"Goal",
            content:"Our primary aim is to drive impactful content marketing ROI by crafting a strategy uniquely designed to align with your business objectives and aspirations.",
            img:build
        },
        {
            id:2,
            title:"Market Research",
            content:"We dive deep into analyzing your competitors and understanding your target audience. With our content solutions, your business stays aligned, on-brand, and achieves measurable outcomes effectively.",
            img:build
        },
        {
            id:3,
            title:"Content Creation",
            content:"We have a team of talented content creators who write high-quality and valuable content specifically designed to engage your target audience. We make sure your message gets to the right people at the right time and leaves an impression that lasts.",
            img:build
        },
        {
            id:4,
            title:"Content Analytics",
            content:"By leveraging advanced data tools and analytics, our experts fine-tune your content’s performance to boost sales and engagement. Measure, adjust, and optimize every piece for maximum impact and ROI.",
            img:build
        },

    ]
    return(
        <div className="py-24">
            <div className="container">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-3/12">
                        <h1 className="font-Heading text-xl">Services</h1>
                        <ul className="pl-0">
                            {Services.map((items) =>(
                                <li className="cursor-pointer font-ContentText pt-2 text-[15px] text-slate-600 text-justify" onClick={()=>moveServicePage(items.to)}>{items.service}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-9/12 border-l-2 border-darkblue pl-2 md:pl-6">
                        <h1 className="font-Heading text-xl md:text-[28px]">
                        Captivate your audience with strategic content marketing.
                        </h1>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify mt-4">
                            TejusDigi adopts an agile approach, seamlessly integrating editorial thinking into your business 
                            strategy. We have created highly effective content marketing strategies for some of the largest 
                            companies globally. Content marketing is providing the right message, to the right audience, at the 
                            right time and that is exactly what we do! This leads to building strong connections over time which
                            leads to a portable brand building.
                        </p>
                    </div>
                </div>
                <div className="my-10">
                    {
                        CMdate.map(({id,title,content,img})=>(
                            <div key={id} className="w-full border-l-2 border-darkblue pl-2 md:pl-6">
                                <div className="flex items-start gap-3 w-4/6 py-2">
                                    <div className="w-40 rounded-full bg-gray-200 p-5">
                                        <img className="w-full object-contain" src={img} alt="" />
                                    </div>
                                    <div>
                                        <h1 className="font-Heading text-xl md:text-[28px]">{title}</h1>
                                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify">{content}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify">Content specialists at TejusDigi craft precise, timely, and impactful content aligned with your 
                        business goals. From blog posts and website copy to social media campaigns and SEO-driven articles, 
                        we design and execute your content marketing strategy from the ground up.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContentMarketing;