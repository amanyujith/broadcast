import Card from "../atom/card/card";
import Sidebar from "./sidebar";
import SidebarItem from "./sidebarItem";

import { HomeIcon, SmsIcon, CampaignIcon, ContactsIcon, ReportsIcon, TemplatesIcon } from "../../assets/icons/sidebarIcons/sidebarIcons";


const SidebarComponent = () => {
  const menuItems = [
    { name: "Home", Icon: HomeIcon, link: "/" },
    { name: "Score", Icon: SmsIcon, link: "/score" },
    // { name: "Campaign", Icon: CampaignIcon, link: "/campaign" },
    // { name: "Contacts", Icon: ContactsIcon, link: "/contactlist" },
    // { name: "Templates", Icon: TemplatesIcon, link: "/templates" },
    // { name: "Reports", Icon: ReportsIcon, link: "/reports" },
  ];
  return (
    <div className="w-[114px] p-[12px] min-h-full">
      <Card className="w-full h-full  shadow-lg">
        <Sidebar >
          {menuItems.map((item, index) => (
            <SidebarItem
              key={index}
              name={item.name}
              Icon={item.Icon}
              link={item.link}
            />
          ))}
        </Sidebar>
      </Card>
    </div>
  );
};

export default SidebarComponent;