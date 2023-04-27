import { SelectOption } from "../../components/MembershipApp/Select/Select";

export type ApplicationData = {
  currentRole: SelectOption;
  firstName: string;
  lastName: string;
  middleInitial: string;
  suffix: string;
  email: string;
  emailSecondary: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
  address: string;
  race: string[];
  ethnicity: string[];
  gender: string;
  pronouns: string;
  academicAffiliation: SelectOption;
  hospitalOrcompany: string;
  position: string;
  specialty: SelectOption;
  expertise: string[];
  region: SelectOption;
  startChapter: string;
  includeInDirectory: string;
  includeInResumeBank: string;
  // Type for resume is FileList
  resume: any;
  identifyAsBlackWomenMD: string;
  wantToMentor: string;
  wantToSponsor: string;
  uuid: string;
};
