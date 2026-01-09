import './ScrollToTopBtn.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function ScrollToTopBtn() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowButton(window.pageYOffset > 100);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <div
      className={`scroll-to-top ${showButton ? 'visible' : ''}`}
      inert={!showButton}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top on click"
        tabIndex={showButton ? 0 : -1}
      >
        <FontAwesomeIcon icon={faArrowUp} size="lg" aria-hidden="true" />
      </button>
    </div>
  );
};
