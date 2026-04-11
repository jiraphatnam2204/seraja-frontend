"use client";

import { Booking } from "@/types";
import BookingCard from "./BookingCard";
import LoadingState from "@/components/common/LoadingState";
import EmptyState from "@/components/common/EmptyState";

interface BookingListProps {
  bookings: Booking[];
  loading?: boolean;
  onEdit?: (booking: Booking) => void;
  onDelete?: (bookingId: string) => void;
  onCancel?: (bookingId: string) => void;
  onCheckIn?: (bookingId: string) => void;
  onCheckOut?: (bookingId: string) => void;
}

export default function BookingList({
  bookings,
  loading = false,
  onEdit,
  onDelete,
  onCancel,
  onCheckIn,
  onCheckOut,
}: BookingListProps) {
  if (loading) {
    return <LoadingState message="Loading bookings..." />;
  }

  if (!bookings || bookings.length === 0) {
    return (
      <EmptyState
        title="No Bookings Yet"
        message="You have not made any bookings yet."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {bookings.map((booking) => (
        <BookingCard
          key={booking._id}
          booking={booking}
          onEdit={onEdit}
          onDelete={onDelete}
          onCancel={onCancel}
          onCheckIn={onCheckIn}
          onCheckOut={onCheckOut}
        />
      ))}
    </div>
  );
}
