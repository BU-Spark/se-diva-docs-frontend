import React, { Dispatch, SetStateAction, useState } from "react";
import FormWrapper from "./FormWrapper";

type ContactInfoData = {
  firstName: string;
  lastName: string;
  age: string;
};

type ContactInfoProps = ContactInfoData & {
  updateFields: (fields: Partial<ContactInfoData>) => void;
};
const ContactInfo = ({
  firstName,
  lastName,
  age,
  updateFields,
}: ContactInfoProps) => {
  return (
    <FormWrapper title="Contact / General Information">
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
