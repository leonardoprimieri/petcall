import { DefaultLayout } from "~/layouts/default-layout/default-layout";
import { useState } from "react";
import { FirstStep } from "./steps/first-step/first-step";
import { SecondStep } from "./steps/second-step/second-step";

export function OnboardingScreen() {
  const [step, setStep] = useState(1);

  const steps: Record<number, React.ReactNode> = {
    1: <FirstStep goToNextStep={() => setStep((old) => old + 1)} />,
    2: <SecondStep />,
  };

  return <DefaultLayout>{steps[step]}</DefaultLayout>;
}
