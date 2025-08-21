"use client";

import { usePathname } from "next/navigation";

/**
 * Determines whether a given route should be marked as "active" or "inactive"
 * based on the current URL pathname.
 *
 * - The root path (`"/"`) is matched strictly.
 * - Other paths are considered active if the current pathname starts with them.
 *
 * Example:
 *   - useActivePath("/")         → active only on "/"
 *   - useActivePath("/settings") → active on "/settings" and "/settings/profile"
 *
 * @param targetPath The route to check against the current pathname
 * @returns `"active"` if the route matches, otherwise `"inactive"`
 */
export function useActivePath(targetPath: string): "active" | "inactive" {
  const pathname = usePathname();

  if (!pathname) return "inactive"; // Guard for edge cases (e.g. hydration mismatch)

  // Handle root/dashboard explicitly (must be exact match)
  if (targetPath === "/") {
    return pathname === "/" ? "active" : "inactive";
  }

  // For nested routes, allow partial matches
  return pathname.startsWith(targetPath) ? "active" : "inactive";
}
