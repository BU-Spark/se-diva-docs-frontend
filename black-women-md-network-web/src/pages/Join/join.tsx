import React, { FormEvent, useState } from "react";
import ContactInfo from "./ContactInfo";
import FinalQuestions from "./FinalQuestions";
import MembershipType from "./MembershipType";
import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import "./Join.css";
import { ApplicationData } from "./ApplicationData";
import DEFAULT_DATA from "./DefaultData";
import Success from "./Success";
import formatSubmission from "./formatSubmission";
import NextButton from "../../components/NextButton/NextButton";
import BackButton from "../../components/BackButton/BackButton";

const userData: ApplicationData = DEFAULT_DATA;

const Join = () => {
  const [data, setData] = useState(userData);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Create a function that updates the data fields
  // Using partial so can use only some of the fields
  const updateFields = (fields: Partial<ApplicationData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };
  const { steps, stepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <ContactInfo {...data} updateFields={updateFields}></ContactInfo>,
      <MembershipType {...data} updateFields={updateFields}></MembershipType>,
      <FinalQuestions {...data} updateFields={updateFields}></FinalQuestions>,
    ]);

  console.log(stepIndex);

  // Submits data before moving to next step!
  const onSubmit = (e: FormEvent) => {
    // Prevent page from refreshing
    e.preventDefault();

    if (!isLastStep) {
      // Janky form validation for custom component
      if (data.currentRole.label == "default" && stepIndex == 0) {
        alert("Please complete the dropdown question!");
        return;
      }
      if (data.academicAffiliation.label == "default" && stepIndex == 1) {
        alert("Please complete all dropdown questions!");
        return;
      }
      if (data.specialty.label == "default" && stepIndex == 1) {
        alert("Please complete all dropdown questions!");
        return;
      }
      if (data.region.label == "default" && stepIndex == 1) {
        alert("Please complete all dropdown questions!");
        return;
      } else {
        return next();
      }
    }

    // Fetch request to post to API would go here!
    const applicantForm = formatSubmission(data);
    console.log(JSON.stringify(applicantForm.submission));

    // Create FormData to send the resume file
    const formData = new FormData();
    const resumeName = data.uuid + ".pdf";
    formData.append("upload_file", data.resume, resumeName);

    // for resume upload
    const requestOptionsForResume = {
      method: "POST",
      body: formData,
    };

    // for everything else, only do if resume uploads
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(applicantForm.submission),
    };

    fetch(
      "https://se-diva-docs.herokuapp.com/applicants/resume/upload",
      requestOptionsForResume
    )
      .then((response) => {
        if (response.status == 200) {
          console.log("Resume successflly submiited: " + response.status);

          fetch(
            "https://se-diva-docs.herokuapp.com/applicants/add",
            requestOptions
          )
            .then((response) => {
              if (response.status == 200) {
                console.log(
                  "Application Form Successfully Submitted: " + response.status
                );
                // Move to Success page
                setFormSubmitted(true);
              } else {
                console.log(
                  "Application Form Incurred An Error: " + response.status
                );
                alert("There was an error!  Please try again later.");
              }
            })
            .catch((error) => {
              console.log(
                "Application Form Incurred An Error: " + error.response.status
              );
              alert("There was an error!  Please try again later.");
            });
        } else {
          console.log("Resume Upload Incurred Error: " + response.status);
          alert("Resume could not upload!  Please try again later.");
        }
      })
      .catch((error) => {
        console.log("Resume Upload Incurred Error: " + error.response.status);
        alert("Resume could not upload!  Please try again later.");
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
          <progress max="1" value={stepIndex / steps.length}></progress>
          <div className="content">
            <form onSubmit={onSubmit}>
              {step}
              <div className="progression-buttons">
                {!isFirstStep && (
                  <BackButton
                    type="button"
                    text="Back"
                    onClick={back}
                  ></BackButton>
                )}
                <NextButton
                  type="submit"
                  text={isLastStep ? "Submit" : "Next"}
                ></NextButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Join;
