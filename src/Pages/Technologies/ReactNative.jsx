import { technologies } from "../../Components/Navbar/ResponsiveNavbar";

const ReactNative = ()=>{
    const ReactAdvantage = [
        {id:1,title:"Rapid Development",content:"With a single codebase for both platforms, applications are developed significantly faster. React Native's hot reload and refresh features save time by eliminating long compilation times, providing a workflow that closely mimics web development."},
        {id:2,title:"Native Rendering",content:"React Native ensures that you don't compromise on performance or user experience. The framework uses the same native components as Objective-C or Swift for iOS, and Java for Android, rather than relying on WebViews. This enables the app to leverage the full potential of the native features of both operating systems."},
        {id:3,title:"Easy Evolution",content:"React Native decomposes the app into individual components, utilizing a unidirectional data flow that ensures predictable and maintainable code. This approach allows for modular, reusable, and easily testable components, making updates and modifications more efficient. As a result, evolving and maintaining the app becomes a much smoother process."},
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
                        We create custom components in React Native with ease.
                        </h1>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify mt-4">
                            TejusDigi uses a brief react native to keep everyone happy, just like skills that are really good at the 
                            job. Using React Native, we build applications that work seamlessly on both iOS and Android from a 
                            single codebase, which greatly cuts down on development time and cost. We design custom 
                            components to satisfy certain business requirements maintaining aesthetic beauty and a kind of
                            native performance across the platforms.
                        </p>
                    </div>
                </div>
                <div className="py-10">
                    <h1 className="font-Heading text-xl md:text-[28px]">
                        Why use React Native?
                    </h1>
                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">
                        React Native is an open-source framework developed by Facebook that aids in the process of
                        mobile app development. It enables developers to create applications that provide the performance 
                        and user experience of native apps, while still retaining the advantages of web development.
                    </p>
                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">
                        The framework enables developers to write code once and deploy it on both platforms, improving 
                        efficiency. Unlike other hybrid frameworks that rely on WebView (HTML and CSS), React Native uses 
                        native components, ensuring a more native feel. This results in a faster development process, 
                        reducing both the time and cost of maintaining separate codebases for iOS and Android applications. 
                        On average, React Native reduces development time by 30%, allowing faster updates and smoother 
                        app maintenance.
                    </p>
                </div>
                <div>
                    <h1 className="font-Heading text-xl md:text-[28px] py-2">TejusDigi React Native App Development</h1>
                    <h1 className="font-Heading text-xl md:text-[28px] py-2">Technologies</h1>
                    <div className="py-5">
                        <h1 className="font-Heading text-xl md:text-[28px] py-2">REACT NATIVE</h1>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">We seamlessly build custom components in React Native.</p>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">
                            React Native empowers us to craft cross-platform mobile applications with native performance and 
                            smooth interfaces. A single codebase is used to develop and maintain an application, which can then 
                            be deployed simultaneously on both iOS and Android.
                        </p>
                    </div>
                </div>
                <div className="py-5">
                    <h1 className="font-Heading text-xl md:text-[28px]">The advantages of React Native</h1>
                    <div className="py-5">
                        {
                            ReactAdvantage.map(({id,title,content})=>(
                                <div key={id} className="w-full border-l-2 border-darkblue pl-2 md:pl-6 my-5">
                                    <h1 className="font-Heading text-xl md:text-[28px]">
                                        {title}
                                    </h1>
                                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify mt-4">
                                        {content}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                    <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify py-2">
                        With React Native, TejusDigi provides seamless native experiences on both iOS and Android, 
                        ensuring identical rendering without the need for separate development or deployment cycles for 
                        each operating system.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ReactNative;