import { useState } from "react";

interface UseGuestBookingModalArgs {
  createBooking: (
    campId: string,
    checkInDate: string,
    checkOutDate: string,
    guestName?: string,
    guestTel?: string,
  ) => Promise<unknown>;
  refresh: () => Promise<void>;
}

export function useGuestBookingModal({
  createBooking,
  refresh,
}: UseGuestBookingModalArgs) {
  const [isOpen, setIsOpen] = useState(false);
  const [campId, setCampId] = useState("");
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const resetFields = () => {
    setCampId("");
    setName("");
    setTel("");
    setError("");
    setSuccess(false);
  };

  const open = () => {
    resetFields();
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const submit = async (
    submittedCampId: string,
    checkInDate: string,
    checkOutDate: string,
  ) => {
    if (!name.trim() || !tel.trim()) {
      setError("Guest name and telephone are required.");
      return;
    }
    if (!submittedCampId.trim()) {
      setError("Campground ID is required.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await createBooking(submittedCampId, checkInDate, checkOutDate, name, tel);
      setSuccess(true);
      await refresh();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to create guest booking.",
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    isOpen,
    open,
    close,
    reset: resetFields,
    campId,
    setCampId,
    name,
    setName,
    tel,
    setTel,
    loading,
    error,
    success,
    submit,
  };
}
