import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import FinalQuestions from "./FinalQuestions";
import MembershipType from "./MembershipType";
import Success from "./Success";

const Join = () => {
  const [step, setStep] = useState(1);
  // const [values, setValues] = useState({
  //   firstName: "",
  //   midName : "",
  //   lastName: ""
  // })
  const [name, setName] = useState("Paul");

  // Proceed to next step
  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  // Go to previous step
  const prevStep = () => {
    if (step > 1) {
      setStep(step + 1);
    }
  };

  // const handleChange = (event,) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setValues(values => ({...values, [name]: value}))
  // }

  switch (step) {
    case 1:
      return <ContactInfo name={name} setName={setName}></ContactInfo>;

    case 2:
      return <MembershipType></MembershipType>;

    case 3:
      return <FinalQuestions></FinalQuestions>;

    case 4:
      return <Success></Success>;
    default:
      return <ContactInfo></ContactInfo>;
  }
};

export default Join;
