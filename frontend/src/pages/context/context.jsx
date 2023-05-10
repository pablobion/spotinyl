import React, { createContext, useState, useContext, useEffect, useRef } from "react";

const vinylContext = createContext();

export default function vinylProvider({ children }) {
    const [currentVinyl, setCurrentVinyl] = useState(null);
    const [currentVinylStatus, setCurrentVinylStatus] = useState(null);
    const [playing, setPlaying ] = useState(false);
    const [vinylList, setVinylList] = useState([]);

    const remClass = (element, classNames) => classNames.forEach(className => element.classList.remove(className));

    const handleChangeStatusCurrentVinyl = ({element, action}) => {
        const animation = {
            'vinylRotate': () => {
                console.log('thunder')
                currentVinyl.classList.add("vinylRotate");
                // currentVinyl.classList.remove("vinylInsert");
                // currentVinyl.classList.remove("vinylOpen");
            },
            'vinylInsertEject': () => {
                if(currentVinyl){
                    if(currentVinylStatus !== 'insert'){
                        console.log('entrou insert')
                        currentVinyl.classList.add("vinylInsert");
                        setTimeout(() => {
                            setCurrentVinylStatus('insert');
                        }, 1000);
                        return false
                    }
                    if(currentVinylStatus === 'insert'){ //Ejetando disco caso esteja inserido
                        console.log('entrou eject')
                        setPlaying(false);
                   
                        setTimeout(() => {
                            currentVinyl.classList.remove("vinylRotate");
                            currentVinyl.classList.add("vinylEject");
                        }, 1000);

                        setTimeout(() => {
                            currentVinyl.classList.remove("vinylInsert");
                            currentVinyl.classList.remove("vinylEject");
                            setCurrentVinylStatus(null);
                        }, 2600);
                    }
                }
            },

            'vinylUp': () => {
                if(currentVinylStatus === 'insert') return
                if(currentVinyl){
                    currentVinyl.classList.add("vinylDown");
                    setTimeout(() => remClass(currentVinyl, ["vinylUp", "vinylOpen", "vinylDown"]), 600);
                }

                setTimeout(() => {
                    element.classList.add("vinylUp");
                    setTimeout(() => element.classList.add("vinylOpen"), 500);
                    setCurrentVinyl(element)
                    setCurrentVinylStatus('up')
                }, currentVinyl ? 500 : 0);
            },

            'vinylDown': () => {
                if(currentVinylStatus === 'insert') return
                setTimeout(() => {
                    currentVinyl.classList.add("vinylDown");
                    setTimeout(() => remClass(currentVinyl, ["vinylUp", "vinylOpen", "vinylDown"]), 600);
                    setCurrentVinyl(null);
                }, currentVinylStatus === 'up' ? 200 : 0);
            },
        }

        animation[action]();
    }

    return (
        <vinylContext.Provider
            value={{
                currentVinyl,
                setCurrentVinyl,
                currentVinylStatus,
                handleChangeStatusCurrentVinyl,
                playing, 
                setPlaying,
                vinylList, 
                setVinylList
            }}
        >
            {children}
        </vinylContext.Provider>
    );
}

export function useVinylContext() {
    const context = useContext(vinylContext);
    if (!context) throw new Error("useCount must be used within a CountProvider");

    const { currentVinyl, setCurrentVinyl, currentVinylStatus, handleChangeStatusCurrentVinyl, playing, setPlaying, vinylList, setVinylList} = context;

    return { currentVinyl, setCurrentVinyl, currentVinylStatus, handleChangeStatusCurrentVinyl, playing, setPlaying, vinylList, setVinylList};
}