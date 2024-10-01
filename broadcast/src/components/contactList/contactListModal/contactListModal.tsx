import FormBuilder from "@/components/atom/formBuilder/formBuilder";
import { actionProps, FormDataTypes } from "@/components/atom/formBuilder/formBuilder.types";
import { useState } from "react";

const ContactListModal = ({ formBuilderRef }: { formBuilderRef: any }) => {
  const formStructure: FormDataTypes[] = [{
    id: '1',
    formControl: "textbox",
    typeInput: 'text',
    fieldName: "contactlistname",
    label: "Contact List Name",
    value: "",
    placeholder: "Contact List Name",
    required: true,
    disabled: false,
    layout: {
      lg: "lg:w-full",
      md: "md:w-full",
      sm: "sm:w-full"
    },
    childClass: "" // @dev classes for styling the input field wrapper
  }, {
    id: '2',
    formControl: "textbox",
    typeInput: 'text',
    fieldName: "typelistfield",
    label: "Type List Field",
    value: "",
    placeholder: "Type List Field",
    required: true,
    disabled: false,
    layout: {
      lg: "lg:w-full",
      md: "md:w-full",
      sm: "sm:w-full"
    },
    childClass: "" // @dev classes for styling the input field wrapper
  },
    
  ];

  const [formData] = useState<FormDataTypes[]>(formStructure);

  const handleFormResult = (result: unknown) => {
    console.log(`Form Result: `, result);
  };

  const formActions: actionProps = (action: string, data: unknown): void => {
    console.log("formActions", action, data);
  };

  return (
    <div className="flex flex-col gap-[12px]">
      <div>
        <FormBuilder
          ref={formBuilderRef}
          formActions={formActions}
          options={{ type: 'default', size: "medium", controlParentAndChild: false }}
          handleFormResult={handleFormResult}
          formData={formData}
          parentClass='w-full h-full flex flex-wrap'
        />
      </div>
    </div>
  );
};

export default ContactListModal;
