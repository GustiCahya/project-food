import React, { createContext } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [currentSearch, setCurrentSearch] = React.useState({
    isOpen: false
  });
  return (
    <SearchContext.Provider value={{ currentSearch, setCurrentSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default () => React.useContext(SearchContext);
