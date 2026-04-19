"use client";

import Button from "@/components/ui/Button";

interface BookingsPaginationProps {
  total: number;
  pageSize: number;
  currentPage: number;
  onChange: (next: number) => void;
}

export default function BookingsPagination({
  total,
  pageSize,
  currentPage,
  onChange,
}: BookingsPaginationProps) {
  const totalPages = Math.ceil(total / pageSize);
  if (total <= pageSize) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-8 mb-4">
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === 1}
        onClick={() => onChange(currentPage - 1)}
      >
        Previous
      </Button>
      <div className="flex items-center gap-1">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => onChange(i + 1)}
            className={`w-8 h-8 rounded-md text-sm font-medium transition-colors ${
              currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === totalPages}
        onClick={() => onChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
}
