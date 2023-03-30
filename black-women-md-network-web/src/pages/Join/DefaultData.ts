import { FormData } from "./FormData";

const DefaultData: FormData = {
  currentRole: { label: "default", value: "Black Women Physician Member" },
  firstName: "",
  lastName: "",
  middleInitial: "",
  suffix: "",
  email: "",
  emailSecondary: "",
  phone: "",
  street: "",
  city: "",
  state: "",
  zipcode: "",
  country: "",
  address: "",
  race: [],
  ethnicity: [],
  gender: "",
  pronouns: "",
  academicAffiliation: "",
  hospitalOrcompany: "",
  position: "",
  specialty: "",
  expertise: [],
  region: { label: "default", value: "Region" },
  startChapter: "",
  includeInDirectory: "",
  // Type for resume is Filelist
  resume: undefined,
  includeInResumeBank: "",
  identifyAsBlackWomenMD: "",
  wantToMentor: "",
  wantToSponsor: "",
};

export default DefaultData;
