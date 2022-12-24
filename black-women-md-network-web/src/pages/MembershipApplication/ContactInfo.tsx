import React, { Dispatch, SetStateAction, useState } from "react";
import Select, { SelectOption } from "./Components/Select/Select";
import PhysicianMember from "./FieldsInformation/ContactInfo/PhysicianMember";
import FormWrapper from "./FormWrapper";
import "./ContactInfo.css";
import GenderIdentity from "./FieldsInformation/ContactInfo/GenderIdentity";
import ContactInfoData from "./types/ContactInfoData";
import Ethnicity from "./FieldsInformation/ContactInfo/Ethnicity";
import Race from "./FieldsInformation/ContactInfo/Race";

type ContactInfoProps = ContactInfoData & {
  updateFields: (fields: Partial<ContactInfoData>) => void;
};

const racetypes = Race;
const ethnicityTypes = Ethnicity;
const physicianMember = PhysicianMember;
const gendertypes = GenderIdentity;
const ContactInfo = ({
  currentRole,
  firstName,
  lastName,
  middleInitial,
  suffix,
  email,
  emailSecondary,
  phone,
  street,
  city,
  state,
  zipcode,
  country,
  race,
  ethnicity,
  gender,
  pronouns,
  updateFields,
}: ContactInfoProps) => {
  return (
    <FormWrapper title="Contact / General Information">
      <Select
        options={physicianMember}
        value={currentRole}
        onChange={(e) => updateFields({ currentRole: e })}
      ></Select>

      <label>Name*</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        placeholder="First Name"
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <input
        required
        type="text"
        value={lastName}
        placeholder="Last Name"
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <input
        type="text"
        value={middleInitial}
        placeholder="Middle Initial"
        onChange={(e) => updateFields({ middleInitial: e.target.value })}
      />
      <input
        type="text"
        value={suffix}
        placeholder="Suffix"
        onChange={(e) => updateFields({ suffix: e.target.value })}
      />

      <label htmlFor="email-preferred">Email Address (Preferred)*</label>
      <input
        type="email"
        id="email-preferred"
        required
        placeholder="Emal Address (Preferred)"
        onChange={(e) => updateFields({ email: e.target.value })}
      />

      <label htmlFor="email-secondary">Email Address (Secondary)</label>
      <input
        type="email"
        id="email-secondary"
        placeholder="Email Address (Secondary)"
        onChange={(e) => updateFields({ emailSecondary: e.target.value })}
      />

      <span>Phone Number (Mobile)*</span>
      <input
        type="tel"
        required
        placeholder="Phone Number (Mobile)"
        onChange={(e) => updateFields({ phone: e.target.value })}
      />

      <span>Mailing Address*</span>
      <input
        required
        placeholder="Street"
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <input
        required
        placeholder="City"
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <input
        required
        placeholder="State"
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <input
        required
        placeholder="Zip Code"
        onChange={(e) => updateFields({ zipcode: e.target.value })}
      />
      <input
        required
        placeholder="Country"
        onChange={(e) => updateFields({ country: e.target.value })}
      />

      <span>Is this your work or home address?</span>
      <label htmlFor="work">
        <input type="radio" id="work" name="address-type" value="Work" /> Work
      </label>

      <label htmlFor="home">
        <input type="radio" id="home" name="address-type" value="Home" /> Home
      </label>

      <span>Race</span>

      {racetypes.map((race) => (
        <label>
          <input type="checkbox" />
          {race}
        </label>
      ))}

      <span>Ethnicity</span>

      {ethnicityTypes.map((ethnicity) => (
        <label>
          <input type="checkbox" />
          {ethnicity}
        </label>
      ))}

      <span>Gender Identity</span>

      {gendertypes.map((gender) => (
        <label>
          <input type="radio" />
          {gender}
        </label>
      ))}

      <input type="text" placeholder="self descibe as..." />

      <label>What are your pronouns?</label>
      <input
        type="text"
        onChange={(e) => updateFields({ pronouns: e.target.value })}
      />
    </FormWrapper>
  );
};

export default ContactInfo;
