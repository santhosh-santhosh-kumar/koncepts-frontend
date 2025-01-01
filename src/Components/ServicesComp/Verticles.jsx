import Travel from "../../assets/animated-icons/services/travel.gif"
import automotive from "../../assets/animated-icons/services/automobile.gif"
import ecommerce from "../../assets/animated-icons/services/ecommerce.gif"
import retail from "../../assets/animated-icons/services/retail.gif"
import hospitality from "../../assets/animated-icons/services/hospitality.gif"
import realestate from "../../assets/animated-icons/services/realestate.gif"
import education from "../../assets/animated-icons/services/meeting.gif"
import event from "../../assets/animated-icons/services/event1.gif";
import healthcare from "../../assets/animated-icons/services/healthcare.gif"
export const verticals = [
    {id:1,icon:Travel,title:"Travel"},
    {id:2,icon:ecommerce,title:"E-commerce"},
    {id:3,icon:hospitality,title:"Hospitality"},
    {id:4,icon:realestate,title:"Real Estate"},
    {id:5,icon:retail,title:"Retail"},
    {id:6,icon:automotive,title:"Automotive"},
    {id:7,icon:healthcare,title:"Health Care"},
    {id:8,icon:education,title:"Education"},
    {id:9,icon:event,title:"Event"},
]


const Verticles = ()=>{

    return(
        <div className="">
            <div className="container">
                <h1 className="text-center font-Heading pb-3 text-2xl font-bold text-darkblue ">Our Verticals</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 ">

                    {
                        verticals.map((items,index)=>{
                            
                            return index < 4 ?  ( <div key={index} className={` flex flex-col justify-center items-center mt-10`}>
                            <div className="border-dashed border-2 border-darkblue rounded-full p-4 w-fit relative">
                                <div className="absolute -top-3 left-24 px-[7px] py-[5px] rounded-full flex shadow-md shadow-darkblue bg-white">
                                    <p className="mx-auto my-auto text-darkblue font-bold text-xl">{`0${items.id}`}</p>
                                </div>
                                <div className="w-24 h-24 rounded-full"><img src={items.icon} alt="" /></div>
                                <div className="absolute right-24 p-3 rounded-full bg-darkblue">
                                </div>
                            </div>
                            <h3 className="text-xl mt-2 text-darkblue font-bold">{items.title}</h3>
                            </div>) : (
                                <div key={index} className={`flex md:hidden flex-col justify-center items-center mt-10`}>
                                <div className="border-dashed border-2 border-darkblue rounded-full p-4 w-fit relative">
                                    <div className="absolute -top-3 left-24 px-[7px] py-[5px] rounded-full flex shadow-md shadow-darkblue bg-white">
                                        <p className="mx-auto my-auto text-darkblue font-bold text-xl">{`0${items.id}`}</p>
                                    </div>
                                    <div className="w-24 h-24 rounded-full"><img src={items.icon} alt="" /></div>
                                    <div className="absolute right-24 p-3 rounded-full bg-darkblue">
                                    </div>
                                </div>
                                <h3 className="text-xl mt-2 text-darkblue font-bold">{items.title}</h3>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-5 mt-10 px-20">

                        {
                            verticals.map((items,index)=>{
                                
                                return index >= 4 && index < 7 ?  ( <div key={index} className={` flex flex-col justify-center items-center`}>
                                <div className="border-dashed border-2 border-darkblue rounded-full p-4 w-fit relative">
                                    <div className="absolute -top-3 left-24 px-[7px] py-[5px] rounded-full flex shadow-md shadow-darkblue bg-white">
                                        <p className="mx-auto my-auto text-darkblue font-bold text-xl">{`0${items.id}`}</p>
                                    </div>
                                    <div className="w-24 h-24 rounded-full"><img src={items.icon} alt="" /></div>
                                    <div className="absolute right-24 p-3 rounded-full bg-darkblue">
                                    </div>
                                </div>
                                <h3 className="text-xl mt-2 text-darkblue font-bold">{items.title}</h3>
                                </div>) : ""
                            })
                        }
                </div>

                <div className="hidden md:grid grid-cols-2 md:grid-cols-2 gap-5 mt-10 px-72">

{
    verticals.map((items,index)=>{
        
        return index > 6 ?  ( <div key={index} className={` flex flex-col justify-center items-center `}>
        <div className="border-dashed border-2 border-darkblue rounded-full p-4 w-fit relative">
            <div className="absolute -top-3 left-24 px-[7px] py-[5px] rounded-full flex shadow-md shadow-darkblue bg-white">
                <p className="mx-auto my-auto text-darkblue font-bold text-xl">{`0${items.id}`}</p>
            </div>
            <div className="w-24 h-24 rounded-full"><img src={items.icon} alt="" /></div>
            <div className="absolute right-24 p-3 rounded-full bg-darkblue">
            </div>
        </div>
        <h3 className="text-xl mt-2 text-darkblue font-bold">{items.title}</h3>
        </div>) : ""
    })
}
</div>
                

            </div>
        </div>
    )
}
export default Verticles; 