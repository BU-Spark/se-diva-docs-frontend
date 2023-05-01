import React from "react";
import FormWrapper from "./FormWrapper";
import { v4 as uuidv4 } from "uuid";

type FinalQuestionsData = {
  startChapter: string;
  includeInDirectory: string;
  // Type is FileList | undefined but Visual Studio Code actng stupid
  resume: any;
  includeInResumeBank: string;
  identifyAsBlackWomenMD: string;
  wantToMentor: string;
  wantToSponsor: string;
  uuid: string;
};

type FinalQuestionsProps = FinalQuestionsData & {
  updateFields: (fields: Partial<FinalQuestionsData>) => void;
};

const FinalQuestions = ({
  startChapter,
  includeInDirectory,
  includeInResumeBank,
  resume,
  identifyAsBlackWomenMD,
  wantToMentor,
  wantToSponsor,
  uuid,
  updateFields,
}: FinalQuestionsProps) => {
  // generic answer types
  const answerTypes = ["Yes", "No", "Don't Know"];
  const answerTypes2 = [
    "Yes",
    "No",
    "No, but I would like more information about starting a branch in my region",
  ];
  const answerTypes3 = [
    "Yes",
    "No",
    "No, but I would consider it in the future.",
  ];

  const yesOrNo = ["Yes", "No"];
  return (
    <FormWrapper title={"Black Women M.D. Network Questions"}>
      <span>
        Would you be interested in starting a BWMDN Chapter in your region?
      </span>
      {answerTypes2.map((answerType, index) => (
        <label htmlFor={answerType}>
          <input
            // Needs to have id, name and value
            type="radio"
            id="startChapter"
            name="startChapter"
            required
            value={answerType}
            checked={startChapter === answerType}
            onChange={(e) => updateFields({ startChapter: e.target.value })}
          />
          {answerType}
        </label>
      ))}
      <span>Do you agree to be included in the Membership Directory?*</span>
      {yesOrNo.map((answerType) => (
        <label htmlFor={answerType}>
          <input
            type="radio"
            id="includeInDirectory"
            name="includeInDirectory"
            required
            value={answerType}
            checked={includeInDirectory === answerType}
            onChange={(e) =>
              updateFields({ includeInDirectory: e.target.value })
            }
          />
          {answerType}
        </label>
      ))}
      <span>
        Would you like your resume to be included in the resume bank?*
      </span>
      {yesOrNo.map((answerType) => (
        <label htmlFor={answerType}>
          <input
            type="radio"
            id="includeInResumeBank"
            name="includeInResumeBank"
            required
            value={answerType}
            checked={includeInResumeBank === answerType}
            onChange={(e) =>
              updateFields({ includeInResumeBank: e.target.value })
            }
          />
          {answerType}
        </label>
      ))}
      <label htmlFor="resume">
        Please upload your resume (PDFs only, not required to share in
        Directory)*
      </label>
      <input
        type="file"
        name="resume"
        accept=".pdf"
        required
        onChange={(e) =>
          updateFields({
            resume: e.target.files && e.target.files[0],
            uuid: uuidv4(),
          })
        }
      ></input>

      <span>Do you identify as a Black Women Physician?</span>
      {yesOrNo.map((answerType) => (
        <label htmlFor={answerType}>
          <input
            type="radio"
            id="identifyAsBlackWomenMD"
            name="identifyAsBlackWomenMD"
            required
            value={answerType}
            checked={identifyAsBlackWomenMD === answerType}
            onChange={(e) =>
              updateFields({ identifyAsBlackWomenMD: e.target.value })
            }
          />
          {answerType}
        </label>
      ))}
      <span>
        Are you currently available to mentor or sponsor a member of the Black
        Women M.D. Network?
      </span>
      {answerTypes3.map((answerType) => (
        <label htmlFor={answerType}>
          <input
            type="radio"
            id="wantToMentor"
            name="wantToMentor"
            required
            value={answerType}
            checked={wantToMentor === answerType}
            onChange={(e) => updateFields({ wantToMentor: e.target.value })}
          />
          {answerType}
        </label>
      ))}
      <span>
        Are you interested in sponsoring a black woman physician or student /
        trainee who has a defined, limited sponsorship request or question?
      </span>
      {answerTypes3.map((answerType) => (
        <label htmlFor={answerType}>
          <input
            type="radio"
            id="wantToSponsor"
            name="wantToSponsor"
            required
            value={answerType}
            checked={wantToSponsor === answerType}
            onChange={(e) => updateFields({ wantToSponsor: e.target.value })}
          />
          {answerType}
        </label>
      ))}
    </FormWrapper>
  );
};

export default FinalQuestions;
