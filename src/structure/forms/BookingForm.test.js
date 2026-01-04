import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "./BookingForm";

const mockTimes = ["17:00", "18:00", "19:00"];

const defaultData = {
  date: "",
  time: "",
  guests: 1,
  occasion: "",
};

const setUp = () => {
  const props = {
    availableTimes: mockTimes,
    dispatch: jest.fn(),
    data: defaultData,
    updateData: jest.fn(),
    onValidChange: jest.fn(),
    onNext: jest.fn(),
  };
  render(<BookingForm {...props} />);
  return props;
};

const getFormElements = () => ({
  dateInput: screen.getByLabelText("Date"),
  timeInput: screen.getByLabelText("Time"),
  guestsInput: screen.getByLabelText("Guests"),
  occasionSelect: screen.getByLabelText("Occasion"),
  nextBtn: screen.getByRole("button", { name: "Confirm Options" }),
});

test("Initial render shows all fields and submit is disabled", async () => {
  setUp();
  const { dateInput, timeInput, guestsInput, occasionSelect, nextBtn } = getFormElements();

  expect(dateInput).toBeInTheDocument();
  expect(timeInput).toBeInTheDocument();
  expect(guestsInput).toBeInTheDocument();
  expect(occasionSelect).toBeInTheDocument();

  await waitFor(() => (expect(nextBtn).toBeDisabled()));
});

test("Changing the date dispatches UPDATE action", async () => {
  const { dispatch } = setUp();
  const { dateInput } = getFormElements();

  fireEvent.change(dateInput, { target: { value: "2026-01-10" } });

  await waitFor(() =>
    expect(dispatch).toHaveBeenCalledWith({
      type: "UPDATE",
      date: "2026-01-10",
    })
  );
});

test("Shows required field errors when touched and empty", async () => {
  setUp();
  const { dateInput, timeInput, guestsInput } = getFormElements();

  fireEvent.blur(dateInput);
  fireEvent.blur(timeInput);

  expect(await screen.findByText("Choose a date")).toBeInTheDocument();
  expect(await screen.findByText("Choose a time slot")).toBeInTheDocument();

  fireEvent.change(guestsInput, { target: { value: "" } });
  fireEvent.blur(guestsInput);

  expect(await screen.findByText("Required field")).toBeInTheDocument();
});

test("Guest field shows range validation errors", async () => {
  setUp();
  const { guestsInput } = getFormElements();

  fireEvent.change(guestsInput, { target: { value: 0 } });
  fireEvent.blur(guestsInput);

  expect(await screen.findByText("At least 1 diner")).toBeInTheDocument();

  fireEvent.change(guestsInput, { target: { value: 11 } });
  fireEvent.blur(guestsInput);

  expect(await screen.findByText("Max capacity exceeded")).toBeInTheDocument();
});

test("Valid values enable submit and call onNext", async () => {
  const { onNext, updateData, onValidChange } = setUp();
  const { dateInput, timeInput, guestsInput, occasionSelect, nextBtn } = getFormElements();

  fireEvent.change(dateInput, { target: { value: "2026-01-10" } });
  fireEvent.change(timeInput, { target: { value: "18:00" } });
  fireEvent.change(guestsInput, { target: { value: 3 } });
  fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

  await waitFor(() => expect(nextBtn).toBeEnabled());

  fireEvent.click(nextBtn);

  await waitFor(() => {
    expect(updateData).toHaveBeenCalledWith({
      date: "2026-01-10",
      time: "18:00",
      guests: 3,
      occasion: "Birthday",
    });
    expect(onNext).toHaveBeenCalled();
    expect(onValidChange).toHaveBeenLastCalledWith(true);
  });
});
