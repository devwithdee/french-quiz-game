// AccessibilityContext.js
import React, { createContext, useState, useContext } from "react";

const AccessibilityContext = createContext();

export const useAccessibilityContext = () => useContext(AccessibilityContext);

export const AccessibilityProvider = ({ children }) => {
  const [speechState, setSpeechState] = useState("stopped");
  const [speed, setSpeed] = useState(0.75);

  return (
    <AccessibilityContext.Provider
      value={{
        speechState,
        setSpeechState,
        speed,
        setSpeed,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};
