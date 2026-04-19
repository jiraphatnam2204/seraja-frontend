"use client";

import { Booking } from "@/types";
import { countByTimeframe, Timeframe } from "@/libs/utils/bookingFilters";
import { TIMEFRAME_FILTERS } from "./constants";

interface TimeframeFilterTabsProps {
  bookings: Booking[];
  active: Timeframe;
  onChange: (next: Timeframe) => void;
}

export default function TimeframeFilterTabs({
  bookings,
  active,
  onChange,
}: TimeframeFilterTabsProps) {
  return (
    <div className="mb-6 flex gap-2 flex-wrap">
      {TIMEFRAME_FILTERS.map((tf) => {
        const isActive = active === tf.key;
        const count = countByTimeframe(bookings, tf.key);
        return (
          <button
            key={tf.key ?? "all"}
            onClick={() => onChange(isActive ? null : tf.key)}
            className={`
              text-sm font-semibold px-4 py-2 rounded-full border transition-colors
              ${
                isActive
                  ? tf.color
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100"
              }
            `}
          >
            {tf.label}
            <span className="ml-2 text-xs opacity-80">{count}</span>
          </button>
        );
      })}
    </div>
  );
}
