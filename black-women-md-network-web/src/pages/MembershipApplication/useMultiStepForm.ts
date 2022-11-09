import { ReactElement, useState } from "react";

export const useMultiStepForm = (steps: ReactElement[]) => {
  const [stepIndex, setStepIndex] = useState(0);

  // Proceed to next step
  const next = () => {
    // Go to next step if there is more steps
    setStepIndex((index) => {
      if (index >= steps.length - 1) {
        return index;
      }
      return index + 1;
    });
  };

  // Go to previous step
  const back = () => {
    // Go to last step if there is a previous step
    setStepIndex((index) => {
      if (index <= 0) {
        return index;
      }
      return index - 1;
    });
  };

  const goTo = (index: number) => {
    setStepIndex(index);
  };

  return {
    stepIndex,
    step: steps[stepIndex],
    goTo,
    next,
    back,
    steps,
    isFirstStep: stepIndex === 0,
    isLastStep: stepIndex === steps.length - 1,
  };
};
