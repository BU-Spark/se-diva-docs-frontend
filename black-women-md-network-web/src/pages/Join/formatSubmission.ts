import { FormData } from "./FormData";

const formatSubmission = (data: FormData) => {
  const uuid: number = 1;
  const submision = {
    submission: {
      universal_applicant_id: uuid,
      first_name: data.firstName,
      middle_name: data.middleInitial,
      last_name: data.lastName,
      suffix: data.suffix,
      primary_email: data.email,
      secondary_email: data.emailSecondary,
      phone_number: data.phone,
      address: {
        street: data.street,
        apartment: "",
        city: data.city,
        state: data.state,
        zip_code: data.zipcode,
        country: data.country,
      },
      address_type: data.address,
      current_academic_affiliation: data.academicAffiliation,
      current_hospital_company: data.hospitalOrcompany,
      current_position: data.currentRole.value,
      specialty: data.specialty,
      areas_of_work: "EXPERTISE",
      geographic_region: data.region.value,
      bwmdn_chapter_question: data.startChapter,
      membership_directory_agreement: "No",
      resume_included_question: "No",
      divadocs_boston_member: {
        divadocs_boston_member_question: "No",
        years: "string",
      },
      race: ["Black"],
      ethnicity: ["American"],
      gender_identity: data.gender,
      pronouns: data.pronouns,
      will_sponsor_question: {
        sponsor_question_answer: data.wantToSponsor,
        activities_interested: ["TBD"],
      },
      applicant_status: {
        subscription_tier: "",
        approved: false,
        paid: false,
        payment_link: "",
        account_password: "",
      },
    },
  };

  return submision;
};

export default formatSubmission;
