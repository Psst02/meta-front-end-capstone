jest.mock("react-router-dom", () => ({
  Routes: ({ children }) => children,
  Route: () => null,
}));

import { fetchAPI } from '../api';
import { initializeTimes, updateTimes } from './Main';

test("initializeTimes returns the expected times", () => {
  const date = new Date();
  const result = initializeTimes(date);
  expect(result).toEqual(fetchAPI(date));
});

test("updateTimes returns the same value as its state", () => {
  const date = new Date('2026-01-01');
  const action = { type: "UPDATE", date: "2026-01-01" };
  const result = updateTimes([], action);
  expect(result).toEqual(fetchAPI(date));
});
