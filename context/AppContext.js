import React , {createContext, useState} from "react";

export const AppContext = createContext();
export const AppContextProvider = ({children}) => {
     const [fuelList, setFuelList] = useState([])
     const saveFuelList = (note) => setFuelList(note)
     const value = {fuelList, saveFuelList};
     return <AppContext.Provider value={value}>{children}</AppContext.Provider>
};