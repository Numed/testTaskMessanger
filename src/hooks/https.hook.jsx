import { useState, useEffect, } from "react";

export const useHttp = () => {

   const useDebounce = (value, delay) => {
        const [debouncedValue, setDebouncedValue] = useState(value);
        useEffect(
          () => {
            const handler = setTimeout(() => {
              setDebouncedValue(value);
            }, delay);
            return () => {
              clearTimeout(handler);
            };
          },
          [value, delay]
        );
        return debouncedValue;
      }

  return { useDebounce };
};
