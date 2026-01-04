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

          return (
            <li key={step.id} className="form-progress">
              <button id="progress-ui"
                type="button"
                onClick={() => onStepChange(index)}
                disabled={index > currentStep && !canProceed}
                aria-current={isActive ? "step" : undefined}
              >
                {index + 1}
              </button><br/>
              <label htmlFor="progress-ui">{step.label}</label>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
