import { useNavigate } from "react-router-dom";

const ClientsCard = ({id,logo,link})=>{
const navigate = useNavigate();
    return(
        <div onClick={()=>{link ? window.open(link) : ""}} className={`${link ? 'cursor-pointer' : 'cursor-default'} w-full border border-gray-200 flex justify-center items-center py-3 px-2`}>
            <div className={`px-2 py-3 
                ${id === 1 ? 'w-40' : ''} 
                ${id === 2 ? 'w-44' : ''} 
                ${id === 3 ? 'w-64' : ''} 
                ${id === 4 ? 'w-60' : ''} 
                ${id === 5 ? 'w-60' : ''} 
                ${id === 6 ? 'w-80' : ''} 
                ${id === 7 ? 'w-40' : ''} 
                ${id === 8 ? 'w-56' : ''} 
                ${id === 9 ? 'w-56' : ''} 
                ${id === 10 ? 'w-52' : ''} 
                ${id === 11 ? 'w-48' : ''} 
                ${id === 12 ? 'w-56' : ''} 
                `}>
                <img loading="lazy" src={logo} className={`w-full h-full`} alt="" />
            </div>
        </div>
            
    )
}
export default ClientsCard;