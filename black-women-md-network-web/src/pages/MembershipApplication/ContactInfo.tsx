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
  return (
    <FormWrapper title="Contact / General Information">
      <Select
        options={physicianMember}
        value={physMember}
        onChange={(e) => updateFields({ physMember: e })}
      ></Select>
      <br />
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        placeholder="First Name"
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />

      <input
        autoFocus
        required
        type="text"
        value={lastName}
        placeholder="Last Name"
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />

      <input
        required
        min={1}
        type="number"
        value={age}
        placeholder="Age"
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  );
};

export default ContactInfo;
