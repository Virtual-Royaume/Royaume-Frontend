import { useEffect, useState } from "react";

export const useIsDomLoaded = (): boolean => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    return () => setIsLoaded(false);
  }, []);

  return isLoaded;
};