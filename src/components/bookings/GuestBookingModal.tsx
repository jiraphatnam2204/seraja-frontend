"use client";

import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import BookingForm from "./BookingForm";

interface GuestBookingModalProps {
  isOpen: boolean;
  close: () => void;
  reset: () => void;
  campId: string;
  setCampId: (v: string) => void;
  name: string;
  setName: (v: string) => void;
  tel: string;
  setTel: (v: string) => void;
  loading: boolean;
  error: string;
  success: boolean;
  submit: (
    campId: string,
    checkInDate: string,
    checkOutDate: string,
  ) => Promise<void>;
}

export default function GuestBookingModal({
  isOpen,
  close,
  reset,
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
}: GuestBookingModalProps) {
  return (
    <Modal open={isOpen} title="New Guest Booking" onClose={close}>
      {success ? (
        <div className="flex flex-col items-center gap-3 py-4 text-center">
          <div className="text-4xl">🎉</div>
          <h3 className="text-lg font-semibold text-gray-900">
            Guest Booking Created!
          </h3>
          <p className="text-sm text-gray-500">
            The booking has been recorded successfully.
          </p>
          <div className="flex gap-3 mt-2">
            <Button onClick={close}>Done</Button>
            <Button variant="outline" onClick={reset}>
              Add Another
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="rounded-lg border border-purple-100 bg-purple-50 px-4 py-3">
            <p className="text-xs font-semibold text-purple-600 uppercase tracking-wide mb-2">
              Guest Info
            </p>
            <div className="flex flex-col gap-3">
              <Input
                label="Guest Name"
                type="text"
                placeholder="e.g. John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                label="Guest Telephone"
                type="tel"
                placeholder="e.g. 0812345678"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                required
              />
            </div>
          </div>

          <Input
            label="Campground ID"
            type="text"
            placeholder="Paste campground _id here"
            value={campId}
            onChange={(e) => setCampId(e.target.value)}
            required
          />

          <BookingForm
            campId={campId}
            onSubmit={submit}
            loading={loading}
            error={error || undefined}
          />
        </div>
      )}
    </Modal>
  );
}
