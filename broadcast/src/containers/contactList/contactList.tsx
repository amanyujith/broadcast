import ContactListHeader from "@/components/contactList/contacListHeader/contactListHeader"
import ContactLists from "@/components/contactList/contactLists/contactLists"
import Contacts from "@/components/contactList/contacts/contacts"


const ContactList = () => {


  return (
    <div className="grid grid-cols-[1fr_1fr] lg:grid-cols-[1.45fr_2fr] py-[12px] pr-[12px] min-h-full gap-[10px]  ">
      <div className="flex flex-col gap-[10px] ">
        <ContactListHeader/>
        <ContactLists/>
      </div>
      <Contacts/>
    </div>
  )
}

export default ContactList