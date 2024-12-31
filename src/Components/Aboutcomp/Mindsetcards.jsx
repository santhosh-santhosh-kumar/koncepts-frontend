const MindsetCard = ({id,title,icon,details})=>{
    return(
        <div className={` border-1 border-gray-200 aboutExpCardContainer`}>
            <div className="flex items-start justify-between gap-x-2 pb-3">
                <h3 className="text-[24px] font-semibold text-darkblue">{title}</h3>
                <img src={icon} className="w-10" alt="" />
            </div>
            <div>
                <p className={`${id==5||id==6 ? "pb-8":""} text-[15px] text-slate-950`}>{details}</p>
            </div>
        </div>
    )
}
export default MindsetCard;