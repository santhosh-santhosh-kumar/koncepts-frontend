import { Services } from "../../Components/Navbar/ResponsiveNavbar";
import { useNavigate } from "react-router-dom";
const MobileAppDevelopment = ()=>{
    const navigate = useNavigate();

    const moveServicePage = (to)=>{
        navigate(to);
    }
    const mobileappdevdata = [
        {
            id: 1,
            title: "iOS App Development Services",
            details: "iOS application development brings Apple’s sleek design and smooth functionality to life, covering all Apple hardware like iPhone, iPad, and iPod Touch. Built with Swift and Objective-C, these apps are deployed seamlessly to the App Store. Known for their exceptional performance, iOS apps are among the best in the market. TejusDigi Design and Development stands as one of India’s premier iOS mobile application development companies."
        },
        {
            id: 2,
            title: "Android App Development Services",
            details: "At TejusDigi Design and Development, we specialize in creating high-performing Android applications tailored for smartphones and tablets. Our development process utilizes the Android SDK and programming languages like Java, ensuring versatility in delivering dynamic Android solutions. With in-depth expertise in Android architecture, including core components like Application Frameworks and the Linux Kernel, our team builds apps that are both functional and efficient. Partner with us to bring your Android app ideas to life with precision and innovation."
        },
        {
            id: 3,
            title: "Flutter App Development Services",
            details: "Flutter has transformed app development by enabling the creation, testing, and deployment of applications from a single codebase for multiple devices. Renowned for its seamless performance across screens and platforms, Flutter allows us to develop versatile, high-quality apps. At TejusDigi Design and Development, we are a trusted leader in Flutter app development, providing innovative solutions that cater to diverse client requirements. Ready to explore Flutter for your app? Let’s bring your vision to life!"
        },
        {
            id: 4,
            title: "React Native App Development Services",
            details: "React Native has emerged as a powerful and versatile framework for mobile app development, renowned for its flexibility and efficiency. Created by Facebook, it empowers developers to build robust apps using JavaScript while enabling code sharing across platforms. At TejusDigi Design and Development, our skilled team specializes in delivering high-performance React Native applications that provide a seamless, native-like experience. Count on us to turn your ideas into reality with React Native expertise."
        },
        {
            id: 5,
            title: "Swift App Development Services",
            details: "Swift is a robust and efficient programming language crafted to simplify the development of iOS, desktop, and server applications. Known for its speed and seamless performance, it stands as a preferred choice for developers. At TejusDigi Design and Development, our skilled Swift development team is dedicated to building efficient, engaging applications tailored to your needs. Partner with us to elevate your Swift app development journey with precision and expertise."
        },
        {
            id: 6,
            title: "Ionic App Development Services",
            details: "Ionic is a versatile framework ideal for building cross-platform applications with a sleek, professional design. Powered by Angular and Cordova, it ensures flexibility and ease in development while delivering high-quality user interfaces. At TejusDigi Design and Development, our experienced team excels in creating seamless cross-platform apps that perform flawlessly on both iOS and Android. Let us bring your vision to life with our Ionic app development expertise."
        },
        {
            id: 7,
            title: "Cross Platform Mobile App Development Services",
            details: "Cross-platform mobile app development offers a streamlined solution by using a single codebase to run seamlessly on multiple operating systems like iOS, Android, Windows, and macOS. This method ensures design consistency, accelerates deployment, and lowers development costs. At TejusDigi Design and Development, we excel in delivering cross-platform app solutions that are efficient, affordable, and aligned with your business objectives. Let us help you broaden your app’s reach and impact across platforms."
        }
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
                        <h1 className="font-Heading text-xl md:text-[28px] leading-8">Leading mobile app design and development <br /> company in India.</h1>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mt-4">TejusDigi Design and Development stands as one of India’s top mobile app design and development companies, focused on making your app stand out in a competitive landscape. As a leading mobile app development agency, we integrate user-friendly features such as push notifications, social media integration, user feedback, secure payment gateways, live maps, and advanced analytics to create a seamless user experience.</p>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify">As a top mobile application development company and premier app design agency in India, TejusDigi Design and Development brings expertise and precision to every project. Our skilled developers possess in-depth knowledge of the iOS SDK’s tools, technologies, and languages, enabling them to create impactful, high-quality iOS native apps. We are also leaders in building innovative Android native apps tailored to support the Android operating system. Looking to hire mobile app developers from India at competitive rates? Contact us at reach@TejusDigidesign.com for a reliable partnership. We have an established reputation, positive client feedback, and provide exceptional services at affordable rates.</p>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify">TejusDigi Design and Development is a leading Android app development company in India, renowned for creating highly engaging and effective interfaces. Our apps are built with a focus on security and stability, ensuring a seamless experience for users. As a top application development company, we specialize in designing and developing mobile and web applications that drive business growth. Leveraging cutting-edge technology, we deliver innovative solutions tailored to meet the needs of businesses and startups alike.</p>
                    </div>
                </div>
                <div className="py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                       {
                        mobileappdevdata.map(({id,title,details}) =>(
                                <div key={id} className="border-l-2 border-darkblue pl-2 md:pl-6 h-fit flex flex-col gap-3">
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
export default MobileAppDevelopment;