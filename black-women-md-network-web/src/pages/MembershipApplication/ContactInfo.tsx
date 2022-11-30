import React, { Dispatch, SetStateAction, useState } from "react";
import Select, { SelectOption } from "./Components/Select/Select";
import PhysicianMember from "./FieldsInformation/PhysicianMember";
import FormWrapper from "./FormWrapper";

type ContactInfoData = {
  physMember: SelectOption;
  firstName: string;
  lastName: string;
  age: string;
};

type ContactInfoProps = ContactInfoData & {
  updateFields: (fields: Partial<ContactInfoData>) => void;
};

const physicianMember = PhysicianMember;
const ContactInfo = ({
  physMember,
  firstName,
  lastName,
  age,
  updateFields,
}: ContactInfoProps) => {
  // const [value, setValue] = useState<typeof physicianMember[0] | undefined>(
  //   physicianMember[0]
  // );
  return (
    <FormWrapper title="Contact / General Information">
      <Select
        options={physicianMember}
        value={physMember}
        onChange={(e) => updateFields({ physMember: e })}
      ></Select>
      <br />
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />

      <label>Last Name</label>
      <input
        autoFocus
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />

      <label>Age</label>
      <input
        required
        min={1}
        type="number"
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  );
};

export default ContactInfo;
