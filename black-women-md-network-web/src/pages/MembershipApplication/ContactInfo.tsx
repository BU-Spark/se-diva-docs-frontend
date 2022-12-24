import React, { Dispatch, SetStateAction, useState } from "react";
import Select, { SelectOption } from "./Components/Select/Select";
import PhysicianMember from "./FieldsInformation/ContactInfo/PhysicianMember";
import FormWrapper from "./FormWrapper";
import styles from "./contactinfo.module.css";
import RaceAndEthnicity from "./FieldsInformation/ContactInfo/Race";
import GenderIdentity from "./FieldsInformation/ContactInfo/GenderIdentity";

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
const gender = GenderIdentity;
const ContactInfo = ({
  physMember,
  firstName,
  lastName,
  age,
  updateFields,
}: ContactInfoProps) => {
  return (
    <FormWrapper title="jkjkjk">
      <Select
        options={physicianMember}
        value={physMember}
        onChange={(e) => updateFields({ physMember: e })}
      ></Select>
      <br />
      <label htmlFor="name">Name*</label>
      <br />
      <input
        autoFocus
        required
        type="text"
        id="name"
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
      <label htmlFor="email-preferred">Email Address (Preferred)*</label>
      <br />
      <input
        type="email"
        id="email-preferred"
        required
        placeholder="Emal Address (Preferred)"
      />
      <br />
      <label htmlFor="email-secondary">Email Address (Secondary)</label>
      <br />
      <input
        type="email"
        id="email-secondary"
        placeholder="Emal Address (Secondary)"
      />
      <br />
      <span>Phone Number (Mobile)*</span>
      <br />
      <input type="tel" placeholder="Phone Number (Mobile)" />
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
      <label htmlFor="work">
        <input type="radio" id="work" name="address-type" value="Work" /> Work
      </label>
      <br />
      <label htmlFor="home">
        <input type="radio" id="home" name="address-type" value="Home" /> Home
      </label>

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
      <br />
      <span>Gender Identity</span>
      <br />
      {gender.map((gender) => (
        <label>
          <input type="radio" />
          {gender}
        </label>
      ))}

      <input type="text" placeholder="self descibe as..." />
      <br />
      <label>What are your pronouns?</label>
      <br />
      <input type="text" />
    </FormWrapper>
  );
};

export default ContactInfo;
