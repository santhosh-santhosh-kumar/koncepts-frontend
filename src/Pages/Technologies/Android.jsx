import { technologies } from "../../Components/Navbar/ResponsiveNavbar";
import build from "../../assets/Images/footer/build.webp"
const Android = ()=>{
    const AndroidService = [
        {
            id:1,
            title:"App Development",
            img:build,
            content:"We craft tailored Android apps that enhance customer engagement and drive business success. TejusDigi's Android applications are designed to provide seamless interaction, leveraging cutting-edge technology to help businesses grow and thrive in the digital space."
        },
        {
            id:2,
            title:"Legacy Apps",
            img:build,
            content:"Our Android developers modernize legacy systems, transforming them into advanced mobile apps that provide superior functionality and user experience. By ensuring your legacy app works efficiently across various platforms, we help maximize ROI and improve business workflows."
        },
        {
            id:3,
            title:"Testing",
            img:build,
            content:"Our dedicated QA team rigorously tests Android apps on multiple devices to identify and fix potential issues. We focus on enhancing features, ensuring a smooth user experience and top-notch performance across different Android devices."
        },
        {
            id:4,
            title:"Support Services",
            img:build,
            content:"TejusDigi offers post-launch support and maintenance services that keep your Android app updated with the latest user preferences and Android OS updates. We are committed to providing quick and effective maintenance solutions, ensuring your app remains competitive and performs at its best."
        },
        {
            id:5,
            title:"Business Apps",
            img:build,
            content:"In today’s competitive market, success starts with a strategic approach, and that begins with a robust mobile business app. TejusDigi helps startups and enterprises with custom wearable app concepts, UI/UX designs, prototypes, and MVP/MVC development to quickly address business needs and deliver impressive results."
        },
        {
            id:6,
            title:"Mobile Commerce",
            img:build,
            content:"As the mobile economy continues to grow, we help businesses integrate product listings from their websites into mobile apps to boost global sales. Our Android apps enable customers to shop anytime, anywhere and include features like secure payment gateway integration, platform compatibility, and deep linking for enhanced shopping experiences."
        },
        {
            id:7,
            title:"Utility Apps",
            img:build,
            content:"TejusDigi leverages the full potential of Android SDK to develop state-of-the-art utility apps that solve real-world challenges. With our deep expertise in SDKs, we create powerful and functional Android utility applications that provide practical solutions for everyday tasks, making life easier for users."
        },
        {
            id:8,
            title:"Android Wear",
            img:build,
            content:"TejusDigi enhances user interaction on wearable devices by designing intuitive apps that offer a seamless experience. Our wearable apps are synced to smartwatches, giving users access to key features such as sensors, notifications, and real-time data, providing a rich app experience for any Android-based wearable."
        },
        {
            id:9,
            title:"Backend Integration",
            img:build,
            content:"TejusDigi follows a Mobile-first approach, ensuring smooth integration with any type of Android app. We specialize in linking apps to existing backend systems, enabling seamless functionalities such as cloud data backup, real-time content delivery, and push notifications through Google Cloud Messaging (GCM), all while maintaining exceptional performance."
        },
    ] 
    return(
        <div className="py-24">
            <div className="container">
                 <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-3/12">
                        <h1 className="font-Heading text-xl">Technologies</h1>
                        <ul className="pl-0">
                            {technologies.map((items) =>(
                                <li className="cursor-pointer font-ContentText pt-2 text-[15px] text-slate-600 text-justify" onClick={()=>moveServicePage(items.to)}>{items.tech}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-9/12 border-l-2 border-darkblue pl-2 md:pl-6">
                        <h1 className="font-Heading text-xl md:text-[28px]">
                            We’re dedicated to delivering cutting-edge Android apps.
                        </h1>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify mt-4">
                            TejusDigi designs mobile apps with the user in mind, embracing the digital era. Our Android app 
                            development services aim to unlock the full potential of mobile devices, guiding you through the 
                            entire app lifecycle from concept to deployment.
                        </p>
                    </div>
                </div>
                <div className="py-10">
                    <h1 className="font-Heading text-xl md:text-[28px] py-2">
                        Android Apps Tailored for Seamless User Experience
                    </h1>
                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">
                        TejusDigi specializes in designing and developing Android apps that offer comprehensive solutions 
                        for Android mobile users. Our experienced app developers stay ahead of the fast-evolving 
                        technology landscape and business requirements. We create customized Android applications that 
                        align with your strategic business goals, delivering innovative solutions that engage and delight both 
                        you and your users.
                    </p>
                </div>
                <div>
                    <h1>Android Development Services</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                        AndroidService.map(({id,title,img,content})=>(
                            <div className="w-full border-l-2 border-darkblue pl-2 md:pl-6" key={id}>
                                <h1 className="font-Heading text-xl md:text-[28px] py-2">{title}</h1>
                                <div className="w-28 rounded-full bg-gray-200 p-5 my-2">
                                    <img className="w-full object-contain" src={img} alt="" />
                                </div>
                                <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">{content}</p>
                            </div>
                        ))
                    }
                  </div>
                </div>
                <div className="py-5">
                    <h1 className="font-Heading text-xl md:text-[28px] py-2">
                        Our Android App Development Strategies
                    </h1>
                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">
                        TejusDigi employs a comprehensive library of 2D and 3D graphics, along with a wide range of audio 
                        and video elements, ensuring your Android app stands out. Our apps are compatible with key device 
                        features like the camera, accelerometer, and magnetometer for enhanced user interaction. We 
                        leverage interprocess communication (IPC) for seamless message passing and utilize SQLite for 
                        efficient data storage. Our services also cover app export, signing, and publishing, ensuring smooth 
                        access to vital information. Whether you need custom-built applications or enhancements to 
                        existing apps, our experienced developers are ready to deliver top-notch solutions.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Android;