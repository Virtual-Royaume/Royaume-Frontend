import type { UseIsDomLoaded } from "./is-dom-loaded.type";
import { useEffect, useState } from "react";

export const useIsDomLoaded: UseIsDomLoaded = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    return () => setIsLoaded(false);
  }, []);

  return isLoaded;
};