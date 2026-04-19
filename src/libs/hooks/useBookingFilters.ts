import { useCallback, useMemo, useState } from "react";
import { Booking } from "@/types";
import {
  filterByStatus,
  filterByTimeframe,
  Timeframe,
} from "@/libs/utils/bookingFilters";
import { ITEMS_PER_PAGE } from "@/components/bookings/constants";

export function useBookingFilters(bookings: Booking[]) {
  const [timeframeFilter, setTimeframeFilterState] = useState<Timeframe>(null);
  const [statusFilter, setStatusFilterState] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const setTimeframeFilter = useCallback((next: Timeframe) => {
    setTimeframeFilterState(next);
    setCurrentPage(1);
  }, []);

  const setStatusFilter = useCallback((next: string | null) => {
    setStatusFilterState(next);
    setCurrentPage(1);
  }, []);

  const timeframeFilteredBookings = useMemo(
    () => filterByTimeframe(bookings, timeframeFilter),
    [bookings, timeframeFilter],
  );

  const filteredBookings = useMemo(
    () => filterByStatus(timeframeFilteredBookings, statusFilter),
    [timeframeFilteredBookings, statusFilter],
  );

  const pagedBookings = useMemo(
    () =>
      filteredBookings.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE,
      ),
    [filteredBookings, currentPage],
  );

  return {
    timeframeFilter,
    setTimeframeFilter,
    statusFilter,
    setStatusFilter,
    currentPage,
    setCurrentPage,
    timeframeFilteredBookings,
    filteredBookings,
    pagedBookings,
  };
}
