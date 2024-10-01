import Card from "@/components/atom/card/card"
import SearchBar from "@/components/atom/searchBar/searchBar"
import { Button } from "@/components/ui/button/button"
import GroupIcon from '../../../../assets/icons/groupIcon.svg'
import ButtonIcon from '../../../../assets/icons/buttonIcon.svg'


const ContactsHeader = () => {
    const name= "Contact List 1"
    const contacts = 1200
  return (
    <Card className="bg-white h-[68px] p-[12px] flex items-center ">
            <div className=' flex-1 gap-2 '>
                <div>
                    <span className=' text-base font-semibold text-[#333333]'>{name}</span>
                    <div className='flex gap-2 items-center '>
                        <img src={GroupIcon} alt="Group Icon" />
                        <span className=' text-sm font-normal text-[#898989]'>{contacts}</span>
                    </div>
                </div>
            </div>            
            <div className="flex justify-end gap-[12px] self-stretch items-center">
                <SearchBar/>
                <Button className="h-[44px] px-[16px] py-[12px] flex-shrink">Add new Contact</Button>
                <div className="flex justify-center items-center w-[32px] h-[32px] rounded-sm  border-[0.5px]">
                <img src={ButtonIcon}/>
                </div>
            </div>

                

        </Card>
  )
}

export default ContactsHeader
