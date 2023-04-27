import { ApplicationData } from "./ApplicationData";

const DefaultData: ApplicationData = {
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
  academicAffiliation: {
    label: "default",
    value: "Current Academic Affiliation",
  },
  hospitalOrcompany: "",
  position: "",
  specialty: { label: "default", value: "Specialty" },
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
  uuid: "",
};

export default DefaultData;
