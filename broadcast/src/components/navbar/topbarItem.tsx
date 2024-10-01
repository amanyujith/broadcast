import { useNavigate } from 'react-router-dom';
interface TopbarItemProps {
    label: string;
    link: string;
  }
const TopbarItem = ({label,link}:TopbarItemProps)=>{
    const navigate = useNavigate();
    return <div onClick={() => navigate(link)}>
        <h2 className='font-bold cursor-pointer'>{label}</h2>
    </div>
}
export default TopbarItem;