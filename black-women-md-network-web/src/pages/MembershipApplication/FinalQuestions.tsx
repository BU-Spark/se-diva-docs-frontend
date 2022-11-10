import React from "react";
import FormWrapper from "./FormWrapper";

type FinalQuestionsData = {
  shareDataInDirectory: string;
};

type FinalQuestionsProps = FinalQuestionsData & {
  updateFields: (fields: Partial<FinalQuestionsData>) => void;
};

const FinalQuestions = ({
  shareDataInDirectory,
  updateFields,
}: FinalQuestionsProps) => {
  return (
    <FormWrapper title={"Final Questions"}>
      <label>
        Can we share your name, degrees, current work institution affiliation
        with other membrs in a resource directory?
      </label>
      <input
        autoFocus
        required
        type="text"
        value={shareDataInDirectory}
        onChange={(e) => updateFields({ shareDataInDirectory: e.target.value })}
      />
    </FormWrapper>
  );
};

export default FinalQuestions;
