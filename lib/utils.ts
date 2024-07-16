import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function removeHTMLTags(inputString: any) {
  return inputString.replace(/<\/?[^>]+(>|$)/g, "");
}