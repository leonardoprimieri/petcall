import { useState } from "react";

import { ClinicForm } from "./components/clinic-form/clinic-form";
import { SelectClinicMapPosition } from "./components/select-clinic-map-position/select-clinic-map-position";

export const RegisterClinicScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBackStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const steps: Record<number, React.ReactNode> = {
    0: <SelectClinicMapPosition handleNextStep={handleNextStep} />,
    1: <ClinicForm handleBackStep={handleBackStep} />,
  };

  return <>{steps[currentStep]}</>;
};
