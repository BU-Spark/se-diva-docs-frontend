import React from "react";
import Select, {
  SelectOption,
} from "../../components/MembershipApp/Select/Select";
import TextBox from "../../components/MembershipApp/TextBox/TextBox";
import AreasOfExpertise from "../../data/MembershipApp/AreasOfExpertise";
import MedicalSchools from "../../data/MembershipApp/MedicalSchools";
import regions from "../../data/MembershipApp/regions";
import Specialties from "../../data/MembershipApp/Specialties";
import remove from "../../utils/remove";
import FormWrapper from "./FormWrapper";

type MembershipTypeData = {
  academicAffiliation: string;
  hospitalOrcompany: string;
  position: string;
  specialty: string;
  expertise: string[];
  region: SelectOption;
};

type MembershipTypeProps = MembershipTypeData & {
  updateFields: (fields: Partial<MembershipTypeData>) => void;
};

const acadmicTypes = MedicalSchools;
const specialtyTypes = Specialties;
const regionTypes = regions;
const expertiseTypes = AreasOfExpertise;

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
        <TextBox
          title={"Current Academic Affiliation"}
          placeholder={"N/A if Not Applicable"}
          value={academicAffiliation}
          onChange={(academicAffiliation) =>
            updateFields({ academicAffiliation })
          }
          required={false}
        ></TextBox>

        <TextBox
          title={"Current Hospital / Company"}
          placeholder={"N/A if Not Applicable"}
          value={hospitalOrcompany}
          onChange={(hospitalOrcompany) => updateFields({ hospitalOrcompany })}
          required={false}
        ></TextBox>

        <TextBox
          title={"Current Position"}
          placeholder={"N/A if Not Applicable"}
          value={position}
          onChange={(position) => updateFields({ position })}
          required={false}
        ></TextBox>

        <TextBox
          title={"Speciality"}
          placeholder={"N/A if Not Applicable"}
          value={specialty}
          onChange={(specialty) => updateFields({ specialty })}
          required={false}
        ></TextBox>

        <span>Areas of Expertise</span>
        {expertiseTypes.map((expertiseType) => (
          <label>
            <input
              type="checkbox"
              id={expertiseType}
              name="expertise-type"
              checked={expertise.includes(expertiseType)}
              onChange={(e) => {
                if (e.target.checked && !expertise.includes(expertiseType)) {
                  expertise.push(expertiseType);
                }
                if (!e.target.checked && expertise.includes(expertiseType)) {
                  remove(expertise, expertiseType);
                }
                updateFields({ expertise });
              }}
            />
            {expertiseType}
          </label>
        ))}

        <Select
          options={regionTypes}
          title={"Geographic Region"}
          value={region}
          onChange={(e) => updateFields({ region: e })}
        ></Select>
      </FormWrapper>
    </div>
  );
};

export default MembershipType;
