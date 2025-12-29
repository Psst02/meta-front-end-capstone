import './App.css';
import { BrowserRouter } from "react-router-dom";
import Nav from './structure/Nav.js';
import Main from './structure/Main.js'
import Footer from './structure/Footer.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Main/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
