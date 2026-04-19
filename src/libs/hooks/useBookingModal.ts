import { useState } from "react";

interface UseBookingModalArgs {
  createBooking: (
    campId: string,
    checkInDate: string,
    checkOutDate: string,
  ) => Promise<unknown>;
}

export function useBookingModal({ createBooking }: UseBookingModalArgs) {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const open = () => {
    setSuccess(false);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const submit = async (
    campId: string,
    checkInDate: string,
    checkOutDate: string,
  ) => {
    try {
      await createBooking(campId, checkInDate, checkOutDate);
      setSuccess(true);
    } catch {
      // error is surfaced via useBookings().error
    }
  };

  return { isOpen, open, close, success, submit };
}
