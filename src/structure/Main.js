import { useReducer } from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage.js';
import BookingPage from './pages/BookingPage.js';

export default function Main() {
    const initializeTimes = () => {
      return [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
      ];
    }

    const updateTimes = (state, action) => {
      switch(action.type) {
        case "UPDATE":
          return state;
        default:
          return state;
      }
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return(
      <>
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/"
            element=
              {<BookingPage
                availableTimes={availableTimes}
                dispatch={dispatch}
              />}
          />
        </Routes>
      </>
    );
}