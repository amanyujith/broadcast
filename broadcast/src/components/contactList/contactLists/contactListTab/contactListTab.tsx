
import GroupIcon from '../../../../assets/icons/groupIcon.svg'
import ListIcon from '../../../../assets/icons/listIcon.svg'


interface Contact {
    id: number;
    name: string;
    contacts: number;
    date: string;
    time: string;
}
interface ContactProps {
    contact: Contact;
}
const ContactListTab = ({ contact }: ContactProps) => {
    return (
        <div className=' h-[60px] px-6 py-[10px] flex justify-between items-center rounded-lg bg-[#F2F4FB] hover:bg-red-50 cursor-pointer'>
            <div className=' flex gap-2'>
                <img src={ListIcon} alt="List Icon"  />
                <div>
                    <span className=' text-base font-semibold text-[#333333]'>{contact.name}</span>
                    <div className='flex gap-2 items-center '>
                        <img src={GroupIcon} alt="Group Icon" />
                        <span className=' text-sm font-normal text-[#898989]'>{contact.contacts}</span>
                    </div>
                </div>
            </div>
            <div className=' text-sm text-[#898989]'>
                <span>{contact.time},</span>
                <span>{contact.date}</span>
            </div>
        </div>
    );
};

export default ContactListTab;