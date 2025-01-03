// import EmployeCard from "../../Pages/EmployeCard";

// const AboutExpCard = ({
//   id,
//   ProfilePic,
//   Name,
//   title,
//   exp,
//   profession,
//   icon,
//   about1,
//   about2,
//   proficient,
//   socialmedia,
//   link,
// }) => {
//   return (
//     <>
//     <div className="aboutExpCardContainer border-1 border-collapse border-gray-200 w-full">
//         <div className="flex justify-between items-center w-full">
//             <div className="w-6/12">
//               <img src={ProfilePic} alt="" />
//             </div>
//             <div className="w-full flex justify-between">
//               <div className="flex items-center justify-end ml-auto">
//                 <p className="text-3xl md:text-5xl font-semibold text-slate-950 mr-2">
//                   {exp}+
//                 </p>
//                 <p className="w-20 text-sm font-medium">
//                 years of experience in {profession}
//                 </p>
//               </div>
//             </div>
//         </div>
//     </div>
 
//     </>
//   );
// };
// export default AboutExpCard;




// {/* <div className="md:flex items-start ">
//             <div className="border-3 w-full h-full">
//                 <img src={ProfilePic} className="w-full h-full" alt="" />
//             </div>
//             <div>
//                 <div className="flex pl-40">
//                     <p className="text-3xl md:text-5xl font-semibold text-slate-950 mr-2">
//                 {exp}+
//                     </p>
//                     <p className="w-20 text-sm font-medium">
//                 years of experience in {profession}
//                     </p>
//                     <img src={icon} className="w-20 h-16 inline" alt="" />
//                 </div>
//                 <div className="pl-10">
//                   <h1 className="text-3xl font-semibold ">{Name}</h1>
//                   <h2 className="text-[18px] font-semibold ">{title}</h2>
//                   <p className="font-medium text-[15px] w-full  pt-2">
//                     {about1}
//                   </p>
//                   <p className="font-medium text-[15px] w-full ">{about2}</p>
//                   <p className="font-medium text-[15px]">Porficient in:</p>
//                 </div>    
//             </div>
//         </div>
//         <div className="w-10/12 mt-10">
//               {proficient.map((items, index) => (
//                 <span
//                   className="border-1 mr-2 mb-2 border-black px-3 py-1 rounded-full font-bold text-[11px] inline-block uppercase"
//                   key={index}
//                 >
//                   {items}
//                 </span>
//               ))}
//             </div>
//             <div className="mt-5">
//               {socialmedia.map((items, index) => (
//                 <a
//                   href={link}
//                   className="inline-block text-2xl text-slate-950 mr-5 hover:scale-75 transition-transform duration-200"
//                   key={index}
//                 >
//                   {items}
//                 </a>
//               ))}
//             </div> */}


import EmployeCard from "./EmployeCard";

const AboutExpCard = ({
  id,
  ProfilePic,
  Name,
  title,
  exp,
  profession,
  about1,
  about2,
  proficient,
  socialmedia,
}) => {
  return (
    <>
    <div className="aboutExpCardContainer w-full text-gray-600">
        <div className="flex flex-col md:flex-row justify-between items-start w-full">
            <div className="w-full md:w-5/12 border-3">
              <img className="w-full h-full" src={ProfilePic} alt="" />
            </div>
            <div className="w-full md:w-7/12">
              <div className="pl-0 md:pl-10 flex items-center justify-end">
                <p className="text-3xl md:text-5xl font-semibold text-slate-800 mr-2">
                  {exp}+
                      </p>
                      <p className="w-20 text-sm font-medium text-gray-600">
                  years of experience in {profession}
                      </p>
              </div>
              <div className="pl-0 md:pl-10">
                  <h1 className="text-3xl font-semibold ">{Name}</h1>
                  <h2 className="text-[18px] font-semibold ">{title}</h2>
                  <p className="font-medium text-[15px] w-full  pt-2">
                    {about1}
                  </p>
                  <p className="font-medium text-[15px] w-full ">{about2}</p>
                  <p className="font-medium text-[15px]">Porficient in:</p>
                </div>
            </div>
        </div> 
        <div className="w-full md:w-10/12 mt-5">
              {proficient.map((items, index) => (
                <span
                  className="text-gray-600 border-1 mr-2 mb-2 border-gray-400 px-3 py-1 rounded-full font-bold text-[11px] inline-block uppercase"
                  key={index}
                >
                  {items}
                </span>
              ))}
        </div>
        <div className="mt-4">
              {socialmedia.map((items, index) => (
                <a
                  href={items.link}
                  className="inline-block text-2xl text-slate-700 mr-5 hover:scale-75 transition-transform duration-200"
                  key={index}
                >
                  {items.icon}
                </a>
              ))}
            </div>
        </div>
 
    </>
  );
};
export default AboutExpCard;




{/* <div className="md:flex items-start ">
            <div className="border-3 w-full h-full">
                <img src={ProfilePic} className="w-full h-full" alt="" />
            </div>
            <div>
                <div className="flex pl-40">
                    <p className="text-3xl md:text-5xl font-semibold text-slate-950 mr-2">
                {exp}+
                    </p>
                    <p className="w-20 text-sm font-medium">
                years of experience in {profession}
                    </p>
                    <img src={icon} className="w-20 h-16 inline" alt="" />
                </div>
                <div className="pl-10">
                  <h1 className="text-3xl font-semibold ">{Name}</h1>
                  <h2 className="text-[18px] font-semibold ">{title}</h2>
                  <p className="font-medium text-[15px] w-full  pt-2">
                    {about1}
                  </p>
                  <p className="font-medium text-[15px] w-full ">{about2}</p>
                  <p className="font-medium text-[15px]">Porficient in:</p>
                </div>    
            </div>
        </div>
        <div className="w-10/12 mt-10">
              {proficient.map((items, index) => (
                <span
                  className="border-1 mr-2 mb-2 border-black px-3 py-1 rounded-full font-bold text-[11px] inline-block uppercase"
                  key={index}
                >
                  {items}
                </span>
              ))}
            </div>
            <div className="mt-5">
              {socialmedia.map((items, index) => (
                <a
                  href={link}
                  className="inline-block text-2xl text-slate-950 mr-5 hover:scale-75 transition-transform duration-200"
                  key={index}
                >
                  {items}
                </a>
              ))}
            </div> */}