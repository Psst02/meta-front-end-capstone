import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

const mockTimes = ["17:00", "18:00", "19:00"];

test("Renders the date label", () => {
  render(<BookingForm availableTimes={mockTimes} />);
  expect(screen.getByLabelText("Choose Date")).toBeInTheDocument();
});
