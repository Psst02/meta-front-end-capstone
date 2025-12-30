jest.mock("react-router-dom", () => ({
  Routes: ({ children }) => children,
  Route: () => null,
}));

import { initializeTimes, updateTimes } from './Main';

test("initializeTimes returns the expected times", () => {
  const expectedTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
  expect(initializeTimes()).toEqual(expectedTimes);
});

test("updateTimes returns the same value as its state", () => {
  const state = ["17:00", "18:00", "19:00"];
  const action = { type: "UPDATE", date: "2025-01-01" };
  const result = updateTimes(state, action);
  expect(result).toBe(state);
});
