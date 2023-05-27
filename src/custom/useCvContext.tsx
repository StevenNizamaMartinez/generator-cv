import { useContext } from "react";
import { CvContext } from "../context/CvContext";
function useCvContext() {
  const context = useContext(CvContext);
  if (context === null) {
    throw new Error("useCvContext must be used within a CvProvider");
  }
  return context;
}

export default useCvContext;
