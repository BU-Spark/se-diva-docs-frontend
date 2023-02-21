import { SelectOption } from "../components/MembershipApp/Select/Select";

type ContactInfoData = {
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
};

export default ContactInfoData;
