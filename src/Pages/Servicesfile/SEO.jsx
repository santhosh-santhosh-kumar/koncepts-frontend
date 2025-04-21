import { Services } from "../../Components/Navbar/ResponsiveNavbar";
import build from "../../assets/Images/footer/build.webp";
const SEO = ()=>{
    const SEOData = [
        {
            id:1,
            title:"Comprehensive SEO Audits",
            question:"Is your website fully optimized?",
            img:build,
            content:"We perform a thorough analysis of your website’s architecture, design, user interaction, external backlinks, and content. By identifying issues and opportunities, we help you enhance your site’s overall performance and visibility."
        },
        {
            id:2,
            title:"On-Page Optimization",
            question:"Boost your site’s visibility!",
            img:build,
            content:"Our experts optimize all aspects of your website, from content management to meta tags, keyword density, dead links, and HTML validation. We ensure your site is fully optimized for both users and search engines."
        },
        {
            id:3,
            title:"Off-Page Optimization",
            question:"How are you promoting your website?",
            img:build,
            content:"We conduct a comprehensive analysis of the quality of your backlinks and implement strategies to build strong links through article directories, press releases, and blogs."
        },
        {
            id:4,
            title:"Improve Rankings",
            question:"Get to the top of the search results!",
            img:build,
            content:"With a deep understanding of search ranking algorithms, we build innovative links and integrate relevant keywords to ensure your website ranks higher on search engines."
        },
        {
            id:5,
            title:"Keyword Analysis",
            question:"Are you using the right keywords?",
            img:build,
            content:"We research and identify a comprehensive list of competitive, high-traffic keywords tailored to your business. This ensures your site is targeting the most effective keywords for maximum visibility"
        },
        {
            id:6,
            title:"Competitive Analysis",
            question:"Can you outpace your competitors?",
            img:build,
            content:"We analyze your top competitors and their market positions, offering strategies to enhance your rankings and sales performance. Our in-depth competitive analysis ensures you stay ahead in the competitive digital landscape."
        },
    ] 
    return(
        <div className="py-24">
            <div className="container">
                  <div className="flex flex-col md:flex-row py-5">
                        <div className="w-full md:w-3/12">
                            <h1 className="font-Heading text-xl">Services</h1>
                            <ul className="pl-0">
                                {Services.map((items) =>(
                                    <li className="cursor-pointer font-ContentText pt-2 text-[15px] text-slate-600 text-justify" onClick={()=>moveServicePage(items.to)}>{items.service}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full md:w-9/12 border-l-2 border-darkblue pl-2 md:pl-6">
                            <h1 className="font-Heading text-xl md:text-[28px]">Optimizing Your Path to Success</h1>
                            <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify mt-4">
                                Strategizing your business for future growth and visibility. Great SEO is the art of balancing higher 
                                traffic and meaningful conversions. Trust us to walk that fine line and deliver impactful results for 
                                your business.
                            </p>
                        </div>
                    </div>
                    <div className="py-5">
                        <h1 className="font-Heading text-xl md:text-[28px]">Boost Your Online Presence and Drive Conversions!</h1>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">
                            Everyone wants to stand out, and competition is at the highest level in this digital world. A website 
                            is a must, but you also need visibility on search engines. The secret to success is to bring good 
                            quality traffic to your store and convert those traffic members into potential customers.
                        </p>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">
                            At TejusDigi, we employ cutting-edge SEO strategies to not only attract the right audience but also 
                            transform organic traffic into tangible business growth. Let us help you amplify your digital presence 
                            and stay ahead in the competitive online marketplace!
                        </p>
                    </div>
                    <div className="py-5">
                        <h1 className="font-Heading text-xl md:text-[28px]">How We Elevate Your Online Visibility</h1>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">
                            TejusDigi uses on-site and digital SEO techniques to help increase your website's visibility and 
                            rankings. Unlike a generic SEO plugin solution, our method is built around personalized discovery 
                            and engagement leading to revenue conversion.
                        </p>
                    </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                        SEOData.map(({id,title,question,img,content})=>(
                            <div className="w-full border-l-2 border-darkblue pl-2 md:pl-6" key={id}>
                                <h1 className="font-Heading text-xl md:text-[28px] py-2">{title}</h1>
                                <div className="w-28 rounded-full bg-gray-200 p-5 my-2">
                                    <img className="w-full object-contain" src={img} alt="" />
                                </div>
                                <h1 className="font-Heading text-xl md:text-[18px] py-2">{question}</h1>
                                <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">{content}</p>
                            </div>
                        ))
                    }
                  </div>
                  <div className="w-full md:w-9/12 border-l-2 border-darkblue pl-2 md:pl-6 my-5" >
                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">
                        At TejusDigi, we utilize search engine tracking and landing page optimization techniques to further 
                        elevate your website’s performance. By adhering to industry best practices, quality parameters, and 
                        proven standards, we create user-driven websites that not only rank well but also engage and 
                        convert visitors effectively.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SEO;