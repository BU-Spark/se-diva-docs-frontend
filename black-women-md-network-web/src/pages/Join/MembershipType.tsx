import React from "react";
import FormWrapper from "./FormWrapper";

type MembershipTypeData = {
  academicAffiliation: string;
  hospitalOrcompany: string;
  position: string;
  specialty: string;
  expertise: string;
  region: string;
};

type MembershipTypeProps = MembershipTypeData & {
  updateFields: (fields: Partial<MembershipTypeData>) => void;
};

const MembershipType = ({
  academicAffiliation,
  hospitalOrcompany,
  position,
  specialty,
  expertise,
  region,
  updateFields,
}: MembershipTypeProps) => {
  return (
    <div>
      <FormWrapper title={"Credential Information"}>
        <div></div>
      </FormWrapper>
    </div>
  );
};

export default MembershipType;
