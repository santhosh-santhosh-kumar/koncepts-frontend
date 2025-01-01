import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ResponsiveNavbar from "../Components/Navbar/ResponsiveNavbar";
import GetAQuote from "../Components/GetAQuote/GetAQuote";
import WhatsAppicon from "../Components/Whatsapp/whatsapp";

import { Toaster } from "react-hot-toast";


const Layout = ()=>{
    return(
        <>
           <Navbar/>
            <Toaster position="top-center"/>
            <Outlet/>
            <Footer/>
            <GetAQuote/>
            <WhatsAppicon/>
            <ResponsiveNavbar/>   
        </>
    )
}
export default Layout; 