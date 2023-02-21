import React, { FormEvent, useEffect, useState } from "react";
import ContactInfo from "./ContactInfo";
import FinalQuestions from "./FinalQuestions";
import MembershipType from "./MembershipType";
import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import "./Join.css";
import { FormData } from "./FormData";
import DEFAULT_DATA from "./DefaultData";
import { Button } from "react-bootstrap";
import Success from "./Success";
import formatSubmission from "./formatSubmission";

const userData: FormData = DEFAULT_DATA;

const Join = () => {
  const [data, setData] = useState(userData);
  const [formSubmitted, setFormSubmitted] = useState(false);
  console.log("DATA not JSON:");
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
    const applicantForm = formatSubmission(data);
    console.log(JSON.stringify(applicantForm.submission));

    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(applicantForm.submission),
    };

    fetch("https://se-diva-docs.herokuapp.com/applicants/add", requestOptions)
      .then((response) => {
        if (response.status == 200) {
          console.log("Success: " + response.status);
          // Move to Success page
          setFormSubmitted(true);
        } else {
          console.log("Error: " + response.status);
          alert("There was an error!  Please try again later.");
        }
      })
      .catch((error) => {
        console.log("Error: " + error.response.status);
        alert("There was an error!  Please try again later.");
      });
  };

  if (formSubmitted) {
    return (
      <div className="background">
        <div className="container">
          <h1 className="title">Membership Application</h1>

          <div className="content">
            <Success></Success>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="background">
        <div className="container">
          <h1 className="title">Membership Application</h1>
          <p className="text">
            Welcome to the Black Women M.D.Network! Please fill out this form to
            complete a membership profile!
          </p>
          <progress
            className="progress-bar"
            max="1"
            value={stepIndex / steps.length}
          ></progress>
          <div className="content">
            <form onSubmit={onSubmit}>
              {step}
              <div>
                {!isFirstStep && (
                  <button className="back-button" type="button" onClick={back}>
                    Back
                  </button>
                )}
                <button className="next-button" type="submit">
                  {isLastStep ? "Submit" : "Next"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Join;
