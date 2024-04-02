import { useState, useEffect } from 'react';

/**
 * useDebounce hook for debouncing values over a specified delay.
 *
 * @param value - The value to debounce.
 * @param delay - The delay in milliseconds to wait before updating the debounced value.
 * @returns The debounced value.
 */
export function useDebounce<T>(value: T, delay: number): T {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Update debouncedValue to value (passed in) after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
