import { Booking } from "@/types";
import { startOfDay, startOfToday } from "@/libs/utils/bookingDate";

interface UserStatsPanelProps {
  bookings: Booking[];
}

export default function UserStatsPanel({ bookings }: UserStatsPanelProps) {
  const today = startOfToday();
  const upcoming = bookings.filter(
    (b) => startOfDay(b.checkInDate) >= today,
  ).length;
  const past = bookings.filter(
    (b) => startOfDay(b.checkInDate) < today,
  ).length;

  return (
    <div className="mb-6 flex gap-4 flex-wrap">
      <StatCard label="Total" value={bookings.length} valueClass="text-gray-900" />
      <StatCard label="Upcoming" value={upcoming} valueClass="text-blue-600" />
      <StatCard label="Past" value={past} valueClass="text-gray-400" />
    </div>
  );
}

function StatCard({
  label,
  value,
  valueClass,
}: {
  label: string;
  value: number;
  valueClass: string;
}) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm">
      <p className="text-xs text-gray-500">{label}</p>
      <p className={`text-2xl font-bold ${valueClass}`}>{value}</p>
    </div>
  );
}
