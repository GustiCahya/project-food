import React from "react";
import { SearchContextProvider } from "./SearchContext";

export default function ContextProvider({ children }) {
  return (
    <SearchContextProvider>
      {children}
    </SearchContextProvider>
  );
}
