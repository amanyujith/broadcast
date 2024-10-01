import { useAuth } from '@/containers/auth/authClient';
import settingsIcon from '../../assets/icons/settingsIcon.svg'
// import notficationIcon from '../../assets/icons/notificationIcon.svg'
import ProfileButton from './profileButton'
import Logo from './logo'
import Topbar from './topbar'
// import { useNavigate } from 'react-router-dom';
// import { clearDB } from '@/services/keycloackconfig.util';

const Navbar = () => {
  // const auth = useAuth()
  // const navigate = useNavigate();
  // const handleLogout= () => {
  //   auth.signOut(() => {
  //   })
  //   clearDB()}
  
  return (
    <div className="navbar fixed  right-0 w-full px-[24px] py-[12px] h-[80px] bg-white flex z-50">
      <div className="w-[50%] h-full flex  items-center  ">
        <Logo/>
        <Topbar/>
      </div>
      <div className="w-[50%] h-full flex gap-[10.5px] items-center justify-end " >
        {/* <img src={notficationIcon} className='cursor-pointer'/> */}
        {/* <span className="font-semibold font-sans text-white cursor-pointer" onClick={()=>navigate('/settings')}>Settings</span>
        <img onClick={()=>handleLogout()} src={settingsIcon} className='cursor-pointer -mr-3'/> */}
        <ProfileButton />
      </div>
    </div>
  )
}

export default Navbar
