import {
    createContext,
    useContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
  } from "react";

  const MyContext = createContext(undefined);
  
  const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
      throw new Error("useMyContext must be used within a MyContextProvider");
    }
    return context;
  };
  
  const MyContextProvider = ({ children }) => {
    const [useStateDate, setUseStateDate] = useState("");

    const contextValue = {
      useStateDate,
      setUseStateDate,
    };
  
    return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
  };
  
  export { MyContextProvider, useMyContext };
  