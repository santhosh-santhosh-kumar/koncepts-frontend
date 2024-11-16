const ClientsCard = ({id,logo})=>{
    const logoadj=(id)=>{
        if(id === 6){
            return 'w-100';
        }
    }

    const logoad2=(id)=>{
        if(id === 7){
            return 'jathi';
        }
    }
    
 
    return(
        <div className="w-full border border-gray-200 flex justify-center px-2">
            <div className={`${logoadj(id)} ${logoad2(id)}  m-auto ${id==1?"p-4":""} ${id==3?"p-6":""} ${id==4?"p-4":""} ${id==5?"p-4":""} ${id==10?"p-4":""}`}>
                <img loading="lazy" src={logo} className={`${id==1?"w-40 h-70":""} ${id==2?"w-60 h-50":""} ${id==3?"w-40 h-50":""} ${id==4?"w-80 h-50":""} ${id==5?"w-80 h-50":""} ${id==8?"w-60 h-50":""} ${id==10?"w-60 h-50":""} ${id==12?"w-60 h-50":""}`} alt="" />
            </div>
        </div>
            
    )
}
export default ClientsCard;