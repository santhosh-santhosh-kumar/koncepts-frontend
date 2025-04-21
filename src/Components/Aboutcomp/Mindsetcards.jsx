import PropTypes from 'prop-types';

const MindsetCard = ({ id, title, icon, details }) => {
    return (
        <div className="border border-gray-200 aboutExpCardContainer">
            <div className="flex items-start justify-between gap-x-2 pb-3">
                <h3 className="text-[24px] font-semibold text-darkblue">{title}</h3>
                <video 
                    className="w-10" 
                    src={icon} 
                    alt={`${title} icon`} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                />
            </div>
            <div>
                <p className={`${id === 5 || id === 6 ? 'pb-8' : ''} text-[15px] text-slate-950`}>{details}</p>
            </div>
        </div>
    );
};


export default MindsetCard;
