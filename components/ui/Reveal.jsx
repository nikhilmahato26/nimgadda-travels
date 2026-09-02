import { cn } from "@/lib/utils";

/*
  Scroll reveal as progressive enhancement, not as a dependency.

  The content is fully visible in the server-rendered HTML. Where the browser
  supports scroll-driven animations it fades and lifts on entry; everywhere
  else, and under prefers-reduced-motion, it simply renders. Nothing is hidden
  behind JavaScript, which matters on a slow connection.

  Scroll-driven animations ignore animation-delay, so a stagger is expressed by
  pushing the animation range later instead: `step` is the item's index in its
  group, not a number of seconds.

  This is a server component: no client bundle at all.
*/

export default function Reveal({ children, step = 0, className }) {
  return (
    <div
      className={cn("reveal", className)}
      style={step ? { "--reveal-step": step } : undefined}
    >
      {children}
    </div>
  );
}
