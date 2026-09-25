import type { ProjectStatus } from "@/types/project";
import { cn } from "@/lib/utils";

const styles: Record<ProjectStatus, string> = {
  Live: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  Completed: "border-slate-500/30 bg-slate-500/10 text-slate-300",
  "In Development": "border-amber-500/30 bg-amber-500/10 text-amber-200",
  Private: "border-slate-500/30 bg-slate-500/10 text-slate-400",
};

export function StatusBadge({
  status,
  className,
}: {
  status: ProjectStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-md border px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide",
        styles[status],
        className,
      )}
    >
      {status}
    </span>
  );
}
