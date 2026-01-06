import CallToAction from '../homepage sections/CallToAction.js';
import Specials from '../homepage sections/Specials.js';
import CustomersSay from '../homepage sections/CustomersSay.js';
import Chicago from '../homepage sections/Chicago.js';
import useHashScroll from '../../useHashScroll.js';

function Homepage() {
  useHashScroll();
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
