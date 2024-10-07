import NCSlogo from '../../assets/images/ncs.png'
import { useNavigate } from 'react-router-dom';
const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className='flex gap-[6px] ' >
            <img src={NCSlogo} className="size-6 cursor-pointer" alt="NCS Logo" onClick={()=>navigate('/')}/>
      <span className="font-mono font-semibold text-lg text-orange-700 cursor-pointer" onClick={()=>navigate('/')}>SCORES</span>
      
    </div>
  )
}

export default Logo
