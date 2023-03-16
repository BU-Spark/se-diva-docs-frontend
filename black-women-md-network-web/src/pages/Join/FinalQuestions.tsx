import React from "react";
import FormWrapper from "./FormWrapper";

type FinalQuestionsData = {
  startChapter: string;
  includeInDirectory: string;
  includeResume: string;
  includeInResumeBank: string;
  identifyAsBlackWomenMD: string;
  wantToMentor: string;
  wantToSponsor: string;
};

type FinalQuestionsProps = FinalQuestionsData & {
  updateFields: (fields: Partial<FinalQuestionsData>) => void;
};

const FinalQuestions = ({
  startChapter,
  includeInDirectory,
  includeResume,
  includeInResumeBank,
  identifyAsBlackWomenMD,
  wantToMentor,
  wantToSponsor,
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

      <span>Do you agree to be included in the Membership Directory?</span>
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
      {/* 
      <span>Please upload your resume,(not required to share)</span>
      <span> Put functionality here</span> */}

      {/* <span>Would you like your resume to be inlcuded in the resume bank?</span>
      {answerTypes.map((answerType) => (
        <label htmlFor={answerType}>
          <input
            type="radio"
            id="includeInResumeBank"
            name="includeInResumeBank"
            value={answerType}
            checked={includeInResumeBank === answerType}
            onChange={(e) =>
              updateFields({ includeInResumeBank: e.target.value })
            }
          />
          {answerType}
        </label>
      ))} */}

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
        Are you interested in providing mentorship to a Black woman physician or
        student / trainee?
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