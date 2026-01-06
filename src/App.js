import Nav from './structure/Nav.js';
import Main from './structure/Main.js';
import Footer from './structure/Footer.js';
import ScrollToTopBtn from './components/ScrollToTopBtn.js';

import ConfirmModal from './components/ConfirmModal.js';
import { useNavGuard } from './NavGuardContext';

function App() {
  const { open, proceed, cancel } = useNavGuard();
  return (
    <>
      <Nav/>
      <Main/>
      <Footer/>
      <ScrollToTopBtn/>

      <ConfirmModal
        open={open}
        onConfirm={proceed}
        onCancel={cancel}
      />
    </>
  );
}

export default App;
