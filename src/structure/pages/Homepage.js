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
      </main>
    </>
  );
}

export default Homepage;
