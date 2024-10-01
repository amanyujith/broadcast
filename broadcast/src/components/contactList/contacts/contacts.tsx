import Card from "@/components/atom/card/card"
import ContactsHeader from "./contactsHeader/contactsHeader"
import ContactsTable from "./contactsTable/contactsTable"

const Contacts = () => {
  return (
    <Card className="bg-white h-full flex flex-col p-[24px] gap-[12px] self-strech">

      <ContactsHeader/>
      <ContactsTable/>
    
    </Card>
  )
  
}

export default Contacts
