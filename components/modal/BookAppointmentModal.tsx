interface ModalProps {
  close: () => void;
}

const BookAppointmentModal = ({ close }: ModalProps) => {
  return (
    <div className="w-screen h-screen absolute top-0 flex flex-col items-center justify-center bg-transparent-white z-50">
      <div className="bg-white w-1/3 rounded flex flex-col gap-4 items-center justify-center p-12">
        <h1 className="text-black text-3xl font-semibold">
          Book an appointment now
        </h1>
        <div className="flex flex-col gap-4 w-full">
          <input
            placeholder="full Name"
            className="
                border-2 border-primary-black
                h-12
                rounded
                p-2
                "
          />
          <input
            placeholder="Phone Number"
            className="
                border-2 border-primary-black
                h-12
                rounded
                p-2
                "
          />
          <input
            placeholder="Email"
            className="
                border-2 border-primary-black
                h-12
                rounded
                p-2
                "
          />
          <input
            placeholder="Date and time"
            className="
                border-2 border-primary-black
                h-12
                rounded
                p-2
                "
          />
          <div className="w-full flex-row-reverse flex gap-2">
            <button className="px-4 py-4 rounded bg-primary-yellow">
              Book Now
            </button>
            <button className="px-4 py-4 rounded bg-red-400" onClick={close}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookAppointmentModal;
