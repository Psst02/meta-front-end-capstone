import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavGuardContext = createContext(null);

export function NavGuardProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [isDirty, setIsDirty] = useState(false);
  const [pendingNav, setPendingNav] = useState(null);
  const [open, setOpen] = useState(false);

  const requestNavigation = (path) => {
    const nextPath = typeof path === "string" ? path.split("#")[0] : path.pathname;

    // Allow hash navigation
    if (nextPath === location.pathname) {
      navigate(path);
      return;
    }

    // Show modal only if form is modified
    if (isDirty) {
      setPendingNav(path);
      setOpen(true);
    } else {
      navigate(path);
    }
  };

  const proceed = () => {
    setOpen(false);
    setIsDirty(false);
    if (pendingNav) navigate(pendingNav);
    setPendingNav(null);
  };

  const cancel = () => {
    setOpen(false);
    setPendingNav(null);
  };

  return (
    <NavGuardContext.Provider
      value={{
        isDirty,
        setIsDirty,
        requestNavigation,
        open,
        proceed,
        cancel,
      }}
    >
      {children}
    </NavGuardContext.Provider>
  );
}

export function useNavGuard() {
  return useContext(NavGuardContext);
}
