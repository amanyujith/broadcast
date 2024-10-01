import { getEmployeeProfile } from "@/services/apiServices/apis/api"
import { useEffect } from "react"

function profile() {
  const EmployeeProfile = ()=>{
    // getEmployeeProfile('cobratate@gmail.com').then((result)=>{
    //   console.log("Result", result)
    // })
  }
  useEffect(()=>{
    EmployeeProfile()
  },[])
  return (
    <div>Home</div>
  )
}
export default profile