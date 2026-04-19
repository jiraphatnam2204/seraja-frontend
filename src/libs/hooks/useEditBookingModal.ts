import { useState } from "react";
import { Booking } from "@/types";

interface UseEditBookingModalArgs {
  updateBooking: (
    id: string,
    checkInDate: string,
    checkOutDate: string,
  ) => Promise<unknown>;
  refresh: () => Promise<void>;
}

export function useEditBookingModal({
  updateBooking,
  refresh,
}: UseEditBookingModalArgs) {
  const [editingBooking, setEditingBooking] = useState<Booking | null>(null);
  const [editSuccess, setEditSuccess] = useState(false);
  const [editError, setEditError] = useState("");

  const open = (booking: Booking) => {
    setEditSuccess(false);
    setEditError("");
    setEditingBooking(booking);
  };

  const close = () => {
    setEditingBooking(null);
    setEditError("");
  };

  const submit = async (
    _campId: string,
    checkInDate: string,
    checkOutDate: string,
  ) => {
    if (!editingBooking) return;
    setEditError("");
    try {
      await updateBooking(editingBooking._id, checkInDate, checkOutDate);
      setEditSuccess(true);
      await refresh();
    } catch (err) {
      setEditError(
        err instanceof Error ? err.message : "Failed to update booking.",
      );
      throw err;
    }
  };

  return {
    editingBooking,
    editSuccess,
    editError,
    open,
    close,
    submit,
  };
}
