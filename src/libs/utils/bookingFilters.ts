import { Booking } from "@/types";
import {
  isLaterThanWeek,
  isSameDay,
  isWithinNextWeek,
  startOfToday,
} from "./bookingDate";

export type Timeframe = null | "today" | "thisWeek" | "later";

export function filterByTimeframe(
  bookings: Booking[],
  tf: Timeframe,
): Booking[] {
  if (!tf) return bookings;
  const today = startOfToday();
  return bookings.filter((b) => matchesTimeframe(b, tf, today));
}

export function filterByStatus(
  bookings: Booking[],
  status: string | null,
): Booking[] {
  if (!status) return bookings;
  return bookings.filter((b) => b.status === status);
}

export function countByTimeframe(
  bookings: Booking[],
  tf: Timeframe,
): number {
  if (!tf) return bookings.length;
  const today = startOfToday();
  return bookings.filter((b) => matchesTimeframe(b, tf, today)).length;
}

function matchesTimeframe(
  b: Booking,
  tf: Exclude<Timeframe, null>,
  today: number,
): boolean {
  if (tf === "today") {
    return isSameDay(b.checkInDate, today) || isSameDay(b.checkOutDate, today);
  }
  if (tf === "thisWeek") {
    return isWithinNextWeek(b.checkInDate, today);
  }
  return isLaterThanWeek(b.checkInDate, today);
}
