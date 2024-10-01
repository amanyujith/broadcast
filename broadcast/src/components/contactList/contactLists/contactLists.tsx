import { useState } from "react";
import Card from "@/components/atom/card/card";
import ContactListTab from "./contactListTab/contactListTab";
import PaginationComponent from "@/components/atom/pageination/pageinationComponent";

const ContactLists = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const generateContacts = (count: number) => {
    const contacts = [];
    for (let i = 1; i <= count; i++) {
      contacts.push({
        id: i,
        name: `Contact List ${i}`,
        contacts: Math.floor(Math.random() * 500) + 1,
        date: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1)
          .toISOString()
          .split("T")[0],
        time: `${Math.floor(Math.random() * 24)
          .toString()
          .padStart(2, "0")}:${Math.floor(Math.random() * 60)
            .toString()
            .padStart(2, "0")}`,
      });
    }
    return contacts;
  };

  const contacts = generateContacts(28);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const paginatedContacts = contacts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Card className="bg-white flex flex-col h-[calc(100vh-182px)] p-[12px] gap-[24px]">
      {/* Contact list container with fixed height and scrollable content */}
      <div className="flex flex-col gap-[2px]  flex-1 overflow-y-auto h-0">
        {paginatedContacts.map((contact) => (
          <ContactListTab key={contact.id} contact={contact} />
        ))}
      </div>

      {/* Reusable Pagination Component */}
      <PaginationComponent
        currentPage={currentPage}
        totalItems={contacts.length}  // Total number of items
        onPageChange={handlePageChange}
        itemsPerPage={itemsPerPage}
      />
    </Card>
  );
};

export default ContactLists;
