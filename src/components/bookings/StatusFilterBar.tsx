"use client";

import { Booking } from "@/types";
import { STATUS_FILTERS } from "./constants";

interface StatusFilterBarProps {
  timeframeFilteredBookings: Booking[];
  active: string | null;
  onChange: (next: string | null) => void;
}

export default function StatusFilterBar({
  timeframeFilteredBookings,
  active,
  onChange,
}: StatusFilterBarProps) {
  return (
    <div className="mb-6 flex items-center gap-2 flex-wrap">
      <button
        onClick={() => onChange(null)}
        className={`
          text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors
          ${
            active === null
              ? "bg-gray-800 text-white border-gray-800"
              : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100"
          }
        `}
      >
        All
        <span className="ml-1.5 opacity-70">
          {timeframeFilteredBookings.length}
        </span>
      </button>

      {STATUS_FILTERS.map(({ key, label, color }) => {
        const count = timeframeFilteredBookings.filter(
          (b) => b.status === key,
        ).length;
        const isActive = active === key;
        return (
          <button
            key={key}
            onClick={() => onChange(isActive ? null : key)}
            className={`
              text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors
              ${
                isActive
                  ? color.replace("hover:", "") +
                    " ring-2 ring-offset-1 ring-current"
                  : `bg-white text-gray-500 border-gray-200 hover:${color
                      .split(" ")[0]
                      .replace("bg-", "bg-")}`
              }
            `}
          >
            {label}
            <span className="ml-1.5 opacity-70">{count}</span>
          </button>
        );
      })}
    </div>
  );
}
