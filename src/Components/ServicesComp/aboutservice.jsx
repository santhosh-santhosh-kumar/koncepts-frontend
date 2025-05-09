import define from "../../assets/animated-icons/services/define.webm";
import design from "../../assets/animated-icons/services/design.webm";
import refine from "../../assets/animated-icons/services/refine.webm";
import build from "../../assets/animated-icons/services/build.webm";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const AboutService = () => {
    const aboutservicedata = [
        {id: 1, title: "Define", details: "Our team will define the essential Quality of user needs and provide an effective output at the end of the process.", icon: define},
        {id: 2, title: "Design", details: "Incorporating creative website design ideas gives you a way to stand out and provide a unique, positive experience.", icon: design},
        {id: 3, title: "Refine", details: "Refined extends the power of Confluence with added structure, intuitive navigation, improved accessibility of content.", icon: refine},
        {id: 4, title: "Build", details: "We usually set goals from the beginning of our process and then make sure that we achieve those goals by the end of the process", icon: build},
    ];
    
    const navigate = useNavigate();
    
    const navigatecontact = () => {
        navigate('/contact');
    };

    return (
        <div className="container py-24 w-full flex">
            <div className="my-auto w-full md:flex border border-gray-200">
                <div className="aboutExpCardContainer w-full md:w-1/2 my-auto">
                    <h1 className='font-Heading text-5xl md:text-6xl font-bold'>Responsive.</h1>
                    <h1 className='font-Heading text-5xl md:text-6xl font-bold'>Powerful.</h1>
                    <h1 className='font-Heading text-5xl md:text-6xl font-bold'>Clean.</h1>
                    <div className="flex w-[255px] items-center group transition-all font-ContentText text-white rounded-lg bg-darkblue px-3 py-2 text-xl md:text-2xl font-semibold hover:rounded-tr-3xl hover:rounded-bl-3xl duration-700 justify-center gap-3">
                        <button onClick={navigatecontact}>Talk to an expert</button>
                        <GoArrowRight size={25} className="mt-1 relative group-hover:translate-x-5 transition-all duration-500"/>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {aboutservicedata.map(({id, title, details, icon}) => (
                            <div key={id} className="border-b border-l aboutExpCardContainer">
                                <div className="flex items-start justify-between gap-x-2 pb-3">
                                    <h3 className="text-[24px] font-semibold text-darkblue">{title}</h3>
                                    <video className="w-10" src={icon} autoPlay loop muted />
                                </div>
                                <div>
                                    <p className="text-[15px] text-slate-950">{details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutService;
