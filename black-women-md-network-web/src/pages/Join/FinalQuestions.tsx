import React from "react";
import FormWrapper from "./FormWrapper";

type FinalQuestionsData = {
  startChapter: string;
  includeInDirectory: string;
  includeResume: string;
  includeInResumeBank: string;
  memberOfDivaDocsBoston: string;
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
  memberOfDivaDocsBoston,
  wantToMentor,
  wantToSponsor,
  updateFields,
}: FinalQuestionsProps) => {
  const answerTypes = ["Yes", "No", "Don't Know"];
  return (
    <FormWrapper title={"Black Women M.D. Network Questions"}>
      <span>
        Would you be interested in starting a BWMDN Chapter in your region?
      </span>
      {answerTypes.map((answerType) => (
        <label htmlFor={answerType}>
          <input
            type="radio"
            checked={startChapter === answerType}
            onChange={(e) => updateFields({ startChapter: e.target.value })}
          />
          {answerType}
        </label>
      ))}

      <span>Do you agree to be inlcuded in the Membership Directory?</span>
      {answerTypes.map((answerType) => (
        <label htmlFor={answerType}>
          <input
            type="radio"
            checked={startChapter === answerType}
            onChange={(e) =>
              updateFields({ includeInDirectory: e.target.value })
            }
          />
          {answerType}
        </label>
      ))}

      <span>Please upload your resume,(not required to share)</span>

      <span>Would you like your resume to be inlcuded in the resume bank?</span>
      {answerTypes.map((answerType) => (
        <label htmlFor={answerType}>
          <input
            type="radio"
            checked={startChapter === answerType}
            onChange={(e) =>
              updateFields({ includeInResumeBank: e.target.value })
            }
          />
          {answerType}
        </label>
      ))}

      <span>Are you a past or current member of Diva Docs Boston?</span>
      {answerTypes.map((answerType) => (
        <label htmlFor={answerType}>
          <input
            type="radio"
            checked={startChapter === answerType}
            onChange={(e) =>
              updateFields({ memberOfDivaDocsBoston: e.target.value })
            }
          />
          {answerType}
        </label>
      ))}

      <span>
        Are you interested in providing mentorship to a Black woman physician or
        student / trainee?
      </span>
      {answerTypes.map((answerType) => (
        <label htmlFor={answerType}>
          <input
            type="radio"
            checked={startChapter === answerType}
            onChange={(e) => updateFields({ wantToMentor: e.target.value })}
          />
          {answerType}
        </label>
      ))}

      <span>
        Are you interested in sponsoring a black woman physician or student /
        trainee who has a defined, limited sponsorship request or question?
      </span>
      {answerTypes.map((answerType) => (
        <label htmlFor={answerType}>
          <input
            type="radio"
            checked={startChapter === answerType}
            onChange={(e) => updateFields({ startChapter: e.target.value })}
          />
          {answerType}
        </label>
      ))}
    </FormWrapper>
  );
};

export default FinalQuestions;
