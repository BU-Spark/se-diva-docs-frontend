import React from "react";
import FormWrapper from "./FormWrapper";

type MembershipTypeData = {
  memType: string;
  medSpecialty: string;
};

type MembershipTypeProps = MembershipTypeData & {
  updateFields: (fields: Partial<MembershipTypeData>) => void;
};

const MembershipType = ({
  memType,
  medSpecialty,
  updateFields,
}: MembershipTypeProps) => {
  return (
    <div>
      <FormWrapper title={"Please Select your Membership Type"}>
        <label>Membership Type</label>
        <input
          autoFocus
          required
          type="text"
          value={memType}
          onChange={(e) => updateFields({ memType: e.target.value })}
        />

        <label>Medical Speciality</label>
        <input
          autoFocus
          required
          type="text"
          value={medSpecialty}
          onChange={(e) => updateFields({ medSpecialty: e.target.value })}
        />
      </FormWrapper>
    </div>
  );
};

export default MembershipType;
