import { useState, useEffect } from "react";

export function useFormHelper(resetSignal) {
  const [interacted, setInteracted] = useState({});

  const markInteracted = (name) => {
    setInteracted((prev) =>
      prev[name] ? prev : { ...prev, [name]: true }
    );
  };

  const fieldClass = (name, errors) => {
    if (!interacted[name]) return "";
    return errors[name] ? "field-invalid" : "field-valid";
  };

  useEffect(() => {
    if (resetSignal > 0) {
      setInteracted({});
    }
  }, [resetSignal]);

  return { interacted, markInteracted, fieldClass };
}
