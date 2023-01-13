import React, { FormEvent, useState } from "react";
import ContactInfo from "./ContactInfo";
import FinalQuestions from "./FinalQuestions";
import MembershipType from "./MembershipType";
import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import "./Join.css";
import { FormData } from "../../data/MembershipApp/FormData";
import DEFAULT_DATA from "../../data/MembershipApp/DefaultData";
import { Button } from "react-bootstrap";
import Success from "./Success";

const userData: FormData = DEFAULT_DATA;

const Join = () => {
  const [data, setData] = useState(userData);
  console.log(data);

  // Create a function that updates the data fields
  // Using partial so can use only some of the fields
  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };
  const {
    steps,
    stepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
  } = useMultiStepForm([
    <ContactInfo {...data} updateFields={updateFields}></ContactInfo>,
    <MembershipType {...data} updateFields={updateFields}></MembershipType>,
    <FinalQuestions {...data} updateFields={updateFields}></FinalQuestions>,
  ]);

  // Submits data before moving to next step!
  const onSubmit = (e: FormEvent) => {
    // Prevent page from refreshing
    e.preventDefault();
    if (!isLastStep) return next();

    // Fetch request to post to API would go here!
    alert("Form is submitted!");
  };

  return (
    <div className="container">
      <h1 className="title">Membership Application</h1>
      <p className="text">
        Welcome to the Black Women M.D.Network! Please fill out this form to
        complete a membership profile!
      </p>
      <progress
        className="progress-bar"
        max="1"
        value={stepIndex + 1 / steps.length}
      ></progress>

      <div className="content">
        <form onSubmit={onSubmit}>
          {step}
          <div>
            {!isFirstStep && (
              <button className="button" type="button" onClick={back}>
                Back
              </button>
            )}
            <button className="button" type="submit">
              {isLastStep ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Join;
