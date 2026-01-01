import './StepIndicator.css';

export default function StepIndicator({
  steps,
  currentStep,
  onStepChange,
  canProceed
}) {
  return (
    <nav aria-label="Booking steps" className="step-indicator">
      <ol>
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <li key={step.id}>
              <button
                type="button"
                onClick={() => onStepChange(index)}
                disabled={index > currentStep && !canProceed}
                aria-current={isActive ? "step" : undefined}
              >
                <span className="step-index">{index + 1}</span>
                {step.label}
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
