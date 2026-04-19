import { Campground } from "@/types";

export type SortOption = "default" | "name-az" | "name-za";

export function sortCampgrounds(
  campgrounds: Campground[],
  sort: SortOption,
): Campground[] {
  const list = [...campgrounds];
  switch (sort) {
    case "name-az":
      return list.sort((a, b) => a.name.localeCompare(b.name));
    case "name-za":
      return list.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return list;
  }
}
