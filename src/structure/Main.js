import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage.js';
import BookingPage from './pages/BookingPage.js';

export default function Main() {

    return(
      <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </>
    );
}