import { link } from "fs";
import TopbarItem from "./topbarItem";

const Topbar = ()=>{
    const topItems = [
        // {label:"Home" , link:"/"},
        {label:"Score" , link:"/score"},
        {label:"Steps" , link:"/steps"}
    ]
    return <div className="flex gap-5 justify-evenly ml-5">
       {topItems.map((item,index)=>(
        <TopbarItem
        key={index}
        label={item.label}
        link={item.link}
        />
       ))}
    </div>
}
export default Topbar;