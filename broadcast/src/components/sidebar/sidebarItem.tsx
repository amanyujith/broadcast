import { NavLink } from "react-router-dom";

interface SidebarItemProps {
  name: string;
  Icon: React.FC<{ fill: string }>; 
  link: string;
}

const SidebarItem = ({ name, Icon, link }: SidebarItemProps) => {
  return (
    <li className="relative">
      <NavLink to={link}>
        {({ isActive }) => (
          <>
            <div
              className={`h-[90px] w-[90px] text-[#595959] px-[6px] py-[10px] flex flex-col gap-[2px] items-center p-2 transition-colors duration-200 ${
                isActive ? "text-[#AB5D0A] bg-orange-100" : "text-gray-600 hover:text-[#AB5D0A]"
              }`}
            >
              <Icon fill={isActive? '#AB5D0A' : '#595959' }/>
              <span className=" font-sans text-center text-sm">{name}</span>
            </div>
            {isActive && (
              <div className="h-[90px] w-1 bg-[#AB5D0A] absolute right-0 top-0"></div>
            )}
          </>
        )}
      </NavLink>
    </li>
  );
};

export default SidebarItem;
