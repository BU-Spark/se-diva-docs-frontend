import React, { Dispatch, SetStateAction, useState } from "react";
import FormWrapper from "./FormWrapper";
import Dropdown from "react-bootstrap/Dropdown";

type ContactInfoData = {
  firstName: string;
  lastName: string;
  age: string;
};

type ContactInfoProps = ContactInfoData & {
  updateFields: (fields: Partial<ContactInfoData>) => void;
};

const physicianMember = ["Physician", "Fellow", "Resident"];
const ContactInfo = ({
  firstName,
  lastName,
  age,
  updateFields,
}: ContactInfoProps) => {
  return (
    <FormWrapper title="Contact / General Information">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Black Women Physician Member
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {/* {physicianMember.map(() => {
            let num = "#/action-1" + toString(index);
            return <Dropdown.Item href="#/action-1">member</Dropdown.Item>;
          })} */}
        </Dropdown.Menu>
      </Dropdown>

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
