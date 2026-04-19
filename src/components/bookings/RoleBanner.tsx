import { Role } from "./constants";

interface RoleBannerProps {
  role: Role;
}

export default function RoleBanner({ role }: RoleBannerProps) {
  if (role === "admin") {
    return (
      <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
        ⚠️ You are viewing <strong>all bookings</strong> across the platform as
        an administrator.
      </div>
    );
  }

  if (role === "campOwner") {
    // return (
    //   <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
    //     🏕️ Showing bookings for your campgrounds. Use{" "}
    //     <strong>Guest Booking</strong> to add walk-in customers. Use{" "}
    //     <strong>Export CSV</strong> to sync with your own records.
    //   </div>
    // );
  }

  return null;
}
