const CustomerReview = ({id,review1,review2,review3,reviewer,des,img})=>{
    return(
        <div className="w-full h-[200px] md:h-[280px] border border-gray-200 aboutExpCardContainer flex flex-col justify-between">
            <div className="flex items-start gap-1">
                <div>
                <p className="text-[15px] font-semibold text-slate-950">{review1}</p>
                <p className="text-[15px] font-semibold text-slate-950">{review2}</p>
                <p className="text-[15px] font-semibold text-slate-950">{review3}</p>

                </div>
                <img className="w-20" src={img} alt="" />
            </div>
            <div>
                <span className="pb-0 font-bold block">{reviewer}</span>
                <span className="">{des}</span>
            </div>
        </div>
    )
}

export default CustomerReview;
