import { useReducer } from 'react';
import { Routes, Route } from "react-router-dom";

import { fetchAPI } from "../api";
import Homepage from './pages/Homepage.js';
import BookingPage from './pages/BookingPage.js';

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

export const updateTimes = (state, action) => {
  if (action.type === "UPDATE") {
    return fetchAPI(new Date(action.date));
  }
  return state;
};

export default function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    return(
      <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking"
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