"use client";

interface BookingSuccessPanelProps {
  campgroundName?: string;
  onViewBookings: () => void;
  onClose: () => void;
}

export default function BookingSuccessPanel({
  campgroundName,
  onViewBookings,
  onClose,
}: BookingSuccessPanelProps) {
  return (
    <div className="flex flex-col items-center gap-4 py-4 text-center">
      <div className="text-4xl">🎉</div>
      <h3 className="text-lg font-semibold text-gray-900">Booking Confirmed!</h3>
      <p className="text-sm text-gray-500">
        Your booking at{" "}
        <span className="font-medium">{campgroundName ?? "the campground"}</span>{" "}
        has been placed.
      </p>
      <div className="mt-2 flex gap-3">
        <button
          onClick={onViewBookings}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          View My Bookings
        </button>
        <button
          onClick={onClose}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Close
        </button>
      </div>
    </div>
  );
}
