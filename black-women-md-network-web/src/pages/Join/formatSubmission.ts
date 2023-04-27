import { ApplicationData } from "./ApplicationData";

const formatSubmission = (data: ApplicationData) => {
  const submision = {
    submission: {
      id: data.uuid,
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
      current_academic_affiliation: data.academicAffiliation.value,
      current_hospital_company: data.hospitalOrcompany,
      current_position: data.currentRole.value,
      specialty: data.specialty.value,
      areas_of_work: data.expertise,
      geographic_region: data.region.value,
      bwmdn_chapter_question: data.startChapter,
      membership_directory_agreement: data.includeInDirectory,
      resume_included_question: data.includeInResumeBank,
      divadocs_boston_member: {
        divadocs_boston_member_question: "No",
        years: "string",
      },
      race: data.race,
      ethnicity: data.ethnicity,
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

// {
//   "id": "string",
//   "first_name": "string",
//   "middle_name": "string",
//   "last_name": "string",
//   "suffix": "string",
//   "primary_email": "string",
//   "secondary_email": "string",
//   "phone_number": "string",
//   "address": {
//     "street": "string",
//     "apartment": "string",
//     "city": "string",
//     "state": "string",
//     "zip_code": "string",
//     "country": "string"
//   },
//   "address_type": "Work",
//   "current_academic_affiliation": "string",
//   "current_hospital_company": "string",
//   "current_position": "string",
//   "specialty": "string",
//   "areas_of_work": "string",
//   "geographic_region": "string",
//   "bwmdn_chapter_question": "No",
//   "membership_directory_agreement": "No",
//   "resume_included_question": "No",
//   "divadocs_boston_member": {
//     "divadocs_boston_member_question": "No",
//     "years": "string"
//   },
//   "race": [
//     "string"
//   ],
//   "ethnicity": [
//     "string"
//   ],
//   "gender_identity": "string",
//   "pronouns": "string",
//   "will_sponsor_question": {
//     "sponsor_question_answer": "No",
//     "activities_interested": [
//       "string"
//     ]
//   },
//   "applicant_status": {
//     "subscription_tier": "string",
//     "approved": true,
//     "paid": true,
//     "stripe_customer_id": "string",
//     "account_password": "string"
//   }
// }
