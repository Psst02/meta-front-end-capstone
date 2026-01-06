import './Page.css';
import { useState, useEffect, useMemo } from 'react';

import BookingForm from '../forms/BookingForm.js';
import ContactForm from '../forms/ContactForm.js';
import StepIndicator from '../../components/StepIndicator.js';

import { useNavGuard } from '../../NavGuardContext.js';

const allSteps = [
  { id: "options", label: "Options" },
  { id: "contact", label: "Contact" }
];

const INITIAL_FORM = {
  date: "",
  time: "",
  guests: 1,
  occasion: ""
};

export default function BookingPage({ availableTimes, dispatch, submitForm }) {
  const { setIsDirty } = useNavGuard();
  const [step, setStep] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const [formData, setFormData] = useState(INITIAL_FORM);
  const isDirty = useMemo(() => {
    return JSON.stringify(formData) !== JSON.stringify(INITIAL_FORM);
  }, [formData]);

  useEffect(() => {
    setIsDirty(isDirty);
    return () => setIsDirty(false);
  }, [isDirty, setIsDirty]);

  const nextStep = () => {
    if (isValid) setStep(s => s + 1);
  };

  const updateData = (updates) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  return (
    <main className="green-bg">
      <h1>Reservation</h1>
      <StepIndicator steps={allSteps}
        currentStep={step}
        onStepChange={setStep}
        canProceed={isValid}
      />

      {step === 0 && (
        <BookingForm data={formData}
          availableTimes={availableTimes}
          dispatch={dispatch}
          onValidChange={setIsValid}
          updateData={updateData}
          onNext={nextStep}
        />
      )}

      {step === 1 && (
        <ContactForm data={formData}
          onValidChange={setIsValid}
          updateData={updateData}
          onSubmit={() => {
            submitForm(formData);
            setIsDirty(false);
          }}
        />
      )}
    </main>
  );
}
