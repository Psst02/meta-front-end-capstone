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
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`scroll-to-top ${showButton ? 'visible' : ''}`}
      aria-hidden={!showButton}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        tabIndex={showButton ? 0 : -1}
      >
        <FontAwesomeIcon icon={faArrowUp} size="lg" aria-hidden="true" />
      </button>
    </div>
  );
};
