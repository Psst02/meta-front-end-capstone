import './Booking.css';
import { useState } from 'react';
import BookingForm from '../sections/BookingForm.js';
import ContactForm from '../sections/ContactForm.js';
import StepIndicator from '../../components/StepIndicator.js';

const allSteps = [
    { id: "options", label: "Options" },
    { id: "contact", label: "Contact" }
  ];

export default function BookingPage({ availableTimes, dispatch, submitForm }) {
  const [step, setStep] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
    firstName: "",
    lastName: "",
    phone: ""
  });

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
          onChange={updateData}
          onValidChange={setIsValid}
          onNext={nextStep}
        />
      )}

      {step === 1 && (
        <ContactForm data={formData}
          onChange={updateData}
          onValidChange={setIsValid}
          onSubmit={() => submitForm(formData)}
        />
      )}
    </main>
  );
}
