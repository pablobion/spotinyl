import React, { createContext, useState, useContext, useEffect, useRef } from "react";

const vinylContext = createContext();

export default function vinylProvider({ children }) {
    const [currentVinyl, setCurrentVinyl] = useState(null);
    const [teste, setTeste] = useState('shuauhashus');

    return (
        <vinylContext.Provider
            value={{
                currentVinyl,
                setCurrentVinyl,
                teste
            }}
        >
            {children}
        </vinylContext.Provider>
    );
}

export function useVinylContext() {
    const context = useContext(vinylContext);
    if (!context) throw new Error("useCount must be used within a CountProvider");

    const { currentVinyl, setCurrentVinyl, teste } = context;

    return { currentVinyl, setCurrentVinyl, teste};
}