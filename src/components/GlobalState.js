import { useState, useEffect } from "react";

export const useGlobalState = () => {
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    document.title = `Jieun J. include ${pageName || ""}`;
  }, [pageName]);

  return { pageName, setPageName };
};
