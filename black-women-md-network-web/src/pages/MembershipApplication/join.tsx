import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ContactInfo from "./ContactInfo";
import FinalQuestions from "./FinalQuestions";
import MembershipType from "./MembershipType";
import Success from "./Success";
import { useMultiStepForm } from "./useMultiStepForm";

const Join = () => {
  const {
    steps,
    stepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
  } = useMultiStepForm([
    <ContactInfo></ContactInfo>,
    <MembershipType></MembershipType>,
    <FinalQuestions></FinalQuestions>,
    <Success></Success>,
  ]);
  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
      }}
    >
      <form>
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
          <Button type="button" onClick={next}>
            {isLastStep ? "Submit" : "Next"}
          </Button>
        </div>
        {step}
      </form>
    </div>
  );
};

export default Join;
