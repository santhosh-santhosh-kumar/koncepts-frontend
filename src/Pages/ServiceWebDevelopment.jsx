import { useNavigate } from "react-router-dom";
import { Services } from "../Components/Navbar/ResponsiveNavbar";

const ServiceWebDevelopment = ()=>{
    const navigate = useNavigate();

    const moveServicePage = (to)=>{
        navigate(to);
    }
    const webdesigndata = [
        {id:1,title:"Single Page Website Design",details:"A single-page website displays all content on one HTML page, with users directed to specific sections via navigation links. This design is mobile-friendly but may have limited SEO benefits."},
        {id:2,title:"Static Website Design",details:"Static websites display the same content for every visitor. Built-in HTML is straightforward to create and doesn’t require programming or databases like dynamic sites."},
        {id:3,title:"HTML Website Design",details:"HTML, or Hypertext Markup Language, structures web content with headings, links, and sections. While it adds organization, it lacks dynamic capabilities on its own."},
        {id:4,title:"CSS Website Design",details:"CSS, or Cascading Style Sheets, complements HTML by styling web pages. Together with JavaScript, CSS is essential for creating visually appealing and responsive interfaces."},
        {id:5,title:"Javascript Website Design",details:"JavaScript enables interactive features on web pages, adding dynamic behavior that enhances user engagement and provides customizable functionalities."},
        {id:6,title:"Front End Website Design",details:"To provide a better user experience, front-end design concentrates on the visible portion of the website, such as layout, graphics, and usability."},
        {id:7,title:"UI/UX Website Design",details:"UX design addresses user needs and functionality, while UI design creates appealing interfaces. UX lays the foundation, and UI brings it to life visually."},
        {id:8,title:"Dynamic Website Design",details:"Dynamic websites offer content that varies based on user preferences, time, or location, making each visit unique and engaging for users."},
        {id:9,title:"Back-end Website Design",details:"Back-end design involves setting up the database, server, and application to ensure seamless functionality and data management for website users."},
        {id:10,title:"PHP Website Design",details:"PHP may greatly save development time because it is user-friendly and performs well across all platforms."},
        {id:11,title:"Responsive Web Design",details:"A website's layout is optimized for viewing and usability on all devices with a responsive design, which adapts to screen size and device type."},
        {id:12,title:"User-Friendly Website Design",details:"Usability, also known as user interface design, is the key to creating a navigable and comfortable environment."},
        {id:13,title:"SEO-Friendly Website Design",details:"SEO-friendly design enhances search engine accessibility and visibility, making it easier for users to find the site while prioritizing their experience."},
    ];
    
    return(
        <div className="pt-24">
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
                        <h1 className="font-Heading text-xl md:text-[28px]">Leading digital design and development agency in India</h1>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify mt-4">One of the best web design and development firms is TejusDigi Design and Development. We provide a wide range of custom web design services to satisfy the demands of both small and large businesses.</p>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">To increase client interaction and foster success, our skilled team of web developers and digital marketing specialists uses cutting-edge technologies and creative approaches to produce user-friendly websites and applications.</p>
                    </div>
                </div>

                <div className="pt-20">
                    <div className="">
                        <h1 className="font-Heading text-xl md:text-[28px]">Web Design Services</h1>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify py-2">As a prominent website design company in India, TejusDigi Design and Development provides a comprehensive range of website development services to meet all your requirements. Our team of web design specialists possesses extensive experience in creating visually appealing and functional websites.</p>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify py-2">Are you willing to take your business to the next level? At TejusDigi Design and Development, our exciting web designs not only retain the interest of the masses but also convert many of them into faithful clients. We provide affordable and user-friendly solutions that ensure a seamless experience. We are not only a Web Design Company but an online presence-building firm.
                        </p>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify py-2">As one of the top web design firms in India, we do more than merely create gorgeous websites; we aim to create a powerful presence online for you and the brand. With our expertise in web development, we make sure that your brand shines. This simple but effective content management platform suited our needs perfectly.</p>
                        <p className="font-Heading text-[15px] md:text-[24px] text-slate-900 text-justify py-2">We aim to help you grow your business.</p>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify py-2">Our team of flexible web creatives is focused on improving every aspect of the customer experience, and in order to solve your business problems. Our web designers and developers have design capabilities that are at the very leading edge of current technology. This passion and expertise are what truly define us as Web Design Specialists.</p>
                    </div>
                </div>

                <div className="py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                       {
                        webdesigndata.map(({id,title,details}) =>(
                                <div className="border-l-2 border-darkblue pl-2 md:pl-6 h-fit flex flex-col gap-3">
                                    <div className="">
                                        <h1 className="text-2xl font-Heading pt-2">{title}</h1>
                                    </div>
                                    <div>
                                        <p className="font-ContentText text-[15px] md:text-[17px] text-slate-600 text-justify">{details}</p>
                                    </div>
                                </div>
                        ))
                       } 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ServiceWebDevelopment;