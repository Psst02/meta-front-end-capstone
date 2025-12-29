import CallToAction from '../sections/CallToAction.js';
import Specials from '../sections/Specials.js';
import CustomersSay from '../sections/CustomersSay.js';
import Chicago from '../sections/Chicago.js';

function Homepage() {
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
