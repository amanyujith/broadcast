import { useAuth } from '@/containers/auth/authClient';
import settingsIcon from '../../assets/icons/settingsIcon.svg'
// import notficationIcon from '../../assets/icons/notificationIcon.svg'
// import ProfileButton from './profileButton'
import Logo from './logo'
import Topbar from './topbar'
import { useNavigate } from 'react-router-dom';
import { clearDB } from '@/services/keycloackconfig.util';

const Navbar = () => {
  const auth = useAuth()
  const navigate = useNavigate();
  const handleLogout= () => {
    auth.signOut(() => {
    })
    clearDB()
  }
  return (
    <div className=" fixed top-0 left-0 w-full px-[24px] py-[12px] h-[80px] bg-white flex z-50">
      <div className="w-[50%] h-full flex  items-center  ">
        <Logo/>
        <Topbar/>
      </div>
      <div className="w-[50%] h-full flex gap-2 items-center justify-end " >
        {/* <img src={notficationIcon} className='cursor-pointer'/> */}
        <span className="font-bold cursor-pointer" onClick={()=>navigate('/settings')}>Settings</span>
        <img onClick={()=>handleLogout()} src={settingsIcon} className='cursor-pointer'/>
        {/* <ProfileButton/> */}
      </div>
    </div>
  )
}

export default Navbar
