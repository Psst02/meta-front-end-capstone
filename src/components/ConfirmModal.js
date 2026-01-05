import { FocusTrap } from 'focus-trap-react';
import './ConfirmModal.css';

export default function ConfirmModal({
  open,
  title = 'LEAVE THIS PAGE?',
  message = "Your progress won't be saved.",
  normalBtnText = 'Stay',
  dangerBtnText = 'Leave',
  onConfirm,
  onCancel,
}) {
  if (!open) return null;

  return (
    <FocusTrap
      active={open}
      focusTrapOptions={{
        escapeDeactivates: true,
        returnFocusOnDeactivate: true,
        clickOutsideDeactivates: false,
      }}
    >
      <div role="dialog"
        className="confirm-modal"
        aria-modal="true"
        aria-labelledby="confirm-title"
        aria-describedby="confirm-message"
      >
        <h2 id="confirm-title"
          className="section-title"
        >
          {title}
        </h2>
        <p id="confirm-message">{message}</p>

        <div className="modal-actions">
          <button
            className="preset-btn small"
            onClick={onCancel}
          >
            {normalBtnText}
          </button>

          <button
            className="preset-btn small danger"
            onClick={onConfirm}
          >
            {dangerBtnText}
          </button>
        </div>
      </div>
    </FocusTrap>
  );
}
