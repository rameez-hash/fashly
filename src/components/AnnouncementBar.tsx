import { Sparkles } from "lucide-react";
import { LAUNCH_LABEL } from "@/lib/launch";

export default function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-violet-600 via-violet to-brand px-4 py-2 text-center text-xs font-semibold text-white sm:text-sm">
      <span className="inline-flex items-center gap-2">
        <Sparkles className="h-3.5 w-3.5" />
        Official launch on <span className="font-extrabold">{LAUNCH_LABEL}</span>
        <span className="hidden sm:inline">— join the waitlist for early access!</span>
      </span>
    </div>
  );
}
