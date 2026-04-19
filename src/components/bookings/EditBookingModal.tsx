"use client";

import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import BookingForm from "./BookingForm";
import { Booking } from "@/types";

interface EditBookingModalProps {
  editingBooking: Booking | null;
  editSuccess: boolean;
  editError: string;
  loading?: boolean;
  close: () => void;
  submit: (
    campId: string,
    checkInDate: string,
    checkOutDate: string,
  ) => Promise<void>;
}

export default function EditBookingModal({
  editingBooking,
  editSuccess,
  editError,
  loading,
  close,
  submit,
}: EditBookingModalProps) {
  return (
    <Modal
      open={!!editingBooking}
      title={`Edit Booking — ${editingBooking?.campground?.name ?? ""}`}
      onClose={close}
    >
      {editSuccess ? (
        <div className="flex flex-col items-center gap-3 py-4 text-center">
          <div className="text-4xl">✅</div>
          <h3 className="text-lg font-semibold text-gray-900">
            Booking Updated!
          </h3>
          <p className="text-sm text-gray-500">
            Your booking dates have been updated.
          </p>
          <Button onClick={close} className="mt-2">
            Done
          </Button>
        </div>
      ) : (
        <BookingForm
          campId={editingBooking?.campground?._id ?? ""}
          onSubmit={submit}
          loading={loading}
          error={editError || undefined}
        />
      )}
    </Modal>
  );
}
