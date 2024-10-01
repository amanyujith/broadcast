import Table from "@/components/atom/table/table"

// const tenantsTableTitles: TableTitles[] = [
const tenantsTableTitles = [
  {
    id: "name",
    key: "name",
    title: "Name",
    sort: {
      direction: "asc",
      active: true,
      action: {
        command: "sort",
        event: "click",
      },
    },
    bodyClass: "capitalize"
  },
  {
    id: "number",
    key: "number",
    title: "Phone Number",
    sort: {
      direction: "asc",
      active: true,
      action: {
        command: "sort",
        event: "click",
      },
    },
    bodyClass: "capitalize"
  },
  {
    id: "wireless",
    key: "wireless",
    title: "Wireless",
    sort: {
      direction: "asc",
      active: true,
      action: {
        command: "sort",
        event: "click",
      },
    },
    bodyClass: "capitalize"
  },
  {
    id: "addedDate",
    key: "addedDate",
    title: "Date Added",
    sort: {
      direction: "asc",
      active: true,
      action: {
        command: "sort",
        event: "click",
      },
    },
    bodyClass: "capitalize"
  },
  {
    id: "status",
    key: "status",
    title: "Status",
    sort: {
      direction: "asc",
      active: true,
      action: {
        command: "sort",
        event: "click",
      },
    },
    bodyClass: "capitalize"
  },

];

//-----------------------------------------------------------
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate(start: Date, end: Date): string {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toLocaleDateString("en-US");
}

function generateTableData(count: number) {
  const names = ["Netstratum", "Abc", "Xyz", "Pqr", "Def", "Ghi", "Jkl", "Mno"];
  const statuses = ["Subscribed", "Unsubscribed"];
  
  const tableData = [];

  for (let i = 0; i < count; i++) {
    const randomName = names[getRandomInt(0, names.length - 1)];
    const randomNumber = getRandomInt(1000, 2000).toString();
    const randomWireless = getRandomInt(0, 1) === 0 ? "yes" : "no";
    const randomDate = getRandomDate(new Date(2020, 0, 1), new Date());
    const randomStatus = statuses[getRandomInt(0, statuses.length - 1)];

    tableData.push({
      name: randomName,
      number: randomNumber,
      wireless: randomWireless,
      addedDate: randomDate,
      status: randomStatus,
    });
  }

  return tableData;
}

const tableData = generateTableData(20)
//--------------------------------------------------------------


const customOptions = {
  searchBar: {
    show: true,
    placeholder: "Search Tenant",
    alphabeticOnly: true
  },
  filterIcon: {
    show: false
  },
  pagination: {
    show: false,
    totalItems: 10,
    noOfPages: 1,
    upperLimit: 10,
    lowerLimit: 1,
    action: {
      command: 'onChange',
      event: 'change'
    }
  },
  recordsData: {
    dropDownData: {
      fieldName: "Records",
      displayName: "Show",
      type: 'dropdown',
      value: 25,
      required: false,
      disabled: false,
      childrens: [10, 25, 50, 100],
      error: false,
      width: 60
    },
    action: {
      command: 'records',
      event: 'change'
    }
  },

  height: "calc(98vh - 218px)",
}



const ContactsTable = () => {

  const handleDelete = () => {

  }

  const handleTableAction = (action: string, data: any): void => {
    const actionsMap: any = {
      delete: handleDelete,
      // edit: handleEdit,
      // copy: handleCopy,
      // editRealm: handleEditRealm,
      // onChange: handlePaginatonChanges,
      // search: handleSearch,
      // change:handleChange,
      // records:handleRecordsPerPage,
      // sort:onHandleSort
    };
    const actionHandler = actionsMap[action];
    if (actionHandler) {
      actionHandler(data);
    } else {
      console.error("handleTableAction", action, "is not defined in actionsMap")
    }
  };
  return (
    <div className=" h-[calc(100vh-232px)]">
      <Table
        tableTitles={tenantsTableTitles}
        tableData={tableData}
        handleTableAction={() => handleTableAction}
      // customOptions={customOptions}
      // dataExist={1}
      />
    </div>
  )
}

export default ContactsTable
