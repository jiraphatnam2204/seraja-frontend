"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

// ── Types ────────────────────────────────────────────────────────────
type UserRole = "user" | "admin" | "campOwner";

interface NavbarUser {
  name?: string | null;
  email?: string | null;
  role?: UserRole;
}

interface NavbarProps {
  user?: NavbarUser | null;
  isAdmin?: boolean;
  onLogout?: () => void;
}

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/campgrounds", label: "Campgrounds" },
  { href: "/bookings", label: "Bookings" },
] as const;

// ── Component ────────────────────────────────────────────────────────
export default function Navbar({
  user,
  isAdmin = false,
  onLogout,
}: NavbarProps) {

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left: Brand + Navigation */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 transition hover:text-blue-600"
          >
            Campground Booking
          </Link>

          <div className="hidden items-center gap-4 md:flex">
            {NAV_LINKS.map(({ href, label }) => (
              <NavLink key={href} href={href}>
                {label}
              </NavLink>
            ))}

            {user?.role === "campOwner" && (
              <NavLink href="/todayCheck" highlight>
                Monitor
              </NavLink>
            )}
          </div>
        </div>

        {/* Right: Auth Controls */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <div className="hidden text-right sm:block">
                <p className="text-sm font-semibold text-gray-900">
                  {user.name}
                </p>
                <p className="text-xs capitalize text-gray-500">
                  {user.role ?? "user"}
                </p>
              </div>
              <Button variant="outline" onClick={onLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/register">
                <Button>Register</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

// ── Internal Sub-component ───────────────────────────────────────────
interface NavLinkProps {
  href: string;
  highlight?: boolean;
  children: React.ReactNode;
}

function NavLink({ href, highlight = false, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition ${
        highlight
          ? "font-bold text-blue-600 hover:text-blue-700"
          : "text-gray-600 hover:text-blue-600"
      }`}
    >
      {children}
    </Link>
  );
}
