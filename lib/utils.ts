import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function removeHTMLTags(inputString: any) {
  return inputString?.replace(/<\/?[^>]+(>|$)/g, "");
}

export function formatRupiah(amount: string | number): string {
  // Convert the string to a number if necessary
  const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;

  // Check if the conversion was successful
  if (isNaN(numericAmount)) {
    throw new Error('Invalid amount format');
  }

  return numericAmount.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });
}