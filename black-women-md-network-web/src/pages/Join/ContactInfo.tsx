import React, { useRef, useState } from "react";
import Select, {
  SelectOption,
} from "../../components/MembershipApp/Select/Select";
import PhysicianMember from "../../data/MembershipApp/PhysicianMember";
import FormWrapper from "./FormWrapper";
import "./ContactInfo.css";
import GenderIdentity from "../../data/MembershipApp/GenderIdentity";
import ContactInfoData from "../../types/ContactInfoData";
import Ethnicity from "../../data/MembershipApp/Ethnicity";
import Race from "../../data/MembershipApp/Race";
import remove from "../../utils/remove";

type ContactInfoProps = ContactInfoData & {
  updateFields: (fields: Partial<ContactInfoData>) => void;
};

const racetypes = Race;
const ethnicityTypes = Ethnicity;
const physicianMember = PhysicianMember;
const gendertypes = GenderIdentity;
const addresstypes = ["Work", "Home"];
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
  address,
  race,
  ethnicity,
  gender,
  pronouns,
  updateFields,
}: ContactInfoProps) => {
  const [selfDescribe, setSelfDescribe] = useState(false);
  return (
    <FormWrapper title="Contact / General Information">
      <Select
        options={physicianMember}
        title="Current Role*"
        value={currentRole}
        onChange={(e) => updateFields({ currentRole: e })}
      ></Select>

      <label>Name*</label>
      <input
        autoFocus
        // required
        type="text"
        value={firstName}
        placeholder="First Name"
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <input
        // required
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
        // required
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
        // required
        placeholder="Phone Number (Mobile)"
        onChange={(e) => updateFields({ phone: e.target.value })}
      />

      <span>Mailing Address*</span>
      <input
        // required
        placeholder="Street"
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <input
        // required
        placeholder="City"
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <input
        // required
        placeholder="State"
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <input
        // required
        placeholder="Zip Code"
        onChange={(e) => updateFields({ zipcode: e.target.value })}
      />
      <input
        // required
        placeholder="Country"
        onChange={(e) => updateFields({ country: e.target.value })}
      />

      <span>Is this your work or home address?</span>
      {addresstypes.map((adresstype) => (
        <label htmlFor={adresstype}>
          <input
            type="radio"
            id={adresstype}
            name="address-type"
            value={adresstype}
            checked={address === adresstype}
            onChange={(e) => updateFields({ address: e.target.value })}
          />
          {adresstype}
        </label>
      ))}

      <span>Race</span>
      {racetypes.map((racetype) => (
        <label>
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked && !race.includes(racetype)) {
                race.push(racetype);
              }
              if (!e.target.checked && race.includes(racetype)) {
                remove(race, racetype);
              }
              updateFields({ race });
            }}
          />
          {racetype}
        </label>
      ))}

      <span>Ethnicity</span>
      {ethnicityTypes.map((ethnicitytype) => (
        <label>
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked && !ethnicity.includes(ethnicitytype)) {
                ethnicity.push(ethnicitytype);
              }
              if (!e.target.checked && ethnicity.includes(ethnicitytype)) {
                remove(ethnicity, ethnicitytype);
              }
              updateFields({ ethnicity });
            }}
          />
          {ethnicitytype}
        </label>
      ))}

      <span>Gender Identity</span>

      {gendertypes.map((gendertype) => (
        <label>
          <input
            type="radio"
            id={gendertype}
            name="gender-type"
            value={gendertype}
            checked={gender === gendertype}
            onChange={(e) => {
              if (e.target.value == "Self-describe as:") {
                setSelfDescribe(true);
              }
              updateFields({ gender: e.target.value });
            }}
          />
          {gendertype}
        </label>
      ))}
      {selfDescribe && (
        <input
          type="text"
          placeholder="Self-descibe as..."
          onChange={(e) => updateFields({ gender: e.target.value })}
        />
      )}

      <label>What are your pronouns?</label>
      <input
        // required
        type="text"
        onChange={(e) => updateFields({ pronouns: e.target.value })}
      />
    </FormWrapper>
  );
};

export default ContactInfo;
