export const ITEMS_PER_PAGE = 5;

export type Role = "user" | "admin" | "campOwner";

export interface RoleConfig {
  title: string;
  description: string;
  badge: string;
  badgeColor: string;
}

export const ROLE_CONFIG: Record<Role, RoleConfig> = {
  user: {
    title: "My Bookings",
    description: "View and manage your personal campground bookings.",
    badge: "User",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  admin: {
    title: "All Bookings",
    description:
      "Administrator view — manage all bookings across all campgrounds.",
    badge: "Admin",
    badgeColor: "bg-red-100 text-red-700",
  },
  campOwner: {
    title: "Campground Bookings",
    description: "View and manage bookings for your campgrounds.",
    badge: "Camp Owner",
    badgeColor: "bg-green-100 text-green-700",
  },
};

export const STATUS_FILTERS = [
  {
    key: "confirmed",
    label: "Confirmed",
    color:
      "bg-green-100 text-green-700 border-green-200 hover:bg-green-200",
  },
  {
    key: "checked-in",
    label: "Checked In",
    color: "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200",
  },
  {
    key: "checked-out",
    label: "Checked Out",
    color: "bg-gray-200 text-gray-600 border-gray-200 hover:bg-gray-200",
  },
  {
    key: "cancelled",
    label: "Cancelled",
    color: "bg-red-100 text-red-600 border-red-200 hover:bg-red-200",
  },
] as const;

export const TIMEFRAME_FILTERS = [
  { key: null, label: "All", color: "bg-gray-800 text-white border-gray-800" },
  {
    key: "today",
    label: "Today",
    color: "bg-green-600 text-white border-green-600",
  },
  {
    key: "thisWeek",
    label: "This Week",
    color: "bg-blue-600 text-white border-blue-600",
  },
  {
    key: "later",
    label: "Later",
    color: "bg-gray-500 text-white border-gray-500",
  },
] as const;
