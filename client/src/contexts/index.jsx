import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <AppContext.Provider value={classNames}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
