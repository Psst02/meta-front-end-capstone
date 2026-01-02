import { useReducer } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";

import { fetchAPI, submitAPI } from "../api";
import Homepage from './pages/Homepage.js';
import BookingPage from './pages/BookingPage.js';
import ConfirmedBooking from './pages/ConfirmedBooking.js';

export const initializeTimes = (date=new Date()) => {
  return fetchAPI(date);
};

export const updateTimes = (state, action) => {
  if (action.type === "UPDATE") {
    return fetchAPI(new Date(action.date));
  }
  return state;
};

export default function Main() {
    const navigate = useNavigate();
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const submitForm = (formData) => {
      if (submitAPI(formData)) navigate('/booking-confirmed');
    }

    return(
      <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking"
            element=
              {<BookingPage
                submitForm={submitForm}
                availableTimes={availableTimes}
                dispatch={dispatch}
              />}
          />
          <Route path="/booking-confirmed"
            element=
              {<ConfirmedBooking/>}
          />
        </Routes>
      </>
    );
}