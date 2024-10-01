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

function Profile() {
  const teamMember = {
    name: 'Robert Schneider',
    title: 'Programmer',
    bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    image: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png', // Replace with actual image URL
    clientRate: '4/5',
    experience: '8 years',
  };

  return (
    <div className="app flex flex-col lg:flex-row relative bg-[#fff] font-sans min-h-screen overflow-hidden z-[1]">
      <div className="left-section relative w-full lg:w-[47%] z-[2] flex justify-center lg:justify-start">
        <img
          className="profile-img w-[200px] lg:w-[300px] object-cover absolute z-[100] left-[80%]  lg:left-[80px] top-[100px] lg:top-[100px] transform -translate-x-1/2 lg:translate-x-0 border-[5px] border-solid border-white"
          src={teamMember.image}
          alt={`${teamMember.name} profile`}
        />
        <div className="purple-background z-[3]">
          <h1 className="text-white text-center lg:text-left relative left-0 lg:left-[300px] top-[-50px] text-2xl lg:text-[3.2rem] mb-[50px] leading-[65px]   ml-[100px] lg:font-semibold">Meet <br /> Our Team</h1>
        </div>
      </div>
      <div className="right-section bg-[#E85C0D] lg:bg-white grid justify-center items-center p-[20px] lg:p-[50px] w-full lg:w-[53%]">
        <TeamMemberCard {...teamMember} />
      </div>
      <div className="top-right-extension">
        <div className='w-full h-full bg-white'></div>
      </div>
    </div>
  );
}

export default Profile;
