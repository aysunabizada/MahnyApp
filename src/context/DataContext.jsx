import React, { createContext, useState } from "react";
export const Cntx = createContext();

function DataContext({ children }) {
    const [openAside, setOpenAside] = useState(true)
    
    const obj = {
        setOpenAside,
        openAside
    }
    
    return (
        <Cntx.Provider value={obj}>
            {children}
        </Cntx.Provider>
    );
}

export default DataContext;
