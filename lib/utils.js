import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Indian digit grouping: 14500 -> "14,500"
const rupeeFormat = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 0,
});

export function rupees(amount) {
  return `₹${rupeeFormat.format(amount)}`;
}
