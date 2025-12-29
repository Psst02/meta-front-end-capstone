import BookingForm from '../sections/BookingForm.js';

export default function BookingPage(props) {
  return (
    <>
      <main>
        <BookingForm {...props} />
      </main>
    </>
  );
}
