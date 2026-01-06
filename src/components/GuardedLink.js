import { NavLink } from "react-router-dom";
import { useNavGuard } from "../NavGuardContext";

export default function GuardedLink({
  to,
  href,
  onClick,
  children,
  ...props
}) {
  const { requestNavigation } = useNavGuard();

  const handleClick = (e, target) => {
    // Only block on normal left-click
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }
    e.preventDefault();
    requestNavigation(target);
    onClick?.(e);  // Takes extra logic besides guarding
  };

  if (to) {
    return (
      <NavLink to={to}
        {...props}
        onClick={(e) => handleClick(e, to)}
      >
        {children}
      </NavLink>
    );
  }

  if (href) {
    return (
      <a href={href}
        {...props}
        onClick={(e) => handleClick(e, href)}
      >
        {children}
      </a>
    );
  }

  throw new Error("GuardedLink requires either `to` or `href`.");
}
