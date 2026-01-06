import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function useHashScroll() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.slice(1);

    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (!el) return;

      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      el.focus?.({ preventScroll: true });

      setTimeout(() => {
        navigate(location.pathname, { replace: true });
      }, 500);
    });
  }, [location.pathname, location.hash, navigate]);
}
