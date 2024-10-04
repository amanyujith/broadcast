import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { CircleUserRound, LogOut, User } from "lucide-react";
import { useLogout } from "@/hooks/authHooks/useLogout";
import { useNavigate, useLocation } from 'react-router-dom';

const ProfileButton = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isProfilePage = location.pathname === "/";
    const handleLogOut = useLogout();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <CircleUserRound className={` ${isProfilePage ?'text-black': 'text-black'} cursor-pointer size-8`}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={()=>navigate('/')}>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ProfileButton;
