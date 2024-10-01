import NCSlogo from '../../assets/images/ncs.png'
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className='flex gap-[6px] ' >
         <Link to="/">
            <img src={NCSlogo} className="size-6" alt="NCS Logo" />
        </Link>
      <span className="font-mono font-semibold text-lg text-orange-700">SCORES</span>
    </div>
  )
}

export default Logo
