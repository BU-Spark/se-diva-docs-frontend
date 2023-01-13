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
  return (
    <FormWrapper title={"Black Women M.D. Network Questions"}>
      <div></div>
    </FormWrapper>
  );
};

export default FinalQuestions;
