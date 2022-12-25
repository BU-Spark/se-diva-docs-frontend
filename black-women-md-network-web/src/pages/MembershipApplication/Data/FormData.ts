import { SelectOption } from "../Components/Select/Select";

export type FormData = {
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
  memType: string;
  medSpecialty: string;
  shareDataInDirectory: string;
};
