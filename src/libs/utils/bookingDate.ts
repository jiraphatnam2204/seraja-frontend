export const MS_PER_DAY = 24 * 60 * 60 * 1000;
export const WEEK_MS = 7 * MS_PER_DAY;

export function startOfToday(): number {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

export function startOfDay(iso: string): number {
  const d = new Date(iso);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

export function isSameDay(iso: string, dayMs: number): boolean {
  return startOfDay(iso) === dayMs;
}

export function isWithinNextWeek(iso: string, todayMs: number): boolean {
  const day = startOfDay(iso);
  return day > todayMs && day <= todayMs + WEEK_MS;
}

export function isLaterThanWeek(iso: string, todayMs: number): boolean {
  return startOfDay(iso) > todayMs + WEEK_MS;
}

export function nightsBetween(checkIn: string, checkOut: string): number {
  return Math.ceil(
    (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / MS_PER_DAY,
  );
}
