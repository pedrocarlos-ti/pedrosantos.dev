import type { ProjectStatus } from "@/lib/types";

export function projectStatusMeta(status: ProjectStatus): {
  label: string;
} {
  switch (status) {
    case "shipped":
      return { label: "shipped" };
    case "ongoing":
      return { label: "ongoing" };
    case "experimental":
      return { label: "experimental" };
    case "archived":
      return { label: "archived" };
  }
}
