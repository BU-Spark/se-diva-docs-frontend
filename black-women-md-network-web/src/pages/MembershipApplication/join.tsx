import React, { FormEvent, useState } from "react";
import { Button } from "react-bootstrap";
import ContactInfo from "./ContactInfo";
import FinalQuestions from "./FinalQuestions";
import MembershipType from "./MembershipType";
import Success from "./Success";
import { useMultiStepForm } from "./useMultiStepForm";
import "./Join.css";
import { FormData } from "./Data/FormData";
import INITIAL_DATA from "./Data/InitialData";

const userData: FormData = INITIAL_DATA;

const Join = () => {
  const [data, setData] = useState(userData);

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
    <div>
      <h1>Membership Application</h1>
      <p>
        Welcome to the Black Women M.D.Network! Please fill out this form to
        complete a membership profile!
      </p>
      <div
        style={{
          position: "relative",
          background: "white",
          border: "1px solid black",
          padding: "2rem",
          margin: "1rem",
          borderRadius: ".5rem",
          fontFamily: "Arial",
          maxWidth: "max-content",
        }}
      >
        <div>
          <form onSubmit={onSubmit}>
            <div
              style={{
                position: "absolute",
                top: ".5rem",
                right: ".5rem",
              }}
            >
              {stepIndex + 1} / {steps.length}
            </div>

            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                gap: ".5rem",
                justifyContent: "flex-end",
              }}
            >
              {!isFirstStep && (
                <Button type="button" onClick={back}>
                  Back
                </Button>
              )}
              <Button type="submit">{isLastStep ? "Submit" : "Next"}</Button>
            </div>
            {step}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;
