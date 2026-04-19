"use client";

import Button from "@/components/ui/Button";
import { Role, RoleConfig } from "./constants";

interface BookingsHeaderProps {
  config: RoleConfig;
  role: Role;
  onOpenGuestModal: () => void;
  onExport: () => void;
}

export default function BookingsHeader({
  config,
  role,
  onOpenGuestModal,
  onExport,
}: BookingsHeaderProps) {
  const showOwnerActions = role === "campOwner" || role === "admin";

  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <div className="flex items-center gap-3 mb-1 flex-wrap">
          <h1 className="text-3xl font-bold text-gray-900">{config.title}</h1>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${config.badgeColor}`}
          >
            {config.badge}
          </span>
        </div>
        <p className="text-sm text-gray-500">{config.description}</p>
      </div>

      {showOwnerActions && (
        <div className="flex items-center gap-2 flex-wrap">
          <Button variant="outline" onClick={onOpenGuestModal}>
            + Guest Booking
          </Button>
          <Button variant="secondary" onClick={onExport}>
            ↓ Export CSV
          </Button>
        </div>
      )}
    </div>
  );
}
