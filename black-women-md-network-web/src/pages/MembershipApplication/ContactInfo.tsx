import React, { Dispatch, SetStateAction, useState } from "react";
import Select, { SelectOption } from "./Components/Select/Select";
import PhysicianMember from "./FieldsInformation/ContactInfo/PhysicianMember";
import FormWrapper from "./FormWrapper";
import styles from "./contactinfo.module.css";
import RaceAndEthnicity from "./FieldsInformation/ContactInfo/Race";

type ContactInfoData = {
  physMember: SelectOption;
  firstName: string;
  lastName: string;
  age: string;
};

type ContactInfoProps = ContactInfoData & {
  updateFields: (fields: Partial<ContactInfoData>) => void;
};

const raceAndEthnicity = RaceAndEthnicity;
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
      <span>Name*</span>
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

      <br />
      <span>Email Address (Preferred)*</span>
      <br />
      <input required placeholder="Emal Address (Preferred)" />
      <br />
      <span>Email Address (Secondary)</span>
      <br />
      <input placeholder="Emal Address (Secondary)" />

      <br />
      <span>Phone Number (Mobile)*</span>
      <br />
      <input placeholder="Phone Number (Mobile)" />

      <br />
      <span>Mailing Address*</span>
      <br />
      <input placeholder="Street" />
      <input placeholder="City" />
      <input placeholder="State" />
      <input placeholder="Zip Code" />
      <input placeholder="Country" />
      <br />
      <span>Is this your work or home address?</span>
      <br />
      <input placeholder="2 buttons that say work and home.  Chose one." />

      <br />
      <span>Race and Ethnicity</span>
      <br />
      {raceAndEthnicity.map((race) => (
        <label>
          <input type="checkbox" />
          {race}
        </label>
      ))}

      <br />
      <span>Gender Identity</span>
      <br />
      <input placeholder=" Buttons" />
      <input placeholder="self descibe as has text input and button" />

      <br />
      <span>What are your pronouns?</span>
      <br />
      <input />
    </FormWrapper>
  );
};

export default ContactInfo;
