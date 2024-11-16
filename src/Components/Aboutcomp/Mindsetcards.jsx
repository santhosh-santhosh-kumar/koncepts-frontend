const MindsetCard = ({id,title,icon,details})=>{
    // const hiddenbox1 = (id)=>{
    //     if(id === 5){
    //         return 'hidden md:block'
    //     }
    // }
    // const hiddenbox2 = (id)=>{
    //     if(id === 7){
    //         return 'hidden md:block'
    //     }
    // }
    return(
        <div className={` border-1 border-gray-200 aboutExpCardContainer`}>
            <div className="flex items-start justify-between gap-x-2 pb-3">
                <h3 className="text-[24px] font-semibold">{title}</h3>
                <img src={icon} className="w-10" alt="" />
            </div>
            <div>
                <p className="text-[15px] text-slate-950">{details}</p>
            </div>
        </div>
    )
}
export default MindsetCard;