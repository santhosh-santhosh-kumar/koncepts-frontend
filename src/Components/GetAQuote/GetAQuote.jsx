import { Link } from "react-router-dom";

const GetAQuote = ()=>{
    return(
        <Link to={'/getaquote'} className="no-underline border border-white fixed bottom-5 md:bottom-10 right-3 md:right-20 bg-darkblue z-10  text-white w-fit h-fit px-2 py-2 transition-all hover:rounded-tr-3xl hover:rounded-bl-3xl duration-700  rounded-lg">
            <p className="my-auto px-3 py-1 hover:text-yellow hover:border-solid">Get A Quote</p>
        </Link>
    )
}

export default GetAQuote;