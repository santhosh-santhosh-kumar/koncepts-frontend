import { Link } from "react-router-dom";
const EmailandQuote = ()=>{
    return(
        <div className="bg-darkblue py-10 flex items-center">
            <div className="container">
                <div className="text-white">
                <p className="text-xl md:text-2xl">To Elevate your Online Presence and Captivate your Audience.</p>
                <h1 className="text-3xl md:text-5xl">Let's Bring your Vision to Life with Expert <span className="block mt-2">Design and Development.</span></h1>
                <p className="pt-2 ">100+ Success Stories and Counting!</p>
                </div>
                <div className="flex flex-col md:flex-row mt-3 text-white gap-3">
                    <a href="mailto:sridhar@konceptsdandd.com" className="no-underline text-white"><button className=" bg-white px-3 py-2 text-xl md:text-2xl font-bold text-darkblue rounded-lg hover:bg-white hover:text-darkblue transition-all duration-500 hover:rounded-tr-3xl hover:rounded-bl-3xl font-ContentText">Email us Today</button></a>
                   <Link className="no-underline text-white" to={'/getaquote'} onClick={()=>window.scrollTo(0,0)}><button className="font-ContentText text-darkblue rounded-lg bg-white px-3 py-2 text-xl md:text-2xl font-semibold hover:bg-white hover:text-darkblue transition-all duration-500 hover:rounded-tr-3xl hover:rounded-bl-3xl">Request a Quote</button></Link>
                </div>
            </div>
        </div>
    )
}
export default EmailandQuote;