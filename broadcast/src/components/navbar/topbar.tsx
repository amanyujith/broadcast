import TopbarItem from "./topbarItem";

const Topbar = ()=>{
    const topItems = [
        {label:"Home" , link:"/"},
        {label:"Score" , link:"/score"}
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