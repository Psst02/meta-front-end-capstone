import CallToAction from '../homepage sections/CallToAction.js';
import Specials from '../homepage sections/Specials.js';
import CustomersSay from '../homepage sections/CustomersSay.js';
import Chicago from '../homepage sections/Chicago.js';

import { useState } from 'react';
import ConfirmModal from '../../components/ConfirmModal.js';

function Homepage() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CallToAction/>
      <main>
        <Specials />
        <CustomersSay />
        <Chicago />
        <button onClick={() => setOpen(true)}>
          Open Confirm Modal
        </button>

        <ConfirmModal
          open={open}
          title="Leave this page?"
          message="Your progress will not be saved."
          onCancel={() => setOpen(false)}
          onConfirm={() => {
            alert('Confirmed!');
            setOpen(false);
          }}
        />
      </main>
    </>
  );
}

export default Homepage;
