// import { getEmployeeProfile } from "@/services/apiServices/apis/api"
// import { useEffect } from "react"

// function profile() {
//   const EmployeeProfile = ()=>{
//     // getEmployeeProfile('cobratate@gmail.com').then((result)=>{
//     //   console.log("Result", result)
//     // })
//   }
//   useEffect(()=>{
//     EmployeeProfile()
//   },[])
//   return (
//     <div>Home</div>
//   )
// }
// export default profile

import TeamMemberCard from "./TeamMemberCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
function Profile() {
  const score = useSelector((state: RootState) => state.score.value);
  const teamMember = {
    name: "Aswanth R",
    title: "Software Engineer",
    bio: "Junior Software Engineer at Netstratum in Kochi. An Indian national, holds a B.Tech in Computer Science and Engineering from A P J Abdul Kalam Technological University. Under the supervision of Mr. Vishnu T Asok.",
    image:
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
    Score: `${score.toFixed(2)}/1000`,
    experience: "8 years",
  };

  console.log("w:",window.innerWidth)
  console.log('h:', window.innerHeight)

  return (
    <div className="app flex flex-col lg:flex-row relative bg-[#fff] font-sans min-h-screen overflow-hidden z-[1]">
      <div className="left-section relative w-full lg:w-[47%] z-[2] flex justify-center lg:justify-start">
        <img
          className="profile-img w-[200px] lg:w-[300px] object-cover absolute z-[100] left-[80%]  lg:left-[80px] top-[100px] lg:top-[20%] transform -translate-x-1/2 lg:translate-x-0 border-[5px] border-solid border-white"
          src={teamMember.image}
          alt={`${teamMember.name} profile`}
        />
        <h1 className="text-white text-center lg:text-left absolute left-0 lg:left-[5%] top-[-50px] lg:top-[70%] text-2xl lg:text-[3.2rem] mb-[50px] leading-[65px]  ml-[100px] lg:font-semibold z-10">Meet <br /> Our Team</h1>
        <div className="purple-background z-[3]">
          {/* <h1 className="text-white text-center lg:text-left relative left-0 lg:left-[300px] top-[-50px] text-2xl lg:text-[3.2rem] mb-[50px] leading-[65px]   ml-[100px] lg:font-semibold">
            Meet <br /> Our Team
          </h1> */}
        </div>
      </div>
      <div className="right-section bg-[#E85C0D] lg:bg-white grid justify-center items-center p-[20px] lg:p-[50px] w-full lg:w-[53%] min-h-screen">
        <TeamMemberCard {...teamMember} />
      </div>
      <div className="top-right-extension">
        <div className="w-full h-full bg-white"></div>
      </div>
    </div>
  );
}

export default Profile;
